import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //クエリパラメーターが存在しない場合、そのユーザーはアクセスできないようにしてみる。
    // つまり
    //NG  http://localhost:3000
    //OK  http://localhost:3000/?params=*

    //ガードはこのままでは動作しません。ガードを使うコントローラーを指定し、@UserGuardsデコレータをつけてあげる必要があります。
    const request = context.switchToHttp().getRequest();
    if (!request.query.params) {
      return false;
    } else {
      return true;
    }
  }
}
