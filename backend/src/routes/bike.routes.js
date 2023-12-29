const { Router } = require('express');
const router = Router();

router.post('/bikes/create', (req, res) => {});
router.get('/bikes/all', (req, res) => {});
router.delete('/bikes/delete/:id', (req, res) => {});

router.put('/bikes/:id/status', (req, res) => {});

router.get('/bikes/stats', (req, res) => {});

module.exports = router;
