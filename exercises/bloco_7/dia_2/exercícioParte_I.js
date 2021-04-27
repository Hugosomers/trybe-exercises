const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const orderKeys = Object.keys(order);
  const orderValues = Object.values(order);
  const deliveryDriver = order.order.delivery.deliveryPerson;
  const deliveryTo = order.name;
  const orderPhoneNumber = order.phoneNumber;
  const orderAddress = order.address;
  const orderInfo = `Olá ${deliveryDriver}, entrega para: ${deliveryTo}, Telefone: ${orderPhoneNumber}, R. ${orderAddress.street},
  N: ${orderAddress.number}, AP: ${orderAddress.apartment}.`;


  return orderInfo;
}

console.log(customerInfo(order));

// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.

// }

// orderModifier(order);