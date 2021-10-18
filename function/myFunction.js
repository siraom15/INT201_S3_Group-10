function random(array = []) {

    function randomInArray(round = 0) {
        let result = [];
        for (let i = 0; i < round; i++) {
            result.push(array[Math.floor(Math.random() * array.length)]);
        }
        return result;
    }

    return randomInArray;
}

export { random }

