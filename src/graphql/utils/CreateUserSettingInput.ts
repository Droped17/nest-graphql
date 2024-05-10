import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserSettingsInput {
  @Field((type) => Int)
  userId: number;

  @Field({ nullable: true, defaultValue: false })
  receiveNotificattions: boolean;

  @Field({ nullable: true, defaultValue: false })
  receiveEmails: boolean;
}
