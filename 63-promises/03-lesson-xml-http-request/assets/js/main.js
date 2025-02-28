const request = obj => {

  return new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();
  
    xhr.addEventListener('load', () => {
      
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      }
  
      reject(xhr.statusText);
  
    });

  });
  
}

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
  const reqConfig = {
    method: 'GET',
    url: href
  }
  try {
    const data = await request(reqConfig);
    showPage(data);
  } catch (e) {
    console.error(e);
  }
}

function showPage(data) {
  const app = document.querySelector('.app');
  app.innerHTML = data;
}