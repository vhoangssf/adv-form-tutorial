import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeValidator } from '../validators/age';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myForm: FormGroup;
  submitAttempt: boolean = false;
  
  constructor(public formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
        userName: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        age: ['', AgeValidator.isValid],
        email: ['',
          Validators.compose([
            Validators.required, 
            Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]
          )],
        password: ['', Validators.required]
    });
  }
  
  submit() {
    this.submitAttempt = true;
    if(!this.myForm.valid) {
      console.log("Unsuccessful registration :(");
    } else {
      alert('Thank you for registering!');
      console.log("Successful registration!", this.myForm.value);
    }
  }
  
}
