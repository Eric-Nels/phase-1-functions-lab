function distanceFromHqInBlocks(block) {
    return Math.abs(42 - block);
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(startBlock,endBlock) {
    return Math.abs((endBlock - startBlock) * 264);
}

function calculatesFarePrice(startBlock, endBlock) {
    if (distanceTravelledInFeet(startBlock, endBlock) < 400)
        return 0;
    else if (distanceTravelledInFeet(startBlock, endBlock) > 400 && distanceTravelledInFeet(startBlock, endBlock) < 2000) 
        return .02 * (distanceTravelledInFeet(startBlock, endBlock) - 400);
    else if (distanceTravelledInFeet(startBlock, endBlock) > 2000 && distanceTravelledInFeet(startBlock, endBlock) < 2500)
        return 25;
    else 
        return "cannot travel that far";
}