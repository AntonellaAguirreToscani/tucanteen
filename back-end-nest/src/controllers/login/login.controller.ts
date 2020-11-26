import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/models/userDto';
import { LoginService } from 'src/services/login/login.service';

@Controller('login')
export class LoginController {

    constructor(private loginService: LoginService){}

    @Get('users')
    public getUsers(): User[]{
        return this.loginService.getUsers();
    }
    @Post('validate')
    public login(@Body() user: any):any{
        return this.loginService.validateUser(user);
    }
}
