// Only for Index Page

// Get Website Title
window.onload = function() {
  fetch('config.json')
    .then(res => res.json())
    .then(data => {
      const item = data[0];
      document.title = `${item.title} - ${item.author}`;
    })
    .catch(error => {
      console.error('Loading Fail:', error);
    });
};

// Get favicon from CSS
document.addEventListener('DOMContentLoaded', () => {
  const elem = document.querySelector('.favicon-data');
  const bg = getComputedStyle(elem).backgroundImage;
  const url = bg.replace(/^url\(["']|["']\)$/g, '');
  document.getElementById('favicon').href = url;
});

// Search Option
const input = document.getElementById('search-input');
const baiduBtn = document.querySelector('.baidu');
const bingBtn = document.querySelector('.bing');
const googleBtn = document.querySelector('.google');

function searchEngine(urlBase) {
  const query = input.value.trim();
  if(query) window.open(urlBase + encodeURIComponent(query), '_blank', 'noopener,noreferrer');
}

baiduBtn.addEventListener('click', () => searchEngine('https://www.baidu.com/s?wd='));
bingBtn.addEventListener('click', () => searchEngine('https://www.bing.com/search?q='));
googleBtn.addEventListener('click', () => searchEngine('https://www.google.com/search?q='));

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchEngine('https://www.baidu.com/s?wd=');
  }
});

// Clear Button
const clearButton = document.getElementById('clear-button');

input.addEventListener('input', () => {
  if (input.value.trim() !== '') {
    clearButton.style.display = 'block';
  } else {
    clearButton.style.display = 'none';
  }
});

clearButton.addEventListener('click', () => {
  input.value = '';
  input.focus();
  clearButton.style.display = 'none';
});

// Get Website Data
window.onload = function() {
fetch('data.json', { cache: 'no-cache' })
  .then(response => response.json())
  .then(config => {
    // config loading
  })
  .catch(error => {
    console.error('Config Loading Fail:', error);
  });
};
