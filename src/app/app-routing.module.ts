import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { CategoryComponent } from './components/category/category.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ourstory', component: OurStoryComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'services', component: OurServicesComponent },
  { path: 'category', component: CategoryComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
