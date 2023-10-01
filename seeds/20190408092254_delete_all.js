'use strict';

exports.seed = knex =>
	knex('planetas')
		.del()
		.then(() => knex('planetas').del());
