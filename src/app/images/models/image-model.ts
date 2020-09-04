export class Image {
    id: string;
    author: author;
    url: string;
    downloadUrl: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.author = obj && obj.author || null;
        this.url = obj && obj.url || null;
        this.downloadUrl = obj && obj.downloadUrl || null;
    }
}


export interface author {
    name: string,
    url: string
}