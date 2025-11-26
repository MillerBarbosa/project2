import { log } from './utils/promise-helper.js';
import './utils/array-helper.js';
import { notasService as service } from './nota/servico.js';


const ehDivisivel = (divisor, numero) => !(numero % divisor);

const fn = ehDivisivel.bind(null, 2, 25)

console.log(fn());


document.querySelector('#myButton')
    .onclick = () =>
        service
            .listAll()
            .then(handleStatus)
            .then(sumItens('2143'))
            .then(console.log)
            .catch(console.log);