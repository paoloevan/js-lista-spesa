// creo lista della spesa
const spesaList = [
    'pane',
    'latte',
    'biscotti',
    'tonno'
];

//stampo la lista
// let i = 0
// while (i < spesaList.length) {
//     console.log(spesaList[i]);

//     i++
// }

//seleziono elemento DOM
const containerEl = document.querySelector('.container ul')

//stampo array in DOM
let i = 0
while (i < spesaList.length) {
    const element = `<li>${spesaList[i]}</li>`
    containerEl.insertAdjacentHTML('beforeend', element)

    i++
}