function test(x) {return ((/*first side*/) == (/*other side*/));};var start = 0;var max = 100;var increment = 1;for (i = start; i <= max; i+increment) {if (test(i)) {console.log(i);break;}}
//Does not work for some reason. Debugging in progress.
