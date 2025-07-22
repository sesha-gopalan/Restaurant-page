// Display the selected menu category
function showCategory(category) {
  const categories = document.querySelectorAll('.category-content');
  categories.forEach(categoryElement => {
    categoryElement.style.display = 'none';
  });

  const selectedCategory = document.getElementById(category);
  selectedCategory.style.display = 'block';
}

// Login functionality
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // You can add actual authentication here
  alert('Logged in successfully!');
  window.location.href = 'dashboard.html';
});

// Signup functionality
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // Save user data or make API calls to register the user
  alert('Account created successfully!');
  window.location.href = 'login.html';
});

