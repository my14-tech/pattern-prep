(function () {
  const protectedPages = [
    '/dashboard/dashboard.html',
    '/assessment/assessment.html',
    '/learning/learning.html',
    '/trainer/trainer.html',
    '/practice/practice.html',
    '/interview/interview.html',
    '/analytics/analytics.html',
    '/ai/ai.html'
  ];

  const currentPath = window.location.pathname.replace(/\\/g, '/');
  const isProtectedPage = protectedPages.some((page) => currentPath.endsWith(page));

  if (!isProtectedPage) {
    return;
  }

  try {
    const user = JSON.parse(localStorage.getItem('pattern-prep-user') || 'null');
    if (!user || !user.email) {
      window.location.replace('../login.html');
    }
  } catch (error) {
    window.location.replace('../login.html');
  }
})();
