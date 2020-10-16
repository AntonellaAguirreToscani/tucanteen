import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../models.ts/user.model';
import {USERS} from '../mocks/users-mock'


export class UserService{

  private static _instance: UserService;

  getUsers(): Observable<User[]> {
    return of(USERS);
  }
  //Utiliza el patron Singleton. Se intancia una única vez!
  public static get Instance(): UserService {
      return this._instance || (this._instance = new this());
  }
}