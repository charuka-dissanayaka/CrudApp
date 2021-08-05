import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { EditSerComponent } from './user/edit-ser/edit-ser.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';

const routes: Routes = [
 
  
 
   {path:'users',
  children:[
    {path:'create',component:AddUserComponent},
    {path:'',component:ListUserComponent},
    {path:'list',component:ListUserComponent},
    {path:'delete/:id',component:DeleteUserComponent},
    {path:'edit/:id',component:EditSerComponent},
   
    {
      path:'view/:id',component:ViewUserComponent
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
