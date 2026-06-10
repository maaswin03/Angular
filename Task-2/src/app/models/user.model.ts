//class for creating a user object
export class UserModel {
    constructor(
        public id: number = 0,
        public firstName: string = '',
        public lastName: string = '',
        public maidenName: string = '',
        public gender: string = '',
        public email: string = '',
        public phone: string = '',
        public username: string = '',
        public birthDate: string = '',
        public image: string = '',
        public role: string = '',
        public address: AddressModel = new AddressModel(),
    ) {

    }
}

//class for creating an address object for the user
export class AddressModel {
    constructor(
        public address: string = '',
        public city: string = '',
        public state: string = '',
        public stateCode: string = '',
        public postalCode: string = '',
        public country: string = ''
    ) {

    }
}