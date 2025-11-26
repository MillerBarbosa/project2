if (!Array.prototype.$flatMap) {
    Array.prototype.$flatMap = function(cb) {
        // O erro "cb is not defined" acontece se 'cb' estiver ausente
        // na assinatura da função 'function(cb)'.
        if (typeof cb !== 'function') {
            throw new TypeError(`Argumento para $flatMap deve ser uma função.`);
        }

        // Aplica o map com a função de callback e depois "achata" o array
        // usando reduce e concat.
        return this.map(cb).reduce((destArray, array) => destArray.concat(array), []);
    };
}