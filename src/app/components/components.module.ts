import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { TranslateModule } from '@ngx-translate/core';

export const routes: Routes = [{ path: '', component: HomeComponent }];
@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), TranslateModule],
  exports: [HomeComponent],
})
export class ComponentsModule {}
