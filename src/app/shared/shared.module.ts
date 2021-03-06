/**
 * Created by jq on 2017/8/28.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {FilterTextComponent} from './filter-text/filter-text.component';
import {FilterTextService} from './filter-text/filter-text.service';
import {InitCapsPipe} from './init-caps.pipe';
import { EmailComponent } from './email/email.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    FilterTextComponent,
    InitCapsPipe,
    EmailComponent
  ],
  providers: [FilterTextService],
  exports: [
    CommonModule,
    FormsModule,
    FilterTextComponent,
    InitCapsPipe
  ]
})
export class SharedModule {
}
