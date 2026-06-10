//class for creating an product object
export class ProductModel {
    constructor(
        public id: number = 0,
        public title: string = '',
        public description: string = '',
        public category: string = '',
        public price: number = 0,
        public discountPercentage: number = 0,
        public rating: number = 0,
        public stock: number = 0,
        public tags: string[] = [],
        public brand: string = '',
        public sku: string = '',
        public warrantyInformation: string = '',
        public shippingInformation: string = '',
        public availabilityStatus: string = '',
        public reviews: Array<ReviewModel> = [],
        public returnPolicy: string = '',
        public minimumOrderQuantity: number = 0,
        public thumbnail: string = '',
        public images: string[] = []
    ) {

    }
}

//class for creating an review object for the product
export class ReviewModel {
    constructor(
        public rating: number = 0,
        public comment: string = '',
        public date: string = '',
        public reviewerName: string = '',
        public reviewerEmail: string = ''
    ) {

    }
}