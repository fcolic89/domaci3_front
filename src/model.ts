export interface LoginResponse{
    jwt: string;
}

export class UserInfo{
    sub: string = '';
    can_read: boolean = false;
    can_create: boolean = false;
    can_delete: boolean = false;
    can_update: boolean = false;
}