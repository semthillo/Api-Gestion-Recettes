import express from 'express';
// import RecipeController from '../controllers/RecipeController.js';
// import {
//   addRequestValidatore,
//   deleteRequestValidatore,
//   updateRequestValidatore,
// } from '../middlewares/validatorRecipe.js';
// import RecipeController from '../controllers/recipeController.js';
import CategoryController from '../controllers/CategoryController.js';

// const app = express()
const Categoryrouter = express.Router();

Categoryrouter.get('/categories', CategoryController.getAllCategories);
Categoryrouter.get('/categories/:id', CategoryController.getCategoryById);
Categoryrouter.post('/categories', CategoryController.createCategories);
Categoryrouter.delete(
  '/categories/:id',
  CategoryController.deleteCategories
);
Categoryrouter.put(
  '/categories/:id',
  CategoryController.updateCategories
);

export default Categoryrouter;
