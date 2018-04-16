import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data'})
};

@Injectable()
export class TaskService {
	private isUserLoggin;
	private username;

	constructor(private http: HttpClient) { 
		this.isUserLoggin = false;
	}
	
	setUserLoggedin() {
		this.isUserLoggin = true;
	}
	getUserLogedin() {
		return this.isUserLoggin;
	}

	getTask(): Observable<any> {
		return this.http.get('https://uxcandy.com/~shapoval/test-task-backend/?developer=myna');
	}

	createTask(formData) {
		console.log(formData);
		return this.http.post('https://uxcandy.com/~shapoval/test-task-backend/create?developer=myna', formData.value);
	}

}
