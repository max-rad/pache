import RevolutCheckout from "@revolut/checkout";

const initRevolutGateaway = () => {
  RevolutCheckout('<token>', 'sandbox').then((instance) => {

  });
}

export {initRevolutGateaway};
