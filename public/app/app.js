document.querySelector('#myButton').onclick = () => fetch('http://localhost:5000/notas')
    .then(res => res.json())
    .then(notas => console.log(notas))
    .catch(console.log);