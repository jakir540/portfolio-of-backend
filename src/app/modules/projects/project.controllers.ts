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

// get project by id
const getProjectById = catchAsync(async (req, res) => {
  const { projectId } = req.params; // Extract projectId from the URL parameters
  const project = await createProjectServices.findProjectById(projectId);

  if (!project) {
    return sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: "Project not found",
      data: null,
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Project retrieved successfully",
    data: project,
  });
});
// updateProjectById
const updateProjectById = catchAsync(async (req, res) => {
  const { projectId } = req.params;
  const projectData = req.body;
  const project = await createProjectServices.updateProjectById(
    projectId,
    projectData
  );

  if (!project) {
    return sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: "Project not found",
      data: null,
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Project updated successfully",
    data: project,
  });
});

export const createProjectcontrollers = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
};
