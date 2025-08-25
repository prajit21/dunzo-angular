import { Component, output } from "@angular/core";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DropzoneConfigInterface, DropzoneModule } from "ngx-dropzone-wrapper";

@Component({
  selector: "app-products-gallery",
  templateUrl: "./products-gallery.html",
  styleUrls: ["./products-gallery.scss"],
  imports: [FormsModule, ReactiveFormsModule, DropzoneModule],
})
export class ProductsGallery {
  public imageConfig: DropzoneConfigInterface = {
    clickable: true,
    url: "https://httpbin.org/post",
    acceptedFiles: "image/*",
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  public galleryConfig: DropzoneConfigInterface = {
    clickable: true,
    url: "https://httpbin.org/post",
    acceptedFiles: "image/*",
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  public text =
    '<h6>Drag your image here, or <a class="txt-primary">browser</a></h6><span class="note needsclick">SVG,PNG,JPG or GIF</span>';
  public textData =
    '<h6>Drag files here</h6><span class="note needsclick">Add Product Gallery Images</span>';

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccess(_args: DropzoneConfigInterface): void {}

  onUploadErrorGallery(_args: DropzoneConfigInterface): void {}

  onUploadSuccessGallery(_args: DropzoneConfigInterface): void {}

  readonly activeSteps = output<number>();

  public activeStep: number = 2;

  public myForm = new FormGroup({});

  next(_myForm: FormGroup) {
    const number = this.activeStep + 1;
    this.activeSteps.emit(number);
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }
}
