import { Router } from "express";

import { AuthenticateUserController } from "@modules/accouts/useCases/authenticateUser/AuthenticateUserController";
import { RefreshTokenController } from "@modules/accouts/useCases/refreshToken/refreshTokenController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);
authenticateRoutes.post("/refresh-token", refreshTokenController.handle);

export { authenticateRoutes };
