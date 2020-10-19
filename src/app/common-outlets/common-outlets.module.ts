import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OutletRefModule } from '@spartacus/storefront';
import { CommonOutletsComponent } from './common-outlets.component';



@NgModule({
  declarations: [CommonOutletsComponent],
  imports: [
    CommonModule,
    OutletRefModule
  ],
  exports: [CommonOutletsComponent]
})
export class CommonOutletsModule { }
