function rand(min = 0, max = 3) {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function connection(message, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof message !== 'string') {
        reject('Erro promise');
      }
      resolve(message);
    }, time)
  });
}

async function exec() {
  try {
    const fase1 = await connection('MySQL');
    console.log(fase1);

    const fase2 = await connection('Postgres');
    console.log(fase2);

    const fase3 = await connection('SQL Server');
    console.log(fase3);

    const fase4 = await connection(9090);
    console.log(fase4);

  } catch (error) {
    console.log('Catch', error);
  }
}
exec();
