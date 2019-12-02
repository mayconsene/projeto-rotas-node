module.exports = {
    indexControllers
}

function indexControllers(req, res) {
  res.render('inicio/index.ejs', {title: 'Projeto Rotas'});
}
