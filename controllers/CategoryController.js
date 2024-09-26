import CategoryModel from '../models/CategoryModel.js';
// import RecipeModel from '../models/RecipeModel.js';

class CategoryController {
  static async getAllCategories(_req, res) {
    try {
      const result = await CategoryModel.getAllCategories();
      res.status(200).json(result);
    } catch (error) {
      throw error;
    }
  }
  static async getCategoryById(req, res) {
    try {
      const { id } = req.params;
      const result = await CategoryModel.getCategoryById(id);
      res.status(200).json(result);
    } catch (error) {
      throw error;
    }
  }

  static async createCategories(req, res, next) {
    try {
      const { name} = req.body;
      await CategoryModel.createCategories(name);
      res.status(200).send('Category is created successfuly');
    } catch (error) {
      throw error;
    }
    next();
  }
  static async deleteCategories(req, res, next) {
    try {
      const { id } = req.params;
      await CategoryModel.deleteCategories(id);
      res.status(200).send('Category is deleted successfuly');
    } catch (error) {
      throw error;
    }
    next();
  }
  static async updateCategories(req, res, next) {
    try {
      const { id } = req.params;
      const { name} = req.body;
      await CategoryModel.updateCategories(id, name);
      res.status(200).send('Category is updated successfuly');
    } catch (error) {
      throw error;
    }
    next();
  }
}
export default CategoryController;
