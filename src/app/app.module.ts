import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyServiceService } from './my-service.service';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { AllempsComponent } from './allemps/allemps.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EditempComponent } from './editemp/editemp.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    AllempsComponent,
    EmpDetailsComponent,
    EditempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
