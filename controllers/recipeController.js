import db from '../config/db.js';
import { validationResult } from 'express-validator'; 

export const createRecipe = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, ingredient, type } = req.body; 

    try {
        const [results] = await db.query('INSERT INTO Recipe (title, ingredient, type) VALUES (?, ?, ?)', [title, ingredient, type]);
        console.log('Inserted recipe:', { title, ingredient, type });
        res.status(200).json({ id: results.insertId });
    } catch (err) {
        console.error('Error inserting recipe:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
