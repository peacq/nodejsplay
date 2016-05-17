/**
 * Created by b.piskulic on 5/17/2016.
 */

// console.log(process.argv);

var result = 0;
for(var i = 2;i < process.argv.length;i++){
    result += Number(process.argv[i]);
}

console.log(result);