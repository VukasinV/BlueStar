import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  users: [
    {
      username: "luzajic",
      password: "luzajic123",
      fullname: "Vladan Luzajic",
    },
    {
      username: "nesha",
      password: "nesha123",
      fullname: "Nenad Lazaroj",
    },
    {
      username: "marushka",
      password: "marushka123",
      fullname: "Marija Cosovic",
    },
    {
      username: "novakovic",
      password: "novakovic123",
      fullname: "Marija Novakovic",
    },
    {
      username: "jovan",
      password: "jovan123",
      fullname: "Jovan Grbic",
    }
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }
}
