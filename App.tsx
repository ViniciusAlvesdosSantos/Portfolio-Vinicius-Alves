import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProjectModal from "./components/ProjectModal";
import { PROJECTS, SKILLS, WORK_PROCESS } from "./constants";
import { Project } from "./types";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Monitor,
  Layers,
  Zap,
} from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL;

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos!');
      setIsSubmitting(false);
      return;
    }

    // Criar mailto link com os dados do formulário
    const subject = encodeURIComponent(`Contato de ${formData.name} - Portfolio`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );
    const mailtoLink = `mailto:vinicius.adsbusiness@gmail.com?subject=${subject}&body=${body}`;

    // Abrir cliente de e-mail
    window.location.href = mailtoLink;

    // Limpar formulário após 1 segundo
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Resetar status após 3 segundos
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen text-slate-800 font-sans selection:bg-primary-200 selection:text-primary-900">
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="inicio"
        className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
      >
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-primary-50 to-transparent opacity-60 rounded-bl-[100px]" />

        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 border border-primary-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Disponível para novos projetos
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Desenvolvedor Web especialista em{" "}
              <span className="text-primary-600">sites institucionais</span>.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              Transformo a identidade do seu negócio em uma presença digital
              sólida. Especialista em criar interfaces modernas, rápidas e
              otimizadas para conversão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 transform hover:-translate-y-0.5"
              >
                Ver Projetos Reais <ArrowRight size={20} />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
              >
                Entrar em Contato
              </a>
            </div>
          </div>
          <div className="hidden lg:flex lg:absolute lg:right-80 lg:left-90 lg:top-1/2 lg:-translate-y-1/2">
            <img
              src={`${BASE_URL}foto_perfil.jpeg`}
              alt="Foto de perfil"
              className="w-120 h-96 rounded-full object-cover shadow-2xl border-6 border-white"
            />
          </div>
        </div>
      </section>

      {/* ABOUT & SKILLS */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-2">
                Sobre Mim
              </h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Compromisso com qualidade técnica e visual
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Olá, sou um desenvolvedor Web apaixonado por criar
                  experiências web que geram resultados. Minha abordagem combina
                  design meticuloso com código limpo.
                </p>
                <p>
                  Diferente de desenvolvedores genéricos, especializei-me em{" "}
                  <strong>sites institucionais e landing pages</strong>. Entendo
                  que, para empresas, o site não é apenas código, é a vitrine
                  principal da marca. Por isso, priorizo performance, SEO e uma
                  hierarquia visual que guia o visitante.
                </p>
                <p>
                  Busco evolução contínua, mantendo-me atualizado com as
                  melhores práticas de React, acessibilidade e arquitetura de
                  CSS.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://github.com/ViniciusAlvesdosSantos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate-500 hover:text-slate-900 transition-colors bg-slate-100 rounded-lg"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vinicius-dos-santos-064844203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate-500 hover:text-blue-700 transition-colors bg-slate-100 rounded-lg"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={`${BASE_URL}ViniciusAlves-FullStack.pdf`}
                  download="ViniciusAlves-FullStack.pdf"
                  className="flex items-center gap-2 px-4 py-3 text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors font-medium text-sm"
                >
                  <Download size={18} /> Baixar CV
                </a>
              </div>
            </div>

            <div id="skills">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Tecnologias & Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SKILLS.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl bg-slate-50 hover:border-primary-200 transition-colors"
                  >
                    {skill.icon && (
                      <skill.icon className="text-primary-600" size={20} />
                    )}
                    <span className="font-medium text-slate-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
                <h4 className="font-bold text-primary-900 mb-2">
                  Diferenciais
                </h4>
                <ul className="space-y-2 text-primary-800 text-sm">
                  <li className="flex items-center gap-2">
                    <Monitor size={16} /> Mobile-First Design
                  </li>
                  <li className="flex items-center gap-2">
                    <Layers size={16} /> Componentização Reutilizável
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap size={16} /> Otimização de Performance (Core Web
                    Vitals)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projetos" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-2">
              Portfólio
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Projetos Selecionados
            </h3>
            <p className="text-slate-600">
              Uma seleção de projetos institucionais que demonstram capacidade
              de resolver problemas reais através de design e tecnologia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openProject(project)}
                      className="px-6 py-2 bg-white text-slate-900 rounded-full font-medium text-sm hover:bg-primary-50 transition-colors"
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => openProject(project)}
                        className="flex-1 text-center py-2 text-sm font-semibold text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                      >
                        Ver Estudo de Caso
                      </button>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          className="px-3 py-2 text-slate-400 hover:text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                          aria-label="Ver Demo"
                        >
                          <Monitor size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="processo" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Como eu trabalho
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {WORK_PROCESS.map((step, idx) => (
              <div key={idx} className="relative">
                {idx !== WORK_PROCESS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-100" />
                )}
                <div className="relative z-10 bg-white flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 shadow-sm">
                    <step.icon size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contato" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Vamos construir algo juntos?
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Estou disponível para freelance e oportunidades full-time. Se
                você busca um profissional comprometido com prazos e qualidade,
                entre em contato.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:vinicius.adsbusiness@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors border border-slate-700"
                >
                  <div className="p-3 bg-primary-600/20 text-primary-400 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-400">E-mail</span>
                    <span className="text-lg font-medium">
                      vinicius.adsbusiness@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/vinicius-dos-santos-064844203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors border border-slate-700"
                >
                  <div className="p-3 bg-primary-600/20 text-primary-400 rounded-full">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-400">
                      LinkedIn
                    </span>
                    <span className="text-lg font-medium">
                      www.linkedin.com/vinicius-dos-santos
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <form
              className="bg-white rounded-2xl p-8 text-slate-800 shadow-2xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                  ✓ Mensagem enviada com sucesso!
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    E-mail Corporativo
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="voce@empresa.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Como posso ajudar?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                    placeholder="Descreva brevemente seu projeto..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary-600 text-white rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-950 text-slate-500 text-center border-t border-slate-900">
        <div className="container mx-auto px-6">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Vinicius Alves. Todos os direitos
            reservados.
          </p>
          <p className="text-sm">
            Desenvolvido com React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>

      {/* MODAL */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
