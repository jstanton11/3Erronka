import { Component } from '@angular/core';

@Component({
  selector: 'app-kontaktua',
  templateUrl: './kontaktua.component.html',
  styleUrls: ['./kontaktua.component.scss']
})
export class KontaktuaComponent {
  izena: string = '';
  abizena: string = '';
  email: string = '';
  nota: string = '';
  iradokizuna: string = '';

  onSubmit(kontaktuaForm: any): void {
    if (kontaktuaForm.valid) {
      alert('Formulario bidali da!');
    } else {
      alert('Erroreak daude formularioan.');
    }
  }
}
