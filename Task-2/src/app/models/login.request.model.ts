//class for creating an login request object
export class LoginRequestModel {
    constructor(
        public username: string = '',
        public password: string = '',
    ) {

    }
}