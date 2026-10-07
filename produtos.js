// ==========================================
// 1. BANCO DE DADOS DE PRODUTOS (Unificado)
// ==========================================
const BANCO_PRODUTOS = [
  {
    id: "perfume-artesanal-capim-limao",
    nome: "Perfume Artesanal de Capim Limão",
    precoOriginal: "R$89,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/thairo-1x1.svg",
    imagemVerso: "produtos/thairo-1x1.svg",
    video3d: "produtos/perfume-teste.webm",
    linkPagina: "produtos/perfume-artesanal-capim-limao.html",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "ativos-capim-limao",
      cor: "cores-verde",
      categoria: ["mais-vendido"],
    },
    acordeoes: {
      sobre:
        "Frescor, limpeza e revigorante. Um estímulo natural de frescor e bem-estar.<br><br>[Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes].",
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais<br>- Sem corantes<br>- Aroma acentuado<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Essência de Capim-Limão, Óleo Essencial de Capim-Limão.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Volume:</strong> 60ml<br><strong>Medida:</strong><br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete:
        "Enviado para todo o Brasil com taxa fixa de <strong>R$ 30,00</strong>. Opção de retirada local disponível (consulte pelo atendimento no WhatsApp).",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "perfume-artesanal-lavanda-provence",
    nome: "Perfume Artesanal de Lavanda Provence",
    precoOriginal: "R$79,90",
    precoDesconto: "R$69,90",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/thairo-1x1.svg",
    imagemVerso: "produtos/thairo-1x1.svg",
    video3d: "produtos/perfume-teste.webm",
    linkPagina: "produtos/perfume-artesanal-lavanda-provence.html",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "ativos-lavanda-provence",
      cor: "cores-lilas",
      categoria: ["mais-vendido", "promocao"],
    },
    acordeoes: {
      sobre:
        "Relaxante, harmonioso e suave. A energia das ervas frescas para despertar o foco e a vitalidade.<br><br>[Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes].",
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais<br>- Sem corantes<br>- Aroma acentuado<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Essência de Lavanda Provence, Óleo Essencial de Lavanda Provence.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Volume:</strong> 60ml<br><strong>Medida:</strong><br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete:
        "Enviado para todo o Brasil com taxa fixa de <strong>R$ 30,00</strong>. Opção de retirada local disponível (consulte pelo atendimento no WhatsApp).",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "perfume-artesanal-alecrim-rosmarino",
    nome: "Perfume Artesanal de Alecrim Rosmarino",
    precoOriginal: "R$79,90",
    precoDesconto: "R$69,90",
    subtitulo: "[1 un. / 60ml].",
    esgotado: true,
    imagemFrente: "produtos/thairo-1x1.svg",
    imagemVerso: "produtos/thairo-1x1.svg",
    video3d: "produtos/perfume-teste.webm",
    linkPagina: "produtos/perfume-artesanal-alecrim-rosmarino.html",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "ativos-alecrim-rosmarino",
      cor: "cores-verde",
      categoria: ["mais-vendido", "promocao"],
    },
    acordeoes: {
      sobre:
        "Tonificação, ativador e adstringente.<br><br>[Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes].",
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais<br>- Sem corantes<br>- Aroma acentuado<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Essência de Alecrim, Óleo Essencial de Alecrim.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Volume:</strong> 60ml<br><strong>Medida:</strong><br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete:
        "Enviado para todo o Brasil com taxa fixa de <strong>R$ 30,00</strong>. Opção de retirada local disponível (consulte pelo atendimento no WhatsApp).",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "perfume-artesanal-laranja-doce",
    nome: "Perfume Artesanal de Laranja Doce",
    precoOriginal: "R$99,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: true,
    imagemFrente: "produtos/thairo-1x1.svg",
    imagemVerso: "produtos/thairo-1x1.svg",
    video3d: "produtos/perfume-teste.webm",
    linkPagina: "produtos/perfume-artesanal-laranja-doce.html",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "ativos-laranja-doce",
      cor: "cores-laranja",
      categoria: ["mais-vendido"],
    },
    acordeoes: {
      sobre:
        "Tonificação, ativador e adstringente.<br><br>[Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes].",
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais<br>- Sem corantes<br>- Aroma acentuado<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Essência de Laranja Doce, Óleo Essencial de Laranja Doce.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Volume:</strong> 60ml<br><strong>Medida:</strong><br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete:
        "Enviado para todo o Brasil com taxa fixa de <strong>R$ 30,00</strong>. Opção de retirada local disponível (consulte pelo atendimento no WhatsApp).",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
];

function encontrarProdutoDoCarrinho(item) {
  return (
    BANCO_PRODUTOS.find((produto) => produto.id === item.id) ||
    BANCO_PRODUTOS.find((produto) => produto.nome === item.nome)
  );
}
