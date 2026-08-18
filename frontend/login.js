const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('login-email');
const passwordInput = document.getElementById('login-password');
const statusMessage = document.getElementById('login-status');

const getStoredUsers = () => {
  try {
    const users = JSON.parse(localStorage.getItem('pattern-prep-local-users') || '[]');
    return Array.isArray(users) ? users : [];
  } catch (error) {
    return [];
  }
};

const persistUserSession = (user) => {
  if (!user || !user.email) return;

  const normalizedUser = {
    id: user.id,
    name: user.name || 'User',
    email: user.email,
    level: user.level || 'Beginner',
    streak: user.streak || 0,
    progress: user.progress || 0,
    patternsCompleted: user.patternsCompleted || 0,
    questionsSolved: user.questionsSolved || 0,
    assessmentScore: user.assessmentScore || 0,
    interviewAttempts: user.interviewAttempts || 0,
    recognitionScore: user.recognitionScore || 0
  };

  localStorage.setItem('pattern-prep-user', JSON.stringify(normalizedUser));
};

const attemptLocalLogin = (email, password) => {
  const users = getStoredUsers();
  const user = users.find((entry) => entry.email.toLowerCase() === email.toLowerCase() && entry.password === password);

  if (!user) {
    throw new Error('No matching local account found. Please register first.');
  }

  persistUserSession(user);
  window.location.href = 'dashboard/dashboard.html';
};

if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = emailInput?.value.trim() || '';
    const password = passwordInput?.value || '';

    if (!email || !password) {
      statusMessage.textContent = 'Please enter both email and password.';
      return;
    }

    statusMessage.textContent = 'Signing you in...';

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Unable to sign in.');
      }

      const user = data.user || { id: data.id, name: data.name || 'User', email };
      persistUserSession(user);
      window.location.href = 'dashboard/dashboard.html';
    } catch (error) {
      try {
        attemptLocalLogin(email, password);
      } catch (localError) {
        statusMessage.textContent = localError.message || error.message || 'Login failed.';
      }
    }
  });
}
