const initialState =
{
  blueprint: {
    bpc: '',
    te: 10,
    me: 20,
    runs: 1
  },
  character: {
    industry: 5,
    adavancedIndustry: 5
  },
  installation: {
    solarSystem: '',
    manufacturing: 'Station',
    tax: '10.0'
  }
}

export default function estimate(state = initialState, action) {
  let price = state.price
  switch (action.type) {
    case 'ACTION_INCREMENT_PRICE':
      return {price: price + action.price}
  default:
    return state;
  }
}
