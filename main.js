  setInterval(()=> {
    document.body.style.backgroundColor = `rgb(
        ${Math.floor(Math.random() * 225)},
        ${Math.floor(Math.random() * 225)},
        ${Math.floor(Math.random() * 225)}
    )`;
  }, 1000);

let i = 0;
const rotation = document.querySelector(".rotation");

const interval = setInterval(() => {
    rotation.style.transform = `translateX(${i}px)`;
    i++;

    if (i >= window.innerWidth) {
        i = -100;
    }
} );

let n = 0;
const pac = document.querySelector(".pac");

const wsh = setInterval(() => {
    pac.style.transform = `translateX(${n}px)`;
    n++;

    if (n >= window.innerWidth) {
        n = -100;
    }
} );

window.addEventListener("keydown", (event) => {
    const top = window.getComputedStyle(pac).top;
    if (event.key === "z") {
        pac.style.top = `${parseInt(top) - 10}px`;
    } else if (event.key === "s") {
        pac.style.top = `${parseInt(top) + 10}px`;
    }
});

    const bouton = document.getElementById("button2");

    bouton.addEventListener("click", (event) => {
        console.log("Bouton cliqué");
        console.log(event);
        console.log(event.currentTarget);
    })
