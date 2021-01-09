import {CoinInfo} from "./global";

export function getList():CoinInfo[] {
    if(localStorage.getItem('list')===null){
      localStorage.setItem('list', '[]');  
    }
    const retrievedObject = localStorage.getItem('list');     
    return JSON.parse(retrievedObject || '[]'); 
}

export function setList(newList:CoinInfo[]):void {
    localStorage.setItem('list', JSON.stringify(newList));
}
