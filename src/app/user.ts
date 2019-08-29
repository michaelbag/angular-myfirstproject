import { UserGroup } from './user-group';

export interface User {

  userName: string;
  password: string;
  groups: UserGroup[];
  
}