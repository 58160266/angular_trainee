import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostFormImageComponent } from './posts/post-form-image/post-form-image.component';

import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    PostFormComponent,
    PostListComponent,
    PostFormImageComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
