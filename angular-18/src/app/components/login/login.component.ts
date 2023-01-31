import { Component } from '@angular/core';
import { UserTs } from '../../models/user.ts';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Creando el objeto que se enviara
  datos: UserTs = {email:'', password:''}

  // instancia servicios
  constructor(private servicio: UserserviceService){}

  // Metodo post
  onSubmit(){
    this.servicio.postUser(this.datos).subscribe(
      (usuario: UserTs)=>console.log(usuario)
    )
  }

}
