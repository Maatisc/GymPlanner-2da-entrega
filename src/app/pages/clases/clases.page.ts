import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {

  constructor(private router: Router) { 
    this.router.navigate(['clases/detalles'])
  }

  segmentChanged($event: any){
    console.log("Hola Se Cambio")
    console.log($event);
    let direccion = $event.detail.value;
    this.router.navigate(['/clases/'+ direccion]);
  }


  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['/home'])

  }

}
