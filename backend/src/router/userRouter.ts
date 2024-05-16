import { Hono } from "hono";
import { getUserData, signinController, signupController } from "../controller/userController";
import { authMiddleware } from "../middleware/authMiddleware";

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string
        JWT_SECRETE: string
	}
}>();

userRouter.post("/signup",signupController);

userRouter.post("/signin",signinController);

userRouter.use('/me',authMiddleware);
userRouter.get('/me',getUserData);
