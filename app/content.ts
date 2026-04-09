export type Locale = "pt" | "es";

export type LandingContent = {
  languageName: string;
  switchLabel: string;
  navCta: string;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    imageAlt: string;
  };
  about: {
    title: string;
    description: string;
    highlights: string[];
  };
  challenges: {
    title: string;
    items: Array<{ icon: string; title: string; text: string }>;
  };
  solutions: {
    title: string;
    subtitle: string;
    cta: string;
    proofPoints: string[];
    items: Array<{ title: string; text: string }>;
  };
  process: {
    title: string;
    steps: Array<{ title: string; text: string }>;
  };
  deliverables: {
    title: string;
    items: Array<{ title: string; text: string }>;
  };
  benefits: {
    title: string;
    items: string[];
  };
  clients: {
    title: string;
    subtitle: string;
    items: Array<{ title: string; text: string }>;
  };
  methodology: {
    title: string;
    text: string;
    nodes: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    trustPoints: string[];
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitLabel: string;
    loadingLabel: string;
    successMessage: string;
    errorMessage: string;
  };
};

export const contentByLocale: Record<Locale, LandingContent> = {
  pt: {
    languageName: "Português",
    switchLabel: "Idioma",
    navCta: "Agende uma conversa",
    hero: {
      title: "Apoio comercial e geração de oportunidades B2B para sua empresa",
      subtitle:
        "Estruturamos e operamos sua prospecção para gerar reuniões qualificadas com previsibilidade e foco em decisores.",
      cta: "Solicitar diagnóstico",
      imageAlt: "Reunião estratégica de equipe B2B"
    },
    about: {
      title: "Sobre a NORYA",
      description:
        "A NORYA se dedica à prospecção estratégica B2B, oferecendo expertise e recursos para resultados significativos.",
      highlights: ["Growth", "Strategy", "Operations"]
    },
    challenges: {
      title: "Desafios do Mercado",
      items: [
        {
          icon: "⏳",
          title: "Falta de tempo",
          text: "Profissionais comerciais sobrecarregados com tarefas operacionais diárias."
        },
        {
          icon: "🎯",
          title: "Acesso a decisores",
          text: "Dificuldade para alcançar líderes que realmente influenciam decisões de compra."
        },
        {
          icon: "🔄",
          title: "Processos estruturados ineficientes",
          text: "Fluxos confusos que reduzem consistência e previsibilidade do pipeline."
        }
      ]
    },
    solutions: {
      title: "Nossa Solução",
      subtitle: "Estruturamos a operação comercial para gerar previsibilidade, velocidade e crescimento.",
      cta: "Quero entender o plano",
      proofPoints: ["ICP definido", "Cadência multicanal", "Reuniões qualificadas"],
      items: [
        {
          title: "BPO Comercial",
          text: "Implementação de estratégia de prospecção com governança e execução dedicada."
        },
        {
          title: "Geração de Reuniões",
          text: "Conexões estratégicas com decisores alinhadas ao ICP e ao momento de compra."
        },
        {
          title: "Fluxo Consistente",
          text: "Pipeline contínuo de oportunidades com foco em qualidade e conversão."
        }
      ]
    },
    process: {
      title: "Processo em 4 Etapas",
      steps: [
        {
          title: "Definição",
          text: "ICP claro para guiar foco e priorização da abordagem comercial."
        },
        {
          title: "Mapeamento",
          text: "Leads qualificados e contas-alvo com inteligência de mercado."
        },
        {
          title: "Prospecção",
          text: "Abordagem estratégica multicanal para engajamento ativo."
        },
        {
          title: "Qualificação",
          text: "Agendamento de reuniões com oportunidades aderentes ao seu time."
        }
      ]
    },
    deliverables: {
      title: "O que entregamos",
      items: [
        {
          title: "Estratégia",
          text: "Estruturação comercial orientada a resultados e metas reais."
        },
        {
          title: "Geração",
          text: "Mapeamento e priorização de leads para oportunidades eficazes."
        },
        {
          title: "Prospecção",
          text: "Operação ativa B2B com foco em cadência, mensagem e resposta."
        },
        {
          title: "Qualificação",
          text: "Oportunidades prontas para avanço comercial e fechamento."
        }
      ]
    },
    benefits: {
      title: "Benefícios",
      items: [
        "Mais oportunidades qualificadas para o seu funil",
        "Estrutura comercial profissional com processo previsível",
        "Acesso eficiente a decisores do mercado"
      ]
    },
    clients: {
      title: "Perfil de Clientes",
      subtitle: "Atendemos operações B2B que precisam de pipeline previsível e crescimento com governança.",
      items: [
        {
          title: "Tecnologia",
          text: "Empresas que inovam com soluções digitais e vendas consultivas."
        },
        {
          title: "Consultorias",
          text: "Especialistas que oferecem estratégias personalizadas para negócios."
        },
        {
          title: "Serviços B2B",
          text: "Empresas orientadas a parceria, crescimento e receita recorrente."
        }
      ]
    },
    methodology: {
      title: "Nossa Metodologia",
      text: "Integramos estratégia, inteligência de mercado e execução para crescimento sustentável.",
      nodes: ["Estratégia", "Inteligência", "Execução", "Resultados"]
    },
    contact: {
      title: "Vamos estruturar sua geração de oportunidades",
      subtitle: "Conversa inicial sem compromisso para avaliar metas, ICP e prioridades comerciais.",
      trustPoints: ["Retorno em até 1 dia útil", "Atendimento direto com especialista", "Sem compromisso inicial"],
      nameLabel: "Nome",
      emailLabel: "Email",
      messageLabel: "Mensagem",
      submitLabel: "Receber diagnóstico",
      loadingLabel: "Enviando...",
      successMessage: "Mensagem enviada com sucesso. Em breve entraremos em contato.",
      errorMessage: "Não foi possível enviar. Tente novamente em instantes."
    }
  },
  es: {
    languageName: "Espanol",
    switchLabel: "Idioma",
    navCta: "Agenda una llamada",
    hero: {
      title: "Apoyo comercial y generacion de oportunidades B2B para tu empresa",
      subtitle:
        "Estructuramos y operamos tu prospeccion para generar reuniones calificadas con previsibilidad y foco en decisores.",
      cta: "Solicitar diagnostico",
      imageAlt: "Reunion estrategica de equipo B2B"
    },
    about: {
      title: "Sobre NORYA",
      description:
        "NORYA se enfoca en la prospeccion estrategica B2B, entregando expertise y recursos para resultados significativos.",
      highlights: ["Growth", "Strategy", "Operations"]
    },
    challenges: {
      title: "Desafios del Mercado",
      items: [
        {
          icon: "⏳",
          title: "Falta de tiempo",
          text: "Profesionales comerciales sobrecargados con tareas operativas diarias."
        },
        {
          icon: "🎯",
          title: "Acceso a decisores",
          text: "Dificultad para llegar a lideres que realmente influyen en decisiones de compra."
        },
        {
          icon: "🔄",
          title: "Procesos ineficientes",
          text: "Procesos comerciales confusos que reducen consistencia y previsibilidad del pipeline."
        }
      ]
    },
    solutions: {
      title: "Nuestra Solucion",
      subtitle: "Estructuramos la operacion comercial para entregar previsibilidad, velocidad y crecimiento.",
      cta: "Quiero entender el plan",
      proofPoints: ["ICP definido", "Cadencia multicanal", "Reuniones calificadas"],
      items: [
        {
          title: "BPO Comercial",
          text: "Implementacion de estrategia de prospeccion con gobernanza y ejecucion dedicada."
        },
        {
          title: "Generacion de Reuniones",
          text: "Conexiones estrategicas con decisores alineadas con tu ICP."
        },
        {
          title: "Flujo Consistente",
          text: "Pipeline continuo de oportunidades con foco en calidad y conversion."
        }
      ]
    },
    process: {
      title: "Proceso en 4 Etapas",
      steps: [
        {
          title: "Definicion",
          text: "ICP claro para priorizar cuentas ideales y foco de abordaje."
        },
        {
          title: "Mapeo",
          text: "Leads calificados y cuentas objetivo impulsadas por inteligencia de mercado."
        },
        {
          title: "Prospeccion",
          text: "Abordaje estrategico multicanal para engagement activo."
        },
        {
          title: "Calificacion",
          text: "Agendamiento de reuniones con oportunidades que encajan con tu equipo de ventas."
        }
      ]
    },
    deliverables: {
      title: "Lo que entregamos",
      items: [
        {
          title: "Estrategia",
          text: "Estructura comercial orientada a resultados y metas practicas."
        },
        {
          title: "Generacion",
          text: "Mapeo y priorizacion de leads para oportunidades efectivas."
        },
        {
          title: "Prospeccion",
          text: "Operacion activa B2B con fuerte cadencia y mensaje."
        },
        {
          title: "Calificacion",
          text: "Oportunidades listas para avanzar hacia el cierre."
        }
      ]
    },
    benefits: {
      title: "Beneficios",
      items: [
        "Mas oportunidades calificadas para tu pipeline",
        "Estructura comercial profesional con proceso predecible",
        "Acceso eficiente a decisores del mercado"
      ]
    },
    clients: {
      title: "Perfil de Clientes",
      subtitle: "Acompanamos operaciones B2B que necesitan pipeline predecible y crecimiento con gobernanza.",
      items: [
        {
          title: "Tecnologia",
          text: "Empresas que innovan con soluciones digitales y ventas consultivas."
        },
        {
          title: "Consultorias",
          text: "Especialistas que entregan estrategias personalizadas para clientes empresariales."
        },
        {
          title: "Servicios B2B",
          text: "Empresas de servicios impulsadas por alianzas y crecimiento recurrente."
        }
      ]
    },
    methodology: {
      title: "Nuestra Metodologia",
      text: "Integramos estrategia, inteligencia de mercado y ejecucion para crecimiento sostenible.",
      nodes: ["Estrategia", "Inteligencia", "Ejecucion", "Resultados"]
    },
    contact: {
      title: "Vamos a estructurar tu generacion de oportunidades",
      subtitle: "Conversacion inicial sin compromiso para evaluar metas, ICP y prioridades comerciales.",
      trustPoints: ["Respuesta en hasta 1 dia habil", "Atencion directa con especialista", "Sin compromiso inicial"],
      nameLabel: "Nombre",
      emailLabel: "Email",
      messageLabel: "Mensaje",
      submitLabel: "Recibir diagnostico",
      loadingLabel: "Enviando...",
      successMessage: "Mensaje enviado con exito. Pronto nos pondremos en contacto.",
      errorMessage: "No pudimos enviar tu mensaje. Intenta nuevamente en unos instantes."
    }
  }
};
