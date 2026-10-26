import {notFound} from 'next/navigation';
import {projects} from '../../../content/projects';
import {caseStudies} from '../../../content/case-studies';
import ProjectCase from '../../../components/ProjectCase';
export const dynamicParams=false;
export function generateStaticParams(){return projects.map(project=>({slug:project.id}));}
export async function generateMetadata({params}){const {slug}=await params;const project=projects.find(item=>item.id===slug);if(!project)return {};return {title:`${project.name} — проект и решения · AdilSatuv`,description:caseStudies[slug].goal,alternates:{canonical:`/projects/${slug}/`},openGraph:{title:`${project.name} — проект и решения`,description:caseStudies[slug].goal,url:`/projects/${slug}/`,images:[{url:`/demos/${slug}-poster.webp`,width:1280,height:800,alt:project.headline}]}};}
export default async function ProjectPage({params}){const {slug}=await params;const project=projects.find(item=>item.id===slug);if(!project)notFound();return <ProjectCase project={project} study={caseStudies[slug]}/>;}
