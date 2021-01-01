const app = require('express')();
const path = require('path');
const bodyParser = require('body-parser');
const defenseController = require("./controllers/DefenseController");
require("./config/db");

const { PORT = 3000 } = process.env;


app.get('/', function (req, res) {
  res.send('Defense Service')
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
  .route("/defense-service/:lat/:long")
  .get(defenseController.locationCheck)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
