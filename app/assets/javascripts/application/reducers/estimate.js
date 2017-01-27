import {TAB_CHANGE} from '../actions/estimateProductEdit';

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
    advancedIndustry: 5
  },
  installation: {
    solarSystem: '',
    manufacturing: 'Station',
    tax: '10.0'
  },
  tabValue: 'manufacturing'
}

export default function estimate(state = initialState, action) {
  let price = state.price
  switch (action.type) {
    case 'ACTION_INCREMENT_PRICE':
      return {price: price + action.price}
    case 'TAB_CHANGE':
      return action;
  default:
    return state;
  }
}
