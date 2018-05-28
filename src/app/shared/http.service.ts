import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_ENDPOINT = 'http://myhackernews.tk/api/';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  get(url: string): Promise<any> {
    return this.httpClient.get(API_ENDPOINT + url).toPromise();
  }

  post(url: string, params: any): Promise<any> {
    return this.httpClient.post(API_ENDPOINT + url, params).toPromise();
  }

  put(url: string, params: any): Promise<any> {
    return this.httpClient.put(API_ENDPOINT + url, params).toPromise();
  }

  delete(url: string): Promise<any> {
    return this.httpClient.delete(API_ENDPOINT + url).toPromise();
  }
}

