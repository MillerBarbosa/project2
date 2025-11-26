import { handle } from 'express/lib/application';
import {handleStatus} from '../utils/promise-helper.js';
import

const API = "http://localhost:5000/notas";

export const notasService = () => 
   
    listAll(){
        return fetch(API).then(handleStatus);  
    }