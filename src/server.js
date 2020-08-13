const app = require('./app');

app.listen( process.env.PORT, ()=>{
    console.log(`Lisntening to the port: ${process.env.PORT}`);
});