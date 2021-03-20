import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategoryUseCAse: ImportCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoryUseCAse.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
