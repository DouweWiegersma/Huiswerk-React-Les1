function soldTv(tvArray){
    let tvSold = 0
    for (let i = 0; i < tvArray.length; i++){
        tvSold = tvArray[i].sold + tvSold
    }
    return tvSold
}
export default soldTv