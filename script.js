const yes = document.getElementById('yes');
let target = document.getElementById('target');

target.addEventListener('click',() => {
alert("Basta uma, Basta eu! 🤪😘🥰😍");
})
function moveyes(){
    const maxWidth = 400;
    const maxHeight = 400;

    const ranomX = Math.floor(Math.random() * maxWidth);
    const ranomY = Math.floor(Math.random() * maxHeight);

    yes.style.left = ranomX + 'px';
    yes.style.top = ranomY + 'px';
}

yes.addEventListener('mousemove',function(){
    moveyes();
})