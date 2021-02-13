
import { about } from "./about";
import { home } from "./home";
import { menu } from "./menu";
const content = document.querySelector('#content');
const navBarHandle = () =>{
    const make = (section) =>{
        const navBar = document.createElement('div');
        navBar.classList.add('navBar');
        navBar.innerHTML = `
        <a  id = 'home' class = "navLink 
        ${section === 'home' ? 'activePage': ''}" 
        href = "#">Home</a>

        <a  id = 'menu'  class = "navLink 
        ${section === 'menu' ? 'activePage': ''}" 
        href = "#menu">Menu</a>

        <a  id = 'about' class = "navLink 
        ${section === 'about' ? 'activePage': ''}" 
        href = "#">About</a>
        `;
        content.appendChild(navBar);
    } 
    
    
    const bindEvents = () =>{
        const links = document.querySelectorAll('.navLink');
        links.forEach(link => link.addEventListener('click', handleSwitch))
    }
    return{
        bindEvents,
        make
    }

}
const  handleSwitch = async(e)=>{
    content.style.opacity = '0'
    await new Promise(r => setTimeout(r, 700));
    content.innerHTML = '';
    switch(e.target.id){
        case 'home':
            home();
            break
        case 'about':
            about();
            break
        case 'menu':
            menu();
            break
    }
    await new Promise(r => setTimeout(r, 350));
    content.style.opacity = '1'
}

export {
    navBarHandle
}