import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | answers/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:answers/new');
    assert.ok(route);
  });
});
