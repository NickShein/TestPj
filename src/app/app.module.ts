import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EarthComponent } from './elemental-types-components/earth/earth.component';
import { WaterComponent } from './elemental-types-components/water/water.component';
import { AppRoutingModule } from './app-routing.module';
import { ElementalBodyComponent } from './elemental-body/elemental-body.component';
import { FireComponent } from './elemental-types-components/fire/fire.component';
import { WindComponent } from './elemental-types-components/wind/wind.component';
import { FooterComponent } from './footer/footer.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EarthComponent,
    WaterComponent,
    FireComponent,
    WindComponent,
    ElementalBodyComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
