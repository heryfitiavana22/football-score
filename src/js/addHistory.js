export default (hash) => {
    let url = location.protocol + '//' + location.host + '#' + hash
    window.history.pushState(null,'', url)
}