import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  ourForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.ourForm = this.fb.group({
      firstControl: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  logOurControlValue() {
    //HERE you'll log the CONTROL OBJECT. Within the control object is a errors array. You can tap into that directly, in this case it is true. So you can check in the HTML if the errors object is true for required.
    const controlVal = this.ourForm.get('firstControl')
    console.log(controlVal)
  }
}
