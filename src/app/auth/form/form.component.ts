import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormGroup, NgForm, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../../task.service';


@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	formData: FormGroup;
	file: null;

	constructor(private user: TaskService) { }

	createTask(formData: NgForm) {
		var form = new FormData();
    form.append("username", "Example");
    form.append("email", "example@example.com");
		form.append("text", "Some text");
		form.append("image", this.file);
		console.log(form);
		// this.formData.value.image = this.file;
		
		// this.user.createTask(formData.value).subscribe(
		this.user.createTask(form).subscribe(
			res => {
				console.log(res);
				console.log(this.file)
		 },
		 err => {
				console.log('Error occured');
		 }
		);
		// console.log(this.formData.value);
	}

	ngOnInit() {
		this.formData = new FormGroup({
			username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
			email: new FormControl('', [Validators.required, Validators.email]),
			text: new FormControl(),
			image: new FormControl()
		});
	}

	uploadfile(file) {
		this.file = file[0];
	}
}
