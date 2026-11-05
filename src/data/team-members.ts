import portrait0 from "@/assets/team-gabriel.jpg.asset.json";
import portrait1 from "@/assets/team-kawana.webp.asset.json";
import portrait2 from "@/assets/team-layna.webp.asset.json";
import portrait3 from "@/assets/team-leticia.webp.asset.json";
import portrait4 from "@/assets/team-luana.webp.asset.json";
import portrait5 from "@/assets/team-mariana.webp.asset.json";
// Snapshot do site atual em 2026-11-05; dados estáticos, sem integração de CMS.
export type TeamMember = {
  id: number;
  slug: string;
  name: string;
  role: string;
  crp: string;
  focus: string;
  biography: string;
  photo: string;
  photoAlt: string;
  tone: string;
  specialties: { id: number; title: string }[];
  socialLinks: { sourceId: string; label: string; url: string; icon: { url: string } | null }[];
};
export const teamMembers: TeamMember[] = [
  {
    id: 189,
    slug: "ana-silva",
    name: "Kawana Silva",
    role: "Psicóloga Clínica",
    crp: "CRP 08/12345",
    focus: "Primeiro, sua relação com você mesma(o). Depois, sua relação com os outros.",
    biography:
      "Além do consultório antes de ser psico, eu também sou alguém. Prazer, Kawana. Eu me considero alguém profundamente interessada em pessoas, nas suas histórias, escolhas e naquilo que muitas vezes elas nem conseguem colocar em palavras.\r\n\r\nSou sorridente (sim, sempre foi minha principal característica), animada e gosto de conversar sobre tudo. Mas também gosto do silêncio, da minha própria companhia, de uma boa música e de uma taça de vinho. A música, aliás, é uma das minhas formas favoritas de voltar para mim.\r\n\r\nMinha forma de enxergar a vida\r\n\r\nSou católica e tenho em Deus uma parte importante da minha forma de enxergar a vida. Talvez por isso eu pense tanto sobre a finitude. Não porque a vida me assuste, mas porque lembrar que ela é passageira me ajuda a não esquecer de vivê-la.\r\n\r\nMeu trabalho na Psicologia\r\n\r\nNa Psicologia, são seis anos de caminhada, com base na abordagem analítico-comportamental. Continuo estudando porque acredito que compreender o ser humano é uma tarefa que nunca termina. Meu trabalho é especialmente voltado para autoconhecimento e autoestima, e acredito que a terapia não precisa ser um lugar rígido, distante ou cheio de regras. Ela pode ser um lugar seguro, humano e leve, onde também podemos rir, questionar e, quando necessário, ouvir alguns desconfortos.\r\n\r\nTerapia como encontro\r\n\r\nAcredito que terapia é um encontro. Um processo construído de mãos dadas: você traz a sua história, e eu ofereço escuta, conhecimento e direção para que, aos poucos, você possa se compreender de uma maneira diferente.\r\n\r\nPorque talvez uma das coisas mais importantes que podemos aprender seja voltar para nós mesmos. Antes de tentar caber na vida de alguém, aprender a habitar a própria.\r\n\r\nE talvez seja justamente isso que eu mais gosto na Psicologia: acompanhar alguém enquanto ela deixa, pouco a pouco, de apenas sobreviver à própria história e começa a construir",
    photo: portrait2.url,
    photoAlt: "Foto de Ana Silva",
    specialties: [
      {
        id: 174,
        title: "Terapia Cognitivo-Comportamental",
      },
      {
        id: 175,
        title: "Ansiedade",
      },
      {
        id: 176,
        title: "Depressão",
      },
    ],
    socialLinks: [
      {
        sourceId: "linkedin",
        label: "LinkedIn",
        url: "",
        icon: {
          url: "/team-socials/clinica-abertamente-rede-linkedin.svg",
        },
      },
      {
        sourceId: "instagram",
        label: "Instagram",
        url: "",
        icon: {
          url: "/team-socials/clinica-abertamente-rede-instagram.svg",
        },
      },
      {
        sourceId: "facebook",
        label: "Facebook",
        url: "",
        icon: {
          url: "/team-socials/clinica-abertamente-rede-facebook.svg",
        },
      },
    ],
    tone: "bg-sage-light",
  },
  {
    id: 190,
    slug: "carla-santos",
    name: "Luana Aires",
    role: "Psicóloga Clínica",
    crp: "CRP 08/23456",
    focus:
      "Relações mais saudáveis começam quando duas pessoas conseguem se ouvir sem transformar diferenças em distância.",
    biography:
      "Relações são construídas no encontro\r\n\r\nToda relação atravessa mudanças, desencontros e momentos em que conversar parece difícil. A terapia oferece um espaço protegido para desacelerar conflitos e compreender o que cada pessoa tenta comunicar, inclusive por trás das palavras.\r\n\r\nMeu trabalho com casais e famílias\r\n\r\nAcompanho questões relacionadas à comunicação, aos conflitos familiares e ao fortalecimento dos vínculos. Não se trata de escolher quem está certo, mas de identificar padrões que mantêm o sofrimento e construir formas mais respeitosas de convivência.\r\n\r\nNovos acordos, novas possibilidades\r\n\r\nO processo é realizado com escuta equilibrada e objetivos compartilhados. Aos poucos, o casal ou a família pode nomear necessidades, reorganizar acordos e recuperar a capacidade de conversar sem que as diferenças precisem se transformar em afastamento.",
    photo: portrait1.url,
    photoAlt: "Foto de Carla Santos",
    specialties: [
      {
        id: 175,
        title: "Ansiedade",
      },
      {
        id: 174,
        title: "Terapia Cognitivo-Comportamental",
      },
      {
        id: 187,
        title: "Autoconhecimento",
      },
      {
        id: 176,
        title: "Depressão",
      },
      {
        id: 178,
        title: "Conflitos Familiares",
      },
      {
        id: 179,
        title: "Comunicação",
      },
    ],
    socialLinks: [
      {
        sourceId: "instagram",
        label: "Instagram",
        url: "",
        icon: {
          url: "/team-socials/clinica-abertamente-rede-instagram.svg",
        },
      },
      {
        sourceId: "twitter",
        label: "X (Twitter)",
        url: "",
        icon: {
          url: "/team-socials/clinica-abertamente-rede-twitter.svg",
        },
      },
      {
        sourceId: "linkedin",
        label: "LinkedIn",
        url: "",
        icon: {
          url: "/team-socials/clinica-abertamente-rede-linkedin.svg",
        },
      },
    ],
    tone: "bg-terracotta-light",
  },
  {
    id: 191,
    slug: "mariana-costa",
    name: "Mariana Sartorelli",
    role: "Psicóloga Clínica",
    crp: "CRP 08/34567",
    focus:
      "Aprender não deveria ser sinônimo de medo; cada criança precisa encontrar um caminho em que consiga avançar.",
    biography:
      "Cada pessoa aprende de um jeito\r\n\r\nDificuldades escolares não definem inteligência, esforço ou potencial. Muitas vezes, elas indicam que a criança ou o adolescente precisa de outra estratégia, de mais segurança ou de um olhar que considere seu modo particular de aprender.\r\n\r\nMeu trabalho na Psicopedagogia\r\n\r\nAcompanho demandas de aprendizagem, atenção, TDAH e desenvolvimento infantil. A avaliação do percurso ajuda a identificar habilidades já consolidadas, obstáculos presentes e recursos que podem favorecer avanços consistentes.\r\n\r\nConfiança para continuar\r\n\r\nO trabalho é construído em parceria com a família e pode envolver diálogo com a escola. Buscamos estratégias aplicáveis à rotina, respeitando o ritmo individual e fortalecendo a autonomia para que o aprendizado deixe de ser fonte de medo e volte a produzir curiosidade e confiança.",
    photo: portrait4.url,
    photoAlt: "Foto de Mariana Costa",
    specialties: [
      {
        id: 180,
        title: "Dificuldades de Aprendizagem",
      },
      {
        id: 181,
        title: "TDAH",
      },
      {
        id: 182,
        title: "Desenvolvimento Infantil",
      },
    ],
    socialLinks: [
      {
        sourceId: "facebook",
        label: "Facebook",
        url: "",
        icon: {
          url: "/team-socials/clinica-abertamente-rede-facebook.svg",
        },
      },
      {
        sourceId: "instagram",
        label: "Instagram",
        url: "",
        icon: {
          url: "/team-socials/clinica-abertamente-rede-instagram.svg",
        },
      },
      {
        sourceId: "twitter",
        label: "X (Twitter)",
        url: "",
        icon: {
          url: "/team-socials/clinica-abertamente-rede-twitter.svg",
        },
      },
    ],
    tone: "bg-warm",
  },
  {
    id: 192,
    slug: "juliana-ferreira",
    name: "Maria Leticia",
    role: "Psicóloga Clínica",
    crp: "CRP 08/45678",
    focus:
      "A infância precisa de um espaço seguro onde sentimentos possam aparecer antes mesmo de ganharem nome.",
    biography:
      "Acolher a linguagem da infância\r\n\r\nCrianças expressam o que vivem por meio do corpo, do comportamento, das histórias e das brincadeiras. A terapia infantil oferece um ambiente seguro para que essas experiências possam aparecer sem cobrança e no ritmo possível para cada criança.\r\n\r\nMeu trabalho na Psicologia Infantil\r\n\r\nUtilizo a ludoterapia no acompanhamento de questões emocionais, comportamentais e relacionadas ao autismo. O brincar favorece vínculos, permite elaborar situações difíceis e ajuda a desenvolver novas formas de expressão e regulação.\r\n\r\nA família faz parte do processo\r\n\r\nOs responsáveis participam por meio de conversas e orientações que ajudam a compreender as necessidades da criança. O objetivo é aproximar o cuidado do cotidiano, fortalecer relações e construir respostas mais acolhedoras e consistentes para cada fase do desenvolvimento.",
    photo: portrait5.url,
    photoAlt: "Foto de Juliana Ferreira",
    specialties: [
      {
        id: 183,
        title: "Ludoterapia",
      },
      {
        id: 184,
        title: "Autismo",
      },
      {
        id: 185,
        title: "Comportamento Infantil",
      },
    ],
    socialLinks: [
      {
        sourceId: "linkedin",
        label: "LinkedIn",
        url: "",
        icon: {
          url: "/team-socials/clinica-abertamente-rede-linkedin.svg",
        },
      },
      {
        sourceId: "facebook",
        label: "Facebook",
        url: "",
        icon: {
          url: "/team-socials/clinica-abertamente-rede-facebook.svg",
        },
      },
      {
        sourceId: "instagram",
        label: "Instagram",
        url: "",
        icon: {
          url: "/team-socials/clinica-abertamente-rede-instagram.svg",
        },
      },
    ],
    tone: "bg-sage-light",
  },
  {
    id: 193,
    slug: "beatriz-lima",
    name: "Layna Gimenes",
    role: "Psicóloga Clínica",
    crp: "CRP 08/56789",
    focus:
      "Uma escolha profissional faz mais sentido quando nasce do encontro entre quem você é e a vida que deseja construir.",
    biography:
      "Escolher sem precisar ter certeza de tudo\r\n\r\nA decisão profissional costuma chegar acompanhada de expectativas familiares, comparações e medo de escolher errado. A orientação vocacional cria um espaço para separar essas vozes e reconhecer o que realmente importa para você.\r\n\r\nMeu trabalho na orientação vocacional\r\n\r\nAcompanho jovens e adultos em processos de escolha e transição de carreira. Investigamos interesses, valores, habilidades, experiências e possibilidades concretas, conectando autoconhecimento às informações do mundo profissional.\r\n\r\nUma escolha que possa amadurecer\r\n\r\nO objetivo não é encontrar uma profissão perfeita ou definitiva, mas construir critérios para decisões mais conscientes. Quando você compreende o que deseja preservar e desenvolver na própria vida, o caminho profissional deixa de ser apenas uma cobrança e passa a ter direção e sentido.",
    photo: portrait3.url,
    photoAlt: "Foto de Beatriz Lima",
    specialties: [
      {
        id: 186,
        title: "Orientação Profissional",
      },
      {
        id: 187,
        title: "Autoconhecimento",
      },
      {
        id: 188,
        title: "Transição de Carreira",
      },
    ],
    socialLinks: [
      {
        sourceId: "twitter",
        label: "X (Twitter)",
        url: "",
        icon: {
          url: "/team-socials/clinica-abertamente-rede-twitter.svg",
        },
      },
      {
        sourceId: "linkedin",
        label: "LinkedIn",
        url: "",
        icon: {
          url: "/team-socials/clinica-abertamente-rede-linkedin.svg",
        },
      },
      {
        sourceId: "instagram",
        label: "Instagram",
        url: "",
        icon: {
          url: "/team-socials/clinica-abertamente-rede-instagram.svg",
        },
      },
    ],
    tone: "bg-terracotta-light",
  },
  {
    id: 302,
    slug: "gabriel-naim",
    name: "Gabriel Naim",
    role: "Psicólogo Clínico",
    crp: "CRP 08/42899",
    focus: "",
    biography:
      "Sou Gabriel, psicólogo, formado em Psicologia pela Universidade Positivo e registrado no CRP 08/42899. Atualmente, sou pós-graduando em Teoria Psicanalítica de Freud a Lacan pela PUCPR.\r\n\r\nSou psicólogo de formação e sigo a abordagem psicanalítica como orientação para minha prática clínica. Meu trabalho é pautado na escuta singular de cada pessoa, considerando sua história, seus conflitos, seus desejos e a forma particular como cada sujeito se relaciona consigo mesmo e com o mundo.\r\n\r\nBusco oferecer um espaço de escuta acolhedor, ético e livre de julgamentos, no qual o paciente possa falar sobre aquilo que o atravessa e encontrar, a partir da própria fala, novas possibilidades de compreender suas questões.\r\n\r\nMinha formação e meus estudos são continuamente direcionados ao aprofundamento da Psicanálise, especialmente a partir das obras de Freud e Lacan, mantendo o compromisso com uma prática clínica responsável e fundamentada.",
    photo: portrait0.url,
    photoAlt: "WhatsApp-Image-2026-08-22-at-08.45.51-e1793135203724",
    specialties: [
      {
        id: 182,
        title: "Desenvolvimento Infantil",
      },
      {
        id: 183,
        title: "Ludoterapia",
      },
      {
        id: 185,
        title: "Comportamento Infantil",
      },
    ],
    socialLinks: [],
    tone: "bg-warm",
  },
];
const aliases: Record<string, string> = {
  "kawana-silva": "ana-silva",
  "luana-aires": "carla-santos",
  "mariana-sartorelli": "mariana-costa",
  "maria-leticia": "juliana-ferreira",
  "layna-gimenes": "beatriz-lima",
  "gabriel-naim": "gabriel-naim",
};
export function findTeamMember(slug: string) {
  return teamMembers.find((m) => m.slug === (aliases[slug] ?? slug));
}
