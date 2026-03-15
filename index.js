import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 8080

app.get("/", (req, res)=>{
    res.status(200).json({
        msg: "Hello from the v1 server"
    })
})

app.listen(PORT,'0.0.0.0', ()=>{
    console.log(`Server is up and running on PORT ${PORT}`)
})