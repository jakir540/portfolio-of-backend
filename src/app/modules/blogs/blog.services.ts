import { TBlogPost } from "./blog.interface";
import Blog from "./blog.model";

const createBlogIntoDB = async (payload: TBlogPost) => {
  const result = await Blog.create(payload);
  console.log(result);
  return result;
};
// get all blog
const getAllBlogsIntoDB = async () => {
  const allBlogs = await Blog.find().populate("author");
  console.log({ allBlogs });
  return allBlogs;
};

// get blog by using id
const getBlogByIdIntoDB = async (blogId: string) => {
  const blog = await Blog.findById(blogId).populate("author");
  console.log({ blog });
  return blog;
};
// update blog by using id
const updateBlogByIdIntoDB = async (
  blogId: string,
  blogData: Partial<TBlogPost>
) => {
  const result = await Blog.findByIdAndUpdate(blogId, blogData, {
    new: true,
    runValidators: true,
  }).populate("author");

  return result;
};

export const createBlogServices = {
  createBlogIntoDB,
  getAllBlogsIntoDB,
  getBlogByIdIntoDB,
  updateBlogByIdIntoDB,
};
