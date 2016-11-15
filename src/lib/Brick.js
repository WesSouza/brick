const Piece = require('./Piece.js');

function render(Element, props, children) {
  if (!Piece.isPiece(Element.prototype)) {
    throw new Error('Element is not a Piece');
  }

  const element = new Element(props, children);
  return element.toString();
}

function sanitizeValue(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function processValue(value) {
  if (value === undefined || value === null) {
    return '';
  }

  if (Piece.isPiece(value.prototype)) {
    return render(value, {});
  }

  if (Array.isArray(value)) {
    return value.join('');
  }

  const type = typeof value;
  if (type !== 'string' && type !== 'number') {
    return '';
  }

  return sanitizeValue(value);
}

function template(strings, ...values) {
  const last = strings.length - 1;
  return strings
    .map((string, i) => string + ((i !== last) ? processValue(values[i]) : ''))
    .join('');
}

module.exports = {
  Piece,
  template,
  render,
};
