const path = require('path')
const express = require('express')
const app = express()//this creates a new express app
const PORT = 3000
const heroes = require('./data/heroes.json') //this imports the JSON array where your data is stored. get it data folder.
app.use(express.static('public'))

// Continue with the rest of the hero objects...

  
//HTML/ Views Routes
app.get('/', (req, res) => { //app equals application which what we are making, get is the type of request, this function needs three parameters, a path, a request, and a respons
    res.sendFile(path.join(__dirname, 'public', 'index.html'))  //this is the safest way to build paths 
    })

app.get('/public/css/style.css', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'css', 'style.css'))
    })
    
    
    
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'about.html'))
})

app.get('/contact', (req,res)=> {
  res.sendFile(path.join(__dirname,'public', 'contact.html'))
})



//API ROUTES thesee are the routes that serve back data.

app.get('/api/all-heroes', (req, res) =>{
  res.json(heroes)
 })
 
 //API ROUTES

app.get('/api/search-heroes', (req, res) =>{
 const searchedName= req.query.name// this is the query that comes from the route. 
  const results = heroes.filter(hero => hero.name === searchedName)
res.json(results)
})
 




app.listen(PORT, () => {
  console.log(`Express App listening on port http://localhost:${PORT}`) //this one is important, without it you can't open the port.
})




// api.post('/api/createHero', (req, res)=> {
//     // TODO: 
//     const newReview = req.body
//     writetoFile()

//     res.json(`${req.method} received.`)
// } )   //this is the path for the route notice the domain name is not needed.
