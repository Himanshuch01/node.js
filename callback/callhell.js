–fs.readFile('file1.txt', 'utf8', (err, data1) => {
  fs.readFile('file2.txt', 'utf8', (err, data2) => {
    fs.readFile('file3.txt', 'utf8', (err, data3) => {
      console.log(data1, data2, data3);
    });
  });
});
