const tester = (name)=>{
    const element = document.createElement('div');
    element.innerHTML = `<h1>Hello ${name}. </h1><br>
    <h2>Everything seems to be working just fine.</h2>`;
    document.body.appendChild(element)
}

export {
    tester
}