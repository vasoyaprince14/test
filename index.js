const express = require('express');
const bodyParser = require('body-parser');


// Create Express app
const app = express();
app
    .use(express.json({ limit: '20MB' }))
    .use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
    .post('/bfhl', (req, res) => {
        const {data=[]} = req.body; // let data=[“a”,”1”,”334”,”4”,”R”]
        let odd_numbers = [];
        let even_numbers = [];
        let alphabets = [];
        data.forEach((item) => {
            if (isNaN(item)) {
                alphabets.push(item);
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
            user_id: "ishan_singla_29042003",
            email: "ishan0648.be21@chitkara.edu.in",
            roll_number: "2110990648",
            odd_numbers,
            even_numbers,
            alphabets
            
        });
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