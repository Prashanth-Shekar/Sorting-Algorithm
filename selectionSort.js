function selectionSort(a) {
    var length = a.length;
    for (var i = 0; i < length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < length; j++) {
            if (items[j] < items[min]) {
                min = j;
            }
        }
        if (min != i) {
            var temp = a[i];
            a[i] = a[min];
            a[min] = temp;
        }
    }
}