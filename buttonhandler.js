// components/buttonHandlers.js

export function handlePrimaryClick() {
    alert("Thanks for choosing RideGo! Let's get started 🚀");
    // Or navigate: window.location.href = '/signup';
  }
  
  export function handleSecondaryClick() {
    alert("Learn more about RideGo's amazing features!");
    document.querySelector('.services')?.scrollIntoView({ behavior: 'smooth' });
  }
  