function test(x) {
    return (() == ());
}
for (i = 0; i <= 100; i++) {
    if (test(i)) {
        console.log(i);
        break;
    }
}
