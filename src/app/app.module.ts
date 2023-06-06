import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiTabsModule} from '@taiga-ui/kit';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TuiButtonModule,
    TuiTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
