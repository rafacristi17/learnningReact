import React from 'react';
import ReactDOM from 'react-dom/client';
// voce pode codar de divesas formas, segue algumas abaixo, para verificar como fica basta descomentar e rodar o código 
const myElement = <h1 className="myclass">Rafaela</h1>
/*(
  <>
  <p>I am paragraph</p>
  <p>I am paragraph too.</p>
  </>
)*/
/*(<ul>
  <li>Apples</li>
  <li>bananas</li>
  <li>cherrys</li>
</ul>
)*/
// <h1>React is{5+5}times better with jsx</h1>
// <h1>Mrs. Rafaela</h1>
// React.createElement('h1', {}, 'I do not use  JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

