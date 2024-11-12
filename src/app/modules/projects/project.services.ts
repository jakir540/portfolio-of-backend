import { TProject } from "./project.interface";
import Project from "./project.model";

const createProjectIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload);
  console.log(result);
  return result;
};

export const createProjectServices = {
  createProjectIntoDB,
};
