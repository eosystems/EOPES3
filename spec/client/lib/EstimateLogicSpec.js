import EstimateLogic from '../../../app/assets/javascripts/application/lib/EstimateLogic';
import assert from 'power-assert';

describe('Estimate', function() {
  describe('requireMaterial', function() {
    var logic = new EstimateLogic();

    it('runs:2,baseQuantity:101,ME:0 の場合 202', function() {
      let result = logic.requireMaterial(2,101,0);
      assert.equal(202, result);
    });

    it('runs:2,baseQuantity:101,ME:10 の場合 182', function() {
      let result = logic.requireMaterial(2,101,10);
      assert.equal(182, result);
    });

    it('runs > 計算結果 の場合 runs', function() {
      let result = logic.requireMaterial(10,1,10);
      assert.equal(10, result);
    });

  });

  describe('Jobコスト関連', function() {
    var logic = new EstimateLogic();
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
      transactionTax: '1',
      baseQuantity: 10,
      adjustedPrice: 3.9
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
      transactionTax: '1',
      baseQuantity: 5,
      adjustedPrice: 8.1
    }
    let materials = [initMaterial, initMaterial2];

    it('Base Job Cost は Σ(baseQuantity * adjustedPrice) * Runs', function() {
      let result = logic.calcBaseJobCost(materials, 2);
      assert.equal(159, result);
    });

    it('Job Fee は systemCostIndex * baseJobCost', function() {
      let result = logic.calcJobFee(2.01, 159)
      assert.equal(319.59, result);
    });

    it('FacilityCost は jobFee * taxRate / 100', function() {
      let result = logic.calcFacilityCost(319.59, 5);
      assert.equal(15.9795, result);
    });

    it('Total Job Cost は JobFee + FacilityCost', function() {
      let result = logic.calcTotalJobCost(materials, 2, 2.01, 5);
      assert.equal(335.5695, result);
    });

  });

});
