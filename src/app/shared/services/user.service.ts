import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);
  constructor() { }

  public addUser(user: string): void {
    const arrayUser: string[] = this.users.value;
    arrayUser.push(user);
    this.users.next(arrayUser);
  }
}
