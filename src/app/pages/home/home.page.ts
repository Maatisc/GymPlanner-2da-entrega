import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  datos: any = {
    nombre: '',
    apellido: '',
    educacion: '',
    nacimiento: '',
  };

  constructor(private activateRoute: ActivatedRoute, private router: Router) {}

  ionViewCanEnter(): boolean {
    // Verificar 
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';
    if (!isAuthenticated) {
      this.router.navigate(['/login']); 
      return false;
    }

    // Continuar mostrando la página si el usuario está autenticado
    return true;
  }

  limpiar() {
    for (const [key] of Object.entries(this.datos)) {
      Object.defineProperty(this.datos, key, { value: '' });
    }
  }

  mostrar() {
  }


  
}
