/** let possui escopo de bloco
 * e não pode ser redeclarada
 */
let name = "John";

/** var possui apenas escopo de função
 * e pode ser redeclarado */
var lastname = "Kart";

/** Error: SyntaxError: Identifier 'name' has already been declared */
// let name = "Diego";

// OK
var lastname = "Peter";
