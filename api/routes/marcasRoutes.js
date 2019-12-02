var marcasController = require('../controllers/marcasControllers.js');

app.get('/harley', marcasController.harley);
app.get('/suzuki', marcasController.suzuki);
app.get('/honda', marcasController.honda);
app.get('/yamaha', marcasController.yamaha);
app.get('/lambreta', marcasController.lambreta);

