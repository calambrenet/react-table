import React from 'react';
import ReactDOM from 'react-dom';
import ReactTable from './react-table.jsx';

var col = ['id', 'nombre', 'relacionado', 'email'];
var data = [
  [0, 'hormiga', 'pequeña', 'hormiga@mail.com'],
  [1, 'delfín', 'inteligente', 'delphin@mail.com'],
  [2, 'paloma', 'paz', 'paloma@mail.com'],
  [3, 'serpiente', 'veneno', 'serpiente@mail.com'],
  [4, 'gato', 'juguetón', 'gato@mail.com'],
  [5, 'perro', 'ladra', 'perro@mail.com'],
  [6, 'oveja', 'lana', 'oveja@mail.com'],
  [7, 'caballo', 'galopa', 'caballo@mail.com'],
  [8, 'pony', 'feria', 'pony@mail.com'],
  [9, 'águila', 'grande', 'aguila@mail.com'],
  [10, 'topo', 'ciego', 'topo@mail.com'],
  [11, 'cigüeña', 'nido', 'ciguenia@mail.com']
];

ReactDOM.render(<ReactTable columns={col} data={data}/>, document.getElementById('root'));
