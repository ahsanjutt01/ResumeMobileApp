import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private API_URL = 'https://resume-server-app.herokuapp.com';
  // private API_URL = 'http://localhost:4800';

  private EMAIL = 'ahsanjutt0999@outlook.com';

  constructor(
    private http: HttpClient
    ) { }

    // loginIn() {
    //   return this.http.post(`${this.API_URL}/fake/postFakeLogin`, {email: this.EMAIL}).pipe( map(res => {
    //     const data = JSON.stringify(res);
    //     localStorage.setItem('userInfo', data);
    //     return data;
    //    }));
    // }

  getProfile() {
    return this.http.get(`${this.API_URL}/getUserByEmail/${this.EMAIL}`).pipe( map(res => {
      const data = JSON.stringify(res);
      localStorage.setItem('userInfo', data);
      return res;
      }));
  }

  private getUserId() {
    const userInfo  = JSON.parse(localStorage.getItem('userInfo'));
    return userInfo.id;
  }

  getEducation = () => this.http.get(`${this.API_URL}/edu/EducationByUserId/${this.getUserId()}`);

  getExperience = () => this.http.get(`${this.API_URL}/work/workByUserId/${this.getUserId()}`);
  getProjects = () => this.http.get(`${this.API_URL}/project/projectByUserId/${this.getUserId()}`);
  sendMsg = (body: any) => this.http.post(`${this.API_URL}/contact/postContact`, body);
}
