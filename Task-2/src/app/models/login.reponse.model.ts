//class for creating an login reponse object
export class LoginResponseModel {
    constructor(
        public id: number = 0,
        public username: string = '',
        public email: string = '',
        public firstName: string = '',
        public lastName: string = '',
        public gender: string = '',
        public image: string = '',
        public accessToken: string = '',
        public refreshToken: string = ''
    ) {

    }
}