const partesController = require('../controllers/partesControllers.js');

app.get('/honda/city/cg-titan/rodas', partesController.hondaCityCgTitanRodas);
app.get('/honda/city/cg-titan/carenagem', partesController.hondaCityCgTitanCarenagem);
app.get('/honda/city/cg-titan/tanque', partesController.hondaCityCgTitanTanque);
app.get('/honda/city/cg-titan/painel', partesController.hondaCityCgTitanPainel);
app.get('/honda/city/cg-titan/freios', partesController.hondaCityCgTitanFreios);
