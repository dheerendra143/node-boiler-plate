const healthListCtrl = (req, res, next) => {
  console.log('kjhjklgj gjh');
  res.status(200).send({message: 'health hello'});
};

module.exports = {
  healthListCtrl
};
