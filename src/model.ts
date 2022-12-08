export interface LoginResponse{
    jwt: string;
}

export interface GetUsersResponse{
    users: User[]
}


export class UserInfo{
    sub: string = '';
    can_read: number = 0;
    can_create: number = 0;
    can_delete: number = 0;
    can_update: number = 0;
}

export interface User{
    id: number,
    email: string,
    password: string,
    name: string,
    lastname: string,
    canRead: number,
    canCreate: number,
    canDelete: number,
    canUpdate: number
}
