import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middleware/logger.middleware'; //これは自動追加されない
//ミドルウェアの利用のためには、MiddlewareConsumer,NestModule,LoggerMiddlewareが必要
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TodoModule } from './todo/todo.module';

//Moduleは、ControllerやServiceの依存関係を管理します。moduleファイルに対して、ControllerやServiceを登録することで、そのControllerやServiceが使えるようになります。
//Appモジュールがルートとなり、下位に各機能のモジュールが存在するイメージです。
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'radwimps123',
      database: 'todolist',
      entities: ['dist/entities/**/*.entity.js'],
      migrations: ['dist/migrations/**/*.js'],
      migrationsTableName: 'custom_migration_table',
      logging: false,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // schemaファイルのパスを指定
      sortSchema: true, // 生成されたschemaを自動でsortされるためのオプションをオンにする
    }),
    TaskModule,
    UsersModule,
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  //ミドルウェアを利用するため、AppModuleクラスにNestModuleインターフェースを実装し、configureモジュールクラスのメソッドを利用できるようにする
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/'); //ルートパスアクセス時にミドルウェアの処理が走る
  }
}
