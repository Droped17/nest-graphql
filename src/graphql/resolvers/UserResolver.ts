import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { UserSetting } from '../models/UserSetting';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';

@Resolver()
export class UserResolver {
  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query(() => [User]) //array of User
  getUsers() {
    return mockUsers;
  }

  @ResolveField(returns => UserSetting)
  getUserSettings(@Parent() ){
  }
}
