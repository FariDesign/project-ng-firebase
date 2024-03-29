import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	constructor(private login: LoginService) {}

	ngOnInit() {}

	onLogin() {
		this.login.loginWithGoogle();
	}
}
