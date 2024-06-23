import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    TranslateModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent],
})
export class ComponentsModule {}
