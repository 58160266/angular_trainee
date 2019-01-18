import { Component,Output, EventEmitter} from '@angular/core';
import { Post } from '../shared/post.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Output() formSubmit : EventEmitter<Post> = new EventEmitter();

  model : Post ;

  constructor(){
    this.resetPost();
  }
  createPost(){
    this.formSubmit.emit(this.model);
    //console.log(this.model);
    this.resetPost();
  }

  changeImage(image){
    this.model.image = image;
  }

  private resetPost(){
    this.model = new Post();
  }

}
