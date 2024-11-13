import httpStatus from "http-status";
import catchAsync from "../../utiles/catchAsync";
import sendResponse from "../../utiles/sendResponse";
import { createBlogServices } from "./blog.services";

// create blog
const createBlog = catchAsync(async (req, res) => {
  const BlogData = req.body;
  console.log(BlogData); // Extract the first item in the data array
  const result = await createBlogServices.createBlogIntoDB(BlogData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog created successfully",
    data: result,
  });
});
// get all project
const getAllBlogs = catchAsync(async (req, res) => {
  const result = await createBlogServices.getAllBlogsIntoDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blogs retrived successfully",
    data: result,
  });
});
// get project by id
const getBlogById = catchAsync(async (req, res) => {
  const { blogId } = req.params;
  const result = await createBlogServices.getBlogByIdIntoDB(blogId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog retrived successfully",
    data: result,
  });
});
// update project by id
const updateBlogById = catchAsync(async (req, res) => {
  const { blogId } = req.params;
  const blogData = req.body;
  console.log({ blogData });
  const result = await createBlogServices.updateBlogByIdIntoDB(
    blogId,
    blogData
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "update blog  successfully",
    data: result,
  });
});

export const createBlogcontrollers = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
};
