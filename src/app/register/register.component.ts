import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  email: string  = '';
  password: string  = '';

  constructor(private auth: AuthService) { }

  
  ngOnInit(): void {  }

  register() {
      if(this.email == ''){
      alert('Veuillez entrer votre email SVP');
      return;}
  
    if(this.password == ''){
      alert('Veuillez entrer votre mot de passe SVP');
      return;}
    this.auth.register(this.email , this.password);
    this.email = '';
    this.password='';
  }}
