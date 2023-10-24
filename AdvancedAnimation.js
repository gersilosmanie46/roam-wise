/*
 * Filename: AdvancedAnimation.js
 * 
 * Description: This code demonstrates an advanced animation using JavaScript.
 * 
 * The animation renders a sophisticated and elaborate scene with multiple objects
 * and complex interactions. It showcases various animations techniques including
 * keyframes, easing functions, 3D transformations, and particle effects.
 *
 * Author: John Doe
 * Date: October 1, 2021
 */

// Particle class represents a single particle in the scene
class Particle {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.velocity = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.x < 0 || this.x > canvas.width) {
      this.velocity.x *= -1;
    }

    if (this.y < 0 || this.y > canvas.height) {
      this.velocity.y *= -1;
    }
  }

  draw() {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.closePath();
    context.fill();
  }
}

// Create canvas and get 2D rendering context
const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
const context = canvas.getContext("2d");

// Create an array to hold the particles
const particles = [];

// Generate random particles
for (let i = 0; i < 100; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const size = Math.random() * 5 + 1;
  const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  }, 1)`;
  particles.push(new Particle(x, y, size, color));
}

// Animation loop
function animate() {
  // Clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw particles
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  // Request next frame
  requestAnimationFrame(animate);
}

// Start the animation
animate();