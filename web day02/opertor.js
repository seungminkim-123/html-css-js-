function calculate (commed, a, b)
{
  switch(commed)
  {
    case "add":
      return a+b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      return '';
  }
}

console.log(calculate('', 1, 5));
