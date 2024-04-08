import app from './app';

const api_port = process.env.API_PORT ?? '3333';

app.listen(api_port , ()=> {
    console.log(" API Listem port " + api_port)
});