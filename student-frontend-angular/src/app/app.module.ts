import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './students/table/table.component';
import { ButtonComponent } from './students/button/button.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './register/add/add.component';
import { ViewbtnComponent } from './viewbtn/viewbtn.component';
import { ChangeComponent } from './update/change/change.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HeaderComponent,
    TableComponent,
    ButtonComponent,
    LoginComponent,
    RegisterComponent,
    UpdateComponent,
    AddComponent,
    ViewbtnComponent,
    ChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
