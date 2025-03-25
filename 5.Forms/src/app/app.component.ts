import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userForm = new FormGroup({
    name: new FormControl("", Validators.required),
    email : new FormControl("", [Validators.required, Validators.email]),
    contact: new FormControl(""),
    password: new FormControl("", Validators.required)
    
  });

  submitForm(){
    if(this.userForm.valid){
      console.log("Form Data: ", this.userForm.value);
    }else{
      console.log("Form is invalid")
    }
  }

}
