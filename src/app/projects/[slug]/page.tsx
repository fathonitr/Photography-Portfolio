import { notFound } from "next/navigation";
type Project = {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
};

// Dummy data
const projects: Project[] = [
  {
    slug: "ilham",
    title: "Enviromental Portraits",
    description: "Enviromental portraits of my friends",
    imageUrl: "/ilham.jpg",
  },
  {
    slug: "street-photography",
    title: "Street Photography",
    description: "Street Photography in Lichtenberg area",
    imageUrl: "/lichtenberg.jpeg",
  },
];
//  Explicit PageProps type
type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen">
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} width={600} height={800} />
      <p>{project.description}</p>
    </div>
  );
}
