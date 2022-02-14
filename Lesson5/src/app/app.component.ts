import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './models/validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required], CustomValidators.getForbiddenValidator(['123', '456'])),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    sex: new FormControl('', Validators.required),
    aggre: new FormControl('', Validators.required),
    address: new FormGroup({
      country: new FormControl(''),
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      homeNumber: new FormControl('', Validators.required),
    }),
    // car: new FormArray()
  });

  get addressGroup(): FormGroup {
    return this.form.controls['address'] as FormGroup;
  }

  ngOnInit(): void {

    const defaultData = {
      "name": "erew",
      "email": "aergf@erft",
      "age": 45,
      "sex": "male",
      "aggre": true,
      "address": {
        "country": "",
        "city": "dehg",
        "street": "sdfgh",
        "homeNumber": 345
      }
    };

    // this.form.patchValue(defaultData);


    this.form.get('name')?.valueChanges.subscribe(newName => {
      this.form.patchValue({
        email: newName + '@mail.com'
      })
    })

  }

  applyDefaultAddress() {

    const defaultAddress = {
      "country": "",
      "city": "dehg",
      "street": "sdfgh",
      "homeNumber": 345
    };

    this.form.patchValue({
      address: defaultAddress
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.form.reset();
  }
}
