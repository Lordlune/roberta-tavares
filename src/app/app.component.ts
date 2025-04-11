import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'roberta-taveres';
  email = 'nakupendda@gmail.com'
  telefone = '21967469926'

  waMe(){
    let url = 'https://wa.me/21967469926?text=Olá Roberta, tudo bem? Gostaria de mais informações!'
    window.open(url, '_blank')
  }
}
