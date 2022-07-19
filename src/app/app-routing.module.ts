import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { HomeComponent } from './content/home/home.component';
import { ServiceComponent } from './content/service/service.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"about",component: AboutComponent},
  {path:"service",component: ServiceComponent},
  {path:"contact",component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
