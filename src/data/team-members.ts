import kawanaPhoto from "@/assets/team-kawana.webp.asset.json";
import luanaPhoto from "@/assets/team-luana.webp.asset.json";
import marianaPhoto from "@/assets/team-mariana.webp.asset.json";
import leticiaPhoto from "@/assets/team-leticia.webp.asset.json";
import laynaPhoto from "@/assets/team-layna.webp.asset.json";
import gabrielPhoto from "@/assets/team-gabriel.jpg.asset.json";

export type TeamMemberBioSection = {
  heading?: string;
  paragraphs: string[];
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  crp: string;
  focus: string;
  tone: string;
  photo: string;
  areas: string[];
  quote: string;
  bio: TeamMemberBioSection[];
  socials: { label: string; href: string }[];
};

// Nomes, CRPs e biografias são fictícios (placeholders de protótipo),
// exceto o texto de Kawana, transcrito do site real.
export const teamMembers: TeamMember[] = [
  {
    slug: "kawana-silva",
    name: "Kawana Silva",
    role: "Psicóloga Clínica",
    crp: "CRP 08/12345",
    focus: "Adolescentes e adultos",
    tone: "bg-sage-light",
    photo: kawanaPhoto.url,
    areas: ["Terapia Cognitivo-Comportamental", "Ansiedade", "Depressão"],
    quote: "Antes de tentar caber na vida de alguém, aprender a habitar a própria.",
    socials: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
    bio: [
      {
        paragraphs: [
          "Além do consultório antes de ser psico, eu também sou alguém. Prazer, Kawana. Eu me considero alguém profundamente interessada em pessoas, nas suas histórias, escolhas e naquilo que muitas vezes elas nem conseguem colocar em palavras.",
          "Sou sorridente (sim, sempre foi minha principal característica), animada e gosto de conversar sobre tudo. Mas também gosto do silêncio, da minha própria companhia, de uma boa música e de uma taça de vinho. A música, aliás, é uma das minhas formas favoritas de voltar para mim.",
        ],
      },
      {
        heading: "Minha forma de enxergar a vida",
        paragraphs: [
          "Sou católica e tenho em Deus uma parte importante da minha forma de enxergar a vida. Talvez por isso eu pense tanto sobre a finitude. Não porque a vida me assuste, mas porque lembrar que ela é passageira me ajuda a não esquecer de vivê-la.",
        ],
      },
      {
        heading: "Meu trabalho na Psicologia",
        paragraphs: [
          "Na Psicologia, são seis anos de caminhada, com base na abordagem analítico-comportamental. Continuo estudando porque acredito que compreender o ser humano é uma tarefa que nunca termina. Meu trabalho é especialmente voltado para autoconhecimento e autoestima, e acredito que a terapia não precisa ser um lugar rígido, distante ou cheio de regras. Ela pode ser um lugar seguro, humano e leve, onde também podemos rir, questionar e, quando necessário, ouvir alguns desconfortos.",
        ],
      },
      {
        heading: "Terapia como encontro",
        paragraphs: [
          "Acredito que terapia é um encontro. Um processo construído de mãos dadas: você traz a sua história, e eu ofereço escuta, conhecimento e direção para que, aos poucos, você possa se compreender de uma maneira diferente.",
          "Porque talvez uma das coisas mais importantes que podemos aprender seja voltar para nós mesmos. Antes de tentar caber na vida de alguém, aprender a habitar a própria.",
          "E talvez seja justamente isso que eu mais gosto na Psicologia: acompanhar alguém enquanto ela deixa, pouco a pouco, de apenas sobreviver à própria história e começa a construir",
        ],
      },
    ],
  },
  {
    slug: "luana-aires",
    name: "Luana Aires",
    role: "Psicóloga Clínica",
    crp: "CRP 08/12346",
    focus: "Avaliação neuropsicológica",
    tone: "bg-terracotta-light",
    photo: luanaPhoto.url,
    areas: ["Avaliação neuropsicológica", "Funções executivas", "Aprendizagem"],
    quote: "Compreender a mente é o primeiro passo para cuidar dela.",
    socials: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
    bio: [
      {
        paragraphs: [
          "Texto de apresentação fictício para o protótipo. Aqui entra a biografia real da profissional, escrita em primeira pessoa, contando quem ela é para além do consultório.",
        ],
      },
      {
        heading: "Meu trabalho na Psicologia",
        paragraphs: [
          "Parágrafo fictício sobre a trajetória, a abordagem e os interesses clínicos da profissional. Substitua pelo conteúdo real quando ele estiver disponível.",
        ],
      },
    ],
  },
  {
    slug: "mariana-sartorelli",
    name: "Mariana Sartorelli",
    role: "Psicóloga Clínica",
    crp: "CRP 08/12347",
    focus: "Terapia de casal e família",
    tone: "bg-warm",
    photo: marianaPhoto.url,
    areas: ["Terapia de casal", "Terapia familiar", "Relacionamentos"],
    quote: "Relações saudáveis se constroem com escuta e presença.",
    socials: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
    bio: [
      {
        paragraphs: [
          "Texto de apresentação fictício para o protótipo. Aqui entra a biografia real da profissional, escrita em primeira pessoa, contando quem ela é para além do consultório.",
        ],
      },
      {
        heading: "Meu trabalho na Psicologia",
        paragraphs: [
          "Parágrafo fictício sobre a trajetória, a abordagem e os interesses clínicos da profissional. Substitua pelo conteúdo real quando ele estiver disponível.",
        ],
      },
    ],
  },
  {
    slug: "maria-leticia",
    name: "Maria Leticia",
    role: "Psicóloga Clínica",
    crp: "CRP 08/12348",
    focus: "Infância e desenvolvimento",
    tone: "bg-warm",
    photo: leticiaPhoto.url,
    areas: ["Psicologia infantil", "Desenvolvimento", "Orientação parental"],
    quote: "Toda criança carrega um mundo que merece ser escutado.",
    socials: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
    bio: [
      {
        paragraphs: [
          "Texto de apresentação fictício para o protótipo. Aqui entra a biografia real da profissional, escrita em primeira pessoa, contando quem ela é para além do consultório.",
        ],
      },
      {
        heading: "Meu trabalho na Psicologia",
        paragraphs: [
          "Parágrafo fictício sobre a trajetória, a abordagem e os interesses clínicos da profissional. Substitua pelo conteúdo real quando ele estiver disponível.",
        ],
      },
    ],
  },
  {
    slug: "layna-gimenes",
    name: "Layna Gimenes",
    role: "Psicóloga Clínica",
    crp: "CRP 08/12349",
    focus: "Ansiedade e autoconhecimento",
    tone: "bg-sage-light",
    photo: laynaPhoto.url,
    areas: ["Ansiedade", "Autoconhecimento", "Autoestima"],
    quote: "O autoconhecimento é um caminho que se faz em companhia.",
    socials: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
    bio: [
      {
        paragraphs: [
          "Texto de apresentação fictício para o protótipo. Aqui entra a biografia real da profissional, escrita em primeira pessoa, contando quem ela é para além do consultório.",
        ],
      },
      {
        heading: "Meu trabalho na Psicologia",
        paragraphs: [
          "Parágrafo fictício sobre a trajetória, a abordagem e os interesses clínicos da profissional. Substitua pelo conteúdo real quando ele estiver disponível.",
        ],
      },
    ],
  },
  {
    slug: "gabriel-naim",
    name: "Gabriel Naim",
    role: "Psicólogo Clínico",
    crp: "CRP 08/12350",
    focus: "Investigação de TDAH e TEA",
    tone: "bg-terracotta-light",
    photo: gabrielPhoto.url,
    areas: ["Investigação de TDAH", "Investigação de TEA", "Avaliação cognitiva"],
    quote: "Cada mente funciona de um jeito — e cada jeito merece compreensão.",
    socials: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
    bio: [
      {
        paragraphs: [
          "Texto de apresentação fictício para o protótipo. Aqui entra a biografia real do profissional, escrita em primeira pessoa, contando quem ele é para além do consultório.",
        ],
      },
      {
        heading: "Meu trabalho na Psicologia",
        paragraphs: [
          "Parágrafo fictício sobre a trajetória, a abordagem e os interesses clínicos do profissional. Substitua pelo conteúdo real quando ele estiver disponível.",
        ],
      },
    ],
  },
];

export function findTeamMember(slug: string): TeamMember | undefined {
  return teamMembers.find((member) => member.slug === slug);
}
