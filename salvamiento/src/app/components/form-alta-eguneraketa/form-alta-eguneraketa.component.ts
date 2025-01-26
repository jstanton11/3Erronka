import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Erreskatatuak } from './../../models/erreskatatuak';
import { ServiceService } from './../../services/service.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-form-alta-eguneraketa',
  templateUrl: './form-alta-eguneraketa.component.html',
  styleUrls: ['./form-alta-eguneraketa.component.scss']
})
export class FormAltaEguneraketaComponent {
  //Bariableak
  @Input() erreskatatua: Erreskatatuak = {id: "" , erreskate_id: 0, izen_osoa: '', argazkia: '', adina: 0, sexua: '', jatorria: '', balorazio_medikoa: ''};
  @Input() indizea: number = 0;
  @Input() opcion: string = 'create';
  @Input() lastID: string = '';
  @Output() actualizarLista = new EventEmitter<void>();
  @Output() cerrarModal = new EventEmitter<boolean>();
  @ViewChild('exampleModal', { static: false }) modal!: ElementRef;

  constructor(private ServiceService: ServiceService, private cdr: ChangeDetectorRef) {}

  //Erreskatatu berria sortzeko metodoa
  altaErreskatatua() {
    this.erreskatatua.id = this.lastID;
    this.erreskatatua.erreskate_id
    this.ServiceService.altaErreskatatuak(this.erreskatatua).subscribe((datos: any) => {
        this.ServiceService.getErreskatatuak().subscribe((data: any) => {
          this.erreskatatua = data;
          this.actualizarLista.emit();
          this.garbituFormularioa();
          this.closeModal();
        });
    });
  }

  //Erreskatatua eguneratzeko metodoa
  update(): void {
    this.ServiceService.eguneratuErreskatatuak(this.erreskatatua).subscribe(() => {
      this.actualizarLista.emit();
      this.garbituFormularioa();
      this.closeModal();
    });
  }

  //Formularioa garbitzeko metodoa
  garbituFormularioa() {
    this.cdr.detectChanges();
    this.erreskatatua = {
      id: "",
      erreskate_id: 0,
      izen_osoa: '',
      argazkia: '',
      adina: 0,
      sexua: '',
      jatorria: '',
      balorazio_medikoa: ''
    };
  }

  //Modal-a itxi
  closeModal() {
    this.cerrarModal.emit();
  }
}

