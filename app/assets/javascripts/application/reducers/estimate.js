export default function estimate(state = {price: 0}, action) {
  let price = state.price
  switch (action.type) {
    case 'ACTION_INCREMENT_PRICE':
      return {price: price + action.price}
  default:
    return state;
  }
}
