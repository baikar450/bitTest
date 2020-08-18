import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from "carbon-components-angular";
import { InputModule} from 'carbon-components-angular';
import { CheckboxModule } from 'carbon-components-angular';
import { MsComponent } from './ms/ms.component';


@NgModule({
  declarations: [
    AppComponent,
    MsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputModule,
    CheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
