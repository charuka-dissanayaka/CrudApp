import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-ser',
  templateUrl: './edit-ser.component.html',
  styleUrls: ['./edit-ser.component.scss']
})
export class EditSerComponent implements OnInit {

  userId:any;
  userDetails:any;
  edituserForm:FormGroup=new FormGroup({});
  dataLoaded:boolean=false;
  constructor(private activeteRoute:ActivatedRoute,
    private userServices:UserService,
    private formBuilder:FormBuilder,
    private _snackBar:MatSnackBar
   ) { }

  ngOnInit(): void {
   this.dataLoaded=false
    this.activeteRoute.params.subscribe(data=>{
      this.userId=data.id;
    })
    if(this.userId!==''){
      //view user details
      this.userServices.viewUser(this.userId).toPromise().then(data=>{
        this.userDetails=data;
        Object.assign(this.userDetails,data)
         console.log(this.userDetails)

        
        //build the edit form
          this.edituserForm=this.formBuilder.group({
            'username': new FormControl(this.userDetails.name),
            'email':new FormControl(this.userDetails.email)
          }) 
          this.dataLoaded=true;

      })

      .catch(err=>{
        console.log(err)
      })
      this.dataLoaded=true;
    }
  }
  UpdateUser(){
    this.userServices.updateUser(this.userId,this.edituserForm.value )
    this._snackBar.open("user created successfully");
    console.log("user created")
  }
  } 

 


