import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { UserService } from '../../core/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  user={}; 
  
  constructor(private userService: UserService) { }

  ngOnInit() {

  }
  newRegister() {
    console.log(this.user);
     this.userService.newRegister(this.user).subscribe(
       data => {
         console.log("Uspolo");
       },
       error => {
         console.warn("Sjebali")
         console.log(error);
       }
     );
  }

}
