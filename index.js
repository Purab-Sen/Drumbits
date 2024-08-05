document.querySelectorAll(".drum").forEach((button) => {
    button.addEventListener('click', (event) => {
        makeSound(event.target.innerText);
    })
})
document.addEventListener('keypress', (event) => {
    makeSound(event.key);
})

function makeSound(letter) {
    let obj = {
        w: "tom-1",
        a: "tom-2",
        s: "tom-3",
        d: "tom-4",
        j: "snare",
        k: "crash",
        l: "kick-bass"
    };
    if (obj[letter]) {
        let audio = new Audio(`./sounds/${obj[letter]}.mp3`);
        audio.play();
        changebg(document.querySelector("."+letter));
    }
}
function changebg(obj){
    obj.classList.add("pressed");
    setTimeout(()=>{
        obj.classList.remove("pressed");
    },100);
}