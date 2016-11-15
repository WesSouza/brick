class Piece {
  static isPiece(object) {
    return object instanceof Piece;
  }

  constructor(props, children) {
    this.props = props;
    this.children = children;
  }
}

module.exports = Piece;
