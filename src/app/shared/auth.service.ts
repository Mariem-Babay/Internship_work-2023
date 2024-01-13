import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
// import { FirebaseAuthError } from 'firebase/auth';

@Injectable({
providedIn: 'root'
})
export class AuthService {

constructor (private fireauth :AngularFireAuth,private router :Router) { }

//login method
login(username:string ,password:string){
this.fireauth.signInWithEmailAndPassword(username,password).then( () => {
localStorage.setItem('token','true');
}, err => {
alert(err.message);
})
this.router.navigate(['/login']);
}

//register method
register(email1: string, password1: string) {
this.fireauth.createUserWithEmailAndPassword(email1,password1).then( () => {
alert('Inscription réussite !');
this.router.navigate(['/login']);

} ,
err =>{
alert(err.message);
this.router.navigate(['/register']);
} )
}


    //sign out
    logout() {
    this.fireauth.signOut().then( () => {
    localStorage.removeItem("token");
    this.router.navigate(['/login']);

    }, err =>{
    alert(err.message);
    })
    }
    }



    // register(email1: string, password1: string): Promise<void> {
  // return new Promise<void>((resolve, reject) => {
    // this.fireauth.createUserWithEmailAndPassword(email1, password1).then(() => {
    // alert('Inscription réussite !');
    // this.router.navigate(['/login']);
    // resolve();
    // }).catch((err) => {
    // reject(err);
    // this.router.navigate(['/register']);
    // });
    // });
    // }



//2
// login(username:string ,password:string){
//   this.fireauth.signInWithEmailAndPassword(username,password).then( () => {
//   localStorage.setItem('token','true');
//   }, err => {
//   alert(err.message);
  
  
//   })
//   this.router.navigate(['/login']);
//   }
