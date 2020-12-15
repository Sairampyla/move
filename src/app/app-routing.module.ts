import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowUsersComponent } from './components/show-users/show-users.component';


const routes: Routes = [
  {
    path:'',redirectTo:'/main',pathMatch:'full'
 },
  {
    path:'main',component:ShowUsersComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
