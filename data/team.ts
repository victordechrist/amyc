export interface TeamMember {
  name: string;
  title: string;
  image: string;
  alt: string;
  objectPosition?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Obed Monago",
    title: "CEO",
    image: "/images/team/obed-monago.jpg",
    alt: "Portrait of Obed Monago, CEO",
    objectPosition: "center 20%",
  },
  {
    name: "Dr. Emily Monago",
    title: "Trustee",
    image: "/images/team/emily-monago.jpg",
    alt: "Portrait of Dr. Emily Monago, Trustee",
    objectPosition: "center 20%",
  },
  {
    name: "Dr. Uchechukwu Monago",
    title: "Secretary",
    image: "/images/team/uchechukwu-monago.jpg",
    alt: "Portrait of Dr. Uchechukwu Monago, Secretary",
    objectPosition: "center 20%",
  },
  {
    name: "Dara Monago",
    title: "Trustee",
    image: "/images/team/dara-monago.jpg",
    alt: "Portrait of Dara Monago, Trustee",
    objectPosition: "center 20%",
  },
  {
    name: "Dr.-Ing. Chukwuka Victor Obionwu",
    title: "Tech Lead & Curriculum Developer",
    image: "/images/team/chukwuka-victor-obionwu.jpg",
    alt: "Portrait of Dr.-Ing. Chukwuka Victor Obionwu, Tech Lead & Curriculum Developer",
    objectPosition: "center 20%",
  },
];
