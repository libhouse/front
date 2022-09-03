import { FormGroup } from "@angular/forms";

export function ComparePassword(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export function PasswordValid(
  matchingControlName: string
  ){
  let regex = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/;
  return (formGroup: FormGroup) => {
    var matchingControl = formGroup.controls[matchingControlName].value;
    if (!matchingControl?.match(regex)) {
      formGroup.controls[matchingControlName].setErrors({ invalidPsw: true });
    } else {
      formGroup.controls[matchingControlName].setErrors(null);
    }
  };
}
