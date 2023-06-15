// ChatGPT API 엔드포인트 URL
const apiUrl = 'https://api.openai.com/v1/chat/completions';

// ChatGPT에 대화를 보내고 응답을 받는 함수
async function sendMessage(message: string) {
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
  // const reply = data.choices[0].message.content;
  return data;
}

// 예시 대화
export default async function exampleConversation() {
  const userMessage = 'Hello!';
  const reply = await sendMessage(userMessage);
  console.log('User:', userMessage);
  console.log('AI:', reply);
}
