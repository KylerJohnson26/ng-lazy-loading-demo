import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ProductComponent } from './product/product/product.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'product', component: ProductComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
