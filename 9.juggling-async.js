// const http = require('http');
// const concatStream = require('concat-stream');
//
// const urls = process.argv.slice(2);
// const results = [];
// let count = 0;
//
// urls.forEach((url, i) => {
//   http.get(url, (response) => {
//     response
//       .setEncoding('utf8')
//       .pipe(concatStream((data) => {
//         results[i] = data;
//         count++;
//
//         if (count === urls.length) {
//           results.forEach((result) => {
//             console.log(result);
//           });
//         }
//       }));
//   });
// });

const http = require('http');
const bl = require('bl');
const results = [];
let count = 0;

const printResults = () => {
  for (let i = 0; i < 3; i++) {
    console.log(results[i]);
  }
};

const httpGet = (index) => {
  http.get(process.argv[2 + index], (response) => {
    response.pipe(bl((err, data) => {
      if (err) {
        return console.error(err);
      }

      results[index] = data.toString();
      count++;

      if (count === 3) {
        printResults();
      }
    }))
  })
};

for (let i = 0; i < 3; i++) {
  httpGet(i);
}
