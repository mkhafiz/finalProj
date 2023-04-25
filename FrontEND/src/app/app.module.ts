import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MoviedetailsComponent } from './pages/moviedetails/moviedetails.component';
import { SearchComponent } from './pages/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ToastrModule } from 'ngx-toastr';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostTileComponent } from './pages/shared/post-tile/post-tile.component';
import { SidebarComponent } from './pages/shared/sidebar/sidebar.component';
import { SubSidebarComponent } from './pages/shared/sub-sidebar/sub-sidebar.component';
import { VoteButtonComponent } from './pages/shared/vote-button/vote-button.component';
import { CreateSubComponent } from './sub/create-sub/create-sub.component';
import { ListSubComponent } from './sub/list-sub/list-sub.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ViewPostComponent } from './post/view-post/view-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MoviedetailsComponent,
    SearchComponent,
    PostTileComponent,
    SidebarComponent,
    SubSidebarComponent,
    VoteButtonComponent,
    CreateSubComponent,
    ListSubComponent,
    CreatePostComponent,
    ViewPostComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxWebstorageModule.forRoot(),
    ToastrModule.forRoot(),
    FontAwesomeModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
