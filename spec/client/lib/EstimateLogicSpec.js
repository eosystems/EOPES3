import EstimateLogic from '../../../app/assets/javascripts/application/lib/EstimateLogic';
import assert from 'power-assert';

describe('Estimate', function() {
  describe('requireMaterial', function() {
    it('テスト', function() {
      let logic = new EstimateLogic();
      let result = logic.requireMaterial(1,1,1);
      assert.equal(1, result);
    });
  });
});
