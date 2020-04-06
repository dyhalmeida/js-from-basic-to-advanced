document.addEventListener('click', event => {
  
  const element = event.target;
  const tag = element.tagName.toLowerCase();

  if (tag === 'a') {
    event.preventDefault();
    loadPage(element);
  }

});

async function loadPage(element) {
  
  const href = element.getAttribute('href');
  
  try {
    const data = await fetch(href);
    
    if (data.status !== 200) {
      throw new Error('Not Found');
    }
    const html = await data.text();
    showPage(html);
  } catch (e) {
    console.error(e);
  }

}

function showPage(html) {
  const app = document.querySelector('.app');
  app.innerHTML = html;
}