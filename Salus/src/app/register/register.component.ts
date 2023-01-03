import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private http:HttpClient,
    private router: Router,
    ) {

  }
    emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  
  registerForm = new FormGroup({
    username : new FormControl("", [Validators.required,Validators.minLength(8), Validators.maxLength(20)]),
    email : new FormControl("", [Validators.required, Validators.pattern(this.emailRegex)]),
    password : new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    confirmPassword : new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
  },this.passwordMatch('password','confirmPassword'))

    getControl(name: any): AbstractControl | null {
      return this.registerForm.get(name)
    }


    passwordMatch(password: string, confirmPassword: string) {
        return function (form: AbstractControl) {
            const passwordValue = form.get(password)?.value
            const confirmPasswordValue = form.get(confirmPassword)?.value
            if (passwordValue === confirmPasswordValue)
                return null
            return { passwordMismatchError: true }
        }
    }

    onSubmit(): void {
    this.http.put("https://localhost:7138/api/Auth/register",this.registerForm.getRawValue(), {responseType: 'text'})
    .subscribe({
      next: res => {
        alert("Succesfull Sign-up")
      }
    })
  }
}

