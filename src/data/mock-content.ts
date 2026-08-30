export type AssessmentMock = {
  slug: string;
  title: string;
  description: string;
  themes: string[];
  indication: string;
};

export type TeamMemberMock = {
  slug: string;
  name: string;
  role: string;
  registry: string;
  bio: string;
  specialties: string[];
};

export const assessments: AssessmentMock[] = [
  {
    slug: "investigacao-de-tdah",
    title: "Investigação de TDAH",
    description:
      "Avaliação direcionada à compreensão de sinais de desatenção, impulsividade e dificuldades de organização.",
    themes: ["Atenção", "Impulsividade", "Organização", "Funções executivas"],
    indication:
      "Pode ser indicada quando dificuldades de atenção, planejamento ou autorregulação interferem na rotina acadêmica, profissional ou pessoal.",
  },
  {
    slug: "avaliacao-neuropsicologica",
    title: "Avaliação neuropsicológica",
    description:
      "Investiga memória, atenção, linguagem, raciocínio e funções executivas em conjunto com o contexto emocional.",
    themes: ["Memória", "Atenção", "Linguagem", "Raciocínio"],
    indication:
      "Ajuda a compreender o funcionamento cognitivo diante de mudanças, dificuldades persistentes ou necessidades de acompanhamento.",
  },
  {
    slug: "investigacao-de-tea",
    title: "Investigação de TEA",
    description:
      "Processo voltado à compreensão de comunicação, interação social, flexibilidade e padrões de comportamento.",
    themes: ["Comunicação", "Interação social", "Flexibilidade", "Perfil sensorial"],
    indication:
      "Pode apoiar pessoas e famílias que buscam compreender características de desenvolvimento presentes em diferentes contextos.",
  },
  {
    slug: "avaliacao-de-aprendizagem",
    title: "Avaliação de aprendizagem",
    description:
      "Ajuda a compreender fatores relacionados à leitura, escrita, raciocínio e estratégias de aprendizagem.",
    themes: ["Leitura", "Escrita", "Raciocínio", "Rotina escolar"],
    indication:
      "Indicada para investigar dificuldades escolares e organizar estratégias coerentes com o desenvolvimento da pessoa.",
  },
  {
    slug: "avaliacao-de-personalidade",
    title: "Avaliação de personalidade",
    description:
      "Explora características emocionais, comportamentais e relacionais para ampliar a compreensão de padrões de funcionamento.",
    themes: ["Emoções", "Comportamento", "Relações", "Autoconhecimento"],
    indication:
      "Pode apoiar processos de autoconhecimento, planejamento terapêutico e compreensão de recursos pessoais.",
  },
  {
    slug: "avaliacao-cognitiva",
    title: "Avaliação cognitiva",
    description:
      "Compreende habilidades como atenção, memória, raciocínio, processamento e resolução de problemas.",
    themes: ["Atenção", "Memória", "Raciocínio", "Planejamento"],
    indication:
      "Ajuda a observar potencialidades, dificuldades e possíveis impactos nas atividades do cotidiano.",
  },
];

export const teamMembers: TeamMemberMock[] = [
  {
    slug: "ana-silva",
    name: "Ana Silva",
    role: "Psicóloga Clínica",
    registry: "CRP 08/12345",
    bio: "Especialista em TCC com foco no cuidado de adultos diante de ansiedade e depressão.",
    specialties: ["Terapia Cognitivo-Comportamental", "Ansiedade", "Depressão"],
  },
  {
    slug: "livia-almeida",
    name: "Lívia Almeida",
    role: "Psicóloga Clínica",
    registry: "CRP 08/90001",
    bio: "Atua com adultos em processos de ansiedade, autoestima e regulação emocional.",
    specialties: ["Ansiedade", "Autoconhecimento", "Regulação emocional"],
  },
  {
    slug: "bruno-teixeira",
    name: "Bruno Teixeira",
    role: "Psicopedagogo",
    registry: "CRP 08/90007",
    bio: "Apoia crianças e adolescentes diante de desafios escolares, atenção e aprendizagem.",
    specialties: ["Aprendizagem", "TDAH", "Desenvolvimento Infantil"],
  },
  {
    slug: "carla-santos",
    name: "Carla Santos",
    role: "Terapeuta de Casal",
    registry: "CRP 08/23456",
    bio: "Ajuda casais e famílias a construir diálogos mais saudáveis e vínculos mais fortes.",
    specialties: ["Terapia de Casal", "Conflitos Familiares", "Comunicação"],
  },
  {
    slug: "lucas-freitas",
    name: "Lucas Freitas",
    role: "Psicólogo Infantil",
    registry: "CRP 08/90010",
    bio: "Atua com desenvolvimento emocional infantil e orientação aos responsáveis.",
    specialties: ["Ludoterapia", "Autismo", "Comportamento Infantil"],
  },
  {
    slug: "camila-nogueira",
    name: "Camila Nogueira",
    role: "Psicóloga Infantil",
    registry: "CRP 08/90003",
    bio: "Trabalha com crianças e responsáveis por meio de recursos lúdicos e escuta acolhedora.",
    specialties: ["Desenvolvimento Infantil", "Ludoterapia", "Família"],
  },
  {
    slug: "eduardo-rocha",
    name: "Eduardo Rocha",
    role: "Psicólogo Clínico",
    registry: "CRP 08/90009",
    bio: "Acompanha adultos na compreensão de padrões emocionais e relacionais.",
    specialties: ["Autoconhecimento", "Comunicação", "Relacionamentos"],
  },
  {
    slug: "mariana-costa",
    name: "Mariana Costa",
    role: "Psicopedagoga",
    registry: "CRP 08/34567",
    bio: "Atua com crianças e adolescentes em dificuldades de aprendizagem e neurodesenvolvimento.",
    specialties: ["Aprendizagem", "Neurodesenvolvimento", "Adolescência"],
  },
];

export const whatsappUrl =
  "https://wa.me/554399599130?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";
