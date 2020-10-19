import { Component, OnInit } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mw-product-outlet',
  templateUrl: './product-outlet.component.html',
  styleUrls: ['./product-outlet.component.scss']
})
export class ProductOutletComponent implements OnInit {

  product$ = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) { }

  ngOnInit(): void {
  }

}
