import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBannerLinks(): Observable<string[]> {
    const bannerUrl = `${this.apiUrl}/banner`;
    return this.http.get<string[]>(bannerUrl);
  }

  getFooterLinks(): Observable<string[]> {
    const footerUrl = `${this.apiUrl}/footer`
    return this.http.get<string[]>(footerUrl);
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
}
