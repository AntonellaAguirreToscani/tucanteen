import { TypeUserDTO } from "./typeUserDto";

export class UserDTO{
    readonly id:number;
    readonly userName: string;
    readonly password: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly typeUser: TypeUserDTO;
}