const crypto = require('crypto');
const fs = require('fs');

// хешування паролю та збереження

function hashAndSave(password) {
  const hash = crypto.createHash('sha266').update(password).digest('hex');
  fs.writeFile('password.txt', hash, (err) => {
    if (err) throw err;
    console.log('Password saved successfully!');
  });
}

//порівняння рядка паролю зі значенням, збереженим у файлі

function comparePassword(password) {
  fs.readFile('password.txt', (err, data) => {
    if (err) throw err;
    const hash = crypto.createHash('sha266').update(password).digest('hex');
    if (hash === data.toString()) {
      console.log('Password matched successfully!');
    } else {
      console.log('Incorrect password!');
    }
  });
}

const args = process.argv.slice(2);
const command=args[0];


if (command === 'hash')
{
  const password=args[1];
  const filePath=args[2];
  try{
    hashAndSave(password, filePath)
  }catch (error){
    console.error('Error:', error);
  }

} else if (command === 'compare') {
const password=args[1];
const filePath=args[2];
try{
  comparePassword(password, filePath)

}catch (error)
{
  console.error('Error:', error);
}
} else 
{
  console.log('Invalid action!');
}
HashAndSave('66622', "./password.txt")
 ComparePass('66622', "./password.txt")
