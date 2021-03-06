import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { CoreModule } from './core/core.module';

import {
  MdButtonModule,
  MdInputModule,
  MdCheckboxModule,
  MdAutocompleteModule,
  MdDialogModule,
  MdRadioModule,
  MdToolbarModule,
  MdIconModule,
  MdTableModule,
  MdPaginatorModule
} from '@angular/material';

import {CdkTableModule} from '@angular/cdk/table';

import {TableComponent} from './order/table/table.component';
import {OrderCalendarComponent} from './order/order-calendar/order-calendar.component';
import {SearchBoxComponent} from './order/search-box/search-box.component';
import {AddUserDialogComponent} from './order/add-user-dialog/add-user-dialog.component';
import { AddUserComponent } from './order/add-user/add-user.component';

import { EmailComponent} from './shared/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    OrderCalendarComponent,
    SearchBoxComponent,
    AddUserDialogComponent,
    AddUserComponent,
    EmailComponent
  ],
  entryComponents: [AddUserDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdCheckboxModule,
    MdAutocompleteModule,
    MdDialogModule,
    MdRadioModule,
    MdToolbarModule,
    MdIconModule,
    MdTableModule,
    CdkTableModule,
    MdPaginatorModule,
    CoreModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}
