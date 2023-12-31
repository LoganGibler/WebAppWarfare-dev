export function storeToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
}


export function getToken() {
    const myToken = JSON.parse(localStorage.getItem('token'));
    return myToken;
}


export function storeUser(user){
    localStorage.setItem('user', JSON.stringify(user));
}


export function getUser(){
    const myUser = JSON.parse(localStorage.getItem('user'));
    return myUser;
}

export function logStatus(status){
    window.localStorage.setItem("isLoggedin", status);
}

export function storeID(id){
    window.localStorage.setItem("key", JSON.stringify(id));
}

export function getID(){
    const myKey = JSON.parse(localStorage.getItem('key'));
    return myKey;
}