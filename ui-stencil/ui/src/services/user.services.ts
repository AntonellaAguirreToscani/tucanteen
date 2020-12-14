
import { FetchAdapter } from '../adapters/fetch.adapter';
import { CONSTANTS, ENDPOINTS } from '../constants/url.endpoints';



export class UserService{

  private static _instance: UserService;
  private baseUrl: string;
  private fetch: FetchAdapter;
  
  constructor() {
    this.baseUrl = CONSTANTS.apiUrl;
    this.fetch = new FetchAdapter(`${this.baseUrl}${ENDPOINTS.login}`);
  }

  async getUsersApi(path: string){
    return await this.fetch.httpRequest(path,'GET');
  }
  // createUser(user: User){
  //   USERS.push(user);
  // }
  // getUsers(): Observable<User[]> {
  //   return of(USERS);
  // }
  async loginValidate(body:object){
   return await this.fetch.httpRequest('/validate','POST',body);
  }
  async addNewUser(body: object){
   return await this.fetch.httpRequest(`/${ENDPOINTS.addNewUser}`,'POST',body);
  }
  
  //Utiliza el patron Singleton. Se intancia una única vez!
  public static get Instance(): UserService {
      return this._instance || (this._instance = new this());
  }
}