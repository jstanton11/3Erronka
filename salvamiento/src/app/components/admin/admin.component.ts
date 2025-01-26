import { Component } from '@angular/core';
import { ServiceService } from './../../services/service.service';
import { Erreskatatuak } from 'src/app/models/erreskatatuak';
import { FormAltaEguneraketaComponent } from "../form-alta-eguneraketa/form-alta-eguneraketa.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  //Bariableak
  erreskatatuak: Erreskatatuak[] = [];
  selectErreskatatua: Erreskatatuak = {id: '', erreskate_id: 0, izen_osoa: '', argazkia: '', adina: 0, sexua: '', jatorria: '', balorazio_medikoa: ''};
  indizea: number = 0;
  opcion: string = 'create';
  ultimoID: string = "";

  constructor(private ServiceService: ServiceService) {
    this.ServiceService.getErreskatatuak().subscribe(data => {
      this.erreskatatuak = data;
      console.log("data:" + data)
      console.log(this.erreskatatuak);
    });

  }

  //METODOAK
  //Erreskatatua aldatzeko metodoa
  updateErreskatatua(erreskatatua: Erreskatatuak) {
    this.selectErreskatatua = erreskatatua;
    this.opcion = 'update';
  }

  //Indizea bidaltzeko metodoa
  bidaliIndizea(i: number): void {
    this.indizea = i;
  }

  //Erreskatatua ezabatzeko metodoa
  baja(erreskatatua: Erreskatatuak) {
    if(confirm("Seguru erreskatatua ezabatu nahi duzula?")){
      this.ServiceService.bajaErreskatatuak(erreskatatua).subscribe(() => {
      this.erreskatatuak = this.erreskatatuak.filter((t: Erreskatatuak) => t.id !== erreskatatua.id);
      });
    }
  }

  //Erreskatatuak daudela egiaztatzeko metodoa
  registroakDaude() {
    return this.erreskatatuak.length > 0;
  }

  //Erreakatatuak kargatzeko metodoa
  cargarLista() {
    this.ServiceService.getErreskatatuak().subscribe(data => {
      this.erreskatatuak = data; // Actualiza la lista
    });
  }

  //Modal-a ixteko metodoa
  closeModal() {
    const botonCerrar = document.querySelector("[data-bs-dismiss]");
    (botonCerrar as HTMLElement)?.click();
  }

  //Azken ID-a lortzeko metodoa
  ultimoId(): void {
    console.log("ultimiID");
    this.ServiceService.getErreskatatuak().subscribe(data => {
      this.erreskatatuak = data;
      console.log("Erreskatatuak:" + this.erreskatatuak);
      console.log("length: "+this.erreskatatuak.length)
    });
      const ultimoIdString = this.erreskatatuak[this.erreskatatuak.length - 1]?.id ?? "0";
      const ultimoIdNumero = parseInt(ultimoIdString, 10) || 0;
      this.ultimoID = (ultimoIdNumero + 1).toString();
      console.log(this.ultimoID);
  }
}

