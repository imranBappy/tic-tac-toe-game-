import { useState } from "react";
const init = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
]
const Game = () => {
    const [count, setCount] = useState(init)
    const [history, setHistory] = useState([])
    const [isBack, setIsBack] = useState(-1)

    const [isOver, setIsOver] = useState(false)
    const gameIsOver = (scores) => {

        for (let i = 0; i < scores.length; i++) {
            if (scores[i][0] !== 1 && scores[i][1] !== 1 && scores[i][2] !== 1) {
                if (scores[i][0] === scores[i][1] && scores[i][1] === scores[i][2]) {
                    setIsOver(true)
                }
            }
        }
        for (let i = 0; i < scores.length; i++) {
            if (scores[0][1] !== 1 && scores[1][i] !== 1 && scores[2][i] !== 1)
                if (scores[0][i] === scores[1][i] && scores[1][i] === scores[2][i]) {
                    setIsOver(true)
                }
        }
        if (scores[0][0] !== 1)
            if (scores[0][0] === scores[1][1] && scores[1][1] === scores[2][2]) {
                setIsOver(true)
            }
        if (scores[0][2] !== 1)
            if (scores[0][2] === scores[1][1] && scores[1][1] === scores[2][0]) {
                setIsOver(true)
            }
    }


    const handleClick = (row, col) => {
        let score = Math.round(Math.random() * 1) === 1 ? 'X' : 'O'
        let newScore = [[...count[0]], [...count[1]], [...count[2]]];
        if (newScore[row][col] === 1) {
            newScore[row][col] = score;
            gameIsOver([...newScore]);
            setHistory([...history, newScore])
            setCount(newScore)
            if (isBack !== -1) {
                setHistory(history.slice(0, isBack + 1))
                setIsBack(-1)
            }
        }
    }
    const handleMove = ({ item, index }) => {
        setCount(item)
        setIsBack(index)
    };
    const handleStart = () => {
        setCount(init)
        setHistory([]);
        setIsOver(false);
    }
    return (
        <>
            {
                isOver && <h1 className=' text-center text-2xl text-orange-700 font-bold py-5 uppercase'>Game is over</h1>
            }
            <div className="flex  justify-evenly">
                <div className="
                    flex ring-4 ring-orange-700  w-96  h-96
                    flex-wrap justify-center items-center     ">
                    <div onClick={() => handleClick(0, 0)} className=" font-bold text-5xl text-emerald-900 cursor-pointer ring-2 ring-orange-700  basis-1/3  h-1/3  flex items-center justify-around ">
                        {(count[0][0] === 1) ? "" : count[0][0]}
                    </div>
                    <div onClick={() => handleClick(0, 1)} className=" font-bold text-5xl text-emerald-900 cursor-pointer ring-2 ring-orange-700  basis-1/3  h-1/3  flex items-center justify-around ">
                        {(count[0][1] === 1) ? "" : count[0][1]}
                    </div>
                    <div onClick={() => handleClick(0, 2)} className=" font-bold text-5xl text-emerald-900 cursor-pointer ring-2 ring-orange-700  basis-1/3  h-1/3  flex items-center justify-around ">
                        {(count[0][2] === 1) ? "" : count[0][2]}
                    </div>


                    <div onClick={() => handleClick(1, 0)} className=" font-bold text-5xl text-emerald-900 cursor-pointer ring-2 ring-orange-700  basis-1/3  h-1/3  flex items-center justify-around ">
                        {(count[1][0] === 1) ? "" : count[1][0]}
                    </div>
                    <div onClick={() => handleClick(1, 1)} className=" font-bold text-5xl text-emerald-900 cursor-pointer ring-2 ring-orange-700  basis-1/3  h-1/3  flex items-center justify-around ">
                        {(count[1][1] === 1) ? "" : count[1][1]}
                    </div>
                    <div onClick={() => handleClick(1, 2)} className=" font-bold text-5xl text-emerald-900 cursor-pointer ring-2 ring-orange-700  basis-1/3  h-1/3  flex items-center justify-around ">
                        {(count[1][2] === 1) ? "" : count[1][2]}
                    </div>


                    <div onClick={() => handleClick(2, 0)} className=" font-bold text-5xl text-emerald-900 cursor-pointer ring-2 ring-orange-700  basis-1/3  h-1/3  flex items-center justify-around ">
                        {(count[2][0] === 1) ? "" : count[2][0]}
                    </div>
                    <div onClick={() => handleClick(2, 1)} className=" font-bold text-5xl text-emerald-900 cursor-pointer ring-2 ring-orange-700  basis-1/3  h-1/3  flex items-center justify-around ">
                        {(count[2][1] === 1) ? "" : count[2][1]}
                    </div>
                    <div onClick={() => handleClick(2, 2)} className=" font-bold text-5xl text-emerald-900 cursor-pointer ring-2 ring-orange-700  basis-1/3  h-1/3  flex items-center justify-around ">
                        {(count[2][2] === 1) ? "" : count[2][2]}
                    </div>


                </div>

                <div >
                    <ul className=" " >
                        <ol onClick={handleStart} className=" border border-t-lime-950 ">
                            <button>Go To Game Start </button>
                        </ol>
                        {
                            history.map((item, index) => {
                                return (

                                    <ol onClick={() => handleMove({ item, index })} className=" border border-t-lime-950 " key={index}>
                                        <button>Go To Move #{index} </button>
                                    </ol>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        </>
    );
};

export default Game;