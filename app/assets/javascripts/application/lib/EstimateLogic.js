export default class EstimateLogic{
  requireMaterial(runs, baseQuantity, me){
    const facilityModifire = 1.0;
    let result = (runs * baseQuantity * facilityModifire * (1.0 - me * 0.01))
    if (result < runs){
      return runs;
    }
    return result;
  }
}
