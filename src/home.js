import { heroBox } from "./heroHolder";
import { navBarHandle } from "./navBar";
const home = () =>{
    let navi = navBarHandle();
    navi.make('home');
    navi.bindEvents();
    heroBox('home', 'Terrazzo','modern italian');

}

export{
    home
}