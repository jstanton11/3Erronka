import { GuriBuruzComponent } from './components/guri-buruz/guri-buruz.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasieraComponent } from './components/hasiera/hasiera.component';
import { ErreskateakComponent } from './components/erreskateak/erreskateak.component';
import { DonatuComponent } from './components/donatu/donatu.component';
import { KontaktuaComponent } from './components/kontaktua/kontaktua.component';
import { AdminComponent } from './components/admin/admin.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: "", redirectTo: "hasiera", pathMatch: "full" },
    { path: "hasiera", component: HasieraComponent },
    { path: "erreskateak", component: ErreskateakComponent },
    { path: "donatu", component: DonatuComponent },
    { path: "guriBuruz", component: GuriBuruzComponent },
    { path: "kontaktua", component: KontaktuaComponent },
    { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
