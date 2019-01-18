import { Component, ViewChild, Renderer, Output, EventEmitter,Input,OnChanges, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-post-form-image',
  templateUrl: './post-form-image.component.html',
  styleUrls: ['./post-form-image.component.css']
})
export class PostFormImageComponent implements OnChanges {

  @Input() image:string ;
  @Output() imageChange = new EventEmitter();

  @ViewChild('uploader') fileInput;


  constructor(private renderer :Renderer) { }

  ngOnChanges(changes:SimpleChanges){

  }

  triggerFileUpload(){
    this.renderer.invokeElementMethod(
      this.fileInput.nativeElement,
      'dispatchEvent',
      [new MouseEvent('click', {bubbles : true})]
    )

  }

  uploadImage(event){
    const reader = new FileReader();
    const image = event.target.files[0];

    reader.onload = () =>{
      const result = reader.result;
      this.image = result ;
      this.imageChange.emit(result);
    }

    reader.readAsDataURL(image);
  }

}

