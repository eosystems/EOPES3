export default class EstimateLogic{
  requireMaterial(runs, baseQuantity, me){
    const facilityModifire = 1.0;
    let result = Math.ceil(runs * baseQuantity * facilityModifire * (1.0 - me * 0.01))
    if (result < runs){
      return runs;
    }
    return result;
  }

  // ###JOB COST###
  calcBaseJobCost(materials, runs){
    let result = 0;
    materials.map((material) => {
      result += material.baseQuantity * material.adjustedPrice;
    });
    result = runs * result;
    return this.round4(result);
  }

  calcJobFee(systemCostIndex, baseJobCost){
    return this.round4(systemCostIndex * baseJobCost);
  }

  calcFacilityCost(jobFee, taxRate){
    return this.round4(jobFee * taxRate / 100);
  }

  calcTotalJobCost(materials, runs, systemCostIndex, taxRate){
    // JobFee + FacilityCost
    let baseJobCost = this.calcBaseJobCost(materials, runs);
    let jobFee = this.calcJobFee(systemCostIndex, baseJobCost);
    let facilityCost = this.calcFacilityCost(jobFee, taxRate);

    return this.round4(jobFee + facilityCost);
  }

  // 小数点第４位までの精度
  round4(val){
    return Math.round(val * 10000) / 10000;
  }

}
