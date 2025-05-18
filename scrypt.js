const messages = [
    "Mày chắc chưa?",
    "Chắc chắn chưa??",
    "Đm Hà buổi?",
    "Nghĩ kĩ đi...",
    "Hãy nghĩ lại đi!",
    "Thịnh hà, thịnh hà...",
    "Tôi đã khóc...",
    "Mà cũng chưa khóc lắm...",
    "Oke, tôi đã bỏ cuộc...",
    "Yes đi! NOHOPE ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes-page.html";
}