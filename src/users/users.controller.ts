import { Controller, Get } from '@nestjs/common';
// import { AppService } from '../app.service'; //注入用
import { UsersService } from './users.service';

@Controller('users') //usersエンドポイントに対する処理を以下に
export class UsersController {
  // @Get()
  // getUsers(): string {
  //   return 'Hello Users';
  // }
  // 上記のように、コントローラに機能を直書きしない。serviceに記述して、注入する

  //①app.serviceを注入する
  // constructor(private readonly appService: AppService) {} //コンストラクタに追加
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  //②users.servideを作成し、注入する
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getHello(): string {
    return this.usersService.getUser();
  }
}
