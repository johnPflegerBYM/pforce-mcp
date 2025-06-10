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
``
