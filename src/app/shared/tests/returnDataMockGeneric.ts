import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ComparePassword } from "src/app/shared/validators/ComparePassword";

export function returnAvancarEtapaData(typeUser: string): any {
  return {
    nextStepper: true,
    UserType: typeUser.toUpperCase() === "MORADOR" ? 1 : 2
  }
}

export function returnFinishSubscribe(typeUser: string, personalForm: FormGroup): any {
  return {
    personalForm: personalForm,
    previousStepper: true,
    finish: true
  }
}

export function returnFormUserData(userForm: FormGroup): any {
  return {
    userForm: userForm,
    nextStepper: true
  }
}

export function returnFormUser(fb: FormBuilder): any {
  return fb.group({
    "Email": ['null@asd', [Validators.required, Validators.email]],
    "Password": ['asdasd', [Validators.required, Validators.minLength(6), ]],
    "ConfirmPassword": ['asdasd', [Validators.required, Validators.minLength(6)]]
  },
  {
    validators: ComparePassword("Password", "ConfirmPassword")
  });
}

export function returnFormPerson(fb: FormBuilder): any {
  return fb.group({
    "Name": ['Matheus', [Validators.required]],
    "LastName": ['Lopes', [Validators.required]],
    "BirthDate": ['1999-10-07', [Validators.required]],
    "Gender": [1, [Validators.required]],
    "Phone": ['1139211314', [Validators.required]],
    "CPF": ['35648895565', [Validators.required]]
  });;
}

export function returnFormDataSubscribe(userType: string | null): any {
  let fb = new FormBuilder();
  return {
    formGoups: fb.group({
      useForm: returnFormUser(fb),
      personalForm: returnFormPerson(fb)
    }),
    UserType: userType
  }
}

export function returnFormLogin(nulo: Boolean = false): any {
  let fb = new FormBuilder();
  return fb.group({
    "email": ['matheus@asd.com', [Validators.required, Validators.email]],
    "password": ['12345678', [Validators.required, Validators.minLength(6)]]
  });
}
