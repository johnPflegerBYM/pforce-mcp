export class Responder {
    static async success(data: any) {

        const result = {
            success:true,
            data: data
        }

        return {
            content: [{
                type: "text",
                text: JSON.stringify(result, null, 2)
            }]
        };
    }
}