document.querySelector('form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  try {
    const response = await fetch('g.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) throw new Error('Login failed');

    const data = await response.json();
    console.log('Token:', data.token);

    // Store token or redirect as needed
  } catch (error) {
    console.error(error);
  }
});
