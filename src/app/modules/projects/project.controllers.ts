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

export const createProjectcontrollers = {
  createProject,
};
