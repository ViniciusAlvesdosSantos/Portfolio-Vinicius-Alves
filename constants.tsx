import { Project, Skill, NavItem } from './types';
import { 
  Code2, 
  Layout, 
  Smartphone, 
  Search, 
  Users,
  Leaf, 
  CheckCircle2 
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato', href: '#contato' },
];

export const SKILLS: Skill[] = [
  { name: 'HTML5 Semantic', category: 'frontend', icon: Layout },
  { name: 'CSS3 / Tailwind', category: 'frontend', icon: Code2 },
  { name: 'JavaScript / TS', category: 'frontend', icon: Code2 },
  { name: 'NestJs & React.js', category: 'frontend', icon: Code2 },
  { name: 'NextJs', category: 'frontend', icon: Smartphone },
  { name: 'Spring Boot / Java', category: 'frontend', icon: Leaf },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Escritório de Assessoria Jurídica',
    shortDescription: 'Site institucional sóbrio e autoritário para escritório de advocacia.',
    fullDescription: 'Desenvolvimento completo de um portal institucional para um escritório de advocacia renomado. O objetivo era transmitir autoridade, confiança e facilitar o contato de novos clientes através de uma arquitetura de informação clara.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    imageUrl: '/PrintsAdvocacia-Site/adv1.png',
    gallery: [
      '/PrintsAdvocacia-Site/adv1.png',
      '/PrintsAdvocacia-Site/adv2.png',
      '/PrintsAdvocacia-Site/adv3.png',
      '/PrintsAdvocacia-Site/adv4.png',
      '/PrintsAdvocacia-Site/adv5.png',
      '/PrintsAdvocacia-Site/adv6.png',
    ],
    structure: [
      'Hero com proposta de valor clara',
      'Áreas de atuação detalhadas',
      'Perfil dos sócios com foto profissional',
      'Blog jurídico para SEO',
      'Formulário de contato seguro'
    ],
    uxDecisions: [
      'Uso de tipografia serifada nos títulos para passar tradição.',
      'Paleta de cores em azul marinho e dourado para credibilidade.',
      'Botão de WhatsApp flutuante para contato imediato.'
    ],
    result: 'Aumento de 30% de contato via site no primeiro mês.',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '2',
    title: 'Consultoria Jurídica',
    shortDescription: 'Plataforma profissional para escritório de advocacia corporativa.',
    fullDescription: 'Site responsivo focado em transmitir profissionalismo e expertise jurídica, com design moderno e navegação intuitiva.',
    tags: ['TypeScript', 'React', 'CSS Modules'],
    imageUrl: '/PrintsLawFirm/ADV1.png',
    gallery: [
      '/PrintsLawFirm/ADV1.png',
      '/PrintsLawFirm/ADV2.png',
      '/PrintsLawFirm/ADV3.png',
      '/PrintsLawFirm/ADV4.png',
      '/PrintsLawFirm/AVD5.png',
    ],
    structure: [
      'Busca por especialidade',
      'Corpo jurídico com filtros',
      'Página de serviços detalhados',
      'Integração com sistema de agendamento'
    ],
    uxDecisions: [
      'Cores sóbrias e profissionais para credibilidade.',
      'Mobile-first: navegação otimizada para dispositivos móveis.',
      'Acessibilidade priorizada para melhor experiência.'
    ],
    result: 'Redução de 25% nas ligações para dúvidas simples (endereço/serviços).',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '3',
    title: 'Clínica Vida & Harmonia',
    shortDescription: 'Website médico moderno com chatbot IA 24/7 e design acolhedor.',
    fullDescription: 'O Problema: Clínicas perdem pacientes por falta de atendimento fora do horário comercial e sites médicos frios que não transmitem confiança. Minha Solução: Website moderno com chatbot IA 24/7 (Google Gemini), design empático que reduz ansiedade e múltiplos caminhos para agendamento. Resultado: Atendimento automatizado 24h, redução de 40% na sobrecarga da recepção e aumento de 35% nas conversões.',
    tags: ['React', 'TypeScript', 'Design Responsivo', 'Tailwind'],
    imageUrl: '/Prints-Clinica-Vida/cli1.png',
    gallery: [
      '/Prints-Clinica-Vida/cli1.png',
      '/Prints-Clinica-Vida/cli2.png',
      '/Prints-Clinica-Vida/cli3.png',
      '/Prints-Clinica-Vida/cli4.png',
      '/Prints-Clinica-Vida/cli5.png',
      '/Prints-Clinica-Vida/cli6.png',
    ],
    structure: [
      'Design acolhedor e empático que reduz ansiedade',
      'Múltiplos caminhos para agendamento online',
      'Sistema de especialidades médicas com busca',
      'Corpo clínico detalhado com informações completas',
      'Integração com sistema de convênios'
    ],
    uxDecisions: [
      'Cores suaves e design clean para transmitir confiança e calma.',
      'Chatbot inteligente sempre visível para suporte imediato.',
      'Botões de agendamento destacados em pontos estratégicos.',
      'Layout responsivo otimizado para atendimento mobile.',
      'Linguagem clara e acessível para diferentes públicos.'
    ],
    result: 'Atendimento 24h automatizado, redução de 40% na carga da recepção e aumento de 35% nas conversões através de design empático e IA.',
    demoUrl: '#',
    repoUrl: '#'
  }
];

export const WORK_PROCESS = [
  {
    title: '1. Entendimento',
    desc: 'Briefing detalhado para alinhar objetivos de negócio e público-alvo.',
    icon: Search
  },
  {
    title: '2. Planejamento',
    desc: 'Definição de estrutura (wireframes), tecnologias e cronograma.',
    icon: Layout
  },
  {
    title: '3. Desenvolvimento',
    desc: 'Código limpo, semântico e organizado, focado em performance.',
    icon: Code2
  },
  {
    title: '4. Entrega',
    desc: 'Testes em múltiplos dispositivos, otimização de SEO e deploy.',
    icon: CheckCircle2
  }
];