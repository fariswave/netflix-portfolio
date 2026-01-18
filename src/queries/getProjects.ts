import { Project } from "../types";
import { DATA } from "../data";

export async function getProjects(): Promise<Project[]> {
  return DATA.projects;
}
