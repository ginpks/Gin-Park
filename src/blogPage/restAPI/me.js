app.get('/', (req, res) => {

    res.send('Hello World!');

});        

app.post('/', (req, res) => {
    const receivedData = req.body;

    console.log(`Data successfully received!: ${JSON.stringify(receivedData)}`);

    res.send('Data received');
})


