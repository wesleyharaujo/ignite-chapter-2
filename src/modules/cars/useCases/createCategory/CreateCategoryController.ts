import { Request, Response } from "express";

import { CategoryRepository } from "../../repositories/CategoriesRepository";

class CreateCategoryController {
  constructor(private categoriesRepository = CategoryRepository) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(
      categoriesRepository
    );
  }
}

export { CreateCategoryController };
