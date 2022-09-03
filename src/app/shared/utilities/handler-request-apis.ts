import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { TransactionOptions, TransactionService } from "../services/transaction.service";

const DURATION_TRANSACTION_DEFAULT = 3000;

@Injectable()
export class HandlerRequestApis {

  constructor(private transactionService: TransactionService, private router: Router) { }

  async GetReturnAPIResult(status: number, options: TransactionOptions | null, message: string | null, redirect: string | null) {
    switch (status) {
      case 0:
        this.Offline0APIResult(options ?? {
          duraction: DURATION_TRANSACTION_DEFAULT,
          icon: 'error'
        });

        if (redirect != null) {
          setTimeout(() => {
            this.router.navigateByUrl(redirect)
          }, DURATION_TRANSACTION_DEFAULT * 0.5);
        }
        break;
      case 400:
        await this.BadRequest400APIResult(options ?? {
          duraction: DURATION_TRANSACTION_DEFAULT,
          icon: 'error'
        }, message);

        if (redirect != null) {
          setTimeout(() => {
            this.router.navigateByUrl(redirect)
          }, DURATION_TRANSACTION_DEFAULT * 0.5);
        }
        break;
      case 401:
        this.NotAuthorized401APIResult(options ?? {
          duraction: DURATION_TRANSACTION_DEFAULT,
          icon: 'lock_clock'
        }, message);

        if (redirect != null) {
          setTimeout(() => {
            this.router.navigateByUrl(redirect)
          }, DURATION_TRANSACTION_DEFAULT * 0.5);
        }
        break;
      case 403:
        this.Forbidden403APIResult(options ?? {
          duraction: DURATION_TRANSACTION_DEFAULT,
          icon: 'lock_clock'
        }, message);

        if (redirect != null) {
          setTimeout(() => {
            this.router.navigateByUrl(redirect)
          }, DURATION_TRANSACTION_DEFAULT * 0.5);
        }
        break;
      case 404:
        this.NotFound404APIResult(options ?? {
          duraction: DURATION_TRANSACTION_DEFAULT,
          icon: 'error'
        }, message);

        if (redirect != null) {
          setTimeout(() => {
            this.router.navigateByUrl(redirect)
          }, DURATION_TRANSACTION_DEFAULT * 0.5);
        }
        break;
      case 500:
        this.InternalServerError500APIResult(options ?? {
          duraction: DURATION_TRANSACTION_DEFAULT,
          icon: 'error'
        }, message);

        if (redirect != null) {
          setTimeout(() => {
            this.router.navigateByUrl(redirect)
          }, DURATION_TRANSACTION_DEFAULT * 0.5);
        }
        break;
      case 504:
        this.GatewayTimout504APIResult(options ?? {
          duraction: DURATION_TRANSACTION_DEFAULT,
          icon: 'alarm_off'
        }, message);

        if (redirect != null) {
          setTimeout(() => {
            this.router.navigateByUrl(redirect)
          }, DURATION_TRANSACTION_DEFAULT * 0.5);
        }
        break;
      case 200:
        this.OK200APIResult(options ?? {
          duraction: DURATION_TRANSACTION_DEFAULT,
          icon: 'done'
        }, message);

        if (redirect != null) {
          setTimeout(() => {
            this.router.navigateByUrl(redirect)
          }, DURATION_TRANSACTION_DEFAULT * 0.5);
        }
        break;
      case 201:
        this.Created201APIResult(options ?? {
          duraction: DURATION_TRANSACTION_DEFAULT,
          icon: 'done'
        }, message);

        if (redirect != null) {
          setTimeout(() => {
            this.router.navigateByUrl(redirect)
          }, DURATION_TRANSACTION_DEFAULT * 0.5);
        }
        break;
      case 202:
        this.NoContent204APIResult(options ?? {
          duraction: DURATION_TRANSACTION_DEFAULT,
          icon: 'done'
        }, message);

        if (redirect != null) {
          setTimeout(() => {
            this.router.navigateByUrl(redirect)
          }, DURATION_TRANSACTION_DEFAULT * 0.5);
        }
        break;
      case 204:
        this.Accepted202APIResult(options ?? {
          duraction: DURATION_TRANSACTION_DEFAULT,
          icon: 'done'
        }, message);

        if (redirect != null) {
          setTimeout(() => {
            this.router.navigateByUrl(redirect)
          }, DURATION_TRANSACTION_DEFAULT * 0.5);
        }
        break;
      default:
        this.transactionService.AlertMessage(options?.message ?? '', options ?? {
          duraction: DURATION_TRANSACTION_DEFAULT,
          icon: 'alert'
        });

        if (redirect != null) {
          setTimeout(() => {
            this.router.navigateByUrl(redirect)
          }, DURATION_TRANSACTION_DEFAULT * 0.5);
        }
        break;
    }
  }

  GetAlertReturnAPIResult(message: string, options: TransactionOptions | null, redirect: string | null) {
    this.transactionService.AlertMessage(message, options ?? {
      duraction: DURATION_TRANSACTION_DEFAULT,
      icon: 'alert'
    })
  }

  private Offline0APIResult(options: TransactionOptions) {
    this.transactionService.ErrorMessage('Offline', options)
  }

  //REPONSES 200
  private OK200APIResult(options: TransactionOptions, message: string | null) {
    this.transactionService.SuccessMessage(message ?? 'Acao realizada com sucesso', options)
  }
  private Created201APIResult(options: TransactionOptions, message: string | null) {
    this.transactionService.SuccessMessage(message ?? 'Recurso criado com sucesso.', options);
  }
  private Accepted202APIResult(options: TransactionOptions, message: string | null) {
    this.transactionService.SuccessMessage(message ?? 'Acao aceita.', options);
  }
  private NoContent204APIResult(options: TransactionOptions, message: string | null) {
    this.transactionService.SuccessMessage(message ?? 'Acao feito com sucesso.', options);
  }

  //RESPONSES 400
  private BadRequest400APIResult(options: TransactionOptions, message: string | null) {
    this.transactionService.ErrorMessage(message ?? 'Ops, houve algum problema! Entre em contato com suporte, caso persista.', options);
  }
  private NotAuthorized401APIResult(options: TransactionOptions, message: string | null) {
    this.transactionService.ErrorMessage(message ?? 'Necessario se autenticar no sistema.', options);
  }
  private Forbidden403APIResult(options: TransactionOptions, message: string | null) {
    this.transactionService.ErrorMessage(message ?? 'Sem acesso.', options);
  }
  private NotFound404APIResult(options: TransactionOptions, message: string | null) {
    this.transactionService.ErrorMessage(message ?? 'Ops, nao foi possivel encontrar esse registro.', options);
  }

  //RESPONSES 500
  private InternalServerError500APIResult(options: TransactionOptions, message: string | null) {
    this.transactionService.ErrorMessage(message ?? 'Erro no sistema, contatar os responsaveis, caso continue a persistir o problema.', options);
  }
  private GatewayTimout504APIResult(options: TransactionOptions, message: string | null) {
    this.transactionService.ErrorMessage(message ?? 'Ops, algum problema foi encontrado e nao conseguimos estabelecer uma coneccao.', options);
  }
}
