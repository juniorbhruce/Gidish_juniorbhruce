// Confetti effect (simple version)
window.onload = function() {
    const body = document.body;
    const colors = ['#ff6f61', '#ffb6b9', '#d0f0c0', '#b3cde0'];
  
    function createConfetti() {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
      confetti.style.animationDelay = Math.random() * 2 + 's';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      body.appendChild(confetti);
  
      setTimeout(() => {
        confetti.remove();
      }, 5000); // Remove confetti after 5 seconds
    }
  
    setInterval(createConfetti, 300); // Create confetti every 300ms
  };
  
  // Simple thank-you message when clicked
  document.getElementById('contacts').addEventListener('click', function() {
    alert("Thank you so much for the birthday wishes! 😊");
  });
  function uploadPhoto() {
    const fileInput = document.getElementById('photoUpload');
    const file = fileInput.files[0];
  
    if (file) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.alt = 'User uploaded photo';
      document.querySelector('.gallery-container').appendChild(img);
    } else {
      alert('Please select a file first!');
    }
  }
// Countdown to next birthday (December 24th)
function countdownToBirthday() {
    const birthday = new Date(new Date().getFullYear(), 11, 24); // Dec 24th of this year
    const now = new Date();
    if (now > birthday) {
      birthday.setFullYear(birthday.getFullYear() + 1); // If today is past your birthday, countdown to next year
    }
  
    const distance = birthday - now;
  
    // Calculate time components
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the countdown timer
    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
    // If the countdown is over, display a message
    if (distance < 0) {
      document.getElementById('timer').innerHTML = "Happy Birthday!";
    }
  }
  
  // Update the countdown every second
  setInterval(countdownToBirthday, 1000);
  document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
  
    // Validate inputs
    if (name && message) {
      // For now, we'll just display the message
      const response = `Thank you, ${name}! Your message: "${message}" has been received.`;
      document.getElementById('formResponse').innerHTML = `<p>${response}</p>`;
      
      // Clear the form
      document.getElementById('name').value = '';
      document.getElementById('message').value = '';
    } else {
      // If inputs are empty, show an error
      document.getElementById('formResponse').innerHTML = `<p style="color: red;">Please fill in both fields!</p>`;
    }
  });
  function countdownToBirthday() {
    // Target date: December 24th of the current year
    const birthday = new Date(new Date().getFullYear(), 11, 24); // Dec 24th of this year
    const now = new Date();
    
    // If today's date is past your birthday, set the target date to next year
    if (now > birthday) {
      birthday.setFullYear(birthday.getFullYear() + 1); // Set to next year
    }
  
    const distance = birthday - now; // Get the difference in time
  
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the countdown
    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
    // If the countdown has ended, display a message
    if (distance < 0) {
      document.getElementById('timer').innerHTML = "Happy Birthday!";
    }
  }
  
  // Update the countdown every second
  setInterval(countdownToBirthday, 1000);
  function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    document.body.appendChild(confetti);
  
    // Randomize position and size
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    setTimeout(() => confetti.remove(), 5000);
  }
  
  window.onload = function() {
    setInterval(createConfetti, 100); // Create confetti every 100ms
  };
// Detect images in viewport to add 'visible' class for animation
window.addEventListener('scroll', () => {
    const images = document.querySelectorAll('.gallery-container img');
    
    images.forEach(img => {
      if (img.getBoundingClientRect().top < window.innerHeight - 50) {
        img.classList.add('visible');
      }
    });
  });
  function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    document.body.appendChild(balloon);
    
    setTimeout(() => balloon.remove(), 5000); // Remove balloon after 5 seconds
  }
  
  setInterval(createBalloon, 2000); // Create a new balloon every 2 seconds
// Get elements
const sendMessageButton = document.getElementById('sendMessage'); // assuming the button's ID is "sendMessage"
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('closePopup');

// Show popup when button is clicked
sendMessageButton.addEventListener('click', () => {
  popup.style.display = 'flex'; // Display the popup
});

// Close popup when the close button is clicked
closePopupButton.addEventListener('click', () => {
  popup.style.display = 'none'; // Hide the popup
});

// Optionally, close popup if clicked outside of the content
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
 // JavaScript for dynamic slideshow
document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainer = document.getElementById('slideshowContainer');
    let currentIndex = 0;
  
    // Dummy array of uploaded files (this will be dynamically populated in a real scenario)
    const uploadedFiles = [
      { type: 'image', src: 'path-to-image1.jpg' },
      { type: 'video', src: 'path-to-video1.mp4' },
      { type: 'image', src: 'path-to-image2.jpg' },
      { type: 'video', src: 'path-to-video2.mp4' },
    ];
  
    // Populate slideshow
    uploadedFiles.forEach((file) => {
      const item = document.createElement('div');
      item.classList.add('slideshow-item');
  
      if (file.type === 'image') {
        const img = document.createElement('img');
        img.src = file.src;
        item.appendChild(img);
      } else if (file.type === 'video') {
        const video = document.createElement('video');
        video.src = file.src;
        video.autoplay = true;
        video.loop = true;
        video.muted = true; // Optional: mute videos for autoplay
        item.appendChild(video);
      }
  
      slideshowContainer.appendChild(item);
    });
  
    // Show the first item
    const items = document.querySelectorAll('.slideshow-item');
    if (items.length > 0) items[0].style.display = 'block';
  
    // Slideshow logic
    setInterval(() => {
      items[currentIndex].style.display = 'none'; // Hide current
      currentIndex = (currentIndex + 1) % items.length; // Move to next
      items[currentIndex].style.display = 'block'; // Show next
    }, 5000); // Change every 5 seconds
  });
  const express = require('express');
  const multer = require('multer');
  const path = require('path');
  const app = express();
  
  // Configure storage for uploaded files
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Save files with unique names
    },
  });
  
  const upload = multer({ storage });
  
  // Serve static files
  app.use(express.static('public'));
  
  // File upload endpoint
  app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ filePath: `/uploads/${req.file.filename}` });
  });
  
  // Start the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
// Handle file upload
document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });
  
    if (response.ok) {
      document.getElementById('uploadMessage').textContent = 'File uploaded successfully!';
    } else {
      document.getElementById('uploadMessage').textContent = 'Failed to upload file. Try again.';
    }
  });
           
          