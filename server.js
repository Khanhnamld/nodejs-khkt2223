const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const connectDB = require('./server/database/connection');
const app = express();
const cors = require('cors');
const axios = require('axios');
const Io = require('socket.io')
const http = require('http').createServer(app);
const PORT = process.env.PORT || 8080
const {
    Server
} = require('socket.io');
const io = new Server(http);

let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

let date_time = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
console.log(date_time);

io.on('connection', (socket) => {
    console.log('user connected') 
    socket.on("join", (data) =>{
        io.emit("fromServer", data);
        console.log("web_send: ",data);
        
    })  
    socket.on("fromClient", (data) =>{
        console.log(data);
        io.emit("web", data);
        // socket.emit("fromServer", data);
    }
    )
    socket.on('res_ans', data => { 
        console.log(data); 
        if (data < 32) {
            t1 = "Không có nguy cơ";
        } 
        else {
            t1 = "Có nguy cơ";
        }
  
        axios.post(`http://localhost:${PORT}/api/ds_benhnhan/`, 
        {
            ten: `Nguyễn Văn A`,
            tuoi: `6`,
            gioitinh: `Nam`,
            chandoan: `${t1}`, 
            thoigian: `${date_time}`,
            ketqua: `${data}`
        });
    })
})

app.get('/nhap', (req, res) => {
    res.sendFile(__dirname + '/index.html', {IO: Io});
})

app.use(cors());

dotenv.config( { path : 'config.env'} )

// log requests
app.use(morgan('tiny'));
// app.use(express.json());

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))
app.use(bodyparser.json())

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js"))) 
// load routers
app.use('/', require('./server/routes/router'))

// app.listen(3000, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
http.listen(PORT, () => {
    console.log(`socket io listening on port ${PORT}`);
});
