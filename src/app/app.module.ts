import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeModule } from './welcome/welcome.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';

// definisanje ruta u aplikaciji
const routes = [
  {
    path: '', component: WelcomeComponent  // ruta koja se prikazuje kada se dodje na aplikaciju (default ruta)
  },
  {
    path: 'home', component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    WelcomeModule,
    HomeModule,
    RouterModule.forRoot(routes),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
