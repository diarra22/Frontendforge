import { Deserializable } from './Deserializable.model';

export class User implements Deserializable  {

        public id: number;
        public name: String;
        public email: String;
        public username: String;

        deserialize(input: any): this { 
            Object.assign(this, input);  
            return this; 
        }
}

