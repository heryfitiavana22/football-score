let animation = document.querySelector('.animation');
export function loading() {
    animation.style.display = 'flex'
    animation.classList.add('loading')
}

export function stopLoading() {
    animation.style.display = 'none'
    animation.classList.remove('loading')
}