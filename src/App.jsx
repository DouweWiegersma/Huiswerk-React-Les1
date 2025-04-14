import './App.css';
import soldTv from "./helpers/AmountOfSoldTv.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import purchasedTvs from "./helpers/purchasedTv.js"
import stock from "./helpers/inStock.js";
import infoTv from "./helpers/infoTv.js";
import price from "./helpers/price.js";
import screenSize from "./helpers/screenSize.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";


// import showOutcomeInConsole from './constants/oefenbestand.js';

function App() {
    // showOutcomeInConsole()
    function buttom1() {
        console.log(inventory.sort((a, b) => a.sold - b.sold));
    }
    function buttom2(){
        console.log(inventory.sort((a, b) => a.price - b.price));
    }
    function buttom3(){
        console.log(inventory.sort((a, b) => a.refreshRate - b.refreshRate));
    }

    return (
        <>
            <h1> Tech it easy dashboard</h1>
            <h2> Verkoopoverzicht</h2>
            <div className="outercontainer">
                <div className="innercontainer">
                    <div className="content">
                        <div className="soldTvs">
                            <p>Aantal verkochte producten</p>
                            <p>{soldTv(inventory)}</p>
                        </div>

                        <div className="boughtTvs">
                            <p>Aantal ingekochte producten</p>
                            <p>{purchasedTvs(inventory)}</p>
                        </div>
                        <div className="haveToSell">
                            <p>Aantal te verkopen prodcuten</p>
                            <p>{stock()}</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2> Best verkochte tv</h2>
            <div className="bestTv">
                <img src={bestSellingTv.sourceImg} alt={bestSellingTv.name} height={200}/>
                <div className="infoTvs">
                    <p>{infoTv(bestSellingTv)}</p>
                    <p>{price(bestSellingTv)}</p>
                    <p>{screenSize(bestSellingTv)}</p>
                </div>
                <div className="checkOptions">
                    <p>Wifi <img src={check} alt="check-mark" width={15}/></p>
                    <p>Hdr <img src={check} alt="check-mark" width={15}/></p>
                    <p>AmbiLight <img src={minus} alt="minus" width={15}/></p>
                    <p>Speech <img src={minus} alt="minus" width={15}/></p>
                </div>

                <div className="buttom-layout">
                    <button className="buttoms" onClick={buttom1} type="buttom">meest verkocht</button>
                    <button className="buttoms" onClick={buttom2} type="buttom">Goedkoopste</button>
                    <button className="buttoms" onClick={buttom3} type="buttom">Meest geschikt</button>
                </div>
            </div>
            <div className="tvOptions">
                <h2>Other Options</h2>
                <ul>
                    {inventory.map((inv) => {
                        return <li className="lijst" key={inventory.type}>
                            <img className="tvImage" src={inv.sourceImg} alt="picture-tv" height={200}/>
                            <div className="tvInfos">
                                <p>{infoTv(inv)}</p>
                                <p>{price(inv)}</p>
                                <p>{screenSize(inv)}</p>
                            </div>
                            <div key={inventory.type} className="optionTv">
                                {inv.options.map(
                                    (option) => {
                                        if (option.applicable === true)
                                            return <li className="listCheck" key={inventory.type}>
                                                <p className="para">{option.name}</p>
                                                <img  src={check} alt="minus" width={15}/>
                                            </li>
                                        else {
                                            return <li className="listCheck" key={inventory.type}>
                                                <p className="para">{option.name}</p>
                                                <img src={minus} alt="minus" width={15}/>
                                            </li>
                                        }
                                    })}
                            </div>

                        </li>
                    })}
                </ul>

            </div>


        </>
    )
}

// <div className="optionTv">
//     <p className="optionss">{inv.options.map((option) => (option.applicable && (
//         <li key={inventory.type}> {option.name}</li>
//     )))}</p></div>
export default App
