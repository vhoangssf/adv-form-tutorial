import { FormControl } from '@angular/forms';

export class AgeValidator {
    
    static isValid(control: FormControl): any {
        
        if(isNaN(control.value)){
            console.log("1");
            return {
                "not a number": true
            };
        }
        
        if(control.value % 1 !== 0){
            console.log("2");
            return {
                "not a whole number": true
            };
        }
        
        if(control.value >= 130){
            console.log("3");
            return {
                "too old": true
            };   
        }
        
        return null;
    }
}