import { notFound } from "next/navigation";
import { getProject, getProjectSlugs } from "../../../lib/projects";
import ProjectClient from "./project-client";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) {
    notFound();
  }
  return <ProjectClient project={project} />;
}