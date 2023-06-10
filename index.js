const app = require('express')()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const user = require('./router/users')
const port = 1500


app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Helo All From Express")
});

app.use('/', user)

app.listen(port, () => {
    console.log(`Port is Running in ${port}`);
});