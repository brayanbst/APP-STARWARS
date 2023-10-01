'use strict';

exports.seed = knex => 
    knex('planeta') // especificar el nombre de tu tabla
        .del() // borra todos los registros existentes
        .then(() =>
            knex('planeta').insert([ // inserta los nuevos registros
                {
                    id: 1, 
                    nombre: 'Tatooine', 
                    periodo_rotacion: "23", 
                    periodo_orbital: "304", 
                    diametro: "10465", 
                    clima: 'Árido', 
                    gravedad: '1 estándar', 
                    terreno: 'Desierto',
                    agua_superficial: "1", 
                    poblacion: "200000", 
                    residentes: JSON.stringify(['Luke Skywalker', 'C-3PO']), 
                    peliculas: JSON.stringify(['A New Hope', 'The Phantom Menace']), 
                    creado: new Date().toISOString(),
                    editado: new Date().toISOString(),
                    url: 'http://swapi.dev/api/planets/1/'
                },
            ])
        );
