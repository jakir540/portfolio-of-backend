import { TBlogPost } from "./blog.interface";
import Blog from "./blog.model";

const createBlogIntoDB = async (payload: TBlogPost) => {
  const result = await Blog.create(payload);
  console.log(result);
  return result;
};
const getAllBlogsIntoDB = async () => {
  const allBlogs = await Blog.find().populate("author");
  console.log({ allBlogs });
  return allBlogs;
};

export const createBlogServices = {
  createBlogIntoDB,
  getAllBlogsIntoDB,
};
