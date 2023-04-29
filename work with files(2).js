const fs = require ('fs')
const arr = []


// 1 Додавання продукту у список
 pushInArr(arr,'Audi','p8','yellow',2022)
 pushInArr(arr,'Mclaren','720S','bleak',2018)


 // 2 Отримати дані по айді
verify(0)
verify(1)

 
 //3 видалення по айд
dell(1)
 
 //4 зміна по айді
change(0,'La Ferrari','SF90', 'red', 19162500)



 //запис
function write(arr){
    fs.writeFileSync('./car.csv', JSON.stringify(arr), 'utf-8');
}

//Запис даних
function pushInArr (arr, name1, model1, color1, year1){
    arr.push({id: arr.length, Name : name1 , Model : model1 , Color : color1, Year : year1 })
    return arr && write(arr)
}

//Отримати дані по айді
function verify(id1){
    fs.readFile('./car.csv', 'utf-8', (err,data)=>{
        const a = JSON.parse(data)
    for(let i = 0; i<a.length; i++){
let temp = a[i].id
let temp1 = a[id1]
        if(temp === id1){
        console.log(temp1)
        }
    }
})
}

//Видалення по айді
function dell(id){
    fs.readFile('./car.csv', 'utf-8', (err,data)=>{
        const a = JSON.parse(data)
        delete a[id]
        fs.writeFileSync('./car.csv', JSON.stringify(a), 'utf-8');

})
}

//Перезиписування по айді
function change(id, name1, model1, color1, year1){
    fs.readFile('./car.csv', 'utf-8', (err,data)=>{
        const a = JSON.parse(data)
a[id].Name = name1
a[id].Model = model1
a[id].Color = color1
a[id].Year = year1
    fs.writeFileSync('./car.csv', JSON.stringify(a), 'utf-8');  
})
}
