const user = {
  name: "Diego",
  username: "dyhalmeida",
  password: "123456",
  active: true
};

if (user.active) {
  console.log(`Usuário ${user.name} ativo`);
} else {
  console.log(`Usuário ${user.name} bloqueado`);
}
