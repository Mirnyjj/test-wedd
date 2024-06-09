const baseUrl = 'https://api.telegram.org/bot6729117388:AAHb7dyWj4F-2ZQeEUMKEKGkiurNr8iJWQw/';
export const sendMessage = async (message) => {
    const url = `${baseUrl}sendMessage?chat_id=592640330&text=${message}`;
    const response = await fetch(url);
    const fetchResTelegram = await response.json();
    return fetchResTelegram
}

// -4177928024
// 592640330