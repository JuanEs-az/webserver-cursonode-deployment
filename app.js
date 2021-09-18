require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8081
//*TODO: require('hbs') -DONE-
const hbs = require('hbs')


//HBS render
app.set( 'view engine', 'hbs' )
hbs.registerPartials(__dirname + '/views/templates')
//Renderizar contenido estatico
app.use( express.static( 'public' ) )

app.get('/', (req, res) => {
    res.render("home", {
        nombre: 'Juan Esteban Arango Zapata',
        title: 'Curso Node'
    });
})

app.get('/generic', (req, res) => {
    res.render("generic",{
        nombre: 'Juan Esteban Arango Zapata',
        title: 'Curso Node'
    })
})
app.get('/elements', (req, res) => {
    res.render("elements",{
        nombre: 'Juan Esteban Arango Zapata',
        title: 'Curso Node'
    })
})
app.get('*', (req, res) => {
    res.sendFile(__dirname + "/public/404.html")
})
app.listen(port, () => {
    console.log(`Running in http://localhost:${port}`)
})