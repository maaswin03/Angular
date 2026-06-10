import { HttpInterceptorFn } from "@angular/common/http";

//for adding the jwt automatically for each response
export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const user = sessionStorage.getItem('User');

    if (user) {
        const token = JSON.parse(user).accessToken;
        const cloned = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        return next(cloned);
    }
    return next(req);
}