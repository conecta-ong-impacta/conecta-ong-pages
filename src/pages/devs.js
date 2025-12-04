import React from 'react';
import Layout from '@theme/Layout';

// Lista de desenvolvedores atualizada
const devs = [
  // --- BACKEND ---
  {
    nome: 'João Braga',
    cargo: 'Backend Developer',
    github: 'ojoaobraga',
    descricao: 'Responsável pela arquitetura do sistema e desenvolvimento do backend.',
  },
  {
    nome: 'José Vitor',
    cargo: 'Backend Developer',
    github: 'j-vitor-silva',
    descricao: 'Desenvolvimento de APIs RESTful, regras de negócio e banco de dados.',
  },
  {
    nome: 'Felipe Laus',
    cargo: 'Backend Developer',
    github: 'FelipeLaus',
    descricao: 'Focado em performance, segurança e integração de serviços.',
  },
  {
    nome: 'Erick Cavalcante',
    cargo: 'Backend Developer',
    github: 'eri-cav',
    descricao: 'Manutenção da infraestrutura e lógica do servidor.',
  },
  // --- FRONTEND ---
  {
    nome: 'Marcelo Kubart',
    cargo: 'Frontend Developer',
    github: 'marcelokubart',
    descricao: 'Criação de interfaces responsivas e dinâmicas com React.',
  },
  {
    nome: 'Rafael Silva',
    cargo: 'Frontend Developer',
    github: 'dev-rafael92as',
    descricao: 'Implementação de layouts e integração com o backend.',
  },
  {
    nome: 'Yasmin Fermino',
    cargo: 'Frontend Developer',
    github: 'yasminfermino',
    descricao: 'Focada na usabilidade e fidelidade visual das interfaces.',
  },
  {
    nome: 'Bruna Luiza',
    cargo: 'Frontend Developer',
    github: 'brunaluizaimpacta',
    descricao: 'Desenvolvimento de componentes reutilizáveis e interatividade.',
  },
  // --- UX/UI ---
  {
    nome: 'Filipe Monteiro',
    cargo: 'UX Designer',
    github: '', // Sem GitHub
    descricao: 'Design de interfaces, prototipação e pesquisa com usuários.',
  },
];

function DevCard({ nome, cargo, github, descricao }) {
  // Lógica: Se tem GitHub, usa a foto dele. Se não tem, gera uma imagem com as iniciais.
  const imageUrl = github 
    ? `https://github.com/${github}.png` 
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(nome)}&background=25c2a0&color=fff`;

  const linkUrl = github ? `https://github.com/${github}` : '#';

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '24px',
      margin: '12px',
      width: '300px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      backgroundColor: 'var(--ifm-background-surface-color)',
      transition: 'transform 0.2s',
    }}
    // Efeito hover simples (opcional)
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <img 
        src={imageUrl} 
        alt={nome} 
        style={{
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          marginBottom: '16px',
          border: '4px solid var(--ifm-color-primary-lightest)',
          objectFit: 'cover'
        }}
      />
      <h3 style={{ marginBottom: '8px' }}>{nome}</h3>
      <p style={{ 
        color: 'var(--ifm-color-primary)', 
        fontWeight: 'bold', 
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>{cargo}</p>
      
      <p style={{ fontSize: '0.95rem', minHeight: '60px' }}>{descricao}</p>
      
      {github && (
        <a 
          href={linkUrl} 
          target="_blank" 
          rel="noreferrer"
          className="button button--secondary button--sm"
          style={{ marginTop: '10px' }}
        >
          Ver GitHub
        </a>
      )}
    </div>
  );
}

export default function DevsPage() {
  return (
    <Layout title="Equipe" description="Conheça o time do Conecta ONG">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '60px 20px',
      }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>Nosso Time 🚀</h2>
        <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Conheça as mentes por trás do Conecta ONG</p>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '40px',
          gap: '20px'
        }}>
          {devs.map((dev, idx) => (
            <DevCard key={idx} {...dev} />
          ))}
        </div>
      </div>
    </Layout>
  );
}