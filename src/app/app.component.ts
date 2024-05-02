import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UF2-ExAlexRamosEspasandin';
  constructor(private http: HttpClient) {
    //this.exercici2();
    //this.exercici3();
    //this.exercici4();
  }
  exercici2(){
    this.http.get("http://localhost:3000/llistaAssigRamos").forEach((data) => {
      console.log(data);
    })
  }
  exercici4(){
    this.http.get("http://localhost:3000/ImpartirAssigRamos").forEach((data) => {
      console.log(data);

    })
  }
  exercici3() {
    const datosModificados = {
      tabla: 'alumnes',
      e_amil: null,
      nuevosValores: {
        alumn_e_mail: 'otaku@institutvidreres.cat'
      }
    };

    this.http.put<any>('http://localhost:3000/modifDeptRamos', datosModificados)
      .subscribe(
        data => {
          console.log('Registro modificado correctamente:', data.message);
        },
        error => {
          console.error('No puc, pelacanyes', error.error.message);
        }
      );
  }


}
