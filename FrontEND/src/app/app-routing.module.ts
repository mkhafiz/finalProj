import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MoviedetailsComponent } from './pages/moviedetails/moviedetails.component';
import { SearchComponent } from './pages/search/search.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { CreateSubComponent } from './sub/create-sub/create-sub.component';
import { ListSubComponent } from './sub/list-sub/list-sub.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent , canActivate: [AuthGuard] },
  {path:'search',component:SearchComponent ,canActivate: [AuthGuard]},
  {path:'movie/:id',component:MoviedetailsComponent ,canActivate: [AuthGuard]},
  {path: 'signup', component:SignupComponent, },
  {path: 'login', component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
