'use strict';

exports.up = knex =>
    knex.schema.createTable('planetas', (table) => {
        table.increments().primary();
        table.text('nombre').notNullable();
        table.text('periodo_rotacion').nullable();
        table.text('periodo_orbital').nullable();
        table.text('diametro').nullable();
        table.text('clima').nullable();
        table.text('gravedad').nullable();
        table.text('terreno').nullable();
        table.text('agua_superficial').nullable();
        table.text('poblacion').nullable();
        table.json('residentes').nullable();
        table.json('peliculas').nullable();
        table.datetime('creado').nullable();
        table.datetime('editado').nullable(); 
        table.text('url').nullable();
    });

exports.down = knex =>
    knex.schema.dropTable('planetas');
