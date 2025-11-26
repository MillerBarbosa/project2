import { log } from './utils/promise-helper.js';
import './utils/array-helper.js';
import { notasService as service } from './nota/servico.js';

const sumItens = code=> notas => notas
        .$flatMap(nota=>nota.itens)
        .filter(item => item.codigo ==code)
        .reduce((total,item) => total + item.valor, 0);


document.querySelector('#myButton')
    .onclick = () => 
    service
    .listAll()
    .then(handleStatus)
    .then(sumItens('2143'))
    .then(console.log)
    .catch(console.log);