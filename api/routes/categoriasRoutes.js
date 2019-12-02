const categoriasController = require('../controllers/categoriasControllers.js');

app.get('/honda/city', categoriasController.hondaCity);
app.get('/honda/trail', categoriasController.hondaTrail);
app.get('/honda/off-road', categoriasController.hondaOffRoad);
app.get('/honda/sport', categoriasController.hondaSport);
app.get('/honda/scooter', categoriasController.hondaScooter);
