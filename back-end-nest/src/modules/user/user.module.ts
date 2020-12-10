import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from 'src/controllers/login/login.controller';
import { TypeUser } from 'src/entities/typeUser.entity';
import { User } from 'src/entities/user.entity';
import { LoginService } from 'src/services/login/login.service';

@Module({imports: [
    TypeOrmModule.forFeature([
    User,
    TypeUser
    ])
    ],
controllers: [LoginController],
providers: [LoginService]
})
export class UserModule {}
