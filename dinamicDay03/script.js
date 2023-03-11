const yesBtn = document.getElementById('btnY');
const noBtn = document.getElementById('btnN');



yesBtn.addEventListener('click', function() {
    window.location.href = 'landing.html';
})

noBtn.addEventListener('click', function() {
    window.location.href = 'deny.html';
})