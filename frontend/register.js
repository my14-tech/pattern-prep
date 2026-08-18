const registerForm = document.getElementById('register-form');
const nameInput = document.getElementById('register-name');
const emailInput = document.getElementById('register-email');
const passwordInput = document.getElementById('register-password');
const confirmPasswordInput = document.getElementById('register-confirm-password');
const statusMessage = document.getElementById('register-status');

const getStoredUsers = () => {
  try {
    const users = JSON.parse(localStorage.getItem('pattern-prep-local-users') || '[]');
    return Array.isArray(users) ? users : [];
  } catch (error) {
    return [];
  }
};

const saveLocalUser = (name, email, password) => {
  const users = getStoredUsers();
  const normalizedEmail = email.toLowerCase();
  const alreadyExists = users.some((entry) => entry.email.toLowerCase() === normalizedEmail);

  if (alreadyExists) {
    throw new Error('An account with this email already exists.');
  }

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password,
    level: 'Beginner',
    streak: 0,
    progress: 0,
    patternsCompleted: 0,
    questionsSolved: 0,
    assessmentScore: 0,
    interviewAttempts: 0,
    recognitionScore: 0
  };

  users.push(newUser);
  localStorage.setItem('pattern-prep-local-users', JSON.stringify(users));
  localStorage.setItem('pattern-prep-user', JSON.stringify({
    id: newUser.id,
    name,
    email,
    level: 'Beginner',
    streak: 0,
    progress: 0,
    patternsCompleted: 0,
    questionsSolved: 0,
    assessmentScore: 0,
    interviewAttempts: 0,
    recognitionScore: 0
  }));
  window.location.href = 'login.html';
};

if (registerForm) {
  registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = nameInput?.value.trim() || '';
    const email = emailInput?.value.trim() || '';
    const password = passwordInput?.value || '';
    const confirmPassword = confirmPasswordInput?.value || '';

    if (!name || !email || !password) {
      statusMessage.textContent = 'Please fill in all fields.';
      return;
    }

    if (password !== confirmPassword) {
      statusMessage.textContent = 'Passwords do not match.';
      return;
    }

    statusMessage.textContent = 'Creating your account...';

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed.');
      }

      window.location.href = 'login.html';
    } catch (error) {
      try {
        saveLocalUser(name, email, password);
      } catch (localError) {
        statusMessage.textContent = localError.message || error.message || 'Registration failed.';
      }
    }
  });
}
