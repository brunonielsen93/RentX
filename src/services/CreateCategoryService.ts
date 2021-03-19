import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/**
 * [x] - DEfinir o tipo de retorn
 * [x] - Alterar o retorn de erro
 * [x] - Acessar o repositorio
 * [] - Retornar algo 
 */

class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ description, name }: IRequest): void {

        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
        throw new Error("CAtegory Already Exist!");
    }

    
    this.categoriesRepository.create({ name, description });
    }
}


export { CreateCategoryService };