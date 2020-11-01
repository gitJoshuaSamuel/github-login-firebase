import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//https://api.github.com/users/hiteshchoudhary
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }

  getUserDetails(userName:string){
    return this.http.get(`https://api.github.com/users/${userName}`)
  }

  //this is being added to test things in Git
  getRepos(repoUrl:string){
    return this.http.get(repoUrl);
  }
}
