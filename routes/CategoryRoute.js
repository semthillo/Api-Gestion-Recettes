import express from 'express';
// import RecipeController from '../controllers/RecipeController.js';
// import {
//   addRequestValidatore,
//   deleteRequestValidatore,
//   updateRequestValidatore,
// } from '../middlewares/validatorRecipe.js';
// import RecipeController from '../controllers/recipeController.js';
import CategoryController from '../controllers/CategoryController.js';
import { addRequestCategoryValidatore, deleteRequestCategoryValidatore, updateRequestCategoryValidatore } from '../middlewares/validatorCategory.js';

// const app = express()
const Categoryrouter = express.Router();

Categoryrouter.get('/categories', CategoryController.getAllCategories);
Categoryrouter.get('/categories/:id',deleteRequestCategoryValidatore, CategoryController.getCategoryById);
Categoryrouter.post('/categories', addRequestCategoryValidatore, CategoryController.createCategories);
Categoryrouter.delete(
  '/categories/:id', deleteRequestCategoryValidatore,
  CategoryController.deleteCategories
);
Categoryrouter.put(
  '/categories/:id', updateRequestCategoryValidatore,
  CategoryController.updateCategories
);

export default Categoryrouter;
