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
// get project by id
const getAllBlogs = catchAsync(async (req, res) => {
  const result = await createBlogServices.getAllBlogsIntoDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog retrived successfully",
    data: result,
  });
});

export const createBlogcontrollers = {
  createBlog,
  getAllBlogs,
};
