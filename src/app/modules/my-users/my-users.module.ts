import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from "./components/users/users.component";
import { RouterModule} from '@angular/router';
import {SharedModule} from "../shared.module";


@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
  ],
  exports: []
})
export class MyUsersModule { }
