import {TAB_CHANGE} from '../actions/estimateProductEdit';

const initMaterial = {
  key: 1,
  typeId: 34,
  typeName: 'Tritanium',
  require: 100,
  price: 4.00,
  volume: 6.76,
  totalPrice: 676.0
}
const initMaterial2 = {
  key: 2,
  typeId: 35,
  typeName: 'Pyerite',
  require: 100,
  price: 4.00,
  volume: 6.76,
  totalPrice: 676.0
}

const initialState = {
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
    materials: [
      initMaterial,initMaterial2
    ],
    tabValue: 'manufacturing'
}

export default function estimate(state = initialState, action) {
    let price = state.price
    switch (action.type) {
        case 'ACTION_INCREMENT_PRICE':
            return {
                price: price + action.price
            }
        case 'TAB_CHANGE':
            return Object.assign({}, state, {tabValue: action.tabChange})
        default:
            return state;
    }
}
