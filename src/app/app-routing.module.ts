import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//rutas
import { HomePageComponent } from "./components/home-page/home-page.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";
import { RegisterPageComponent } from "./components/register-page/register-page.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: NotFoundPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
