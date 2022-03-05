import { compare, hash } from "bcrypt";

export class Password {
    static async hash(text: string): Promise<string> {
        return await hash(text, 8);
    }

    static async check(given_password: string, user_password: string): Promise<boolean> {
        return await compare(given_password, user_password);
    }
}