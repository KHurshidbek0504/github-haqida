document.getElementById('Button').addEventListener('click', function() {
    let text = document.getElementById('text');
    let button = document.getElementById('Button');

    // Matnga animatsiya qo'shish
    text.classList.add('animate');
    
    // Tugmaning rangi qizilga o'zgarishi
    button.style.backgroundColor = 'red';
});
