import { IsNotEmpty, IsString } from 'class-validator';

//DTOにはデータをやり取りする時の構造やバリデーションを定義します。
export class CreateTaskDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  due_date: string;
}
