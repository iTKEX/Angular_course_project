import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JelewryComponent } from './jelewry/jelewry.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';
import { InfoComponent } from './info/info.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { BillComponent } from './bill/bill.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'jelewry',component:JelewryComponent},
  {path:"men's",component:MenClothingComponent},
  {path:"women's",component:WomenClothingComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'cart',component:CartComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'info',component:InfoComponent},
  {path:'bill',component:BillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
