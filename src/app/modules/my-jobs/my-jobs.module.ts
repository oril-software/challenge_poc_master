import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobsComponent} from "./components/jobs/jobs.component";
import { RouterModule} from '@angular/router';
import {SharedModule} from "../shared.module";



@NgModule({
  declarations: [
    JobsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ],
  exports: []
})
export class MyJobsModule { }
