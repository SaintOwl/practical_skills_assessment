'use strict';

const Router = require('express');
const router = Router();

const {
  getServices,
  getPricing,
  placeOrder
} = require('../controllers/serviceController');

router.get('/home', getServices);
router.get('/service/:slug', getPricing);

router.post('/checkout', placeOrder);

router.get('/test', 
  (req, res) => res.status(200).json({ message:'ok' })
);

module.exports = router;
