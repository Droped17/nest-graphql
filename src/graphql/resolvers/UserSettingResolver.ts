import { Args, Mutation } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingInput';

export class UserSettingsResolver {
  @Mutation((returns) => UserSetting)
  createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingsInput,
  ) {
    console.log(createUserSettingsData);
    mockUserSettings.push(createUserSettingsData);
    return createUserSettingsData;
  }
}
