export const mailFormData = async (
  name: string,
  email: string,
  message: string,
) => {
  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to send email');
  }
};
