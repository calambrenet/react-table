ReactTable
=====================

Very basic DataTable created with React.js.
This is my first React.js component. It is mounted on React Hot Boilerplate (https://github.com/gaearon/react-hot-boilerplate) allowing hot updates. It will soon be available from npm.
It is a good starting point to start studying and learning to use this library. And, of course, all improvements and tips are appreciated.
Use Less for styles.

DataTable muy básica creada con React.js.
Es mi primer componente con React.js. Está montado sobre React Hot Boilerplate (https://github.com/gaearon/react-hot-boilerplate) que permite actualizaciones en caliente. Pronto estará disponible desde npm.
Es un buen punto de partida para empezar a estudiar y aprender a usar esta librería. Como no puede ser de otra forma, se agradecen todas las mejoras y consejos.
Usa Less para los estilos.


### Use/Uso

```
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
```


Opciones por defecto/Default options:

```
paginate={true}
items_by_page={5}
filter={true}
scrolling={false}
```

### Boilerplate

It is mounted on React Hot Boilerplate (https://github.com/gaearon/react-hot-boilerplate) and also can create producction component with Webpack for use on our websites.

Está montado sobre React Hot Boilerplate (https://github.com/gaearon/react-hot-boilerplate) y, además, se puede crear el componente para producción con Webpack y usarlo en nuestras webs.

```
npm install
npm start
open http://localhost:3000
```

### Dependencies/Dependencias

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
* [less-loader](https://github.com/webpack/less-loader)
* [style-loader](https://github.com/webpack/style-loader)
