function recursive(num) {
  if (num > 10) {
    return;
  }
  console.log(num);
  ++num;
  recursive(num);
}

recursive(1);