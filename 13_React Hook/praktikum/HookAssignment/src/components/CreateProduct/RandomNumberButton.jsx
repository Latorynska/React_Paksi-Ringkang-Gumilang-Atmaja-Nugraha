const RandomNumberButton = () => {
    const getRandomNumber = () => {
        let getNumber = Math.floor(Math.random() * 101);
        console.log(getNumber)
    }
    return ( 
        <>
            <button onClick={getRandomNumber}>
                Random Number!
            </button>
        </>
     );
}
 
export default RandomNumberButton;