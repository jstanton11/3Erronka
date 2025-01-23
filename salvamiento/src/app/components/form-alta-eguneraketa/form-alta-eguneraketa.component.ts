import { ServiceService } from './../../services/service.service';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { Erreskatatuak } from 'src/app/models/erreskatatuak';

@Component({
  selector: 'app-form-alta-eguneraketa',
  templateUrl: './form-alta-eguneraketa.component.html',
  styleUrls: ['./form-alta-eguneraketa.component.scss']
})
export class FormAltaEguneraketaComponent {
 @Input() erreskatatua:any;
 @Input() indizea:any;
 opcion: string = "";
 aldaketa: boolean | undefined;
  long: number = 0;
  erreskatatuaLong: Erreskatatuak = {id: 0, erreskate_id: 0, izen_osoa: '', argazkia: '', adina: 0, sexua: '', jatorria: '', balorazio_medikoa: ''};

  constructor(public ServiceService:ServiceService, private activatedRoute:ActivatedRoute, private router:Router) {
    this.activatedRoute.params.subscribe(params => {
      this.indizea = params['id'];
      if(!params['id']){
        this.opcion = "create";
        this.erreskatatua = {id: 0, erreskate_id: 0, izen_osoa: '', argazkia: '', adina: 0, sexua: '', jatorria: '', balorazio_medikoa: ''};
      }else{
        this.opcion = "update";
      }
    });

    ServiceService.erreskatatuGuztiak()
    .then(data => {
      this.erreskatatua = data;
      if(this.opcion == "update"){
        this.erreskatatua = this.erreskatatua[this.indizea];
        this.aldaketa = false;
      } else if(this.opcion == "create"){
        this.erreskatatua = {id: 0, erreskate_id: 0, izen_osoa: '', argazkia: '', adina: 0, sexua: '', jatorria: '', balorazio_medikoa: ''};
      }
    })

  }

  update(){
    this.updateErreskatatua();
  }

  updateErreskatatua(){
    if(this.opcion == "update"){
      this.ServiceService.eguneratuErreskatatuak(this.erreskatatua).subscribe((dato:any) => {
        if(dato == 'OK'){
          alert('aldaketa eginda');
        }else{
          alert('ez da aldaketa egin')
        }
        //navigate
      });
    }
  }

  altaErreskatatua(){
    if(this.opcion == 'alta'){
      // this.long = this.erreskatatua.length;
      // this.long--;
      // this.erreskatatuaLong = this.erreskatatua[this.long];
      // this.erreskatatua.id = this.erreskatatuaLong.id +1;

      this.ServiceService.altaErreskatatuak(this.erreskatatua).subscribe((datos:any) => {
        if(datos == 'OK'){
           alert('erreskatatua erregistratua');
          //navigate
        }
      });
    }
  }


}
