import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
dadoIzquierda = '../assets/img/dice1.png';
dadoDerecha = '../assets/img/dice2.png';


numero1: number | undefined;
numero2: number | undefined;

tirarDados(): void{
this.numero1 = Math.round(Math.random() * 5) + 1 ;
this.numero2 = Math.round(Math.random() * 5) + 1 ;
this.dadoIzquierda = '../assets/img/dice'+ this.numero1 +'.png';
this.dadoDerecha = '../assets/img/dice'+ this.numero2 +'.png'
console.log(this.numero1);
console.log(this.numero2);
}


}
