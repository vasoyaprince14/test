const express = require('express');
const bodyParser = require('body-parser');


// Create Express app
const app = express();
app
    .use(express.json({ limit: '20MB' }))
    .use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
    .post('/bfhl', (req, res) => {
        try{
        const {data=[]} = req.body; // let data=[“a”,”1”,”334”,”4”,”R”]
        if (!data.length) {
            res.status(400).json({
                is_success: false,
                message: "Invalid data"
            });
            return;
        }
        let odd_numbers = [];
        let even_numbers = [];
        let alphabets = [];
        data.forEach((item) => {
            if (isNaN(item)) {
                alphabets.push(item.toUpperCase());
            } else {
                if (item % 2 === 0) {
                    even_numbers.push(item);
                } else {
                    odd_numbers.push(item);
                }
            }
        });
        res.json({
            is_success: true,
            user_id: "prince_vasoya_29042003",
            email: "prince1065.be21@chitkara.edu.in",
            roll_number: "2110991065",
            odd_numbers,
            even_numbers,
            alphabets

        });
    }catch(err){
        res.status(500).json({
            is_success: false,
            message: "Internal server error"
        });
    }
    });

app.use("/",(res,res)=>{
res.json({"hello"});
});
//     Request
// {
// "data": [“a”,”1”,”334”,”4”,”R”]
// }
// Response
// {
// "is_success": true,
// "user_id": "john_doe_17091999", “email” : “john@xyz.com”,
// “roll_number”:”ABCD123”,
// "odd_numbers": [“1”],
// "even_numbers": [“334”,”4”],
// "alphabets": [“A”,”R”]
// }



// Start the server
const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
