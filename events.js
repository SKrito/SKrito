const EventEmitter = require('events');
const fs = require('fs');
const readline = require('readline');
const { json } = require('stream/consumers');
const Mailjet = require('node-mailjet')
const mailjet = new Mailjet({
  apiKey: "7a53e0ecccb4f09f6eb527f7e7630a79",
  apiSecret: "040fe980b22ff766ab4e7d169a53e93b5b7954968059d0d61589eecf48388454"
});

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

async function parser(){
  const rl = readline.createInterface({
    input: fs.createReadStream('./tempterature.json')
  });
  let data = []
  for await (const line of rl) {
    try{
      const pars = JSON.parse(line)
      data.push(pars)
    }catch(err){
      console.log(err)
    }
  }
  return data
}

myEmitter.on('addTemperature', async(date,temperatureMin,temperatureMax) => {
  const data = await parser()
  const filterDate = data.filter(d => d.date == date);
  const dateInData = filterDate.map(d => d.date);

  if(date == dateInData){
    console.log(`День : ${date}, вже записаний `)
  }else{
    const dataWrite = {'date':date, 'temperatureMin': temperatureMin,'temperatureMax': temperatureMax}

  fs.appendFile('./tempterature.json',`${JSON.stringify(dataWrite)}\n`,'utf-8',()=>{
    console.log(`День : ${date}, записано успішно`)

  if(temperatureMin >= 30 || temperatureMax >= 30){
    myEmitter.emit('highTemperature', (temperatureMin,temperatureMax))
  }
  })
}
});

myEmitter.on('averageTemperature', async(date) => {
  const data = await parser()
  const filterDate = data.filter(d => d.date === date);
  const temperaturesMin = filterDate.map(d => d.temperatureMin);
  const temperaturesMax = filterDate.map(d => d.temperatureMax);
  const allTemperatures = temperaturesMin.concat(temperaturesMax);
  let sumTemperatures = 0 
  if (allTemperatures.length > 0) {
  sumTemperatures = allTemperatures.reduce((a, b) => a + b, 0) / allTemperatures.length;
    console.log(`Середня температура повітря на ${date}: ${sumTemperatures}`);
  } else {
    console.log(`Немає даних про температуру на ${date}`);
  }
const result = sumTemperatures
  const request = mailjet
  .post("send", {'version': 'v3.1'})
  .request({
    "Messages":[
      {
        "From": {
          "Email": "savchukv717@gmail.com",
          "Name": "Viktoria Savchuk"
        },
        "To": [
         
          "Email": "YOU-EMAIL@gmail.com",
          "Name": "Temperature Tracker"
                }],
                "Subject": `Average air temp. for ${date}  ${String.fromCodePoint(0x1F321)}  `,
      
                "TextPart": `Average air temp. for${date}: ${AveTemp} ${String.fromCodePoint(0x1F321)} `,
                "HTMLPart": `<h3>Average air temp. for ${date}: ${AveTemp}${String.fromCodePoint(0x1F321)} °C</h3>`
            }]
        })
    request
        .catch((err) => {
            console.log(err.statusCode)
        })
  }
   saveTemp() {
    try {
      fs.writeFileSync(this.tempfilePath, JSON.stringify(this.temp), 'utf8');
    } catch (err) {
      console.error(err);
    }
  }
  

  loadTemp() {
    fs.readFile(this.tempfilePath, 'utf8', (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') { // якщо файл не знайдено
          console.log(`File: ${this.tempfilePath} is not found ${String.fromCodePoint(0x1F601)}. Creating a new one...`);
          this.saveTemp(); // створюємо новий файл
          setTimeout(() => {
            this.emit('tempLoaded');
          }, 1000);
          return;
        }
        console.error(err);
        return;
      }
      try {
        const loadedTemp = JSON.parse(data);
        this.temp = Object.assign({}, this.temp, loadedTemp);
        this.emit('tempLoaded');
      } catch (e) {
        console.error(e);
      }
    });
  }
}

const sensor = new Temp();

sensor.on('highTemp', ({date, temp}) => {
  console.log(`Attention Detention${String.fromCodePoint(0x2757)} Average air temp. higher than 30 C (${temp} Celsium) on ${date}`);
  console.log('----------------------------------------------------')
});

sensor.on('tempLoaded', () => {
  sensor.addTemp("22.04.2023", [19, 22]);
  sensor.addTemp("20.03.2023", [24, 35, 27, 15, 11]);
  sensor.addTemp("18.02.2023", [30]);

  sensor.AveTemp("22.04.2023");
  sensor.AveTemp("20.03.2023");
  sensor.AveTemp("18.02.2023");
 

  console.log(sensor.temp);
});
