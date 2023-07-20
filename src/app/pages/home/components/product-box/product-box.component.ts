import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.modules';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Input() product:  Product | undefined;
  @Output() addToCart = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    
  }

  onAddToCart(): void{
    this.addToCart.emit(this.product);
  }

}
//function output(): (target: ProductBoxComponent, propertyKey: "addToCart") => void {
  //throw new Error('Function not implemented.');
//}

 