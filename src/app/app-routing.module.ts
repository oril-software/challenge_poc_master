import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InfoComponent} from './components/info/info.component';
import {UsersComponent} from "./modules/my-users/components/users/users.component";
import {JobsComponent} from "./modules/my-jobs/components/jobs/jobs.component";
import {HeaderComponent} from "./components/header/header.component";

const routes: Routes = [
  {path: '', redirectTo: '/jobs', pathMatch: 'full'},
  {
    path: 'jobs', children: [
      {path: '', component: HeaderComponent, outlet: 'header'},
      {path: '', component: JobsComponent}
    ]
  },
  {
    path: 'users', children: [
      {path: '', component: HeaderComponent, outlet: 'header'},
      {path: '', component: UsersComponent}
    ]
  },
  {path: 'users/:id', component: InfoComponent},
  {path: 'jobs/:id', component: InfoComponent},
  { path: '**', redirectTo: 'users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
