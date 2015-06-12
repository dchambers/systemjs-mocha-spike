import chai from 'chai';
import System from 'systemjs';
import systemConfig from '../config';

const expect = chai.expect;

System.config(systemConfig);

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
