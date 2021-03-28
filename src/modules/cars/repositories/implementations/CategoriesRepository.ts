import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static ISNTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.ISNTANCE) {
      CategoriesRepository.ISNTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.ISNTANCE;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findByname(_name: string): Category {
    throw new Error("Method not implemented.");
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository, ICreateCategoryDTO };
