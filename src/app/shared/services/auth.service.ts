import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  login(username: string, password: string): Promise<UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(username, password);
  }

  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  get authenticationState(): Observable<User | null> {
    return this.afAuth.authState;
  }
}
