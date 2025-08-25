import { Component, inject } from "@angular/core";

import { NgxSliderModule, Options } from "@angular-slider/ngx-slider";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { OwlOptions, CarouselModule } from "ngx-owl-carousel-o";

import {
  filterData,
  BrandCheckbox,
  CategoryCheckbox,
} from "../../../../shared/data/main-ecommerce/product";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.html",
  styleUrls: ["./filter.scss"],
  imports: [NgxSliderModule, CarouselModule],
})
export class Filter {
  config = inject(NgbRatingConfig);

  public filter = filterData;
  public CategoryCheckboxData = CategoryCheckbox;
  public BarndCheckboxData = BrandCheckbox;
  public openSidebar: boolean = false;
  public value2: number = 200;
  public maxvalue: number = 800;

  constructor() {
    const config = this.config;
    config.max = 5;
    config.readonly = true;
  }

  customOptions: OwlOptions = {
    items: 1,
    margin: 30,
    loop: true,
    dots: false,
    nav: true,
  };

  options: Options = {
    floor: 0,
    ceil: 1000,
    showTicksValues: true,
    tickStep: 250,
  };

  sidebarToggle() {
    this.openSidebar = !this.openSidebar;
  }
}
