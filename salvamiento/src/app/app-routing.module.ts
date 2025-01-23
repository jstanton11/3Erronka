import { GureGaleriaComponent } from './components/gure-galeria/gure-galeria.component';
import { GuriBuruzComponent } from './components/guri-buruz/guri-buruz.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasieraComponent } from './components/hasiera/hasiera.component';
import { ErreskateakComponent } from './components/erreskateak/erreskateak.component';
import { DonatuComponent } from './components/donatu/donatu.component';
import { KontaktuaComponent } from './components/kontaktua/kontaktua.component';
import { AdminComponent } from './components/admin/admin.component';
import { authGuard } from './guards/auth.guard';
import { FormAltaEguneraketaComponent } from './components/form-alta-eguneraketa/form-alta-eguneraketa.component';

const routes: Routes = [
    { path: "", redirectTo: "hasiera", pathMatch: "full" },
    { path: "hasiera", component: HasieraComponent },
    { path: "erreskateak", component: ErreskateakComponent },
    { path: "donatu", component: DonatuComponent },
    { path: "guriBuruz", component: GuriBuruzComponent },
    { path: "gureGaleria", component: GureGaleriaComponent},
    { path: "kontaktua", component: KontaktuaComponent },
    { path: 'admin', component: AdminComponent, canActivate: [authGuard]},
    {path: 'update/:id', component: FormAltaEguneraketaComponent},
    {path: 'alta' , component: FormAltaEguneraketaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
