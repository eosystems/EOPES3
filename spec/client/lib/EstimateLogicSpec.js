import EstimateLogic from '../../../app/assets/javascripts/application/lib/EstimateLogic';

var assert = require('assert');
//let EsimateLogic = require('../../../app/assets/javascripts/application/lib/EstimateLogic.js');

describe('Estimate', function() {
  describe('requireMaterial', function() {
    it('require material logic', function() {
      let logic = new EstimateLogic();
      let result = logic.requireMaterial(1,1,1);
      console.log(result);
      assert.equal(1, result);
    });
  });
});
