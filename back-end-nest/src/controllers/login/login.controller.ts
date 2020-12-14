import { Body, Controller, Get, Post } from '@nestjs/common';
import { promises } from 'dns';
import { User } from 'src/entities/user.entity';
import { UserDTO } from 'src/models/userDto';
import { LoginService } from 'src/services/login/login.service';

@Controller('login')
export class LoginController {

    constructor(private loginService: LoginService){}

    @Post('validate')
    public login(@Body() user: any):Promise< UserDTO>{
        return this.loginService.validateUser(user);
    }
}
