import { Image } from './image-model';

export class Categories {
    id: string;
    images : Image[]

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.images = obj && obj.images || null;
    }
}