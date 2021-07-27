import { Entites } from "./entities";
import { User } from "./user";

export class Tweet {
    constructor(
        public created_at: Date,
        public text: string,
        public entities: Entites,
        public user: User,
        public id?: number
    ) {}
    
 }