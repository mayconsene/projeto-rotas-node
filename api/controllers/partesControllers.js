
module.exports = {
  hondaCityCgTitanPainel,
  hondaCityCgTitanTanque,
  hondaCityCgTitanCarenagem,
  hondaCityCgTitanRodas,
  hondaCityCgTitanFreios
}

function hondaCityCgTitanPainel(req, res) {
  res.render('partes/painel.ejs', {title: 'Painel'})
}

function hondaCityCgTitanTanque(req, res) {
  res.render('partes/tanque.ejs', {title: 'Tanque'})
}

function hondaCityCgTitanCarenagem(req, res) {
  res.render('partes/carenagem.ejs', {title: 'Carenagem'})
}

function hondaCityCgTitanRodas(req, res) {
  res.render('partes/rodas.ejs', {title: 'Rodas'})
}

function hondaCityCgTitanFreios(req, res) {
  res.render('partes/freios.ejs', {title: 'Freios'})
}
