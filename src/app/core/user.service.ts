import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable()

export class UserService {

  

  private userUrl: string="http://localhost:64774/api"

  constructor(private http:HttpClient) { }

  newRegister(user) {
    return this.http.post(`${this.userUrl}/users`, user)
  }
  login(username: String, password: String) {
    
  }

}