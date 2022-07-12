import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

//Pipeとは
// 形式的には、@Injectable() デコレータを適用し、PipeTransform インターフェースを実装したクラスのこと
// 大きく二つのユースケースがある:
// 1.変換: インプットされたデータを変換する (たとえば文字列から整数へ)
// 2.バリデーション: インプットされたデータに問題がなければ次の処理へと引き継ぎ、問題があれば例外を送出する
// 今回のValidationPipeは2

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
