import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email=null;
  constructor(private auth:AuthService,
    private router:Router,
    private toastr:ToastrService) {
      console.log('in');
      auth.getUser().subscribe((user)=>{
        
        this.email=user?.email;
        console.log(this.email);
      })
     }

  ngOnInit(): void {
  }

  async handleSignOut(){
    try{
      const res=await this.auth.signOut();
      this.router.navigateByUrl('/signin');
      this.toastr.info("Login Again to continue");
      this.email=null;
    }
    catch{
      this.toastr.error('Something is wrong');
    }
  }

}
