import { heroBox } from "./heroHolder";
import { navBarHandle } from "./navBar";
const about = () =>{
    let navi = navBarHandle();
    navi.make('about');
    navi.bindEvents();
    heroBox('about', 'Say Hi!');
    
}
export{
    about
}