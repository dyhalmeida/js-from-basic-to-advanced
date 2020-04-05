function rand(max, min) {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function connection(message, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, time)
  });
}

connection('MongoDB connect', rand(1, 4))
  .then(data => {
    console.log(data);
    return connection('Check usuer', rand(1, 3));
  })
  .then(data => {
    console.log(data);
    return connection('Check password', rand(1,3));
  })
  .then(data => {
    if (typeof data !== 'number') {
      throw new TypeError('data is not number');
    }
    console.log(data);
  })
  .catch(error => {
    console.log('catch', error);
  })