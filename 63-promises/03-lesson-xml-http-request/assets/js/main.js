const request = obj => {
  
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true);
  xhr.send();

  xhr.addEventListener('load', () => {
    
    if (xhr.status >= 200 && xhr.status < 300) {
      obj.done(xhr.responseText);
      return;
    }

    obj.error(xhr.statusText);

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


function loadPage(element) {
  const href = element.getAttribute('href');
  const reqConfig = {
    method: 'GET',
    url: href,
    done(data) {
      showPage(data);
    },
    error(e) {
      console.error(e);
    }
  }
  request(reqConfig);
}

function showPage(data) {
  const app = document.querySelector('.app');
  app.innerHTML = data;
}