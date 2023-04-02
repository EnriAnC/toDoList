import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs/operators';
import LoginData from 'src/app/models/login-data.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData: LoginData = {email:'', password:''};
  registerForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  

  onSubmit() {
    this.authService.login(this.loginData).pipe(
      tap({
        next: response => {
          // Manejar la respuesta del servidor en caso de éxito
          console.log(response);
        },
        error: error => {
          // Manejar la respuesta del servidor en caso de error
          console.log(error);
        }
      })
    ).subscribe({});
  }
  
}
