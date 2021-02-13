import { heroBox} from "./heroHolder";
import { navBarHandle } from "./navBar";
let box;
const content = document.querySelector('#content');
const menu = () =>{
    let navi = navBarHandle();
    navi.make('menu');
    navi.bindEvents();
    heroBox('menu', "Winter");

    let menu = document.createElement('div');
    menu.classList.add('menu');
    menu.id = 'menuBox';
    menu.innerHTML = '<div id = "btnHolder"><button id = "close">close</button></div><img id = "winterMenu" src = "./assets/menuWinter.png"></img>'
    content.appendChild(menu)
    box = document.querySelector('#menuBox')

    let boxTrig = document.querySelector('#boxTrig')
    let boxClose = document.querySelector('#close');

    boxTrig.addEventListener('click', handleboxTrig)
    boxClose.addEventListener('click', handleboxClose)
}

const handleboxTrig = (e) =>{

    box.style.width = '85vw'
    console.log({e, box})
}
const handleboxClose = (e) =>{

    box.style.width = '0vw'
    console.log({e, box})
}

export{
    menu
}