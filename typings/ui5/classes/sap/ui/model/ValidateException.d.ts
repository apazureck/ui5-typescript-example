declare module 'sap/ui/model/ValidateException' {


    export interface IValidateExceptionSettings {
    }

    /**
    
    */
    export default class ValidateException {

        /**
            * Creates a new ValidateException.
        */
        public constructor(message: string, violatedConstraints?: any[]);


    }
}