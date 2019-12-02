const tiposController = require('../controllers/tiposControllers.js');

app.get('/honda/city/pop', tiposController.hondaCityPop);
app.get('/honda/city/biz', tiposController.hondaCityBiz);
app.get('/honda/city/cg-fan', tiposController.hondaCityCgFan);
app.get('/honda/city/cg-titan', tiposController.hondaCityCgTitan);
