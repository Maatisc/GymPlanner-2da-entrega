import { Component } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-codigoqr',
  templateUrl: 'codigoqr.page.html',
  styleUrls: ['codigoqr.page.scss'],
})
export class CodigoqrPage {
  constructor(private barcodeScanner: BarcodeScanner) {}

  scanQRCode() {
    this.barcodeScanner.scan().then(result => {
      if (!result.cancelled) {
        // result.text contiene el valor del escaneo QR
        console.log('Código QR escaneado:', result.text);
      } else {
        console.log('Escaneo QR cancelado.');
      }
    });
  }
}
