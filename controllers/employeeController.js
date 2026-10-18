const Employee = require("../models/Employee");

// Get all employees
const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();

        return res.status(200).json({
            message: "Employees fetched successfully",
            employees
        });
    } catch (error) {
        console.error("Get employees error:", error.message);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

// Create a new employee
const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    const savedEmployee = await employee.save();

    return res.status(201).json({
      message: "Employee created successfully",
      employee: savedEmployee
    });

  } catch (error) {
    console.error("Create employee error:", error.message);

    return res.status(400).json({
      message: error.message
    });
  }
};
// Get employee by ID
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    return res.status(200).json({
      message: "Employee fetched successfully",
      employee
    });

  } catch (error) {
    console.error("Get employee error:", error.message);

    return res.status(400).json({
      message: "Invalid employee ID"
    });
  }
};
// Update employee by ID
const updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        return res.status(200).json({
            message: "Employee updated successfully",
            employee
        });

    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};
// Delete employee by ID
const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        return res.status(200).json({
            message: "Employee deleted successfully"
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};
module.exports = {
  getAllEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
};
