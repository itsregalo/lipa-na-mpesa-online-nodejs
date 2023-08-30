require('dotenv').config();

const IndexView = async (req, res) => {
    res.send("<h1>Hello Daraja!</h1>");
}

module.exports = {
    IndexView
}