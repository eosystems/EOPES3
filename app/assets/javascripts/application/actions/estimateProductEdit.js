const TAB_CHANGE = 'TAB_CHANGE';
const HANDLE_FAVORITE_ESTIMATE = 'HANDLE_FAVORITE_ESTIMATE';

export function tabChange(tabValue){
  return {
    type: TAB_CHANGE,
    tabValue: tabValue
  }
}

export function handleFavoriteEstimate(){
  return {
    type: HANDLE_FAVORITE_ESTIMATE
  }
}
