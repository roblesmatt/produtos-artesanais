// ==========================================
// 1. BANCO DE DADOS DE PRODUTOS (Unificado)
// ==========================================
const BANCO_PRODUTOS = [
  {
    id: "perfume-artesanal-docura-citrica",
    nome: "Perfume Artesanal Doçura Cítrica",
    precoOriginal: "R$89,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/thairo-1x1.svg",
    imagemVerso: "produtos/thairo-1x1.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "ativos-capim-limao",
      cor: "cores-verde",
      categoria: ["catalogo"],
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
    id: "perfume-artesanal-renascenca-purpura",
    nome: "Perfume Artesanal Renascença Púrpura",
    precoOriginal: "R$79,90",
    precoDesconto: "R$69,90",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/thairo-1x1.svg",
    imagemVerso: "produtos/thairo-1x1.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "ativos-lavanda-provence",
      cor: "cores-lilas",
      categoria: ["catalogo", "promocao"],
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
    id: "perfume-artesanal-raio-verde",
    nome: "Perfume Artesanal Raio Verde",
    precoOriginal: "R$79,90",
    precoDesconto: "R$69,90",
    subtitulo: "[1 un. / 60ml].",
    esgotado: true,
    imagemFrente: "produtos/thairo-1x1.svg",
    imagemVerso: "produtos/thairo-1x1.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: ["ativos-capim-limao", "ativos-alecrim-rosmarino"],
      cor: "cores-verde",
      categoria: ["catalogo", "promocao"],
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
    id: "perfume-artesanal-capim-selvagem",
    nome: "Perfume Artesanal Capim Selvagem",
    precoOriginal: "R$99,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: true,
    imagemFrente: "produtos/thairo-1x1.svg",
    imagemVerso: "produtos/thairo-1x1.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: ["ativos-capim-limao", "ativos-lavanda-provence"],
      cor: ["cores-verde", "cores-lilas"],
      categoria: ["catalogo"],
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
  {
    id: "perfume-artesanal-mercurio-floral",
    nome: "Perfume Artesanal Mercúrio Floral",
    precoOriginal: "R$99,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/thairo-1x1.svg",
    imagemVerso: "produtos/thairo-1x1.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "",
      cor: ["cores-vermelho"],
      categoria: ["catalogo"],
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
  {
    id: "perfume-artesanal-fruto-proibido",
    nome: "Perfume Artesanal Fruto Proibido",
    precoOriginal: "R$99,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/thairo-1x1.svg",
    imagemVerso: "produtos/thairo-1x1.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "",
      cor: ["cores-vermelho"],
      categoria: ["catalogo"],
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
  {
    id: "perfume-artesanal-gostosura",
    nome: "Perfume Artesanal Gostosura",
    precoOriginal: "R$99,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/thairo-1x1.svg",
    imagemVerso: "produtos/thairo-1x1.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "",
      cor: ["cores-rosa"],
      categoria: ["catalogo"],
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
  {
    id: "perfume-artesanal-encanto-profundo",
    nome: "Perfume Artesanal Encanto Profundo",
    precoOriginal: "R$99,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/thairo-1x1.svg",
    imagemVerso: "produtos/thairo-1x1.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "",
      cor: ["cores-vermelho", "cores-laranja"],
      categoria: ["catalogo"],
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
  {
    id: "perfume-artesanal-sete-versos",
    nome: "Perfume Artesanal Sete Versos",
    precoOriginal: "R$99,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/thairo-1x1.svg",
    imagemVerso: "produtos/thairo-1x1.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "",
      cor: ["cores-rosa"],
      categoria: ["catalogo"],
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
  {
    id: "sabonete-corporal-docura-citrica",
    nome: "Sabonete Corporal Docura Cítrica",
    precoOriginal: "R$99,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/sabonete-teste.svg",
    imagemVerso: "produtos/sabonete-teste.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-verde"],
      categoria: ["catalogo"],
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
  {
    id: "sabonete-corporal-renascença-purpura",
    nome: "Sabonete Corporal Renascença Púrpura",
    precoOriginal: "R$99,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/sabonete-teste.svg",
    imagemVerso: "produtos/sabonete-teste.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-lilas"],
      categoria: ["catalogo"],
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
  {
    id: "sabonete-corporal-capim-selvagem",
    nome: "Sabonete Corporal Capim Selvagem",
    precoOriginal: "R$99,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/sabonete-teste.svg",
    imagemVerso: "produtos/sabonete-teste.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-verde", "cores-lilas"],
      categoria: ["catalogo"],
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
  {
    id: "sabonete-corporal-raio-verde",
    nome: "Sabonete Corporal Raio Verde",
    precoOriginal: "R$99,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/sabonete-teste.svg",
    imagemVerso: "produtos/sabonete-teste.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-verde"],
      categoria: ["catalogo"],
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
  {
    id: "sabonete-corporal-capim-limao",
    nome: "Sabonete Corporal Capim Limão",
    precoOriginal: "R$99,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/sabonete-teste.svg",
    imagemVerso: "produtos/sabonete-teste.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-verde"],
      categoria: ["catalogo"],
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
  {
    id: "sabonete-corporal-mercurio-floral",
    nome: "Sabonete Corporal Mercúrio Floral",
    precoOriginal: "R$99,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/sabonete-teste.svg",
    imagemVerso: "produtos/sabonete-teste.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-vermelho"],
      categoria: ["catalogo"],
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
  {
    id: "sabonete-corporal-fruto-proibido",
    nome: "Sabonete Corporal Fruto Proibido",
    precoOriginal: "R$99,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/sabonete-teste.svg",
    imagemVerso: "produtos/sabonete-teste.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-vermelho"],
      categoria: ["catalogo"],
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
  {
    id: "sabonete-corporal-gostosura",
    nome: "Sabonete Corporal Gostosura",
    precoOriginal: "R$99,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/sabonete-teste.svg",
    imagemVerso: "produtos/sabonete-teste.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-rosa"],
      categoria: ["catalogo"],
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
  {
    id: "sabonete-corporal-encanto-profundo",
    nome: "Sabonete Corporal Encanto Profundo",
    precoOriginal: "R$99,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/sabonete-teste.svg",
    imagemVerso: "produtos/sabonete-teste.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-vermelho", "cores-laranja"],
      categoria: ["catalogo"],
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
  {
    id: "sabonete-corporal-sete-versos",
    nome: "Sabonete Corporal Sete Versos",
    precoOriginal: "R$99,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/sabonete-teste.svg",
    imagemVerso: "produtos/sabonete-teste.svg",
    video3d: "produtos/perfume-teste.webm",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-rosa"],
      categoria: ["catalogo"],
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

function gerarLinkPaginaProduto(produto) {
  return `produto.html?id=${encodeURIComponent(produto.id)}`;
}

function encontrarProdutoDoCarrinho(item) {
  return (
    BANCO_PRODUTOS.find((produto) => produto.id === item.id) ||
    BANCO_PRODUTOS.find((produto) => produto.nome === item.nome)
  );
}
