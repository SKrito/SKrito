const fs = require('fs');
const https = require('https');

//PDF Viewer потрібно

const fileUrl = 'https://files.pidruchnyk.com.ua/uploads/book/10-klas-istorija-ukrajini-vlasov-2018-stand.pdf'
const fileName = 'Book.pdf'

https.get(fileUrl, (res) => {
  const file = fs.createWriteStream(fileName);
  res.pipe(file);
  
  file.on('finish', () => {
    console.log('Download complete.');
    file.close();
  });
})
