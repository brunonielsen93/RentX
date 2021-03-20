import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryUseCAse = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(
  importCategoryUseCAse
);

export { importCategoryController };
