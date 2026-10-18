// ==========================================
// 1. BANCO DE DADOS DE PRODUTOS (Unificado)
// ==========================================
const BANCO_PRODUTOS = [
  {
    id: "perfume-artesanal-docura-citrica",
    nome: "Perfume Artesanal Doçura Cítrica",
    precoOriginal: "R$70",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/perfume-artesanal-docura-citrica1.webp",
    imagemVerso: "produtos/perfume-artesanal-docura-citrica2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "ativos-capim-limao",
      cor: "cores-verde",
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'A vibração cítrica do capim-limão entrelaçada à leveza de notas botânicas puras. Um aroma solar que desperta os sentidos, renova as energias e envolve a pele em um frescor elegante e atemporal.<br><br><em>"Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Capim-Limão<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Capim-Limão<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Parfum (Capim-Limão), Óleo Essencial de Capim-Limão, Corantes: CI 19140 e CI 42090.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Produto inflamável: mantenha longe do fogo e calor. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 perfume<br><strong>Volume:</strong> 60 ml<br><strong>Medida:</strong> 50 x 50 x 120 mm<br><strong>Formato:</strong> Líquido<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Spray Borrifador<br><strong>Formato:</strong> Líquido<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Spray Borrifador<br><strong>Família Olfativa:</strong> Cítrico<br><strong>Concentração:</strong> Extrait de Parfum<br><strong> Fixação:</strong> 4 à 7 horas<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "perfume-artesanal-renascenca-purpura",
    nome: "Perfume Artesanal Renascença Púrpura",
    precoOriginal: "R$70",
    precoDesconto: "R$65",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/perfume-artesanal-renascenca-purpura1.webp",
    imagemVerso: "produtos/perfume-artesanal-renascenca-purpura2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "ativos-lavanda-provence",
      cor: "cores-lilas",
      categoria: ["catalogo", "promocao"],
    },
    acordeoes: {
      sobre:
        'A serenidade e a elegância dos campos floridos do sul da França. Uma fragrância floral e aromática que acalma a mente, perfuma a pele suavemente e desperta uma sensação de conforto e bem-estar.<br><br><em>"Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Lavanda Provence<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Lavanda Provence<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Parfum (Lavanda Provence), Óleo Essencial de Lavanda Provence, Corantes: CI 16255 e CI42090.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Produto inflamável: mantenha longe do fogo e calor. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 perfume<br><strong>Volume:</strong> 60 ml<br><strong>Medida:</strong> 50 x 50 x 120 mm<br><strong>Formato:</strong> Líquido<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Spray Borrifador<br><strong>Família Olfativa:</strong> Floral<br><strong>Concentração:</strong> Extrait de Parfum<br><strong> Fixação:</strong> 4 à 7 horas<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "perfume-artesanal-capim-selvagem",
    nome: "Perfume Artesanal Capim Selvagem",
    precoOriginal: "R$70",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: true,
    imagemFrente: "produtos/perfume-artesanal-capim-selvagem1.webp",
    imagemVerso: "produtos/perfume-artesanal-capim-selvagem2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: ["ativos-capim-limao", "ativos-lavanda-provence"],
      cor: ["cores-verde", "cores-lilas"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'Vitalidade cítrica e aconchego floral em perfeita sintonia. Uma fragrância leve, relaxante e marcante, desenhada para criar um ritual de tranquilidade e sofisticação.<br><br><em>"Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Capim-Limão<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencal de Lavanda Provence<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Capim-Limão<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Lavanda Provence<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Parfum (Capim-Limão, Lavanda Provence), Óleo Essencial de Capim-Limão, Óleo Essencial de Lavanda Provence Corantes: CI 19140 e     CI 42090; CI 16255 e CI 42090.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Produto inflamável: mantenha longe do fogo e calor. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 perfume<br><strong>Volume:</strong> 60 ml<br><strong>Medida:</strong> 50 x 50 x 120 mm<br><strong>Formato:</strong> Líquido<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Spray Borrifador<br><strong>Família Olfativa:</strong> Cítrico Floral<br><strong>Concentração:</strong> Extrait de Parfum<br><strong> Fixação:</strong> 4 à 7 horas<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "perfume-artesanal-raio-verde",
    nome: "Perfume Artesanal Raio Verde",
    precoOriginal: "R$70",
    precoDesconto: "R$65",
    subtitulo: "[1 un. / 60ml].",
    esgotado: true,
    imagemFrente: "produtos/perfume-artesanal-raio-verde1.webp",
    imagemVerso: "produtos/perfume-artesanal-raio-verde2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: ["ativos-capim-limao", "ativos-alecrim-rosmarino"],
      cor: "cores-verde",
      categoria: ["catalogo", "promocao"],
    },
    acordeoes: {
      sobre:
        'Luz cítrica e herbalismo nobre. Um acorde fresco, purificante e envolvente que desperta os sentidos e traz uma sensação inconfundível de bem-estar e vitalidade.<br><br><em>"Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Capim-Limão<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Alecrim Rosmarino<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Capim-Limão<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Alecrim Rosmarino<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Parfum (Capim-Limão, Alecrim Rosmarino), Óleo Essencial de Capim-Limão, Óleo Essencial de Alecrim, Corantes: Corantes: CI 19140 e CI 42090; CI 19140 e CI 15985.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Produto inflamável: mantenha longe do fogo e calor. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 perfume<br><strong>Volume:</strong> 60 ml<br><strong>Medida:</strong> 50 x 50 x 120 mm<br><strong>Formato:</strong> Líquido<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Spray Borrifador<br><strong>Família Olfativa:</strong> Herbal Cítrico<br><strong>Concentração:</strong> Extrait de Parfum<br><strong> Fixação:</strong> 4 à 7 horas<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },

  {
    id: "perfume-artesanal-mercurio-floral",
    nome: "Perfume Artesanal Mercúrio Floral",
    precoOriginal: "R$70",
    precoDesconto: "R$65",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/perfume-artesanal-mercurio-floral1.webp",
    imagemVerso: "produtos/perfume-artesanal-mercurio-floral2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "",
      cor: ["cores-vermelho"],
      categoria: ["catalogo", "promocao"],
    },
    acordeoes: {
      sobre:
        'A poesia poética da primavera em sua forma mais delicada. Uma fragrância floral suave que combina a leveza das pétalas cor-de-rosa a um toque sutilmente adocicado, envolvendo a pele em elegância e sofisticação.<br><br><em>"Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Capim-Limão<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Flor-de-Cerejeira<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Parfum (Flor-de-Cerejeira), Óleo Essencial de Capim-Limão, Corantes: CI 16185 e CI 15985; CI 19140 e CI 15985.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Produto inflamável: mantenha longe do fogo e calor. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 perfume<br><strong>Volume:</strong> 60 ml<br><strong>Medida:</strong> 50 x 50 x 120 mm<br><strong>Formato:</strong> Líquido<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Spray Borrifador<br><strong>Família Olfativa:</strong> Floral Frutado<br><strong>Concentração:</strong> Extrait de Parfum<br><strong> Fixação:</strong> 4 à 7 horas<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "perfume-artesanal-fruto-proibido",
    nome: "Perfume Artesanal Fruto Proibido",
    precoOriginal: "R$70",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/perfume-artesanal-fruto-proibido1.webp",
    imagemVerso: "produtos/perfume-artesanal-fruto-proibido2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "",
      cor: ["cores-vermelho"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'O aroma suculento e luminoso dos morangos colhidos no ápice do seu frescor. Um acorde alegre, marcante e refinado, que traz leveza, sofisticação e uma sensação deliciosa ao seu dia.<br><br><em>"Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Capim-Limão<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Morango<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Parfum (Morango), Óleo de Capim-Limão, Corantes: CI 16185 e CI 15985.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Produto inflamável: mantenha longe do fogo e calor. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 perfume<br><strong>Volume:</strong> 60 ml<br><strong>Medida:</strong> 50 x 50 x 120 mm<br><strong>Formato:</strong> Líquido<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Spray Borrifador<br><strong>Família Olfativa:</strong> Frutado Cítrico<br><strong>Concentração:</strong> Extrait de Parfum<br><strong> Fixação:</strong> 4 à 7 horas<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "perfume-artesanal-gostosura",
    nome: "Perfume Artesanal Gostosura",
    precoOriginal: "R$70",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/perfume-artesanal-gostosura1.webp",
    imagemVerso: "produtos/perfume-artesanal-gostosura2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "",
      cor: ["cores-rosa"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'O encontro entre a intensidade do chocolate nobre e o toque especiado e luminoso das bagas de pimenta rosa. Um acorde misterioso e apaixonante, perfeito para criar uma atmosfera de puro charme e aconchego.<br><br><em>"Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Laranja Doce<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Chocolate<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Pimenta Rosa<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Parfum (Chocolate, Pimenta Rosa), Óleo de Laranja Doce, Corantes: CI 16185,        CI 19140 e CI 42090.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Produto inflamável: mantenha longe do fogo e calor. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 perfume<br><strong>Volume:</strong> 60 ml<br><strong>Medida:</strong> 50 x 50 x 120 mm<br><strong>Formato:</strong> Líquido<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Spray Borrifador<br><strong>Família Olfativa:</strong> Gourmand Especiado<br><strong>Concentração:</strong> Extrait de Parfum<br><strong> Fixação:</strong> 4 à 7 horas<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "perfume-artesanal-encanto-profundo",
    nome: "Perfume Artesanal Encanto Profundo",
    precoOriginal: "R$70",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/perfume-artesanal-encanto-profundo1.webp",
    imagemVerso: "produtos/perfume-artesanal-encanto-profundo2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "",
      cor: ["cores-vermelho", "cores-laranja"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'Doçura frutada e elegância floral em perfeita harmonia. Uma combinação radiante, suave e marcante na medida certa, desenhada para celebrar a leveza e o encanto do dia a dia.<br><br><em>"Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Capim-Limão<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Flor-de-Cerejeira<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Morango<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Parfum (Flor-de-Cerejeira, Morango), Óleo de Capim-Limão, Corantes:  CI 16185 e CI 15985; CI 19140 e CI 15985.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Produto inflamável: mantenha longe do fogo e calor. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 perfume<br><strong>Volume:</strong> 60 ml<br><strong>Medida:</strong> 50 x 50 x 120 mm<br><strong>Formato:</strong> Líquido<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Spray Borrifador<br><strong>Família Olfativa:</strong> Floral Frutado<br><strong>Concentração:</strong> Extrait de Parfum<br><strong> Fixação:</strong> 4 à 7 horas<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "perfume-artesanal-sete-versos",
    nome: "Perfume Artesanal Sete Versos",
    precoOriginal: "R$70",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/perfume-artesanal-sete-versos1.webp",
    imagemVerso: "produtos/perfume-artesanal-sete-versos2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "",
      cor: ["cores-rosa"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'A vivacidade e a sofisticação das bagas de pimenta rosa em uma criação única. Uma fragrância floral especiada que combina calor, brilho e elegância, deixando um rastro envolvente e cheio de personalidade.<br><br><em>"Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Melaleuca<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Pimensa Rosa<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Parfum (Pimenta Rosa), Óleo Essencial de Melaleuca, Corantes: CI 16255 e   CI 77891.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Produto inflamável: mantenha longe do fogo e calor. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 perfume<br><strong>Volume:</strong> 60 ml<br><strong>Medida:</strong> 50 x 50 x 120 mm<br><strong>Formato:</strong> Líquido<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Spray Borrifador<br><strong>Família Olfativa:</strong> Aromático Especiado<br><strong>Concentração:</strong> Extrait de Parfum<br><strong> Fixação:</strong> 4 à 7 horas<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "perfume-artesanal-gostosura-intensa",
    nome: "Perfume Artesanal Gostosura Intensa",
    precoOriginal: "R$70",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/perfume-artesanal-gostosura-intensa1.webp",
    imagemVerso: "produtos/perfume-artesanal-gostosura-intensa2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "",
      cor: ["cores-rosa"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'O brilho solar da laranja encontra a tentação suculenta do morango banhado em cacau refinado. Um acorde equilibrado, acolhedor e cheio de encanto, desenhado para transformar cada instante em um momento de puro prazer.<br><br><em>"Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Laranja Doce<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Chocolate<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Morango<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Parfum (Chocolate, Morango), Óleo Essencial de Laranja, Corantes: CI 16185 e CI 15985; CI 16185, CI 19140 e CI 42090.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Produto inflamável: mantenha longe do fogo e calor. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 perfume<br><strong>Volume:</strong> 60 ml<br><strong>Medida:</strong> 50 x 50 x 120 mm<br><strong>Formato:</strong> Líquido<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Spray Borrifador<br><strong>Família Olfativa:</strong> Gourmand Frutado<br><strong>Concentração:</strong> Extrait de Parfum<br><strong> Fixação:</strong> 4 à 7 horas<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "perfume-artesanal-campo-sereno",
    nome: "Perfume Artesanal Campo Sereno",
    precoOriginal: "R$70",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/perfume-artesanal-campo-sereno1.webp",
    imagemVerso: "produtos/perfume-artesanal-campo-sereno2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "",
      cor: ["cores-rosa"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'Um passeio matinal por um jardim de ervas aromáticas. O contraste entre a vivacidade cítrica e o toque suavemente adocicado resulta em uma fragrância harmoniosa, fluida e atemporal.<br><br><em>"Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Capim-Limão<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Erva Doce<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Parfum (Erva Doce), Óleo Essencial de Capim-Limão, Corantes: CI 19140 e CI 15985; CI 19140 e CI 42090.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Produto inflamável: mantenha longe do fogo e calor. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 perfume<br><strong>Volume:</strong> 60 ml<br><strong>Medida:</strong> 50 x 50 x 120 mm<br><strong>Formato:</strong> Líquido<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Spray Borrifador<br><strong>Família Olfativa:</strong> Herbal Fresco<br><strong>Concentração:</strong> Extrait de Parfum<br><strong> Fixação:</strong> 4 à 7 horas<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "sabonete-corporal-docura-citrica",
    nome: "Sabonete Corporal Doçura Cítrica",
    precoOriginal: "R$8",
    precoDesconto: "",
    subtitulo: "[1 un. / 85g].",
    esgotado: false,
    imagemFrente: "produtos/sabonete-corporal-docura-citrica1.webp",
    imagemVerso: "produtos/sabonete2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-verde"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'Umas notas cítricas e revigorantes de Capim-Limão que despertam os sentidos. Limpeza suave, hidratação profunda e a energia pura do frescor natural em cada banho.<br><br><em>"Cada sabonete é uma peça única. O produto real apresenta variações orgânicas em sua pintura aquarelada devido à natureza do trabalho feito à mão"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Capim-Limão<br>&nbsp&nbsp;&nbsp;&nbsp;• Óleo Vegetal de Amêndoa Doce<br>&nbsp;&nbsp;&nbsp;&nbsp;• Argila Branca<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Capim-Limão<br>- Limpeza hidratante<br>- Não testado em animais",
      composicao:
        "Glicerina, Sacarose, Álcool Etílico, Seboato de Sódio, Palmisteato de Sódio, Propilenoglicol, Água, Dióxido de Titânio, Lauril Éter Sulfato de Sódio, Copolímero de Ácido Metacrílico e Acrilato de Etila, Polidocanol, Etidronato Tetrassódico, Fenoxitanol, Metilcloroisotiazolinona, Metilisotiazolinona, Óleo Vegetal de Amêndoa Doce, Parfum (Capim-Limão), Óleo Essencial de Capim-Limão, Argila Branca, Corantes: CI 19140 e CI 42090.",
      modoUso:
        "Friccionar na pele molhada com movimentos circulares até formar espuma e enxaguar abundantemente. Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 sabonete<strong><br>Volume:</strong> 85 gramas<br><strong>Medida:</strong> 80 x 55 x 22 mm<br><strong>Formato:</strong> Sólido (em barra)<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Uso direto<br><strong>Família Olfativa:</strong> Cítrico<br><strong>Concentração:</strong> Carga Olfativa Máxima<br><strong>Fixação:</strong> Intensa no banho, suave na pele<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "sabonete-corporal-renascença-purpura",
    nome: "Sabonete Corporal Renascença Púrpura",
    precoOriginal: "R$8",
    precoDesconto: "",
    subtitulo: "[1 un. / 85g].",
    esgotado: false,
    imagemFrente: "produtos/sabonete-corporal-renascenca-purpura1.webp",
    imagemVerso: "produtos/sabonete2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-lilas"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'Inspirado no charme e no aroma clássico do sul da França, este sabonete combina a delicadeza florada da Lavanda ao cuidado nutritivo do óleo de amêndoa doce. O ritual perfeito para desacelerar.<br><br><em>"Cada sabonete é uma peça única. O produto real apresenta variações orgânicas em sua pintura aquarelada devido à natureza do trabalho feito à mão"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Lavanda Provence<br>&nbsp&nbsp;&nbsp;&nbsp;• Óleo Vegetal de Amêndoa Doce<br>&nbsp;&nbsp;&nbsp;&nbsp;• Argila Branca<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Lavanda Provence<br>- Limpeza hidratante<br>- Não testado em animais",
      composicao:
        "Glicerina, Sacarose, Álcool Etílico, Seboato de Sódio, Palmisteato de Sódio, Propilenoglicol, Água, Dióxido de Titânio, Lauril Éter Sulfato de Sódio, Copolímero de Ácido Metacrílico e Acrilato de Etila, Polidocanol, Etidronato Tetrassódico, Fenoxitanol, Metilcloroisotiazolinona, Metilisotiazolinona, Óleo Vegetal de Amêndoa Doce, Parfum (Lavanda Provence), Óleo Essencial de Lavanda Provence, Argila Branca, Corantes: CI 16255 e CI 42090.",
      modoUso:
        "Friccionar na pele molhada com movimentos circulares até formar espuma e enxaguar abundantemente. Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 sabonete<strong><br>Volume:</strong> 85 gramas<br><strong>Medida:</strong> 80 x 55 x 22 mm<br><strong>Formato:</strong> Sólido (em barra)<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Uso direto<br><strong>Família Olfativa:</strong> Floral<br><strong>Concentração:</strong> Carga Olfativa Máxima<br><strong>Fixação:</strong> Intensa no banho, suave na pele<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "sabonete-corporal-capim-selvagem",
    nome: "Sabonete Corporal Capim Selvagem",
    precoOriginal: "R$8",
    precoDesconto: "",
    subtitulo: "[1 un. / 85g].",
    esgotado: false,
    imagemFrente: "produtos/sabonete-artesanal-capim-selvagem1.webp",
    imagemVerso: "produtos/sabonete2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-verde", "cores-lilas"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'O encontro perfeito entre a energia vibrante do Capim-Limão e a serenidade relaxante da Lavanda Provence. Um banho aveludado que acalma a mente, renova os sentidos e cuida delicadamente da pele.<br><br><em>"Cada sabonete é uma peça única. O produto real apresenta variações orgânicas em sua pintura aquarelada devido à natureza do trabalho feito à mão"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Capim-Limão<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencal de Lavanda Provence<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Vegetal de Amêndoa Doce<br>&nbsp;&nbsp;&nbsp;&nbsp;• Argila Branca<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Capim-Limão<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Lavanda Provence<br>- Limpeza hidratante<br>- Não testado em animais",
      composicao:
        "Glicerina, Sacarose, Álcool Etílico, Seboato de Sódio, Palmisteato de Sódio, Propilenoglicol, Água, Dióxido de Titânio, Lauril Éter Sulfato de Sódio, Copolímero de Ácido Metacrílico e Acrilato de Etila, Polidocanol, Etidronato Tetrassódico, Fenoxitanol, Metilcloroisotiazolinona, Metilisotiazolinona, Óleo Vegetal de Amêndoa Doce, Parfum (Capim-Limão, Lavanda Provence), Óleo Essencial de Capim-Limão, Óleo Essencial de Lavanda Provence, Argila Branca, Corantes:  CI 19140 e CI 42090; CI 16255 e CI 42090.",
      modoUso:
        "Friccionar na pele molhada com movimentos circulares até formar espuma e enxaguar abundantemente. Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 sabonete<strong><br>Volume:</strong> 85 gramas<br><strong>Medida:</strong> 80 x 55 x 22 mm<br><strong>Formato:</strong> Sólido (em barra)<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Uso direto<br><strong>Família Olfativa:</strong> Cítrico Floral<br><strong>Concentração:</strong> Carga Olfativa Máxima<br><strong>Fixação:</strong> Intensa no banho, suave na pele<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "sabonete-corporal-raio-verde",
    nome: "Sabonete Corporal Raio Verde",
    precoOriginal: "R$8",
    precoDesconto: "",
    subtitulo: "[1 un. / 85g].",
    esgotado: false,
    imagemFrente: "produtos/sabonete1.webp",
    imagemVerso: "produtos/sabonete2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-verde", "cores-amarelo"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'Frescor cítrico e presença herbal. O equilíbrio harmonioso entre Capim-Limão e Alecrim Rosmarino, oferecendo nutrição aveludada e vitalidade pura para o seu dia.<br><br><em>"Cada sabonete é uma peça única. O produto real apresenta variações orgânicas em sua pintura aquarelada devido à natureza do trabalho feito à mão"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Capim-Limão<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Alecrim Rosmarino<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Vegetal de Amêndoa Doce<br>&nbsp;&nbsp;&nbsp;&nbsp;• Argila Branca<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Capim-Limão<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Alecrim Rosmarino<br>- Limpeza hidratante<br>- Não testado em animais",
      composicao:
        "Glicerina, Sacarose, Álcool Etílico, Seboato de Sódio, Palmisteato de Sódio, Propilenoglicol, Água, Dióxido de Titânio, Lauril Éter Sulfato de Sódio, Copolímero de Ácido Metacrílico e Acrilato de Etila, Polidocanol, Etidronato Tetrassódico, Fenoxitanol, Metilcloroisotiazolinona, Metilisotiazolinona, Óleo Vegetal de Amêndoa Doce, Parfum (Capim-Limão, Alecrim Rosmarino), Óleo Essencial de Capim-Limão, Óleo Essencial de Alecrim, Argila Branca, Corantes: CI 19140 e CI 42090; CI 19140 e CI 15985.",
      modoUso:
        "Friccionar na pele molhada com movimentos circulares até formar espuma e enxaguar abundantemente. Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 sabonete<strong><br>Volume:</strong> 85 gramas<br><strong>Medida:</strong> 80 x 55 x 22 mm<br><strong>Formato:</strong> Sólido (em barra)<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Uso direto<br><strong>Família Olfativa:</strong> Herbal Cítrico<br><strong>Concentração:</strong> Carga Olfativa Máxima<br><strong>Fixação:</strong> Intensa no banho, suave na pele<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "sabonete-corporal-mercurio-floral",
    nome: "Sabonete Corporal Mercúrio Floral",
    precoOriginal: "R$8",
    precoDesconto: "",
    subtitulo: "[1 un. / 85g].",
    esgotado: false,
    imagemFrente: "produtos/sabonete1.webp",
    imagemVerso: "produtos/sabonete2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-vermelho"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'Um sopro de doçura e sofisticação para a pele. A fragrância graciosa da Flor de Cerejeira cria um veludo perfumado, desenhado para nutrir e fascinar os sentidos a cada uso.<br><br><em>"Cada sabonete é uma peça única. O produto real apresenta variações orgânicas em sua pintura aquarelada devido à natureza do trabalho feito à mão"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Capim-Limão<br>&nbsp&nbsp;&nbsp;&nbsp;• Óleo Vegetal de Amêndoa Doce<br>&nbsp;&nbsp;&nbsp;&nbsp;• Argila Branca<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Flor-de-Cerejeira<br>- Limpeza hidratante<br>- Não testado em animais",
      composicao:
        "Glicerina, Sacarose, Álcool Etílico, Seboato de Sódio, Palmisteato de Sódio, Propilenoglicol, Água, Dióxido de Titânio, Lauril Éter Sulfato de Sódio, Copolímero de Ácido Metacrílico e Acrilato de Etila, Polidocanol, Etidronato Tetrassódico, Fenoxitanol, Metilcloroisotiazolinona, Metilisotiazolinona, Óleo Vegetal de Amêndoa Doce, Parfum (Flor-de-Cerejeira), Óleo Essencial de Capim-Limão, Argila Branca, Corantes: CI 16185 e CI 15985; CI 19140 e CI 15985.",
      modoUso:
        "Friccionar na pele molhada com movimentos circulares até formar espuma e enxaguar abundantemente. Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 sabonete<strong><br>Volume:</strong> 85 gramas<br><strong>Medida:</strong> 80 x 55 x 22 mm<br><strong>Formato:</strong> Sólido (em barra)<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Uso direto<br><strong>Família Olfativa:</strong> Floral Frutado<br><strong>Concentração:</strong> Carga Olfativa Máxima<br><strong>Fixação:</strong> Intensa no banho, suave na pele<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "sabonete-corporal-fruto-proibido",
    nome: "Sabonete Corporal Fruto Proibido",
    precoOriginal: "R$8",
    precoDesconto: "",
    subtitulo: "[1 un. / 85g].",
    esgotado: false,
    imagemFrente: "produtos/sabonete1.webp",
    imagemVerso: "produtos/sabonete2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-vermelho"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'Doçura na medida certa. O encanto frutado do Morango em uma textura aveludada, criada para quem busca um ritual alegre, acolhedor e cheio de presença.<br><br><em>"Cada sabonete é uma peça única. O produto real apresenta variações orgânicas em sua pintura aquarelada devido à natureza do trabalho feito à mão"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Capim-Limão<br>&nbsp&nbsp;&nbsp;&nbsp;• Óleo Vegetal de Amêndoa Doce<br>&nbsp;&nbsp;&nbsp;&nbsp;• Argila Branca<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Morango<br>- Limpeza hidratante<br>- Não testado em animais",
      composicao:
        "Glicerina, Sacarose, Álcool Etílico, Seboato de Sódio, Palmisteato de Sódio, Propilenoglicol, Água, Dióxido de Titânio, Lauril Éter Sulfato de Sódio, Copolímero de Ácido Metacrílico e Acrilato de Etila, Polidocanol, Etidronato Tetrassódico, Fenoxitanol, Metilcloroisotiazolinona, Metilisotiazolinona, Óleo Vegetal de Amêndoa Doce, Parfum (Morango), Óleo de Capim-Limão, Argila Branca, Corantes: CI 16185 e CI 15985.",
      modoUso:
        "Friccionar na pele molhada com movimentos circulares até formar espuma e enxaguar abundantemente. Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 sabonete<strong><br>Volume:</strong> 85 gramas<br><strong>Medida:</strong> 80 x 55 x 22 mm<br><strong>Formato:</strong> Sólido (em barra)<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Uso direto<br><strong>Família Olfativa:</strong> Frutado Cítrico<br><strong>Concentração:</strong> Carga Olfativa Máxima<br><strong>Fixação:</strong> Intensa no banho, suave na pele<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "sabonete-corporal-gostosura",
    nome: "Sabonete Corporal Gostosura",
    precoOriginal: "R$8",
    precoDesconto: "",
    subtitulo: "[1 un. / 85g].",
    esgotado: false,
    imagemFrente: "produtos/sabonete1.webp",
    imagemVerso: "produtos/sabonete2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-marrom"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'A intensidade aveludada do chocolate encontra a picardia sutil e elegante da pimenta rosa. Um contraste envolvente e marcante que aquece os sentidos, transformando o banho em um ritual de puro mistério e sofisticação.<br><br><em>"Cada sabonete é uma peça única. O produto real apresenta variações orgânicas em sua pintura aquarelada devido à natureza do trabalho feito à mão"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Laranja Doce<br>&nbsp&nbsp;&nbsp;&nbsp;• Óleo Vegetal de Amêndoa Doce<br>&nbsp;&nbsp;&nbsp;&nbsp;• Argila Branca<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Chocolate<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Pimenta Rosa<br>- Limpeza hidratante<br>- Não testado em animais",
      composicao:
        "Glicerina, Sacarose, Álcool Etílico, Seboato de Sódio, Palmisteato de Sódio, Propilenoglicol, Água, Dióxido de Titânio, Lauril Éter Sulfato de Sódio, Copolímero de Ácido Metacrílico e Acrilato de Etila, Polidocanol, Etidronato Tetrassódico, Fenoxitanol, Metilcloroisotiazolinona, Metilisotiazolinona, Óleo Vegetal de Amêndoa Doce, Parfum (Chocolate, Pimenta Rosa), Óleo de Laranja Doce, Argila Branca, Corantes: CI 16185, CI 19140 e CI 42090.",
      modoUso:
        "Friccionar na pele molhada com movimentos circulares até formar espuma e enxaguar abundantemente. Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 sabonete<strong><br>Volume:</strong> 85 gramas<br><strong>Medida:</strong> 80 x 55 x 22 mm<br><strong>Formato:</strong> Sólido (em barra)<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Uso direto<br><strong>Família Olfativa:</strong> Gourmand Especiado<br><strong>Concentração:</strong> Carga Olfativa Máxima<br><strong>Fixação:</strong> Intensa no banho, suave na pele<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "sabonete-corporal-encanto-profundo",
    nome: "Sabonete Corporal Encanto Profundo",
    precoOriginal: "R$8",
    precoDesconto: "",
    subtitulo: "[1 un. / 85g].",
    esgotado: false,
    imagemFrente: "produtos/sabonete1.webp",
    imagemVerso: "produtos/sabonete2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-vermelho", "cores-laranja"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'A graciosidade da Flor de Cerejeira entrelaça-se ao toque alegre e sucinto do Morango. Um acorde floral-frutado envolvente, que cobre a pele com uma espuma aveludada e um perfume suavemente fascinante.<br><br><em>"Cada sabonete é uma peça única. O produto real apresenta variações orgânicas em sua pintura aquarelada devido à natureza do trabalho feito à mão"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Capim-Limão<br>&nbsp&nbsp;&nbsp;&nbsp;• Óleo Vegetal de Amêndoa Doce<br>&nbsp;&nbsp;&nbsp;&nbsp;• Argila Branca<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Flor-de-Cerejeira<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Morango<br>- Limpeza hidratante<br>- Não testado em animais",
      composicao:
        "Glicerina, Sacarose, Álcool Etílico, Seboato de Sódio, Palmisteato de Sódio, Propilenoglicol, Água, Dióxido de Titânio, Lauril Éter Sulfato de Sódio, Copolímero de Ácido Metacrílico e Acrilato de Etila, Polidocanol, Etidronato Tetrassódico, Fenoxitanol, Metilcloroisotiazolinona, Metilisotiazolinona, Óleo Vegetal de Amêndoa Doce, Parfum (Flor-de-Cerejeira, Morango), Óleo de Capim-Limão, Argila Branca, Corantes:  CI 16185 e CI 15985; CI 19140 e CI 15985.",
      modoUso:
        "Friccionar na pele molhada com movimentos circulares até formar espuma e enxaguar abundantemente. Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 sabonete<strong><br>Volume:</strong> 85 gramas<br><strong>Medida:</strong> 80 x 55 x 22 mm<br><strong>Formato:</strong> Sólido (em barra)<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Uso direto<br><strong>Família Olfativa:</strong> Floral Frutado<br><strong>Concentração:</strong> Carga Olfativa Máxima<br><strong>Fixação:</strong> Intensa no banho, suave na pele<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "sabonete-corporal-sete-versos",
    nome: "Sabonete Corporal Sete Versos",
    precoOriginal: "R$8",
    precoDesconto: "",
    subtitulo: "[1 un. / 85g].",
    esgotado: false,
    imagemFrente: "produtos/sabonete1.webp",
    imagemVerso: "produtos/sabonete2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-rosa"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'Pureza ativa e presença exótica. A ação equilibrante do óleo essencial de Melaleuca combinada com a aura envolvente da Pimenta Rosa, para um banho de cuidado autêntico, leve e revitalizante.<br><br><em>"Cada sabonete é uma peça única. O produto real apresenta variações orgânicas em sua pintura aquarelada devido à natureza do trabalho feito à mão"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Melaleuca<br>&nbsp&nbsp;&nbsp;&nbsp;• Óleo Vegetal de Amêndoa Doce<br>&nbsp;&nbsp;&nbsp;&nbsp;• Argila Branca<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Pimensa Rosa<br>- Limpeza hidratante<br>- Não testado em animais",
      composicao:
        "Glicerina, Sacarose, Álcool Etílico, Seboato de Sódio, Palmisteato de Sódio, Propilenoglicol, Água, Dióxido de Titânio, Lauril Éter Sulfato de Sódio, Copolímero de Ácido Metacrílico e Acrilato de Etila, Polidocanol, Etidronato Tetrassódico, Fenoxitanol, Metilcloroisotiazolinona, Metilisotiazolinona, Óleo Vegetal de Amêndoa Doce, Parfum (Pimenta Rosa), Óleo Essencial de Melaleuca, Argila Branca, Corantes: CI 16255 e CI 77891.",
      modoUso:
        "Friccionar na pele molhada com movimentos circulares até formar espuma e enxaguar abundantemente. Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 sabonete<strong><br>Volume:</strong> 85 gramas<br><strong>Medida:</strong> 80 x 55 x 22 mm<br><strong>Formato:</strong> Sólido (em barra)<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Uso direto<br><strong>Família Olfativa:</strong> Aromático Especiado<br><strong>Concentração:</strong> Carga Olfativa Máxima<br><strong>Fixação:</strong> Intensa no banho, suave na pele<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "sabonete-corporal-gostosura-intensa",
    nome: "Sabonete Corporal Gostosura Intensa",
    precoOriginal: "R$8",
    precoDesconto: "",
    subtitulo: "[1 un. / 85g].",
    esgotado: false,
    imagemFrente: "produtos/sabonete1.webp",
    imagemVerso: "produtos/sabonete2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-vermelho", "cores-marrom"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'A intensidade aveludada do chocolate e a doçura do morango ganham a luz e o frescor radiante do óleo essencial de laranja doce. Uma combinação harmoniosa e envolvente, criada para aquecer a pele e ilumina a rotina.<br><br><em>"Cada sabonete é uma peça única. O produto real apresenta variações orgânicas em sua pintura aquarelada devido à natureza do trabalho feito à mão"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Laranja Doce<br>&nbsp&nbsp;&nbsp;&nbsp;• Óleo Vegetal de Amêndoa Doce<br>&nbsp;&nbsp;&nbsp;&nbsp;• Argila Branca<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Chocolate<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Morango<br>- Limpeza hidratante<br>- Não testado em animais",
      composicao:
        "Glicerina, Sacarose, Álcool Etílico, Seboato de Sódio, Palmisteato de Sódio, Propilenoglicol, Água, Dióxido de Titânio, Lauril Éter Sulfato de Sódio, Copolímero de Ácido Metacrílico e Acrilato de Etila, Polidocanol, Etidronato Tetrassódico, Fenoxitanol, Metilcloroisotiazolinona, Metilisotiazolinona, Óleo Vegetal de Amêndoa Doce, Parfum (Chocolate, Morango), Óleo Essencial de Laranja, Argila Branca, Corantes: CI 16185 e CI 15985; CI 16185, CI 19140 e CI 42090.",
      modoUso:
        "Friccionar na pele molhada com movimentos circulares até formar espuma e enxaguar abundantemente. Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 sabonete<strong><br>Volume:</strong> 85 gramas<br><strong>Medida:</strong> 80 x 55 x 22 mm<br><strong>Formato:</strong> Sólido (em barra)<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Uso direto<br><strong>Família Olfativa:</strong> Gourmand Frutado<br><strong>Concentração:</strong> Carga Olfativa Máxima<br><strong>Fixação:</strong> Intensa no banho, suave na pele<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso.<br><br><strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC.<br><br><strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contato conosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "sabonete-corporal-campo-sereno",
    nome: "Sabonete Corporal Campo Sereno",
    precoOriginal: "R$8",
    precoDesconto: "",
    subtitulo: "[1 un. / 85g].",
    esgotado: false,
    imagemFrente: "produtos/sabonete1.webp",
    imagemVerso: "produtos/sabonete2.webp",
    video3d: "",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-sabonete-corporal",
      ativo: "",
      cor: ["cores-amarelo", "cores-verde"],
      categoria: ["catalogo"],
    },
    acordeoes: {
      sobre:
        'Aroma clássico, toque aveludado e conforto imediato. A presença suave e adocicada da Erva-Doce traduzida em um ritual de limpeza delicado, relaxante e harmonioso.<br><br><em>"Cada sabonete é uma peça única. O produto real apresenta variações orgânicas em sua pintura aquarelada devido à natureza do trabalho feito à mão"</em>.',
      beneficios:
        "- Produção artesanal<br>- Com ativos naturais:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Óleo Essencial de Capim-Limão<br>&nbsp&nbsp;&nbsp;&nbsp;• Óleo Vegetal de Amêndoa Doce<br>&nbsp;&nbsp;&nbsp;&nbsp;• Argila Branca<br>- Aroma acentuado:<br>&nbsp&nbsp;&nbsp;&nbsp;• Essência de Erva Doce<br>- Limpeza hidratante<br>- Não testado em animais",
      composicao:
        "Glicerina, Sacarose, Álcool Etílico, Seboato de Sódio, Palmisteato de Sódio, Propilenoglicol, Água, Dióxido de Titânio, Lauril Éter Sulfato de Sódio, Copolímero de Ácido Metacrílico e Acrilato de Etila, Polidocanol, Etidronato Tetrassódico, Fenoxitanol, Metilcloroisotiazolinona, Metilisotiazolinona, Óleo Vegetal de Amêndoa Doce, Parfum (Erva Doce), Óleo Essencial de Capim-Limão, Argila Branca, Corantes: CI 19140 e CI 15985; CI 19140 e         CI 42090.",
      modoUso:
        "Friccionar na pele molhada com movimentos circulares até formar espuma e enxaguar abundantemente. Após aberto, consumir em até 12 (doze) meses.",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conservar em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Quantidade:</strong> 1 sabonete<strong><br>Volume:</strong> 85 gramas<br><strong>Medida:</strong> 80 x 55 x 22 mm<br><strong>Formato:</strong> Sólido (em barra)<br><strong>Indicação:</strong> Todos os tipos de pele<br><strong>Aplicador:</strong> Uso direto<br><strong>Família Olfativa:</strong> Herbal Fresco<br><strong>Concentração:</strong> Carga Olfativa Máxima<br><strong>Fixação:</strong> Intensa no banho, suave na pele<br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete: "Retirada no local ou envio a combinar pelo WhatsApp.",
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
