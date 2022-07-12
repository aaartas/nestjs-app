import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

//DTOにはデータをやり取りする時の構造やバリデーションを定義します。
//DTOの特徴:interface や Type ではなく class で定義すること。

export class CreateTaskDTO {
  @IsString()
  //検証デコレータ。これによってバリデーションを行う。https://www.npmjs.com/package/class-validator#inheriting-validation-decorators参照
  title: string; //型定義

  @IsNotEmpty() //指定された値が空でないかどうかをチェックします（!==''、!== null、!==undefined）。
  @IsString() //文字列が文字列かどうかを確認します。
  due_date: string;
}

export class UpdateTaskDTO {
  @IsOptional() //指定された値が空（null、undefined）であるかどうかをチェックし、空である場合は、プロパティのすべてのバリデーターを無視します。
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  due_date: string;
}
