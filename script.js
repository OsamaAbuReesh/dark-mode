const heading = document.getElementById('heading')
const btn = document.getElementById('btn')
const body = document.getElementsByTagName('body')[0]

btn.addEventListener('click', () => {
if (heading.innerText =="Hi Light Mode!"){
    heading.innerText = "Hi Dark Mode!"
    body.style.backgroundColor = '#222';
    btn.innerText = "do you want light mode? ok press me!"
}
else if (heading.innerText == "Hi Dark Mode!"){
    body.style.backgroundColor = '#ffffff';
    heading.innerText = "Hi Light Mode!"
    btn.innerText = "do you want dark mode? ok press me!"
}
})