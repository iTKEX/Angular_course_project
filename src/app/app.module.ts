import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { JelewryComponent } from './jelewry/jelewry.component';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';
import { InfoComponent } from './info/info.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { cartReducer } from './reducers/cart/cart.reducer';
import { counterReducer } from './reducers/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    ElectronicsComponent,
    JelewryComponent,
    MenClothingComponent,
    WomenClothingComponent,
    InfoComponent,
    DetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreModule.forRoot({ cart: cartReducer, counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
