import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ManageComponent } from './manage/manage.component';
import { AddCateComponent } from './add-cate/add-cate.component';
import { EditMedComponent } from './edit-med/edit-med.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CartComponent } from './cart/cart.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"addMedicine",component:AddProductComponent},
  {path:"manageProduct",component:ManageComponent},
  {path:"addCategory",component:AddCateComponent},
  {path:"editMedicine/:id",component:EditMedComponent},
  {path:"searchMed",component:SearchPageComponent,canActivate:[LoginGuard]},
  {path:"cart",component:CartComponent,canActivate:[LoginGuard]},
  {path:"success",component:PaymentSuccessComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
