import React, { useEffect, useState } from "react";
import { Project } from "../types";
import {
  X,
  ExternalLink,
  Github,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  if (!isOpen || !project) return null;

  const hasGallery = project.gallery && project.gallery.length > 0;
  const images = hasGallery ? project.gallery : [project.imageUrl];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-300 relative flex flex-col"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 left-full ml-auto mr-4 mt-4 p-2 bg-white/90 hover:bg-white backdrop-blur-md rounded-full text-slate-900 transition-colors shadow-lg z-10 w-fit"
          aria-label="Fechar modal"
        >
          <X size={24} />
        </button>

        {/* Gallery Image */}
        <div className="relative h-[500px] w-full shrink-0 bg-slate-100">
          <img
            src={images[currentImageIndex]}
            alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
            className="w-full h-full object-contain"
          />

          {images.length > 1 && (
            <>
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full text-slate-900 transition-colors shadow-lg"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full text-slate-900 transition-colors shadow-lg"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-full text-white text-sm font-medium">
                {currentImageIndex + 1} / {images.length}
              </div>

              {/* Thumbnail Navigation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-full">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-white w-6"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-8 space-y-8 text-slate-700">            
            {/* Tags Section */}
            <div className="flex flex-col gap-4 p-4 bg-slate-50/80 backdrop-blur-sm rounded-xl border border-slate-200">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              {project.title}
            </h3>
            <div className="flex gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-primary-100/80 backdrop-blur-sm text-primary-700 rounded-lg text-sm font-semibold border border-primary-200"
                >
                  {tag}
                </span>
              ))}
              </div>
            </div>
          
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Sobre o Projeto
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {project.fullDescription}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Estrutura do Site
                </h3>
                <ul className="space-y-2">
                  {project.structure.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="text-primary-600 mt-1 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="md:col-span-1 space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-100 h-fit">
              <section>
                <h3 className="font-bold text-slate-900 mb-3">Resultados</h3>
                <p className="text-sm text-slate-600 italic border-l-4 border-primary-400 pl-3">
                  "{project.result}"
                </p>
              </section>
            </div>
          </div>

          <section className="border-t border-slate-200 pt-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Decisões de UX/UI
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.uxDecisions.map((decision, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-sm text-slate-600"
                >
                  {decision}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
