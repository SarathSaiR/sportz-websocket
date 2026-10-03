import express from 'express'
const app = express()
const port=8000
app.use(express.json())
app.get('/',(req,res)=>{
    res.sendd('hello from express')
})
app.listen(port,()=>{
    console.log(`server is running at http://lovcalhost:${port}`)
})