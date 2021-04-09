import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "../modules/accouts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accouts/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();

const upload = multer({
  dest: "avatar",
});

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  upload.single("file"),
  updateUserAvatarController.handle
);

export { usersRoutes };
