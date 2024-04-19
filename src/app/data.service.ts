import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Blog}from './model/Blog'
import { HandshakeResponse } from './HandshakeResponse';
import { ContactUs } from './model/ContactUs';

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

  getCategory(): Observable<string[]> {
    const category=`${this.apiUrl}/category`;
    return this.http.get<string[]>(category);
  }
  getTrending(count:number):Observable<Blog[]>{
    const trending=`${this.apiUrl}/blog/trending/${count}`;
    return this.http.get<Blog[]>(trending);
  }

  submitContactForm(contactData: ContactUs): Observable<any> {
    const contactUrl = `${this.apiUrl}/contactus`;
     return this.http.post<any>(contactUrl, contactData);
   }
}
