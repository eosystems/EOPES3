import {TAB_CHANGE, HANDLE_FAVORITE_ESTIMATE} from '../actions/estimateProductEdit';
import EstimateLogic from '../lib/EstimateLogic';

const initMaterial = {
  key: 1,
  typeId: 34,
  typeName: 'Tritanium Test Material',
  require: 100000,
  price: 4.00,
  volume: 6.76,
  totalPrice: 676.0,
  orderSolarSystem: 'Jita',
  orderType: 'Sell Orders',
  brokerFee: '3',
  transactionTax: '1'
}
const initMaterial2 = {
  key: 2,
  typeId: 35,
  typeName: 'Pyerite',
  require: 100,
  price: 4.00,
  volume: 6.76,
  totalPrice: 676.0,
  orderSolarSystem: 'Jita',
  orderType: 'Sell Orders',
  brokerFee: '3',
  transactionTax: '1'
}
const initProduct = {
  key: 1,
  typeId: 35,
  typeName: 'Vengeance',
  require: 100,
  price: 4.00,
  volume: 6.76,
  totalPrice: 676.0,
  orderSolarSystem: 'Jita',
  orderType: 'Sell Orders',
  brokerFee: '3',
  transactionTax: '1'
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
    product: [
      initProduct
    ],
    result: {
        totalSellPrice: 10000,
        profit: 100000,
        productionTime: 10,
        totalCost: 20000,
        jobInstallCost: 1500,
        baseJobCost: 10,
        jobFee: 20,
        FacilityCost: 30,
        totalMaterialCost: 1200
    },
    tabValue: 'manufacturing',
    handleFavoriteEstimateValue: false
}

export default function estimate(state = initialState, action) {
    let price = state.price
    switch (action.type) {
        case 'ACTION_INCREMENT_PRICE':
            return {
                price: price + action.price
            }
        case 'TAB_CHANGE':
            return Object.assign({}, state, {tabValue: action.tabValue})
        case 'HANDLE_FAVORITE_ESTIMATE':
            return Object.assign({}, state, {handleFavoriteEstimateValue: !state.handleFavoriteEstimateValue})
        default:
            return state;
    }
}
