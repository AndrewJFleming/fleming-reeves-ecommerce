export interface ProductData {
        _id: string;
		title: string;
		desc: string;
		price: number;
		categories?: Array<string>;
		isFeatured: boolean;
		squareThumbUrl: string;
		largeUrl: string;
		fullsizeUrl: string;
		variants?: Variants[],
		createdAt: string;
		updatedAt: string;
		__v: number;
}

export interface Variants {
    id: string;
    name: string;
    squareThumbUrl: string;
    largeUrl: string;
    fullsizeUrl: string;

            
}