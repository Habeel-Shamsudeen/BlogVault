import { Hono } from "hono";
import { authMiddleware } from "../middleware/authMiddleware";
import { PostBlog, deletePost, getAllPost, getPostbyId, updatePost } from "../controller/postController";

export const postRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string
    JWT_SECRETE: string
	},
  Variables:{
    userId:string
  }
}>();
postRouter.post("/", authMiddleware, PostBlog);
postRouter.put("/", authMiddleware, updatePost);
postRouter.get("/bulk", getAllPost);
postRouter.get("/:id", getPostbyId);
postRouter.delete("/:id", authMiddleware, deletePost);


