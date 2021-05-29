import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CartService } from './cart.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

registerLocaleData(localePt);

@NgModule({
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'events', component: EventsComponent },
      { path: 'top-bar', component: TopBarComponent },
      { path: 'events/:eventId', component: EventDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'search', component: SearchComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    TopBarComponent,
    EventDetailsComponent,
    CartComponent,
    SearchComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    CartService,
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ]
})
export class AppModule {}
