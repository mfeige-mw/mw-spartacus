import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OutletRefModule } from '@spartacus/storefront';
import { ProductOutletComponent } from './product-outlet.component';



@NgModule({
  declarations: [ProductOutletComponent],
  imports: [
    CommonModule,
    OutletRefModule
  ],
  exports: [ProductOutletComponent]
})
export class ProductOutletModule { }
