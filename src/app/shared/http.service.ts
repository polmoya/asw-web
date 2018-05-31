import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable()
export class HttpService {

  private readonly API_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  get(url: string): Promise<any> {
    return this.httpClient.get(this.API_URL + url).toPromise();
  }

  post(url: string, params: any): Promise<any> {
    return this.httpClient.post(this.API_URL + url, params).toPromise();
  }

  put(url: string, params: any): Promise<any> {
    return this.httpClient.put(this.API_URL + url, params).toPromise();
  }

  delete(url: string): Promise<any> {
    return this.httpClient.delete(this.API_URL + url).toPromise();
  }
}

