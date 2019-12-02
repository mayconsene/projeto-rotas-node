module.exports = {
  harley,
  suzuki,
  honda,
  yamaha,
  lambreta
}

function harley(req, res) {
  res.render('marcas/harley.ejs', {title: 'harley'})
}
function suzuki(req, res) {
  res.render('marcas/suzuki.ejs', {title: 'suzuki'})
}
function honda(req, res) {
  res.render('marcas/honda.ejs', {title: 'honda'})
}
function yamaha(req, res) {
  res.render('marcas/yamaha.ejs', {title: 'yamaha'})
}
function lambreta(req, res) {
  res.render('marcas/lambreta.ejs', {title: 'lambreta'})
}
