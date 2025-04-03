function purchasedTvs(tvArray){
    let tv = 0
    for (let i = 0; i < tvArray.length; i++){
        tv = tvArray[i].originalStock + tv
    }
    return tv;
}
export default purchasedTvs