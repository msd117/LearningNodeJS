 var buf= new Buffer("John Doe",'utf8');
 console.log(buf);
 console.log(buf.toString());
 console.log(buf.toJSON());
 console.log(buf.toLocaleString());
 console.log(buf[5]);
 buf.write("jane");
 console.log(buf.toString());

//  ES6 Version of buffer

var Buf2= new ArrayBuffer(8);
var view = new Int32Array(Buf2);
view[1]=35;
view[0]=09;
view[3]=76;
console.log(view)
 