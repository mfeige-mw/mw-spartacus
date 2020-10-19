import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {GenericLinkModule, OutletRefModule} from '@spartacus/storefront';
import { CommonOutletsComponent } from './common-outlets.component';



@NgModule({
  declarations: [CommonOutletsComponent],
  imports: [
    CommonModule,
    OutletRefModule,
    GenericLinkModule
  ],
  exports: [CommonOutletsComponent]
})
export class CommonOutletsModule { }
