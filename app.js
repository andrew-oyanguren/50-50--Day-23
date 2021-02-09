// ====== Variables ===== //
const button = document.getElementById('btn');
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
]
// ====== Event Listeners ===== //

button.addEventListener('click', () => createNotifcation())

// ====== Functions ===== //

const createNotifcation = () => {
  const newToast = document.createElement('div');
  newToast.classList.add('toast');

  newToast.innerText = getRandomMessage();

  toasts.appendChild(newToast)

  setTimeout(() => {
    newToast.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}