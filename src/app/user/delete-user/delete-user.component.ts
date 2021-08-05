import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  userId:string= ' ';
  constructor(private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private _snackbar:MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId=data.id;
    });

    if(this.userId){
      this.userService.deleteUser(this.userId).subscribe(data=>{
        this._snackbar.open("successfully detele the user")
        this.router.navigate(['list-users'])
      },err=>{
        this._snackbar.open("try again")
      })
      
    }
  }

}
