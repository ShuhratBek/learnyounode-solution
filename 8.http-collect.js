const concatStream = require('concat-stream');
const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
  response
    .setEncoding('utf8')
    .pipe(concatStream((data) => {
      console.log(data.length);
      console.log(data);
    }));
});
//
// const http = require('http');
// const bl = require('bl');
//
// http.get(process.argv[2], (response) => {
//   response.pipe(bl((err, data) => {
//     if (err) {
//       return console.error(err);
//     }
//     data = data.toString();
//     console.log(data.length);
//     console.log(data);
//   }));
// });
