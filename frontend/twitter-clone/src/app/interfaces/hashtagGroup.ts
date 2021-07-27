import { Tweet } from "../models/tweet";

export interface IHashtagGroup {
    [key: string]: Tweet[]
 }