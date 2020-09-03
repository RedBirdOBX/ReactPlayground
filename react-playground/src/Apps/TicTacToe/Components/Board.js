import React from 'react';
import Square from './Square';


class Board extends React.Component
{
    RenderSquare(squareId)
    {
        return (
                <Square
                    value={this.props.squares[squareId]}
                    OnSquareClick={() => this.props.OnSquareClick(squareId)}
                />
                );
    }

    render()
    {
      return (
        <div>
          <div className="board-row">
            {this.RenderSquare(0)}
            {this.RenderSquare(1)}
            {this.RenderSquare(2)}
          </div>
          <div className="board-row">
            {this.RenderSquare(3)}
            {this.RenderSquare(4)}
            {this.RenderSquare(5)}
          </div>
          <div className="board-row">
            {this.RenderSquare(6)}
            {this.RenderSquare(7)}
            {this.RenderSquare(8)}
          </div>
        </div>
      );
    }
}

export default Board;

