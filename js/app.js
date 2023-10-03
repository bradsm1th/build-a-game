/*******************************
/ just my stuff.not class-related
/******************************/
const docTitle = document.querySelector('#pageTitle');

console.log(`My ${docTitle.innerText.toLowerCase()}/app.js is available…`);
const titlePEl = document.createElement('p');
titlePEl.innerHTML = `My <strong>${docTitle.innerText.toLowerCase()}/app.js</strong> is available…`;
document.querySelector('body').appendChild(titlePEl);


/*******************************
/ class/assignment stuff
/******************************/