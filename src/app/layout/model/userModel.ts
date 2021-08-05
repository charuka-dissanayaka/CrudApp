export interface IPost {
    id: number;
    title: string;
}

export class Post implements IPost {
    id: number;
    title: string;
    constructor(postData: any) {
        this.id = postData.id;
        this.title = postData.title;
    }
}