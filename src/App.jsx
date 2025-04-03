import './App.css';
import soldTv from "./helpers/AmountOfSoldTv.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import purchasedTvs from "./helpers/purchasedTv.js"
import stock from "./helpers/inStock.js";
import infoTv from "./helpers/infoTv.js";
import price from "./helpers/price.js";
import screenSize from "./helpers/screenSize.js";

function App() {
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
          <div>
              <p>{infoTv(bestSellingTv)}</p>
              <p>{price(bestSellingTv)}</p>
              <p>{screenSize(bestSellingTv)}</p>
          </div>
      </>
  )
}

export default App
