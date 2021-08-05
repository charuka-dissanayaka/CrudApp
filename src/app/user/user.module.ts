import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditSerComponent } from './edit-ser/edit-ser.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ViewUserComponent,
    EditSerComponent,
    ListUserComponent,
    AddUserComponent,
    DeleteUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
  ],

  providers:[
    {
      provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue:{duration:2500}
    }
  ]
})
export class UserModule { }
