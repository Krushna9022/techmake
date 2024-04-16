import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContactUs } from './model/ContactUs';
import { HandshakeResponse } from './HandshakeResponse';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getHandshakeResponse(): Observable<HandshakeResponse> {
    const handshake = `${this.apiUrl}/handshake/`;
    return this.http.get<HandshakeResponse>(handshake);
  }

  getRecentBlogs(): Observable<string[]> {
    const recentBlogs = `${this.apiUrl}/recent-blogs`
    return this.http.get<string[]>(recentBlogs);
  }

  getTrendingTopic(): Observable<string[]> {
    const trendingtopic = `${this.apiUrl}/trending-topic`;
    return this.http.get<string[]>(trendingtopic)
  }

  getCategory(): Observable<string[]> {
    const category=`${this.apiUrl}/category`;
    return this.http.get<string[]>(category);
  }

  submitContactForm(contactData: ContactUs): Observable<any> {
    const contactUrl = `${this.apiUrl}/contactus`;
     return this.http.post<any>(contactUrl, contactData);
   }
}
