import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { ServicerestService } from './services/servicerest.service';

import { HttpClientModule } from '@angular/common/http';



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { ErrorHandler, Injectable, Injector } from '@angular/core';

@Injectable()
export class CustomErrorHandler extends ErrorHandler {
  constructor(private injector: Injector) {
    super();
  }

  override handleError(error: any): void {
    const router = this.injector.get(Router);
    router.navigate(['/not-found']);
    super.handleError(error);
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
              { provide: ErrorHandler, useClass: CustomErrorHandler },ServicerestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
