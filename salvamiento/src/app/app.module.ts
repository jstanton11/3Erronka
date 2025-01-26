import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HasieraComponent } from './components/hasiera/hasiera.component';
import { ErreskateakComponent } from './components/erreskateak/erreskateak.component';
import { DonatuComponent } from './components/donatu/donatu.component';
import { KontaktuaComponent } from './components/kontaktua/kontaktua.component';
import { GuriBuruzComponent } from './components/guri-buruz/guri-buruz.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { GureGaleriaComponent } from './components/gure-galeria/gure-galeria.component';
import { HttpClientModule } from '@angular/common/http';
import { FormAltaEguneraketaComponent } from './components/form-alta-eguneraketa/form-alta-eguneraketa.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HasieraComponent,
    ErreskateakComponent,
    DonatuComponent,
    KontaktuaComponent,
    GuriBuruzComponent,
    FooterComponent,
    AdminComponent,
    GureGaleriaComponent,
    FormAltaEguneraketaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
