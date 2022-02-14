import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
    static forbiddenValue(control: AbstractControl): ValidationErrors | null {
        if (control.value == "invalid value") {
            return { forbiddenValue: true };
        } else {
            return null;
        }

    }


    static getForbiddenValidator(values: string[]) {

        return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
            return new Promise(resolver => {
                setTimeout(() => {
                    if (values.indexOf(control.value) !== -1) {
                        resolver({ forbiddenValueAsync: true });
                    } else {
                        resolver(null);
                    }
                }, 2000);
            });
        }
    }

}
