const btnMaster = (value)=>{
    
    const element = document.createElement('div');
    let btn = `<button id = '${value}'>${value}</button>`
    element.innerHTML = btn;
    document.body.appendChild(element);
    const btnBoy = document.querySelector(`#${value}`);
    btnBoy.addEventListener('click', () => tester('Max'))
    
}

const tester = (name)=>{
    const element = document.createElement('div');
    let msg = `<h1>Hello ${name}. </h1><br>
    <h2>Everything seems to be working just fine.</h2>`
    element.innerHTML = msg;
    document.body.appendChild(element)
}

export {
    btnMaster,
    tester
}