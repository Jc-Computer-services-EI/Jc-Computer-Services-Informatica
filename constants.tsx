
import React from 'react';
import { Monitor, Shield, Network, Cpu, ShoppingCart, GraduationCap } from 'lucide-react';
import { Service, GalleryImage } from './types';

export const SERVICES: Service[] = [
  {
    id: 'aulas',
    title: 'Aulas de Informática',
    description: 'Ensino prático e teórico do zero ao avançado. Domine as ferramentas essenciais para o mercado de trabalho.',
    priceInfo: 'Inscrição: 500,00MT\nMensalidade: 1800,00MT',
    enrollable: true,
    icon: 'GraduationCap',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'suporte',
    title: 'Suporte Técnico',
    description: 'Atendimento rápido e eficaz. Diagnósticos precisos, manutenções preventivas e corretivas para manter sua produtividade.',
    icon: 'Shield',
    imageUrl: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'redes',
    title: 'Instalação de Redes',
    description: 'Projetamos e instalamos redes cabeadas e Wi-Fi de alta performance com cobertura total e estabilidade.',
    icon: 'Network',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'manutencao',
    title: 'Manutenção de Hardware',
    description: 'Formatação, limpeza física, otimização e upgrade de componentes para máxima velocidade e vida útil.',
    icon: 'Cpu',
    imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'vendas',
    title: 'Venda de Equipamentos',
    description: 'Computadores, laptops, periféricos e acessórios originais com garantia e suporte especializado.',
    icon: 'ShoppingCart',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800'
  }
];

export const GALLERY: GalleryImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1588702547324-f176aa511944?auto=format&fit=crop&q=80&w=800',
    alt: 'Trabalho de rede estruturada',
    title: 'Infraestrutura de Redes'
  },
  {
    url: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800',
    alt: 'Manutenção de computador',
    title: 'Manutenção Preventiva'
  },
  {
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    alt: 'Aulas de informática',
    title: 'Treinamento Especializado'
  }
];

export const CONTACT_INFO = {
  email: 'jccomputerservicesei@gmail.com',
  whatsapp: '+258879317552',
  whatsappLink: 'https://wa.me/258879317552',
  instagram: 'https://instagram.com/jc_computer_services_ei',
  instagramHandle: '@jc_computer_services_ei'
};
