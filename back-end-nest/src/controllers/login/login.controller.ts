import { Body, Controller, Get, Post } from '@nestjs/common';
import { promises } from 'dns';
import { UserDTO } from 'src/models/userDto';
import { LoginService } from 'src/services/login/login.service';

@Controller('login')
export class LoginController {

    constructor(private loginService: LoginService){}

    // @Get('users')
    // public getUsers(): UserDTO[]{
    //     return this.loginService.getUsers();
    // }
    @Post('validate')
    public login(@Body() user: any):Promise< UserDTO>{
        return this.loginService.validateUser(user);
    }
}
