import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from 'src/services/login/login.service';

@Controller('login')
export class LoginController {

    constructor(private loginService: LoginService){}

    @Post('validate')
    public login(@Body() userInfo:any):boolean{
        return this.loginService.validateUser(userInfo);
    }
}
