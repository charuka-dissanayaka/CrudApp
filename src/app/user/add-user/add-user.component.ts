import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm:FormGroup=new FormGroup({})
  constructor(private formBuilder:FormBuilder,
    private userSevice:UserService,
    private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm= this.formBuilder.group({
      'username':new FormControl('',[Validators.required,Validators.minLength(3)]),
      'email':new FormControl('',[Validators.required,Validators.email] ),
      'phone':new FormControl('')
    })
  
  }
  createUser(){
    this.userSevice.addUser(this.addUserForm.value).subscribe(data=>{
     this._snackBar.open("user created successfully");
      console.log("user created")
    },err=>{
      console.log("unable to create");
    })
    console.log(this.addUserForm.value);
  }

}
