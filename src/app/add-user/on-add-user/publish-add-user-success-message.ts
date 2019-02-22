import * as bus from 'pubsub-js';
import { AddUser, AddUserSuccess } from '../../message';
import { User } from '../../store/user';
import * as store from '../../store';

bus.subscribe(AddUser, AddUserInDataBase);

export function AddUserInDataBase(msg: string, user: User) {
  publishAddUserSuccessMessage(user);
}

function publishAddUserSuccessMessage(user: User) {
  console.log('success', user);
  store.addUser(user);
  bus.publishSync(AddUserSuccess, user.id);
}

function onFail(message: any) {
  console.log('fail', message);
}
