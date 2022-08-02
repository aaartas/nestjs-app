import { Field, ID, ObjectType } from '@nestjs/graphql';

// @Entity()から書き換える。
@ObjectType()
export class Task {
  @Field(() => ID)
  readonly task_id: string;
  //readonly→update不可となる

  //length: 20をどう設定する？→@Fieldではできなさそう
  @Field({ nullable: false })
  title: string;

  @Field({ nullable: false })
  due_date: Date;

  @Field()
  status: number;

  @Field()
  readonly created_at?: Date;

  @Field()
  readonly updated_at?: Date;
}
