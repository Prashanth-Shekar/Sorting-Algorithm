function bubbleSort() {
    var i;
    var a = [];
    a = document.getElementById("array").value;
    x = a.split(",");

    console.log(typeof (x));
    console.log(x);

    //bubbleSort Algorithm
    var len = x.length;
    var i, j, jmax;


    for (i = 0; i < len; i++) {
        jmax = len - i;
        for (j = 0; j < jmax; j++) {
            if (x[j] > x[j + 1]) {
                temp = x[j];
                x[j] = x[j + 1];
                x[j + 1] = temp;
            }

        }

    }
    console.log(x);
    document.getElementById("result").innerHTML = x;

}


