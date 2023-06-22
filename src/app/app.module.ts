import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TuiButtonModule,
  TuiDialogModule,
  TuiRootModule} from '@taiga-ui/core';
import {TuiTabsModule,
  TuiInputModule,
  TuiTextAreaModule} from '@taiga-ui/kit';
import {TuiTextfieldControllerModule,
  TuiSvgModule} from '@taiga-ui/core';
import {TuiSheetModule} from '@taiga-ui/addon-mobile';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { DialogWindowComponent } from './components/dialog-window/dialog-window.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogWindowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiButtonModule,
    TuiTabsModule,
    TuiDialogModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiTextAreaModule,
    TuiSheetModule,
    TuiSvgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
