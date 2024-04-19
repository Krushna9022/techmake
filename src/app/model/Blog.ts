import { Comment } from "./Comments";
export interface Blog{
    blog_id :string;
    authorId: string;
    createdon:string;
    title: string;
    textual_content: string;
    images:string[];
    category_id:string;
    visited:number;
    updateon:string;
    comments:Comment[];
    
}
