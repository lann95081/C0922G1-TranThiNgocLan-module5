import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countryList = [
    {id: 1, name: 'Viet Nam'},
    {id: 2, name: 'Han Quoc'}
  ];
  contactForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
      }, this.check),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
      gender: new FormControl('', [Validators.required])

    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

  check(checkPass: AbstractControl) {
    const passCheck = checkPass.value;
    if (passCheck.password === passCheck.password) {
      return null;
    }

    return {'': true};
  }
}
