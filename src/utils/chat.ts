const apiUrl = 'https://api.openai.com/v1/chat/completions';

export default async function sendMessage(message: string) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
    },
    body: JSON.stringify({
      'model': 'gpt-3.5-turbo',
      'messages': [{'role': 'system', 'content': 'You are a helpful assistant.'}, {'role': 'user', 'content': message}]
    })
  });

  const data = await response.json();
  return data;
}