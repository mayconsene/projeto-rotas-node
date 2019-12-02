
module.exports = {
  hondaCityBiz,
  hondaCityCgFan,
  hondaCityCgTitan,
  hondaCityPop
}

function hondaCityPop(req, res) {
  res.render('tipos/pop.ejs', {title: 'Honda City Pop'})
}

function hondaCityBiz(req, res) {
  res.render('tipos/biz.ejs', {title: 'Honda City Biz'})
}

function hondaCityCgFan(req, res) {
  res.render('tipos/cg_fan.ejs', {title: 'Honda City CG Fan'})
}

function hondaCityCgTitan(req, res) {
  res.render('tipos/cg_titan.ejs', {title: 'Honda City CG Titan'})
}
