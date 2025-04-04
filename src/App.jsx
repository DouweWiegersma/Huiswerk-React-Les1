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
function App() {
    function buttom1(){
            console.log("Meest verkocht eerst")
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
                  <button className="buttoms" onClick={buttom1} type="buttom">Meest verkocht</button>
                  <button className="buttoms" onClick={buttom1} type="buttom">Goedkoopste</button>
                  <button className="buttoms" onClick={buttom1} type="buttom">Meest geschikt</button>
              </div>
          </div>
      </>
  )
}

export default App
