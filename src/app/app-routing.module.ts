import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'category',component:SingleCategoryComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'about',component:AboutUsComponent},
  {path:'term-condition',component:TermsAndConditionsComponent},
  {path:'post',component:SinglePostComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
