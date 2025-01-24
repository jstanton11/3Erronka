import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Erreskatatuak } from './../../models/erreskatatuak';
import { ServiceService } from './../../services/service.service';

@Component({
  selector: 'app-form-alta-eguneraketa',
  templateUrl: './form-alta-eguneraketa.component.html',
  styleUrls: ['./form-alta-eguneraketa.component.scss']
})
export class FormAltaEguneraketaComponent implements OnInit {
  @Input() erreskatatua: Erreskatatuak = {id: "" , erreskate_id: 0, izen_osoa: '', argazkia: '', adina: 0, sexua: '', jatorria: '', balorazio_medikoa: ''};
  @Input() indizea: number = 0;
  @Input() opcion: string = 'create';
  @Input() lastID: string = '';
  @Output() actualizarLista = new EventEmitter<void>();
  @Output() cerrarModal = new EventEmitter<boolean>();
  @ViewChild('exampleModal', { static: false }) modal!: ElementRef;

  constructor(private ServiceService: ServiceService) {}

  ngOnInit(): void {
    if (this.opcion === 'update') {
      // Lógica para cargar los datos cuando es update
    }
  }

  altaErreskatatua() {
    this.ServiceService.altaErreskatatuak(this.erreskatatua).subscribe((datos: any) => {
      if (datos === 'OK') {
        alert('Erreskatatua erregistratuta');
        // Recarga la lista de rescatados para actualizar la vista
        this.ServiceService.getErreskatatuak().subscribe((data: any) => {
          this.erreskatatua = data;
          this.actualizarLista.emit();
        });
        this.closeModal();
      }
    });
  }

  update(): void {
    this.ServiceService.eguneratuErreskatatuak(this.erreskatatua).subscribe(() => {
      alert('Erreskatatua eguneratu da');
      this.actualizarLista.emit();
      this.closeModal();
    });
  }

  closeModal() {
    this.cerrarModal.emit();
  }
}

