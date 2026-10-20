import { Component,inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
//methodeFromBulder
export class UserForm {

  fb=inject(FormBuilder);
    userForm=this.fb.group({

    username:['',[Validators.required,Validators.minLength(3)]],
    email:['',Validators.email],
    password:['',Validators.minLength(6)],
});
get username(){
  return this.userForm.get('username') as FormControl;
}

//methode userForm
//export class UserForm {
  //userForm =  new FormGroup({
   // username: new FormControl(''),
    //email: new FormControl(''),
    //password: new FormControl(''),
 // });

  submitForm(): void {
    console.log(this.userForm.value);
  }
}
