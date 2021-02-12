const tester = (name)=>{
    const element = document.createElement('div');
    element.innerHTML = `<h1>Hello ${name}.</h1>`;
    document.body.appendChild(element)
}

export {
    tester
}