import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
//5.Exception filters(例外レイヤー)の利用には、HttpException, HttpStatusが必要
//6.Pipe を使う。Param,ParseIntPipeを持ってくる
import { LoggingInterceptor } from '../interceptor/logging.interceptor';

// import { AppService } from '../app.service'; //注入用
import { UsersService } from './users.service';

@UseInterceptors(LoggingInterceptor)
@Controller('users') //usersエンドポイントに対する処理を以下に
export class UsersController {
  // @Get()
  // getUsers(): string {
  //   return 'Hello Users';
  // }
  // ふつう、上記のようにコントローラに機能を直書きしない。serviceに記述して、注入する

  //①app.serviceを注入する
  // constructor(private readonly appService: AppService) {} //コンストラクタに追加
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  //②users.servideを作成し、注入する
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getUser(): string {
    return this.usersService.getUser();
  }
  @Get('throw') //例外をスローする
  getException(): string {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
  @Get('throw/override') //エラーメッセージを変更する場合、以下のようにオーバーライドする
  getOverRideException(): string {
    throw new HttpException(
      { status: HttpStatus.FORBIDDEN, error: 'override custom' },
      HttpStatus.FORBIDDEN,
    );
  }
  @Get(':id')
  getIdUser(@Param('id', ParseIntPipe) id: number): number {
    console.log(id, typeof id);
    return id;
  }
}
