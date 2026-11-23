/* =====================================================================
   IDEIAS DE VÍDEO · THIAGO (video maker)
   Este arquivo alimenta a área "Ideias de vídeo" da apresentação.
   Para preencher, basta escrever entre as aspas. O que ficar vazio ('')
   aparece na página como espaço "a preencher".

   midia: caminho de um arquivo dentro da pasta NOVO BRAND, por exemplo
          'ideias/ref01.mp4' (vídeo, toca sozinho na página) ou
          'ideias/ref01.jpg' (imagem/print da referência).
   link:  endereço da referência na internet (Instagram, YouTube, Behance...).
          Aparece como um botão "Abrir referência ↗".
   ===================================================================== */
window.IDEIAS_THIAGO = {

  // ---------- Painel de referências (até 6) ----------
  referencias: [
    { titulo: '', fonte: '', link: '', midia: '', levar: '' },
    { titulo: '', fonte: '', link: '', midia: '', levar: '' },
    { titulo: '', fonte: '', link: '', midia: '', levar: '' },
    { titulo: '', fonte: '', link: '', midia: '', levar: '' },
    { titulo: '', fonte: '', link: '', midia: '', levar: '' },
    { titulo: '', fonte: '', link: '', midia: '', levar: '' }
  ],

  // ---------- Fichas de ideia (uma página cada) ----------
  // formato: '16:9', '9:16' ou '4:5' · status: 'ideia', 'roteiro' ou 'aprovada'
  ideias: [
    { titulo: '', objetivo: '', formato: '', duracao: '', canal: '',
      topicos: ['', '', '', '', ''], quem: '', trilha: '', precisa: '',
      referencia: { midia: '', link: '' }, status: 'ideia' },
    { titulo: '', objetivo: '', formato: '', duracao: '', canal: '',
      topicos: ['', '', '', '', ''], quem: '', trilha: '', precisa: '',
      referencia: { midia: '', link: '' }, status: 'ideia' },
    { titulo: '', objetivo: '', formato: '', duracao: '', canal: '',
      topicos: ['', '', '', '', ''], quem: '', trilha: '', precisa: '',
      referencia: { midia: '', link: '' }, status: 'ideia' }
  ],

  // ---------- Banco de tópicos (lista rápida de ideias soltas) ----------
  // prioridade: 'alta', 'média' ou 'baixa'
  topicos: [
    { texto: '', formato: '', prioridade: '' },
    { texto: '', formato: '', prioridade: '' },
    { texto: '', formato: '', prioridade: '' },
    { texto: '', formato: '', prioridade: '' },
    { texto: '', formato: '', prioridade: '' },
    { texto: '', formato: '', prioridade: '' },
    { texto: '', formato: '', prioridade: '' },
    { texto: '', formato: '', prioridade: '' },
    { texto: '', formato: '', prioridade: '' },
    { texto: '', formato: '', prioridade: '' }
  ]
};
