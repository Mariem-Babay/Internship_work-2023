import { Component ,OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-log-admin',
  templateUrl: './log-admin.component.html',
  styleUrls: ['./log-admin.component.scss']
})
export class LogAdminComponent implements OnInit{
    email : string = '';
    password : string = '';
  
      constructor(private auth:AuthService){  }
  
    ngOnInit(): void {
    }
  
    login(){
      if(this.email == ''){
      alert('Veuillez entrer votre email SVP');
      return;}
  
    if(this.password == ''){
      alert('Veuillez entrer votre mot de passe SVP');
      return;}
    this.auth.login(this.email , this.password);
    this.email = '';
    this.password='';
  }}

