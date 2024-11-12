import { TProject } from "./project.interface";
import Project from "./project.model";

const createProjectIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload);
  console.log(result);
  return result;
};
const getAllProjectsIntoDB = async () => {
  const allProject = await Project.find();
  console.log(allProject);
  return allProject;
};

export const createProjectServices = {
  createProjectIntoDB,
  getAllProjectsIntoDB,
};
