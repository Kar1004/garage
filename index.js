const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const cors = require('cors')
const port = 3001

mongoose.connect('mongodb://localhost:27017/Garage')

const carSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: Number,
  created: {
    type: Date,
    default: Date.now,
  },
})

const CarModel = mongoose.model('garage', carSchema)

const Renault = new CarModel({
  brand: 'Renault',
  model: 'Espace',
  year: 1999,
})
// Renault.save().then((Onecar) => {
//   console.log(Onecar)
// })

const Renault2 = new CarModel({
    brand: 'Renault',
    model: 'Scenic',
    year: 2004,
  })

//   Renault2.save()
//           .then((Onecar)=>{
//               console.log(Onecar);
//           })
const Peugeot = new CarModel({
    brand: 'Peugeot',
    model: '308',
    year: 2017,
  })
//   Peugeot.save()
//           .then((Onecar)=>{
//               console.log(Onecar);
//           })



// CarModel.findById({_id:'626d009c27d427167b4d3e66'})
//         .exec()
//         .then(cars =>{
//             console.log(cars);
//         })

        
// CarModel.findOneAndUpdate({_id:'626d009c27d427167b4d3e66'} , { $set : { year : 2000} })
//                 .exec()
//                .then(Onecars =>{
//             console.log(Onecars);
//         })

        // CarModel.deleteMany({_id:'626d009c27d427167b4d3e66'})
        //         .exec()
        //        .then(Onecars =>{
        //     console.log(Onecars);
        // })
CarModel.insertMany([
    
    {
        brand: 'Aston Martin',
        model: 'DB9 ',
        year: 2010 ,
      },
    {
        brand: 'Range Rover',
        model: 'Discovery Sport ',
        year: 2017,
      }
])

app.listen(port, () => {
  console.log(`le ${port} est en marche`)
})
