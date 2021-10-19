const express =     require('express');
const app =         express();
const axios=        require('axios');

console.log("cheers to a new start");
let details;
const data = async()=>{
    const flights = await axios.get(`https://rosterbuster.aero/wp-content/uploads/dummy-response.json`);
    details = flights.data[0];
    console.log(details);
    return details;
}

app.get('/', (req, res)=>{
    res.status(200).send(details);
});

const PORT = process.env.PORT||8000;
app.listen(PORT, ()=> {
    console.log(`server is up and running on http://localhost:${PORT}`);
});