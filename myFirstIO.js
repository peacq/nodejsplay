/**
 * Created by b.piskulic on 5/17/2016.
 */

var fs = require('fs');

var filePath = process.argv[2];

var buf = fs.readFileSync(filePath);

var str = buf.toString();

var count = str.split('\n').length;

console.log(count-1);
