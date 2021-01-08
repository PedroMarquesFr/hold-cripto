import {createContext} from "react";

interface Form {
     value: number; coin: string; cambio: number; 
}

interface Values{
    form:Form,
    setForm: (form:Form) => void;
    arrBuys: any[];
}
const MyContext = createContext<Values | any >('initial');
export default MyContext