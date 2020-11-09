export class FetchAdapter {
    BASE_URL: string;
    headers: Headers;
    
    constructor(baseUrl: string) {
      this.BASE_URL = baseUrl;
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
    }
  
    public get(path: string) {
      return fetch(this.BASE_URL + path, {
        method: 'GET',
        headers: this.headers,
    });
    }
    public httpRequest(path: string, httpVerb : string, body? : object){
      if(httpVerb == 'POST' || httpVerb == 'UPDATE'){
        return fetch(this.BASE_URL + path, {
          method: httpVerb,
          headers: this.headers,
          body: JSON.stringify(body)
        });
      }else{
        return fetch(this.BASE_URL + path, {
          method: httpVerb,
          headers: this.headers,
        });
      }
    }
  }