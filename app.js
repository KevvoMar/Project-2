
function contact(event) {
    event.preventDefault();

    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    setTimeout(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible";
        console.log('it worked 1')
    }, 1000);

}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove('modal__open')
    }
    isModalOpen = true
    document.body.classList += " modal__open"
}

function closeModal() {
    isModalOpen = false
    return document.body.classList.remove('modal__open')
}