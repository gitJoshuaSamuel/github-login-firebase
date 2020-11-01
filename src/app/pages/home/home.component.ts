import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {GithubService} from "./../../services/github.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

user:any;//was initially null
userName:string;
error=null;
    
  constructor(private ref:ChangeDetectorRef,
              private gitHubService:GithubService) { }

  ngOnInit(): void {
  }
    
  handleFind(){
      this.gitHubService.getUserDetails(this.userName).subscribe((user)=>{
        this.user=user;
        this.error=null;
        this.ref.detectChanges();
      },(err)=>{
          this.user=null;
          this.error="user not Found";
          this.ref.detectChanges();
      });
  }

}
