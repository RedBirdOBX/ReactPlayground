import React from 'react';
import BoardComponent from './Components/BoardComponent';

class TicTacToeApp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            // history is an array of 9 squares and their state
            history: [ { squares: Array(9).fill(null) } ],
            stepNumber: 0,
            xIsNext: true
        };
    }

    SquareClickHandler(squareId)
    {
        console.clear();
        // as we click, see the entries in the history array
        console.log("state's history");
        console.dir(this.state.history);

        // This ensures that if we “go back in time” and then make a new move from that point,
        // we throw away all the “future” history that would now become incorrect.
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        console.log("history");
        console.dir(history);

        const current = history[history.length - 1];
        console.log("current");
        console.dir(current)

        const squares = current.squares.slice();

        if (this.CalculateWinner(squares) || squares[squareId])
        {
            return;
        }

        squares[squareId] = this.state.xIsNext ? "X" : "O";

        this.setState({
                        // adding squares to the history
                        history: history.concat([{ squares: squares } ]),
                        stepNumber: history.length,
                        xIsNext: !this.state.xIsNext
                    });
    }

    JumpTo(step)
    {
        this.setState(
        {
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    CalculateWinner(squares)
    {
        const winningLines =
        [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winningLines.length; i++)
        {
            const [a, b, c] = winningLines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
            {
                return squares[a];
            }
        }
        return null;
    }

    render()
    {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.CalculateWinner(current.squares);
        const moves = history.map((step, move) =>
        {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.JumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner)
        {
            status = "Winner: " + winner;
        }
        else
        {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        return (
            <div className="mt-3">
                <h4 className="pb-5">Tic Tac Toe App</h4>
                <div className="game">
                    <div className="game-board">
                        <BoardComponent
                            squares={current.squares}
                            OnSquareClick={(squareId) => this.SquareClickHandler(squareId)}
                        />
                    </div>
                    <div className="game-info">
                        <div>{status}</div>
                        <ol>{moves}</ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default TicTacToeApp;
