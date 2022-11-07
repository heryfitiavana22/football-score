import {stopLoading} from './others/animation'
export default (message = 'page not found') => {
    document.querySelector('.current-element').innerHTML = message
    stopLoading()
}