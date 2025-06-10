import { Connection } from 'jsforce';

export class Force {
    private static conn :Connection;

    private static async connect(){
        if(this.conn){
            return;
        }

        const username  = process.env.USERNAME ? process.env.USERNAME : '';
        const password  = process.env.SEC_KEY ? process.env.PASSWORD + process.env.SEC_KEY : '';

        this.conn = new Connection({
            loginUrl: 'https://login.salesforce.com',
            version: '62.0'
        });


        const userInfo = await this.conn.login(username, password);
        console.error(userInfo);
    }

    public static async query(query: string): Promise<any> {
        await this.connect();
        const res = await this.conn.query(query);
        return res;
    }
}