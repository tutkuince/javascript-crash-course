function test() {
    const constNum = 0;
    let letNum = 0;
    const arr = [1, 2, 3];
    // arr = [1, 2, 3, 4];
    arr.push(4);
    console.log(arr);

    // constNum = 2; we cannot change const values.
    if (true) {
        var varNum = 0;
    }

    console.log("varNum", varNum);
    console.log("letNum", letNum);
    console.log("constNum", constNum);
}

test();





