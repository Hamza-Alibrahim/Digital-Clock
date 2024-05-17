let d = new Date();
document.querySelector(".hrs").textContent = (d.getHours() < 10 ? "0" : "") + d.getHours();
document.querySelector(".min").textContent = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
document.querySelector(".sec").textContent = (d.getSeconds() < 10 ? "0" : "") + d.getSeconds();
setInterval(() => {
    let d = new Date();
    document.querySelector(".hrs").textContent = (d.getHours() < 10 ? "0" : "") + d.getHours();
    document.querySelector(".min").textContent = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
    document.querySelector(".sec").textContent = (d.getSeconds() < 10 ? "0" : "") + d.getSeconds();
}, 1000);