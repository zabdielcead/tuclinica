import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeng
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';

import {FieldsetModule} from 'primeng/fieldset';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputTextModule} from 'primeng/inputtext';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    TabMenuModule,
    InputTextModule,
    CarouselModule
  ]
})
export class PrimeNgModule { }
