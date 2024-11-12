import httpStatus from "http-status";
import catchAsync from "../../utiles/catchAsync";
import sendResponse from "../../utiles/sendResponse";
import { createProjectServices } from "./project.services";

const createProject = catchAsync(async (req, res) => {
  const projectData = req.body;
  console.log(projectData); // Extract the first item in the data array
  const result = await createProjectServices.createProjectIntoDB(projectData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Project created successfully",
    data: result,
  });
});
const getAllProjects = catchAsync(async (req, res) => {
  const allProject = await createProjectServices.getAllProjectsIntoDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Project retrived are successfully",
    data: allProject,
  });
});

export const createProjectcontrollers = {
  createProject,
  getAllProjects,
};
