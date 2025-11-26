import { handleStatus } from '../utils/promise-helper.js';
import { partialize } from '../utils/operators.js';
import { compose } from '../utils/operators.js';


const API = "http://localhost:5000/notas";

const getItensFromNotas = notas => notas.$flatMap(nota => nota.itens);
const filterItensBycode = (code, itens) => itens.filter(item => item.codigo == code);

const sumItensValue = itens => itens.reduce((total, item) => total + item.valor, 0);


export const notasService = {

    listAll() {
        return fetch(API)
            .then(handleStatus)
            .catch(err => {
                console.log(err);
                return Promise.reject('Não é possível obter as notas fiscais');
            })
    },

    sumItems(code) {
        const filterItens = partialize(filterItensBycode, code);
        return this.listAll().then(sumItens(code));

    }
};