import React from 'react';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  structure: string[];
  uxDecisions: string[];
  result: string;
  gallery?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'tools' | 'soft-skills';
  icon?: React.ElementType;
}