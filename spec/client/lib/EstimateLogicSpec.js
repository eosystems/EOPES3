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
});
