import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  listUsers:any;
  constructor(private Userservice:UserService) { }

  ngOnInit(): void {
    this.Userservice.listUsers().subscribe(data => {
      this.listUsers=data;
    })
    
  
   
  }

}
