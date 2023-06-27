const express = require('express');
const app = express();


//local variable
const posts = [
    {
        username: "Kyle",
        title:"Post 1"
    },
    {
        username: "Ron",
        title:"Post 2"
    }
]



//test end point
app.get('/test', (req, res) => {
    res.send('Server running ')
})




app.get('/posts', (req, res) => {
    res.send(posts)
})





app.listen(3000, () => {
    console.log('Server running on port 3000')
})