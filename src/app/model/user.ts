import { Comment } from './comment';

export interface User {
    firstName : string;
    lastName : string;
    dob : Date;
    isWorking : boolean;
    income : number;
    company : string;
    image : string;
    vote : number;
    contact_no : number;
    comments : Comment[];
}