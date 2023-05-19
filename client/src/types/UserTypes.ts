
export interface IUser {
    id:number,
    email:string,
    name:string,
    password:string,
    role: "ADMIN" | "USER"
}

export interface IUserLogin {
    email:string,
    password:string
}