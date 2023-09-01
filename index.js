

const express = require("express")

const mongoose = require('mongoose')

const app = express()

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.get('/', (req, res) => {

    res.json({ message: 'oi Express!' })

})





mongoose.connect(
    'mongodb+srv://stmacoli:1234@cluster0.to9gtm4.mongodb.net/bancodaapi?retryWrites=true&w=majority'
    )

    .then(() => {
        console.log('Conectamos ao MONGODB')
        app.listen(3000)
    })


    .catch((err) => console.log(err))
    


app.listen(3000)





// mongodb+srv://stmacoli:1234@cluster0.to9gtm4.mongodb.net/bancodaapi?retryWrites=true&w=majority











