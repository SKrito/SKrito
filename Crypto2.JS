const fs = require('fs');
const CryptoJS = require('crypto-js');

//Шифрування даних в файлі

function encryptFile(fileName, key) 
{
  const fileData = fs.readFileSync(fileName, 'utf-8');
  const encryptedData = CryptoJS.AES.encrypt(fileData, key).toString();
  const newFileName = fileName.replace(/\.[^/.]+$/, '') + '.enc';
  fs.writeFileSync(newFileName, encryptedData);
  console.log('Файл успішно зашифровано');
}

// Дешифрування даних в файлі

function decryptFile(fileName, key) 
{
  const encryptedData = fs.readFileSync(fileName, 'utf-8');
  const decryptedData = CryptoJS.AES.decrypt(encryptedData, key).toString(CryptoJS.enc.Utf8);
  const newFileName = fileName.replace('.enc', '.txt');
  fs.writeFileSync(newFileName, decryptedData);
  console.log('Файл успішно дешифровано');
}

//Шифрування файлу і зберігання в розширення ".enc"

function encryptAndSaveFile(fileName, key) 
{
  const fileData = fs.readFileSync(fileName);
  const encryptedData = CryptoJS.AES.encrypt(fileData, key);
  const newFileName = fileName.replace(/\.[^/.]+$/, '') + '.enc';
  fs.writeFileSync(newFileName, encryptedData);
  console.log('Файл успішно зашифровано');
}

//Дешифрування файлу і зберігання в розширення ".txt"

function decryptAndSaveFile(fileName, key) {
  const encryptedData = fs.readFileSync(fileName);
  const decryptedData = CryptoJS.AES.decrypt(encryptedData, key).toString(CryptoJS.enc.Utf8);
  const newFileName = fileName.replace('.enc', '.txt');
  fs.writeFileSync(newFileName, decryptedData);
  console.log('Файл успішно дешифровано');
}
