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
// get single project
const findProjectById = async (projectId: string) => {
  const allProject = await Project.findById(projectId);
  console.log(allProject);
  return allProject;
};
// updateProjectById
const updateProjectById = async (
  projectId: string,
  projectData: Partial<TProject>
) => {
  const allProject = await Project.findByIdAndUpdate(projectId, projectData, {
    new: true,
    runValidators: true,
  });
  console.log(allProject);
  return allProject;
};

export const createProjectServices = {
  createProjectIntoDB,
  getAllProjectsIntoDB,
  findProjectById,
  updateProjectById,
};
