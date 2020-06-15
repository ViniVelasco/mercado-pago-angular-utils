import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';

@Injectable()
export class MercadoPagoService {

  apiUrl = 'https://api.mercadopago.com/v1';
  publicToken = 'YOUR API KEY';

  constructor(private http: HttpClient) {}

  public getIdentificationsType(): Observable<any> {
    return this.http.get(this.apiUrl + `/identification_types?public_key=${this.publicToken}`);
  }

  public getPaymentMethodsByBin(bin: string): Observable<any> {
    return this.http.get(this.apiUrl + `/payment_methods/search?public_key=${this.publicToken}&bins=${bin}&marketplace=NONE&status=active`);
  }

  public getInstallments(paymentMethodId: string, amount: number) {
    return this.http.get(this.apiUrl + `/payment_methods/installments?` +
      `public_key=${this.publicToken}&payment_method_id=${paymentMethodId}&amount=${amount}`);
  }

  public createCardToken(cardData) {
    return this.http.post(this.apiUrl + `/card_tokens?` +
      `public_key=${this.publicToken}`, cardData);
  }

}
