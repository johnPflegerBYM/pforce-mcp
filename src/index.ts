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
                name: 'dynamic-query',
                description: "Build a soql query through your interpretation of the prompt. You can use these definitions to help: "+JSON.stringify(Parlance),
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
        default:
            throw new Error(`Unknown tool: ${request.params.name}`);
    }
})


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