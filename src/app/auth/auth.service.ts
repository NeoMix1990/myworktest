import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

	private loggedId$ = new BehaviorSubject<boolean>(this.getToken() !== null ? true : false);

	constructor(private http: Http, @Inject('AUTH_TOKEN') private authToken: string,
		@Inject('AUTH_USER') private authUser: string) {
	}

	login(user: string, password: string): void {
		this.http.post('http://your-app-url.com/login', { user: user, password: password })
			.subscribe((response: any) => {
				localStorage.setItem(this.authUser, response.text());
				localStorage.setItem(this.authToken, response.headers.get('Set-Authorization'));
				this.loggedId$.next(true);
			}, () => {
				this.loggedId$.next(false);
			});
	}

	getToken(): string {
		return localStorage.getItem(this.authToken);
	}

	isLoggedId(): BehaviorSubject<boolean> {
		return this.loggedId$;
	}

	logout(): void {
		localStorage.removeItem(this.authToken);
		localStorage.removeItem(this.authUser);
		this.loggedId$.next(false);
	}
}
