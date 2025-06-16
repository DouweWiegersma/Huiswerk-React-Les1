import purchasedTv from "./purchasedTv.js";
import soldTv from "./AmountOfSoldTv.js";
import {inventory} from "../constants/inventory.js";

function stock(){
    let stock = 0
    stock = purchasedTv(inventory) - soldTv(inventory)
    return stock;
}

export default stock