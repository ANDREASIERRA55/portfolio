import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [{
  path:"", component: HomeComponent, pathMatch: 'full'}, 
  {path:"about", component: AboutComponent},
  {path:"contact", component: ContactComponent},
  {path:"work", component: WorkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
