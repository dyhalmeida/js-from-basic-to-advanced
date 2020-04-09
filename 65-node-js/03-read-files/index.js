const path = require('path');
const write = require('./write');
const read = require('./read');

const filePath = path.resolve(__dirname, 'data.json');

const peoples = [
  { name: 'Diego' },
  { name: 'Laura' },
  { name: 'Bruna' },
  { name: 'Marcos' },
  { name: 'Maria' },
];

(async function(){
  try {
    await write(filePath, JSON.stringify(peoples, null, 2));
    const data = JSON.parse(await read(filePath));
    data.forEach(people => {
      console.log(people);
    });
  } catch (error) {
    console.error(error);
  }
})()