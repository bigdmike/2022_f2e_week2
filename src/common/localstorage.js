export function getLocalStorage(key) {
    return localStorage.getItem(key)
}

export function setLocalStorage(key, val) {
    // console.log(key, val)
    return localStorage.setItem(key, val)
}

export function delLocalStorage(key) {
    return localStorage.removeItem(key)
}