import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { ProductOutletModule } from './product-outlet/product-outlet.module';
import { CommonOutletsModule } from './common-outlets/common-outlets.module';
import {ConfigModule} from "@spartacus/core";


export const translationOverwrites = {
  en: { // lang
    mw: { // chunk
      logo: { // keys (nested)
        alt: 'Medienwerft',
      },
    },
  },
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://spartacus-training.eastus.cloudapp.azure.com:8443',
          prefix: '/occ/v2/'
        }
      },
      context: {
        currency: ['USD'],
        language: ['en'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '3.0'
      }
    }),
    ConfigModule.withConfig({
      i18n: { resources: translationOverwrites }
    }),
    CommonOutletsModule,
    ProductOutletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
