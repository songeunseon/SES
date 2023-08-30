import getCookie from './src/func.js';

var isLogin = getCookie("isLogin");
var id= getCookie("id");

document.write(isLogin+ " "+id);