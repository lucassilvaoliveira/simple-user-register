import { MailtrapMailProvider } from "../../providers/implementation/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementation/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(postgresUsersRepository, 
    mailtrapMailProvider
)

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController }
