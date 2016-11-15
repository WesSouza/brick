const { template, render, Piece } = require('../src/lib/Brick');

const items = [
  'Do',
  'Undo',
  'Redo <Unsafe>',
];

class ListItem extends Piece {
  toString() {
    return template`<li><label><input type=checkbox> ${this.props.item} ${!this.props.item && '(empty)'}</label></li>`;
  }
}

class ToDo extends Piece {
  toString() {
    return template`
      <h1>To Do</h1>
      <ul>
        ${items.map((item) => render(ListItem, { item }))}
        ${ListItem}
      </ul>
    `;
  }
}

document.body.innerHTML = render(ToDo);
