const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employeeController");
const authMiddleware = require("../middleware/authMiddleware");

// Get all employees
console.log("Middleware:", typeof authMiddleware);
console.log("Get employees:", typeof employeeController.getAllEmployees);

router.get(
    "/employees",
    authMiddleware,
    employeeController.getAllEmployees
);
// Create a new employee
router.post(
  "/employees",
  authMiddleware,
  employeeController.createEmployee
);
// Get employee by ID
router.get(
  "/employees/:id",
  authMiddleware,
  employeeController.getEmployeeById
);
// Update employee by ID
router.put(
    "/employees/:id",
    authMiddleware,
    employeeController.updateEmployee
);
// Delete employee by ID
router.delete(
    "/employees/:id",
    authMiddleware,
    employeeController.deleteEmployee
);
module.exports = router;
