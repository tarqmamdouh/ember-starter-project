import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | questions/destroy', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:questions/destroy');
    assert.ok(route);
  });
});
