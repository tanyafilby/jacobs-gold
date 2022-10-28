/* secret-message.js */
import whateverResouces from '../modules/dom-functions.js';
const {toggleHiddenElement, changeToFunkyColor} = whateverResouces;

const buttonElement = document.getElementById('secret-message');
const pElement = document.getElementById('secret-p');


// const toggleHiddenElement = function (domElement) {
//     if (domElement.style.display === 'none') {
//         domElement.style.display = 'block';
//     } else {
//         domElement.style.display = 'none';
//     }
// }

buttonElement.addEventListener('click', () => {
    toggleHiddenElement(pElement);
    changeToFunkyColor(pElement);
    }
);
