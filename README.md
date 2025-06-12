Beyond Menu Salesforce MCP

Current Tools:
* Test Connection
* Query

Here's the config entry for claude. 
````
{
  "mcpServers": {
        "salesforce": {
            "command": "node",
            "args": [
                "/path/to/pforce-mcp/build/index.js"
            ],
            "env":{
                "USERNAME":"<salesforce username>",
                "PASSWORD":"<salesforce password>",
                "SEC_KEY":"<salesforce security key>"
            }
        }
  }
}
````

When starting your conversion be sure to ask to "use salesforce and load business context". This will load all the company parlance and business context into the conversation.