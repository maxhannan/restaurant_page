const heroBox = (section, msg, submsg = '') =>{
    const content = document.querySelector('#content');
    let hero = document.createElement('div');
    hero.classList.add('heroBox');
    hero.style.backgroundImage = `url(./assets/${section}.png)`;
    hero.innerHTML = `
    <div class = 'heroTitle'>
        <a id = ${section === 'menu' ? 'boxTrig': ''} href = '#'>${msg}</a>
        <br>
        <h3>${submsg}</h3>
    </div>`
    content.appendChild(hero);
    
}

export{
    heroBox,

}