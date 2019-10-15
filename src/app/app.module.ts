import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import {MyJobsModule} from "./modules/my-jobs/my-jobs.module";
import {MyUsersModule} from "./modules/my-users/my-users.module";
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule, MatTabsModule} from "@angular/material";
import {SharedModule} from "./modules/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MyJobsModule,
    MyUsersModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
