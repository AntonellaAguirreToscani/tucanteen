import { o as of } from './index-56ea03f0.js';

const USERS = [
  { userName: 'antoAT', password: 'anto123', typeUser: 'client' },
  { userName: 'debo2020', password: 'debo123', typeUser: 'client' },
  { userName: 'BerniL1', password: 'berni123', typeUser: 'client' },
  { userName: 'nestorLuiss', password: 'nestorluis123', typeUser: 'admin' },
];

class UserService {
  getUsers() {
    return of(USERS);
  }
  createUser(user) {
    USERS.push(user);
  }
  //Utiliza el patron Singleton. Se intancia una única vez!
  static get Instance() {
    return this._instance || (this._instance = new this());
  }
}

export { UserService as U };
