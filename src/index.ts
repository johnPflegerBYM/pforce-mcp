import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { Responder } from "./util/responder.js";
import { Force } from "./util/force.js";
import { Parlance } from "./util/parlance.js";

/***
 Create the server
 ***/
const server = new Server(
    {
        name: "pforce-mcp-server",
        version: "0.0.1",
    },
    {
        capabilities: {
            tools:{}
        }
    }
 );

//TOOLS
server.setRequestHandler(ListToolsRequestSchema, async() => {
    return {
        tools:[
            {
                name: "test-connection",
                description: "Test Salesforce connection",
                inputSchema: {
                    type: "object",
                    properties: {}
                }
            },
            {
                name: "load-business-context",
                description: "Load company-specific business logic and terminology",
                inputSchema: {
                    type: "object",
                    properties: {}
                }
            },
            {
                name: 'dynamic-query',
                description: "Build queries using business terminology and object definitions loaded via the load_business_context tool. Always reference the business context provided earlier in the conversation when interpreting user requests.",
                inputSchema: {
                    type: "object",
                    properties: {
                        query: {
                            type: "string",
                            description: "SOQL query to execute"
                        },
                    },
                    required: ['query']
                }
            },
            {
                name: 'update-records',
                description: 'pass an array of records to be updated. Updates can be build through your interpretation of the prompt. There is a limit of 20 records, you can not update more than 20 records in a single call.  Always reference the business context provided earlier in the conversation when interpreting user requests.',
                inputSchema: {
                    type: "object",
                    properties: {
                        package:{
                            type: 'array',
                            description: "array of records to be updated. The records are JSON and the format should look like '[{ Id: 'recordId', fieldToBeUpdated : 'fieldValue' }]'"
                        },
                        sObjectType: {
                            type: 'string',
                            description:'the sobject type of the records that are being updated'
                        }
                    },
                    required: ['package', 'sObjectType']
                }
            }
        ]
    }
})

server.setRequestHandler(CallToolRequestSchema, async(request):Promise<any> => {
    switch (request.params.name) {
        case "test-connection": {
            try{
                const results = await Force.query("SELECT ID, Name FROM Organization LIMIT 1");
                return Responder.success(results);
            }catch(e){
                console.error(e);
            }
            return;
        }
        case 'dynamic-query': {
            const args = request.params.arguments as { query: string; };
            const results = await Force.query(args.query);
            return Responder.success(results);
        }
        case 'load-business-context': {
            const mem = 'BUSINESS CONTEXT - INTERNALIZE FOR SESSION:\n'+JSON.stringify(Parlance)+' \nEND OF BUSINESS CONTEXT'+'\n\n\n -- once finished, respond with a confirmation that you have commited the information to memory.';
            return Responder.success( mem );
        }
        case 'update-records': {
            const args = request.params.arguments as { package: any; sObjectType: string; };
            const results = await Force.update(args);
            return Responder.success(results);
        }
        default:
            throw new Error(`Unknown tool: ${request.params.name}`);
    }
})

function instruct(instructions:string[]){
        let new_inst = '';
        instructions.forEach( instruction => {
            new_inst += instruction+'\n';
        });
        return new_inst;
}

/**
 * Start the server using stdio transport
 */
async function main() {
    // Set up transport
    const transport = new StdioServerTransport();

    // Connect server
    await server.connect(transport);

}

main();