import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'events', component: EventsComponent },
      { path: 'top-bar', component: TopBarComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    TopBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
