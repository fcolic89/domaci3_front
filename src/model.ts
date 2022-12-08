export interface LoginResponse{
    jwt: string;
}

export interface GetUsersResponse{
    users: User[]
}


export class UserInfo{
    sub: string = '';
    can_read: boolean = false;
    can_create: boolean = false;
    can_delete: boolean = false;
    can_update: boolean = false;
}

export interface User{
    id: number,
    email: string,
    password: string,
    name: string,
    lastname: string,
    canRead: boolean,
    canCreate: boolean,
    canDelete: boolean,
    canUpdate: boolean
}
