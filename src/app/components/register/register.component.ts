import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs/operators';
import User from 'src/app/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user?:User; // modelo del usuario
  registerForm!: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }


  onSubmit(): void {
    this.submitted = true;
  
    if (this.registerForm.invalid) {
      return;
    }
  
    this.authService.register(this.registerForm.value)
      .subscribe({
        next: () => {
          console.log('Registration successful');
          this.router.navigate(['/login']);
        },
        error: error => {
          console.log('Registration error:', error);
        }
      });
  }
  
}
