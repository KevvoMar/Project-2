function contact(event) {
    event.preventDefault();

    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    setTimeout(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible";
        document.getElementById("contact__form").reset();
    }, 1000);
    setTimeout(() => {
        success.classList.remove("modal__overlay--visible")
    }, 3500)
}

const scaleFactor = 1 / 20
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

function toggleLight() {
  document.documentElement.classList.toggle("light")
  document.documentElement.classList.toggle("light__logo")
  document.documentElement.classList.toggle("light__logo")
}

function moveBackground(event) {
    const shapes = document.querySelectorAll('.shape')
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor

    for (let i = 0; i < shapes.length; ++i) {
        const  isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1 
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}