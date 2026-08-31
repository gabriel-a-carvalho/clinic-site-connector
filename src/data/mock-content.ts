export type AssessmentMock = {
  slug: string;
  title: string;
  description: string;
  themes: string[];
  indication: string;
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

export const whatsappUrl =
  "https://wa.me/554399599130?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";
