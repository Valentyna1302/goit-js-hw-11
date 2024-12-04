const BASE_URL = `https://pixabay.com/api`;
const API_KEY = '47378473-ac089f81fe0a13d2309255fc1';

export function getPhotoService(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}
