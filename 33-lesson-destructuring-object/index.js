/** Destructuring object */

const budget = {
  id: "000001",
  customer: "000006",
  store: "01",
  payment: {
    id: "016",
    description: "installment"
  },
  products: [
    {
      id: "3333.098.332",
      description: "blue pen"
    },
    {
      id: "3333.188.332",
      description: "book cover"
    }
  ]
};

/** Print object */
console.log(budget);

/** get payment id */
const payment_id = budget.payment.id;
console.log(payment_id);

/** get payment id with destructuring*/
const { id } = budget.payment;
console.log(id);

/** rename var and get customer with destructuring*/
const { customer: customer_id = "" } = budget;
console.log(customer_id);

const {
  payment: { id: id_payment = "", description = "" }
} = budget;
console.log(id_payment, description);

/** spread with destructuring*/
const { id: code, customer: customer_code, ...rest } = budget;
console.log(code, customer_code, rest);
