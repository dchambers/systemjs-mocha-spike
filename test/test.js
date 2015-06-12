import chai from 'chai';
import System from 'systemjs';

const expect = chai.expect;

describe('stuff', function() {
	let stuff = null;

	beforeEach(function() {
		return System.import('src/stuff.js').then(function(module) {
			stuff = module;
		});
	});

	it('exists', function() {
		expect(stuff).to.equal('stuff...');
	});
});
