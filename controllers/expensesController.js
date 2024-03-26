const Expenses = require('../models/Expense');
const expensesController = {
    addExpense: async (req, res) => {
        try {
            const { amount, category, date, description } = req.body;
            const newExpense = await Expenses.create({ amount, category, date, description });
            res.status(201).json(newExpense);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getAllExpenses: async (req, res) => {
        try {
            const expenses = await Expenses.findAll();
            res.status(200).json(expenses);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    editExpense: async (req, res) => {
        try {
            const { id } = req.params;
            const { amount, category, date, description } = req.body;
            const updatedExpense = await Expenses.update({ amount, category, date, description }, { where: { id } });
            res.status(200).json(updatedExpense);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteExpense: async (req, res) => {
        try {
            const { id } = req.params;
            await Expenses.destroy({ where: { id } });
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

module.exports = expensesController;
