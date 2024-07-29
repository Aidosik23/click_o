document.addEventListener('DOMContentLoaded', () => {
    const circle = document.getElementById('circle');
    const scoreElement = document.getElementById('score');
    let score = 0;

    const updateScore = () => {
        score++;
        scoreElement.textContent = `Очки: ${score}`;
    };

    circle.addEventListener('click', updateScore);
    circle.addEventListener('touchstart', updateScore);
});
