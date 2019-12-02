module.exports = {
  hondaCity,
  hondaTrail,
  hondaOffRoad,
  hondaSport,
  hondaScooter,

}

function hondaCity(req, res) {
  res.render('categorias/city.ejs', {title: 'Honda City'})
}
function hondaTrail(req, res) {
  res.render('categorias/trail.ejs', {title: 'Honda Trail'})
}
function hondaOffRoad(req, res) {
  res.render('categorias/off_road.ejs', {title: 'Honda Off Road'})
}
function hondaSport(req, res) {
  res.render('categorias/sport.ejs', {title: 'Honda Sport'})
}
function hondaScooter(req, res) {
  res.render('categorias/scooter.ejs', {title: 'Honda Scooter'})
}

