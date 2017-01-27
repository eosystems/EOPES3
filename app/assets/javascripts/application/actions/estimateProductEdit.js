const ACTION_INCREMENT_PRICE = {
  type: 'ACTION_INCREMENT_PRICE',
  count: 1
}

const TAB_CHANGE = 'TAB_CHANGE';

export function tabChange(tabValue){
  return {
    type: TAB_CHANGE,
    tabValue: tabValue
  }
}
