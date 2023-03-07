import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    ) {}
  
  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  
  onSubmit(): void {
  this.http.put("https://localhost:7138/api/Auth/register",this.registerForm.getRawValue(), {responseType: 'text'})
  .subscribe({
    next: res => {
      alert("Succesfull Sign-up")
    }
  })
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password')!;
    const confirmPasswordControl = formGroup.get('confirmPassword')!;
    if (passwordControl.value === confirmPasswordControl.value) {
      confirmPasswordControl.setErrors(null);
    } else {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    }
  }
}



