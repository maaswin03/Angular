import { ProductModel } from "./product.model";

export class ProductResponseModel {
    constructor(
        public products: Array<ProductModel> = [],
        public total: number = 0,
        public skip: number = 0,
        public limit: number = 0
    ) {

    }
}