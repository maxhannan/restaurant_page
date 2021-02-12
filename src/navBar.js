const navBar = () =>{
    const content = document.querySelector('#content');
    const navBar = document.createElement('div');
    navBar.classList.add('navBar');
    navBar.innerHTML = `
    <a class = "navLink" href = "#">Home</a>
    <a class = "navLink" href = "#">Menu</a>
    <a class = "navLink" href = "#">About</a>
    `;
    content.appendChild(navBar);
    const links = document.querySelectorAll('.navLink');
    links.forEach(link => link.addEventListener('click', handleSwitch))
}

const handleSwitch = (e)=>{
    console.log(e.target);
}

export {
    navBar
}