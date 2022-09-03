import { HttpErrorResponse } from "@angular/common/http";
import { Error } from "../../../../shared/models/errors";

export function handleErrorRequestPasswordReset(error: HttpErrorResponse) {
  let errorReturn: Error = {
    StatusCode: 0,
    Message: ""
  };

  if (error.status === 400) {
    errorReturn.StatusCode = error.status;
    errorReturn.Message = 'O CPF informado é inválido';
    return errorReturn;
  }
  else if (error.status === 404) {
    errorReturn.StatusCode = error.status;
    errorReturn.Message = 'Usuário não encontrado para o CPF informado';
    return errorReturn;
  }
  else if (error.status === 500) {
    errorReturn.StatusCode = error.status;
    errorReturn.Message = 'Erro no servidor';
    return errorReturn;
  }
  else if (error.status === 0) {
    errorReturn.StatusCode = error.status;
    errorReturn.Message = 'Offline';
    return errorReturn;
  }

  return null;
};
