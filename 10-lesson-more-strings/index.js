/** Toda string é indexada */
//            0123456
let anText = "An Text";
console.log(anText.length); // 7
console.log(anText[0]); // A
console.log(anText.charAt(1)); // n
console.log(anText.charCodeAt(0)); // 65 ASCI
console.log(anText.concat(" beautiful")); // An text beautiful
console.log(`${anText} beautiful`); // An text beautiful

/**
 * A palavra texto inicia no índice 3
 * Caso não seja encontrado, a função retorna -1
 *  */
console.log(anText.indexOf("Text"));

/**
 * Busca pela palavra "An" começando do índice 3
 * Retorna -1 caso não seja encontrado
 */
console.log(anText.indexOf("An", 3));

/**
 *  Busca do final para trás
 */
console.log(anText.lastIndexOf("Text"));

/** Busca todas as letras minúsculas através de expressão regular*/
console.log(anText.match(/[a-z]/g));

/** Retorna o índice da primeira letra minúscula */
console.log(anText.search(/[a-z]/g));

/** Busca pelo índice da letra t */
console.log(anText.search(/t/));

/** Substituir palavras ou frase */
console.log(anText.replace("An", "A")); // A Text

/** Fatia uma string a partir de um índice */
console.log(anText.slice(1, 7)); //n Text

/** Fatia uma string pegando seu tamanho total menos -2 */
console.log(anText.slice(-2)); // mesma coisa que anText.slice(5)

/** Separar uma string em um array */
console.log(anText.split(" ")); // [ 'An', 'Text' ]

/** Segundo parametro define um limite */
console.log(anText.split(" ", 1)); // [ 'An' ]
