const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employees.controller');

router.get('/employees', EmployeeController.getAll);
router.get('/employees/random', EmployeeController.getRandom);
router.get('/employees/:id', EmployeeController.getSingleRecord);
router.post('/employees', EmployeeController.postRecord);
router.put('/employees/:id', EmployeeController.updateRecord);
router.delete('/employees/:id', EmployeeController.deleteRecord);

module.exports = router;
