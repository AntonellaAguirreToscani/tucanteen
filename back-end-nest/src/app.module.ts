import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './controllers/product/product.controller';
import { ProductService } from './services/product/product.service';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..'),
    }),
  ],
  controllers: [AppController,ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
