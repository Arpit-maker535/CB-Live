const board = document.getElementById("gameBoard");
const boardSize = 600; // Increased board size
const blockSize = 20;
let snake = [{ x: 300, y: 300 }]; // Adjusted initial position for larger board
let food = generateFood();
let direction = { x: 0, y: 0 };
let gameLoop;
let speed = 200; // speed (in milliseconds)

// Function to draw the snake on the game board
function drawSnake() {
  board.innerHTML = ""; // Clear the board
  snake.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.left = `${segment.x}px`;
    snakeElement.style.top = `${segment.y}px`;
    snakeElement.classList.add("snake");
    board.appendChild(snakeElement);
  });
}

// Function to draw the food on the game board
function drawFood() {
  const foodElement = document.createElement("div");
  foodElement.style.left = `${food.x}px`;
  foodElement.style.top = `${food.y}px`;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

// Function to move the snake
function moveSnake() {
  const head = {
    x: snake[0].x + direction.x * blockSize,
    y: snake[0].y + direction.y * blockSize,
  };
  snake.unshift(head); // Add new head to the snake

  // Check if snake has eaten the food
  if (head.x === food.x && head.y === food.y) {
    food = generateFood(); // Generate new food position
  } else {
    snake.pop(); // Remove the last segment of the snake
  }

  // Check for collision with walls or itself
  if (checkCollision(head)) {
    clearInterval(gameLoop); // Stop the game loop
    alert("Game Over"); // Display game over message
  }
}

// Function to generate a new food position
function generateFood() {
  return {
    x: Math.floor(Math.random() * (boardSize / blockSize)) * blockSize,
    y: Math.floor(Math.random() * (boardSize / blockSize)) * blockSize,
  };
}

// Function to check for collisions
function checkCollision(head) {
  // Check for collision with walls
  if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize) {
    return true;
  }

  // Check for collision with itself
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }

  return false;
}

// Function to change the direction of the snake
function changeDirection(event) {
  switch (event.keyCode) {
    case 37: // left arrow
      if (direction.x === 0) direction = { x: -1, y: 0 };
      break;
    case 38: // up arrow
      if (direction.y === 0) direction = { x: 0, y: -1 };
      break;
    case 39: // right arrow
      if (direction.x === 0) direction = { x: 1, y: 0 };
      break;
    case 40: // down arrow
      if (direction.y === 0) direction = { x: 0, y: 1 };
      break;
  }
}

// Add event listener for keyboard input
document.addEventListener("keydown", changeDirection);

// Main game function
function game() {
  moveSnake();
  drawSnake();
  drawFood();
}

// Start the game loop
gameLoop = setInterval(game, speed);
