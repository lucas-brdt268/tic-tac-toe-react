
export default function Square({mark, onClick}) 
{
    //

    return (
        <button className="square" onClick={onClick}>{mark}</button>
    );
}