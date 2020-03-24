/** Executa no ciclo de cada tempo de milessegundos definido */
const timer = setInterval(() => {
  const hours = new Date();
  console.log(
    hours.toLocaleTimeString("pt-BR", {
      hour12: false
    })
  );
}, 1000);

/** Executa depois de um tempo determinadi em milessegundos */
setTimeout(() => {
  clearInterval(timer);
}, 10000);
