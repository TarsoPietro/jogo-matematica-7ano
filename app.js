const blocks = [
  {
    title: "Números inteiros",
    icon: "-7",
    subtitle: "reta numérica, opostos e operações",
    difficulty: "Aquecimento",
    lesson: "Inteiros incluem negativos, zero e positivos. Na reta numérica, andar para a direita aumenta o valor; andar para a esquerda diminui. Sinais iguais na multiplicação dão positivo; sinais diferentes dão negativo.",
    challenges: [
      {
        type: "Reta numérica",
        question: "No jogo da temperatura, Porto Alegre estava em -3 °C e subiu 8 °C. Qual foi a nova temperatura?",
        answers: ["5 °C", "-11 °C", "11 °C", "-5 °C"],
        correct: 0,
        hint: "Subir temperatura significa somar: -3 + 8.",
        visual: { kind: "line", marker: 5 },
        explain: "-3 + 8 = 5. Você atravessou o zero e chegou ao 5."
      },
      {
        type: "Oposto",
        question: "Qual é o oposto de -12?",
        answers: ["12", "-24", "0", "-1,2"],
        correct: 0,
        hint: "O oposto fica à mesma distância do zero, do outro lado.",
        visual: { kind: "line", marker: -12 },
        explain: "O oposto de -12 é 12, pois os dois estão a 12 unidades do zero."
      },
      {
        type: "Operação",
        question: "Resolva: (-4) × 6",
        answers: ["-24", "24", "-10", "2"],
        correct: 0,
        hint: "Sinais diferentes na multiplicação dão resultado negativo.",
        visual: { kind: "tiles", filled: 6, total: 12 },
        explain: "4 × 6 = 24 e os sinais são diferentes, então o resultado é -24."
      },
      {
        type: "Saldo",
        question: "Lia tinha R$ 18,00 e gastou R$ 25,00. O saldo fica:",
        answers: ["R$ -7,00", "R$ 43,00", "R$ 7,00", "R$ -43,00"],
        correct: 0,
        hint: "Gastar é diminuir: 18 - 25.",
        visual: { kind: "line", marker: -7 },
        explain: "18 - 25 = -7. O saldo negativo indica dívida."
      },
      {
        type: "Comparação",
        question: "Qual número é maior?",
        answers: ["-2", "-8", "-15", "-20"],
        correct: 0,
        hint: "Entre negativos, o maior é o que está mais perto do zero.",
        visual: { kind: "line", marker: -2 },
        explain: "-2 está mais à direita na reta numérica, então é o maior."
      }
    ]
  },
  {
    title: "Frações e racionais",
    icon: "3/4",
    subtitle: "frações, decimais e comparação",
    difficulty: "Exploração",
    lesson: "Números racionais podem ser escritos como fração ou decimal. Frações equivalentes representam a mesma parte do todo. Para somar frações com denominadores diferentes, use um denominador comum.",
    challenges: [
      {
        type: "Pizza fracionada",
        question: "Qual fração é equivalente a 3/4?",
        answers: ["6/8", "4/6", "3/8", "7/4"],
        correct: 0,
        hint: "Multiplique numerador e denominador pelo mesmo número.",
        visual: { kind: "fraction", filled: 3, total: 4 },
        explain: "3/4 × 2/2 = 6/8. A parte pintada é a mesma."
      },
      {
        type: "Decimal",
        question: "0,25 corresponde a qual fração?",
        answers: ["1/4", "1/2", "2/5", "3/4"],
        correct: 0,
        hint: "0,25 é 25 de 100.",
        visual: { kind: "fraction", filled: 1, total: 4 },
        explain: "25/100 simplifica para 1/4."
      },
      {
        type: "Soma",
        question: "Calcule: 1/3 + 1/6",
        answers: ["1/2", "2/9", "1/9", "2/6"],
        correct: 0,
        hint: "Transforme 1/3 em 2/6.",
        visual: { kind: "fraction", filled: 3, total: 6 },
        explain: "2/6 + 1/6 = 3/6 = 1/2."
      },
      {
        type: "Comparação",
        question: "Qual é maior?",
        answers: ["5/6", "3/6", "1/2", "0,7"],
        correct: 0,
        hint: "5/6 é aproximadamente 0,83.",
        visual: { kind: "fraction", filled: 5, total: 6 },
        explain: "5/6 é maior que 0,7, 3/6 e 1/2."
      },
      {
        type: "Multiplicação",
        question: "Quanto é 2/5 de 30?",
        answers: ["12", "15", "10", "6"],
        correct: 0,
        hint: "Divida 30 por 5 e multiplique por 2.",
        visual: { kind: "tiles", filled: 12, total: 30 },
        explain: "30 ÷ 5 = 6; 6 × 2 = 12."
      }
    ]
  },
  {
    title: "Porcentagem e proporção",
    icon: "%",
    subtitle: "descontos, razões e regra de três",
    difficulty: "Mercado",
    lesson: "Porcentagem significa uma parte em cada 100. Proporção compara grandezas. Na regra de três, montamos relações equivalentes para encontrar um valor desconhecido.",
    challenges: [
      {
        type: "Desconto",
        question: "Uma mochila de R$ 120,00 teve 25% de desconto. Qual é o valor do desconto?",
        answers: ["R$ 30,00", "R$ 25,00", "R$ 45,00", "R$ 90,00"],
        correct: 0,
        hint: "25% é 1/4. Calcule 120 ÷ 4.",
        visual: { kind: "chart", bars: [120, 90], labels: ["Antes", "Depois"] },
        explain: "25% de 120 é 30. O desconto foi de R$ 30,00."
      },
      {
        type: "Razão",
        question: "Em uma sala há 12 meninas e 8 meninos. A razão meninas:meninos é:",
        answers: ["3:2", "2:3", "12:20", "8:12"],
        correct: 0,
        hint: "Simplifique 12:8 dividindo por 4.",
        visual: { kind: "chart", bars: [12, 8], labels: ["Meninas", "Meninos"] },
        explain: "12:8 simplifica para 3:2."
      },
      {
        type: "Regra de três",
        question: "Se 4 cadernos custam R$ 28,00, quanto custam 7 cadernos?",
        answers: ["R$ 49,00", "R$ 35,00", "R$ 56,00", "R$ 42,00"],
        correct: 0,
        hint: "Descubra primeiro o preço de 1 caderno.",
        visual: { kind: "chart", bars: [4, 7], labels: ["4 cad.", "7 cad."] },
        explain: "Cada caderno custa R$ 7,00. Sete custam R$ 49,00."
      },
      {
        type: "Aumento",
        question: "Um jogo tinha 200 pontos e aumentou 10%. Qual é a nova pontuação?",
        answers: ["220", "210", "190", "20"],
        correct: 0,
        hint: "10% de 200 é 20. Some ao valor inicial.",
        visual: { kind: "chart", bars: [200, 220], labels: ["Antes", "Agora"] },
        explain: "200 + 20 = 220."
      },
      {
        type: "Escala",
        question: "Em um mapa, 1 cm representa 5 km. Uma distância de 6 cm representa:",
        answers: ["30 km", "11 km", "25 km", "60 km"],
        correct: 0,
        hint: "Multiplique 6 por 5.",
        visual: { kind: "line", marker: 6 },
        explain: "6 × 5 km = 30 km."
      }
    ]
  },
  {
    title: "Expressões e equações",
    icon: "x",
    subtitle: "linguagem algébrica e incógnitas",
    difficulty: "Laboratório",
    lesson: "Álgebra usa letras para representar números desconhecidos. Em uma equação, fazemos a mesma operação nos dois lados para manter o equilíbrio e descobrir o valor da incógnita.",
    challenges: [
      {
        type: "Balança",
        question: "Se x + 7 = 19, então x vale:",
        answers: ["12", "26", "7", "19"],
        correct: 0,
        hint: "Tire 7 dos dois lados.",
        visual: { kind: "balance", left: "x + 7", right: "19" },
        explain: "x = 19 - 7 = 12."
      },
      {
        type: "Expressão",
        question: "Para x = 4, quanto vale 3x + 2?",
        answers: ["14", "9", "18", "20"],
        correct: 0,
        hint: "Troque x por 4.",
        visual: { kind: "balance", left: "3x + 2", right: "?" },
        explain: "3 × 4 + 2 = 12 + 2 = 14."
      },
      {
        type: "Equação",
        question: "Resolva: 2x = 18",
        answers: ["9", "16", "20", "36"],
        correct: 0,
        hint: "Divida os dois lados por 2.",
        visual: { kind: "balance", left: "2x", right: "18" },
        explain: "x = 18 ÷ 2 = 9."
      },
      {
        type: "Linguagem",
        question: "A frase 'o dobro de um número mais 5' vira:",
        answers: ["2x + 5", "x/2 + 5", "2 + x + 5", "5x + 2"],
        correct: 0,
        hint: "Dobro significa multiplicar por 2.",
        visual: { kind: "balance", left: "dobro + 5", right: "2x + 5" },
        explain: "O dobro de x é 2x; mais 5 fica 2x + 5."
      },
      {
        type: "Sequência",
        question: "Na sequência 4, 7, 10, 13, a regra é:",
        answers: ["somar 3", "multiplicar por 2", "subtrair 4", "somar 7"],
        correct: 0,
        hint: "Compare um termo com o próximo.",
        visual: { kind: "chart", bars: [4, 7, 10, 13], labels: ["1", "2", "3", "4"] },
        explain: "Cada termo aumenta 3 unidades."
      }
    ]
  },
  {
    title: "Geometria plana",
    icon: "△",
    subtitle: "área, perímetro e formas",
    difficulty: "Ateliê",
    lesson: "Perímetro é a medida do contorno. Área mede a superfície. Retângulos usam base × altura; triângulos usam base × altura ÷ 2. Unidades quadradas aparecem em áreas.",
    challenges: [
      {
        type: "Área",
        question: "Um retângulo mede 8 cm por 5 cm. Qual é a área?",
        answers: ["40 cm²", "26 cm²", "13 cm²", "80 cm²"],
        correct: 0,
        hint: "Área do retângulo = base × altura.",
        visual: { kind: "shape", shape: "rect", a: 8, b: 5 },
        explain: "8 × 5 = 40 cm²."
      },
      {
        type: "Perímetro",
        question: "Um quadrado tem lado de 6 cm. Qual é o perímetro?",
        answers: ["24 cm", "36 cm²", "12 cm", "18 cm"],
        correct: 0,
        hint: "Some os 4 lados iguais.",
        visual: { kind: "shape", shape: "square", a: 6 },
        explain: "6 + 6 + 6 + 6 = 24 cm."
      },
      {
        type: "Triângulo",
        question: "Um triângulo tem base 10 cm e altura 6 cm. Qual é a área?",
        answers: ["30 cm²", "60 cm²", "16 cm²", "20 cm²"],
        correct: 0,
        hint: "Use base × altura ÷ 2.",
        visual: { kind: "shape", shape: "tri", a: 10, b: 6 },
        explain: "10 × 6 ÷ 2 = 30 cm²."
      },
      {
        type: "Circunferência",
        question: "O raio de um círculo é 4 cm. O diâmetro é:",
        answers: ["8 cm", "4 cm", "12 cm", "16 cm"],
        correct: 0,
        hint: "Diâmetro é o dobro do raio.",
        visual: { kind: "shape", shape: "circle", a: 4 },
        explain: "2 × 4 = 8 cm."
      },
      {
        type: "Unidades",
        question: "Qual unidade combina com área?",
        answers: ["m²", "m", "kg", "L"],
        correct: 0,
        hint: "Área usa unidades ao quadrado.",
        visual: { kind: "tiles", filled: 9, total: 16 },
        explain: "Área é medida em unidades quadradas, como cm² ou m²."
      }
    ]
  },
  {
    title: "Ângulos e polígonos",
    icon: "∠",
    subtitle: "classificação e soma dos ângulos",
    difficulty: "Construção",
    lesson: "Ângulos podem ser agudos, retos, obtusos ou rasos. Polígonos são figuras fechadas com lados retos. A soma dos ângulos internos de um triângulo é sempre 180°.",
    challenges: [
      {
        type: "Ângulo",
        question: "Um ângulo de 90° é chamado de:",
        answers: ["reto", "agudo", "obtuso", "raso"],
        correct: 0,
        hint: "É o ângulo do canto de uma folha.",
        visual: { kind: "angle", degrees: 90 },
        explain: "90° forma um ângulo reto."
      },
      {
        type: "Triângulo",
        question: "Em um triângulo, dois ângulos medem 50° e 60°. O terceiro mede:",
        answers: ["70°", "60°", "90°", "110°"],
        correct: 0,
        hint: "A soma interna do triângulo é 180°.",
        visual: { kind: "shape", shape: "tri", a: 50, b: 60 },
        explain: "180° - 50° - 60° = 70°."
      },
      {
        type: "Polígono",
        question: "Um hexágono tem quantos lados?",
        answers: ["6", "5", "7", "8"],
        correct: 0,
        hint: "O prefixo hexa indica seis.",
        visual: { kind: "polygon", sides: 6 },
        explain: "Hexágono é um polígono de 6 lados."
      },
      {
        type: "Classificação",
        question: "Um ângulo de 120° é:",
        answers: ["obtuso", "agudo", "reto", "nulo"],
        correct: 0,
        hint: "É maior que 90° e menor que 180°.",
        visual: { kind: "angle", degrees: 120 },
        explain: "Ângulos entre 90° e 180° são obtusos."
      },
      {
        type: "Retas",
        question: "Retas que se cruzam formando 90° são:",
        answers: ["perpendiculares", "paralelas", "coincidentes", "curvas"],
        correct: 0,
        hint: "Pense em uma cruz bem alinhada.",
        visual: { kind: "angle", degrees: 90 },
        explain: "Retas perpendiculares se encontram formando ângulos retos."
      }
    ]
  },
  {
    title: "Plano cartesiano",
    icon: "(x,y)",
    subtitle: "coordenadas e gráficos",
    difficulty: "Radar",
    lesson: "No plano cartesiano, um ponto é escrito como (x, y). O primeiro número indica o deslocamento horizontal; o segundo indica o vertical. Gráficos ajudam a enxergar padrões.",
    challenges: [
      {
        type: "Coordenada",
        question: "No ponto (3, -2), qual é o valor de y?",
        answers: ["-2", "3", "2", "-3"],
        correct: 0,
        hint: "O y é o segundo número do par ordenado.",
        visual: { kind: "grid", x: 3, y: -2 },
        explain: "Em (3, -2), x = 3 e y = -2."
      },
      {
        type: "Quadrante",
        question: "O ponto (-4, 5) fica em qual região?",
        answers: ["x negativo e y positivo", "x positivo e y negativo", "ambos positivos", "ambos negativos"],
        correct: 0,
        hint: "Leia os sinais do par ordenado.",
        visual: { kind: "grid", x: -4, y: 5 },
        explain: "O x é negativo e o y é positivo."
      },
      {
        type: "Eixo",
        question: "O ponto (0, 6) está sobre:",
        answers: ["eixo y", "eixo x", "nenhum eixo", "origem"],
        correct: 0,
        hint: "Quando x = 0, o ponto está no eixo vertical.",
        visual: { kind: "grid", x: 0, y: 6 },
        explain: "Todo ponto com x = 0 fica no eixo y."
      },
      {
        type: "Origem",
        question: "A origem do plano cartesiano é:",
        answers: ["(0, 0)", "(1, 1)", "(0, 1)", "(1, 0)"],
        correct: 0,
        hint: "É onde os eixos se encontram.",
        visual: { kind: "grid", x: 0, y: 0 },
        explain: "A origem é o ponto (0, 0)."
      },
      {
        type: "Padrão",
        question: "Nos pontos (1,2), (2,4), (3,6), a regra é:",
        answers: ["y = 2x", "y = x + 2", "y = x - 2", "y = 6x"],
        correct: 0,
        hint: "Compare cada y com seu x.",
        visual: { kind: "grid", x: 3, y: 6 },
        explain: "Em todos os pontos, y é o dobro de x."
      }
    ]
  },
  {
    title: "Estatística e probabilidade",
    icon: "▥",
    subtitle: "média, gráficos e chances",
    difficulty: "Investigação",
    lesson: "Estatística organiza dados para tirar conclusões. Média é a soma dos valores dividida pela quantidade. Probabilidade compara casos favoráveis com casos possíveis.",
    challenges: [
      {
        type: "Média",
        question: "As notas 6, 8 e 10 têm média:",
        answers: ["8", "7", "9", "24"],
        correct: 0,
        hint: "Some as notas e divida por 3.",
        visual: { kind: "chart", bars: [6, 8, 10], labels: ["N1", "N2", "N3"] },
        explain: "(6 + 8 + 10) ÷ 3 = 8."
      },
      {
        type: "Moda",
        question: "Na lista 2, 3, 3, 5, 7, a moda é:",
        answers: ["3", "2", "5", "7"],
        correct: 0,
        hint: "Moda é o valor que mais aparece.",
        visual: { kind: "chart", bars: [1, 2, 1, 1], labels: ["2", "3", "5", "7"] },
        explain: "O número 3 aparece duas vezes, mais que os outros."
      },
      {
        type: "Probabilidade",
        question: "Em uma caixa há 2 bolas vermelhas e 3 azuis. A chance de tirar vermelha é:",
        answers: ["2/5", "3/5", "2/3", "1/2"],
        correct: 0,
        hint: "São 2 casos favoráveis em 5 possíveis.",
        visual: { kind: "balls", red: 2, blue: 3 },
        explain: "Há 2 vermelhas entre 5 bolas no total: 2/5."
      },
      {
        type: "Mediana",
        question: "A mediana de 4, 7, 9, 10, 15 é:",
        answers: ["9", "7", "10", "45"],
        correct: 0,
        hint: "É o valor central da lista organizada.",
        visual: { kind: "chart", bars: [4, 7, 9, 10, 15], labels: ["", "", "", "", ""] },
        explain: "O valor do meio é 9."
      },
      {
        type: "Leitura de gráfico",
        question: "No gráfico com valores 5, 8 e 3, qual é o maior?",
        answers: ["8", "5", "3", "16"],
        correct: 0,
        hint: "Procure a barra mais alta.",
        visual: { kind: "chart", bars: [5, 8, 3], labels: ["A", "B", "C"] },
        explain: "A maior barra tem valor 8."
      }
    ]
  }
];

function choiceChallenge({ type, question, correct, wrong, hint, visual, explain }) {
  return {
    type,
    question,
    answers: [String(correct), ...wrong.map(String)],
    correct: 0,
    hint,
    visual,
    explain
  };
}

function uniqueWrong(correct, options) {
  const correctText = String(correct);
  const wrong = options
    .map(String)
    .filter((option, index, list) => option !== correctText && list.indexOf(option) === index)
    .slice(0, 3);
  const numberMatch = correctText.match(/-?\d+(?:[.,]\d+)?/);
  const number = numberMatch ? Number(numberMatch[0].replace(",", ".")) : null;
  const formatLikeCorrect = (value) => {
    if (correctText.startsWith("R$")) return `R$ ${value},00`;
    if (correctText.includes("°C")) return `${value} °C`;
    if (correctText.includes("cm²")) return `${value} cm²`;
    if (correctText.includes("cm")) return `${value} cm`;
    if (correctText.includes("km")) return `${value} km`;
    if (correctText.includes("°")) return `${value}°`;
    return String(value);
  };
  let step = 1;
  while (wrong.length < 3 && Number.isFinite(number)) {
    const candidate = formatLikeCorrect(number + step);
    if (candidate !== correctText && !wrong.includes(candidate)) {
      wrong.push(candidate);
    }
    step += 1;
  }
  return wrong.slice(0, 3);
}

function generateIntegerChallenges(total) {
  const challenges = [];
  for (let i = 0; challenges.length < total; i += 1) {
    const kind = i % 5;
    if (kind === 0) {
      const start = -10 + (i % 9);
      const change = 4 + (i % 8);
      const result = start + change;
      challenges.push(choiceChallenge({
        type: "Temperatura",
        question: `A temperatura era ${start} °C e subiu ${change} °C. Qual ficou sendo a temperatura?`,
        correct: `${result} °C`,
        wrong: uniqueWrong(`${result} °C`, [`${start - change} °C`, `${Math.abs(result)} °C`, `${change - start} °C`, `${result - 2} °C`]),
        hint: "Quando sobe, somamos na reta numérica.",
        visual: { kind: "line", marker: Math.max(-12, Math.min(12, result)) },
        explain: `${start} + ${change} = ${result}.`
      }));
    } else if (kind === 1) {
      const value = -(3 + (i % 18));
      challenges.push(choiceChallenge({
        type: "Oposto",
        question: `Qual é o oposto de ${value}?`,
        correct: -value,
        wrong: uniqueWrong(-value, [value, 0, value * 2, -value + 2]),
        hint: "O oposto troca o sinal.",
        visual: { kind: "line", marker: Math.max(-12, value) },
        explain: `O oposto de ${value} é ${-value}.`
      }));
    } else if (kind === 2) {
      const a = -(2 + (i % 8));
      const b = 2 + (i % 7);
      const result = a * b;
      challenges.push(choiceChallenge({
        type: "Multiplicação",
        question: `Resolva: (${a}) × ${b}`,
        correct: result,
        wrong: uniqueWrong(result, [Math.abs(result), a + b, result + b, result - b]),
        hint: "Sinais diferentes dão resultado negativo.",
        visual: { kind: "tiles", filled: Math.min(Math.abs(result), 24), total: Math.min(Math.abs(result) + 4, 30) },
        explain: `${Math.abs(a)} × ${b} = ${Math.abs(result)} e o sinal é negativo.`
      }));
    } else if (kind === 3) {
      const money = 12 + (i % 16);
      const spent = money + 3 + (i % 9);
      const result = money - spent;
      challenges.push(choiceChallenge({
        type: "Saldo",
        question: `Uma aluna tinha R$ ${money},00 e gastou R$ ${spent},00. Qual é o saldo?`,
        correct: `R$ ${result},00`,
        wrong: uniqueWrong(`R$ ${result},00`, [`R$ ${spent - money},00`, `R$ ${money + spent},00`, `R$ ${-result + 2},00`, `R$ ${result - 3},00`]),
        hint: "Gastar é subtrair.",
        visual: { kind: "line", marker: Math.max(-12, Math.min(12, result)) },
        explain: `${money} - ${spent} = ${result}.`
      }));
    } else {
      const values = [-18 + i, -7 - (i % 7), -3 - (i % 4), -12 + (i % 5)];
      const correct = Math.max(...values);
      challenges.push(choiceChallenge({
        type: "Comparação",
        question: `Qual destes números inteiros é o maior?`,
        correct,
        wrong: uniqueWrong(correct, values),
        hint: "Na reta numérica, o maior fica mais à direita.",
        visual: { kind: "line", marker: Math.max(-12, Math.min(12, correct)) },
        explain: `${correct} é o maior porque está mais perto da direita na reta.`
      }));
    }
  }
  return challenges;
}

function generateFractionChallenges(total) {
  const challenges = [];
  const fractionPairs = [[1, 2], [2, 3], [3, 4], [2, 5], [5, 6], [3, 8]];
  for (let i = 0; challenges.length < total; i += 1) {
    const [num, den] = fractionPairs[i % fractionPairs.length];
    const kind = i % 5;
    if (kind === 0) {
      const factor = 2 + (i % 4);
      const correct = `${num * factor}/${den * factor}`;
      challenges.push(choiceChallenge({
        type: "Frações equivalentes",
        question: `Qual fração é equivalente a ${num}/${den}?`,
        correct,
        wrong: uniqueWrong(correct, [`${num + factor}/${den + factor}`, `${den}/${num}`, `${num}/${den * factor}`, `${num * factor}/${den}`]),
        hint: "Multiplique numerador e denominador pelo mesmo número.",
        visual: { kind: "fraction", filled: num, total: den },
        explain: `${num}/${den} × ${factor}/${factor} = ${correct}.`
      }));
    } else if (kind === 1) {
      const decimals = [
        ["0,5", "1/2", 1, 2],
        ["0,25", "1/4", 1, 4],
        ["0,75", "3/4", 3, 4],
        ["0,2", "1/5", 1, 5],
        ["0,6", "3/5", 3, 5]
      ];
      const item = decimals[i % decimals.length];
      challenges.push(choiceChallenge({
        type: "Decimal",
        question: `${item[0]} corresponde a qual fração?`,
        correct: item[1],
        wrong: uniqueWrong(item[1], ["1/10", "2/3", "4/5", "5/4"]),
        hint: "Transforme o decimal em uma fração de 10 ou 100 e simplifique.",
        visual: { kind: "fraction", filled: item[2], total: item[3] },
        explain: `${item[0]} é o mesmo que ${item[1]}.`
      }));
    } else if (kind === 2) {
      const d = 4 + (i % 6);
      const a = 1 + (i % 2);
      const b = 1 + ((i + 1) % 2);
      const sum = a + b;
      challenges.push(choiceChallenge({
        type: "Soma",
        question: `Calcule: ${a}/${d} + ${b}/${d}`,
        correct: `${sum}/${d}`,
        wrong: uniqueWrong(`${sum}/${d}`, [`${a + b}/${d + d}`, `${a * b}/${d}`, `${sum + 1}/${d}`, `${sum}/${d + 1}`]),
        hint: "Com denominadores iguais, some os numeradores.",
        visual: { kind: "fraction", filled: sum, total: d },
        explain: `${a}/${d} + ${b}/${d} = ${sum}/${d}.`
      }));
    } else if (kind === 3) {
      const amount = 20 + (i % 9) * 5;
      const d = [4, 5, 10][i % 3];
      const n = [1, 2, 3][i % 3];
      const result = (amount / d) * n;
      challenges.push(choiceChallenge({
        type: "Parte de um todo",
        question: `Quanto é ${n}/${d} de ${amount}?`,
        correct: result,
        wrong: uniqueWrong(result, [amount / d, amount - result, result + d, amount + result]),
        hint: "Divida pelo denominador e multiplique pelo numerador.",
        visual: { kind: "tiles", filled: Math.min(result, 24), total: Math.min(amount, 30) },
        explain: `${amount} ÷ ${d} × ${n} = ${result}.`
      }));
    } else {
      const options = ["1/2", "2/3", "3/5", "5/8"];
      challenges.push(choiceChallenge({
        type: "Comparação",
        question: "Qual fração é maior?",
        correct: "2/3",
        wrong: uniqueWrong("2/3", options),
        hint: "Compare usando aproximações decimais.",
        visual: { kind: "fraction", filled: 2, total: 3 },
        explain: "2/3 é aproximadamente 0,67, maior que as outras opções."
      }));
    }
  }
  return challenges;
}

function generatePercentChallenges(total) {
  const challenges = [];
  for (let i = 0; challenges.length < total; i += 1) {
    const kind = i % 5;
    if (kind === 0) {
      const value = 80 + (i % 9) * 20;
      const percent = [10, 20, 25, 50][i % 4];
      const result = value * percent / 100;
      challenges.push(choiceChallenge({
        type: "Porcentagem",
        question: `Quanto é ${percent}% de ${value}?`,
        correct: result,
        wrong: uniqueWrong(result, [value - result, result + 10, percent, value + result]),
        hint: "Porcentagem é uma parte de 100.",
        visual: { kind: "chart", bars: [value, result], labels: ["Total", "Parte"] },
        explain: `${percent}% de ${value} = ${result}.`
      }));
    } else if (kind === 1) {
      const a = 6 + (i % 8) * 2;
      const b = 4 + (i % 8);
      const divisor = gcd(a, b);
      const correct = `${a / divisor}:${b / divisor}`;
      challenges.push(choiceChallenge({
        type: "Razão",
        question: `Simplifique a razão ${a}:${b}.`,
        correct,
        wrong: uniqueWrong(correct, [`${b}:${a}`, `${a + b}:${b}`, `${a}:${a + b}`, `${a * 2}:${b * 2}`]),
        hint: "Divida os dois números pelo mesmo divisor.",
        visual: { kind: "chart", bars: [a, b], labels: ["A", "B"] },
        explain: `${a}:${b} simplifica para ${correct}.`
      }));
    } else if (kind === 2) {
      const units = 3 + (i % 5);
      const unitPrice = 4 + (i % 7);
      const wanted = units + 2;
      const result = wanted * unitPrice;
      challenges.push(choiceChallenge({
        type: "Regra de três",
        question: `Se ${units} lápis custam R$ ${units * unitPrice},00, quanto custam ${wanted} lápis?`,
        correct: `R$ ${result},00`,
        wrong: uniqueWrong(`R$ ${result},00`, [`R$ ${result - unitPrice},00`, `R$ ${result + unitPrice},00`, `R$ ${units * unitPrice},00`, `R$ ${wanted + unitPrice},00`]),
        hint: "Descubra o preço de uma unidade.",
        visual: { kind: "chart", bars: [units, wanted], labels: [`${units}`, `${wanted}`] },
        explain: `Cada lápis custa R$ ${unitPrice},00; então ${wanted} custam R$ ${result},00.`
      }));
    } else if (kind === 3) {
      const value = 100 + (i % 8) * 25;
      const percent = [5, 10, 20][i % 3];
      const result = value + value * percent / 100;
      challenges.push(choiceChallenge({
        type: "Aumento",
        question: `Um valor de ${value} aumentou ${percent}%. Qual é o novo valor?`,
        correct: result,
        wrong: uniqueWrong(result, [value - percent, value + percent, value * percent / 100, result + percent]),
        hint: "Calcule a porcentagem e some ao valor inicial.",
        visual: { kind: "chart", bars: [value, result], labels: ["Antes", "Depois"] },
        explain: `${percent}% de ${value} é ${value * percent / 100}; novo valor: ${result}.`
      }));
    } else {
      const cm = 2 + (i % 9);
      const scale = 3 + (i % 5);
      challenges.push(choiceChallenge({
        type: "Escala",
        question: `Em um mapa, 1 cm representa ${scale} km. ${cm} cm representam quantos km?`,
        correct: `${cm * scale} km`,
        wrong: uniqueWrong(`${cm * scale} km`, [`${cm + scale} km`, `${cm * scale * 10} km`, `${scale - cm} km`, `${cm} km`]),
        hint: "Multiplique a medida do mapa pela escala.",
        visual: { kind: "line", marker: Math.min(12, cm) },
        explain: `${cm} × ${scale} = ${cm * scale} km.`
      }));
    }
  }
  return challenges;
}

function generateAlgebraChallenges(total) {
  const challenges = [];
  for (let i = 0; challenges.length < total; i += 1) {
    const kind = i % 5;
    const x = 2 + (i % 10);
    if (kind === 0) {
      const add = 3 + (i % 9);
      challenges.push(choiceChallenge({
        type: "Equação",
        question: `Se x + ${add} = ${x + add}, qual é o valor de x?`,
        correct: x,
        wrong: uniqueWrong(x, [x + add, add, x - 1, x + 2]),
        hint: "Subtraia o mesmo número dos dois lados.",
        visual: { kind: "balance", left: `x + ${add}`, right: x + add },
        explain: `x = ${x + add} - ${add} = ${x}.`
      }));
    } else if (kind === 1) {
      const factor = 2 + (i % 5);
      challenges.push(choiceChallenge({
        type: "Equação",
        question: `Resolva: ${factor}x = ${factor * x}`,
        correct: x,
        wrong: uniqueWrong(x, [factor * x, x + factor, factor, x - 1]),
        hint: "Divida os dois lados pelo número que multiplica x.",
        visual: { kind: "balance", left: `${factor}x`, right: factor * x },
        explain: `x = ${factor * x} ÷ ${factor} = ${x}.`
      }));
    } else if (kind === 2) {
      const factor = 2 + (i % 4);
      const add = 1 + (i % 7);
      const result = factor * x + add;
      challenges.push(choiceChallenge({
        type: "Valor numérico",
        question: `Para x = ${x}, quanto vale ${factor}x + ${add}?`,
        correct: result,
        wrong: uniqueWrong(result, [factor + x + add, result - add, result + factor, x + add]),
        hint: "Troque x pelo valor informado.",
        visual: { kind: "balance", left: `${factor}x + ${add}`, right: "?" },
        explain: `${factor} × ${x} + ${add} = ${result}.`
      }));
    } else if (kind === 3) {
      challenges.push(choiceChallenge({
        type: "Linguagem algébrica",
        question: "A expressão 'o triplo de um número menos 4' é:",
        correct: "3x - 4",
        wrong: uniqueWrong("3x - 4", ["x/3 - 4", "3 - x - 4", "4x - 3", "3x + 4"]),
        hint: "Triplo significa multiplicar por 3.",
        visual: { kind: "balance", left: "triplo - 4", right: "3x - 4" },
        explain: "O triplo de x é 3x; menos 4 fica 3x - 4."
      }));
    } else {
      const start = 1 + (i % 5);
      const step = 2 + (i % 6);
      challenges.push(choiceChallenge({
        type: "Sequência",
        question: `Na sequência ${start}, ${start + step}, ${start + step * 2}, ${start + step * 3}, a regra é:`,
        correct: `somar ${step}`,
        wrong: uniqueWrong(`somar ${step}`, [`multiplicar por ${step}`, `subtrair ${step}`, `somar ${start}`, `dividir por ${step}`]),
        hint: "Observe quanto aumenta de um termo para o próximo.",
        visual: { kind: "chart", bars: [start, start + step, start + step * 2, start + step * 3], labels: ["1", "2", "3", "4"] },
        explain: `Cada termo aumenta ${step}.`
      }));
    }
  }
  return challenges;
}

function generateGeometryChallenges(total) {
  const challenges = [];
  for (let i = 0; challenges.length < total; i += 1) {
    const kind = i % 5;
    if (kind === 0) {
      const a = 4 + (i % 8);
      const b = 3 + (i % 7);
      challenges.push(choiceChallenge({
        type: "Área",
        question: `Um retângulo mede ${a} cm por ${b} cm. Qual é a área?`,
        correct: `${a * b} cm²`,
        wrong: uniqueWrong(`${a * b} cm²`, [`${2 * (a + b)} cm`, `${a + b} cm²`, `${a * b * 2} cm²`, `${a - b} cm²`]),
        hint: "Área do retângulo é base vezes altura.",
        visual: { kind: "shape", shape: "rect", a, b },
        explain: `${a} × ${b} = ${a * b} cm².`
      }));
    } else if (kind === 1) {
      const side = 3 + (i % 10);
      challenges.push(choiceChallenge({
        type: "Perímetro",
        question: `Um quadrado tem lado de ${side} cm. Qual é o perímetro?`,
        correct: `${side * 4} cm`,
        wrong: uniqueWrong(`${side * 4} cm`, [`${side * side} cm²`, `${side * 2} cm`, `${side + 4} cm`, `${side * 3} cm`]),
        hint: "Some os quatro lados.",
        visual: { kind: "shape", shape: "square", a: side },
        explain: `${side} × 4 = ${side * 4} cm.`
      }));
    } else if (kind === 2) {
      const base = 6 + (i % 8);
      const height = 4 + (i % 7);
      const area = base * height / 2;
      challenges.push(choiceChallenge({
        type: "Triângulo",
        question: `Um triângulo tem base ${base} cm e altura ${height} cm. Qual é a área?`,
        correct: `${area} cm²`,
        wrong: uniqueWrong(`${area} cm²`, [`${base * height} cm²`, `${base + height} cm²`, `${area + 5} cm²`, `${base * 2} cm²`]),
        hint: "Área do triângulo é base vezes altura dividido por 2.",
        visual: { kind: "shape", shape: "tri", a: base, b: height },
        explain: `${base} × ${height} ÷ 2 = ${area} cm².`
      }));
    } else if (kind === 3) {
      const radius = 2 + (i % 9);
      challenges.push(choiceChallenge({
        type: "Círculo",
        question: `Um círculo tem raio de ${radius} cm. Qual é o diâmetro?`,
        correct: `${radius * 2} cm`,
        wrong: uniqueWrong(`${radius * 2} cm`, [`${radius} cm`, `${radius * radius} cm`, `${radius + 2} cm`, `${radius * 4} cm`]),
        hint: "Diâmetro é o dobro do raio.",
        visual: { kind: "shape", shape: "circle", a: radius },
        explain: `2 × ${radius} = ${radius * 2} cm.`
      }));
    } else {
      challenges.push(choiceChallenge({
        type: "Unidades",
        question: "Qual unidade é adequada para medir área?",
        correct: "cm²",
        wrong: uniqueWrong("cm²", ["cm", "kg", "mL", "min"]),
        hint: "Área usa unidades quadradas.",
        visual: { kind: "tiles", filled: 8, total: 16 },
        explain: "Área é medida em unidades quadradas, como cm² e m²."
      }));
    }
  }
  return challenges;
}

function generateAngleChallenges(total) {
  const challenges = [];
  const polygonNames = ["triângulo", "quadrilátero", "pentágono", "hexágono", "heptágono", "octógono"];
  for (let i = 0; challenges.length < total; i += 1) {
    const kind = i % 5;
    if (kind === 0) {
      const degrees = [30, 45, 60, 90, 120, 150, 180][i % 7];
      const correct = degrees < 90 ? "agudo" : degrees === 90 ? "reto" : degrees === 180 ? "raso" : "obtuso";
      challenges.push(choiceChallenge({
        type: "Classificação",
        question: `Um ângulo de ${degrees}° é:`,
        correct,
        wrong: uniqueWrong(correct, ["agudo", "reto", "obtuso", "raso"]),
        hint: "Compare com 90° e 180°.",
        visual: { kind: "angle", degrees },
        explain: `Um ângulo de ${degrees}° é ${correct}.`
      }));
    } else if (kind === 1) {
      const a = 40 + (i % 5) * 5;
      const b = 50 + (i % 4) * 5;
      const c = 180 - a - b;
      challenges.push(choiceChallenge({
        type: "Triângulo",
        question: `Em um triângulo, dois ângulos medem ${a}° e ${b}°. Quanto mede o terceiro?`,
        correct: `${c}°`,
        wrong: uniqueWrong(`${c}°`, [`${a + b}°`, `${180 - a}°`, `${180 - b}°`, `${c + 10}°`]),
        hint: "A soma dos ângulos internos do triângulo é 180°.",
        visual: { kind: "shape", shape: "tri", a, b },
        explain: `180° - ${a}° - ${b}° = ${c}°.`
      }));
    } else if (kind === 2) {
      const sides = 3 + (i % 6);
      challenges.push(choiceChallenge({
        type: "Polígonos",
        question: `Um ${polygonNames[sides - 3]} tem quantos lados?`,
        correct: sides,
        wrong: uniqueWrong(sides, [sides + 1, sides - 1, sides + 2, sides * 2]),
        hint: "Use o nome do polígono para lembrar a quantidade de lados.",
        visual: { kind: "polygon", sides },
        explain: `${polygonNames[sides - 3]} tem ${sides} lados.`
      }));
    } else if (kind === 3) {
      const sides = 3 + (i % 5);
      const sum = (sides - 2) * 180;
      challenges.push(choiceChallenge({
        type: "Soma interna",
        question: `Qual é a soma dos ângulos internos de um polígono com ${sides} lados?`,
        correct: `${sum}°`,
        wrong: uniqueWrong(`${sum}°`, [`${sides * 180}°`, `${sum - 180}°`, `${sum + 90}°`, `${sides * 90}°`]),
        hint: "Use a fórmula (n - 2) × 180°.",
        visual: { kind: "polygon", sides },
        explain: `(${sides} - 2) × 180° = ${sum}°.`
      }));
    } else {
      const angle = [20, 35, 40, 55, 70][i % 5];
      const complement = 90 - angle;
      challenges.push(choiceChallenge({
        type: "Complementares",
        question: `Qual é o complemento de ${angle}°?`,
        correct: `${complement}°`,
        wrong: uniqueWrong(`${complement}°`, [`${180 - angle}°`, `${angle + 90}°`, `${angle}°`, `${complement + 10}°`]),
        hint: "Ângulos complementares somam 90°.",
        visual: { kind: "angle", degrees: angle },
        explain: `90° - ${angle}° = ${complement}°.`
      }));
    }
  }
  return challenges;
}

function generateCartesianChallenges(total) {
  const challenges = [];
  for (let i = 0; challenges.length < total; i += 1) {
    const kind = i % 5;
    const x = -5 + (i % 11);
    const y = -4 + ((i * 2) % 9);
    if (kind === 0) {
      challenges.push(choiceChallenge({
        type: "Coordenada",
        question: `No ponto (${x}, ${y}), qual é o valor de x?`,
        correct: x,
        wrong: uniqueWrong(x, [y, -x, -y, x + 1]),
        hint: "x é o primeiro número do par ordenado.",
        visual: { kind: "grid", x, y },
        explain: `Em (${x}, ${y}), x = ${x}.`
      }));
    } else if (kind === 1) {
      const correct = x < 0 && y > 0 ? "x negativo e y positivo" : x > 0 && y < 0 ? "x positivo e y negativo" : x >= 0 && y >= 0 ? "ambos positivos ou zero" : "ambos negativos";
      challenges.push(choiceChallenge({
        type: "Sinais",
        question: `Observe o ponto (${x}, ${y}). Qual descrição combina com ele?`,
        correct,
        wrong: uniqueWrong(correct, ["x negativo e y positivo", "x positivo e y negativo", "ambos positivos ou zero", "ambos negativos"]),
        hint: "Leia o sinal de cada coordenada.",
        visual: { kind: "grid", x, y },
        explain: `O ponto tem x = ${x} e y = ${y}.`
      }));
    } else if (kind === 2) {
      const pointY = 2 + (i % 6);
      challenges.push(choiceChallenge({
        type: "Eixo",
        question: `O ponto (0, ${pointY}) está sobre qual eixo?`,
        correct: "eixo y",
        wrong: uniqueWrong("eixo y", ["eixo x", "origem", "nenhum eixo", "reta diagonal"]),
        hint: "Quando x = 0, o ponto fica no eixo vertical.",
        visual: { kind: "grid", x: 0, y: pointY },
        explain: `(0, ${pointY}) está no eixo y.`
      }));
    } else if (kind === 3) {
      challenges.push(choiceChallenge({
        type: "Origem",
        question: "Qual ponto representa a origem do plano cartesiano?",
        correct: "(0, 0)",
        wrong: uniqueWrong("(0, 0)", ["(1, 1)", "(0, 1)", "(1, 0)", "(-1, 1)"]),
        hint: "É onde os dois eixos se cruzam.",
        visual: { kind: "grid", x: 0, y: 0 },
        explain: "A origem é (0, 0)."
      }));
    } else {
      const factor = 2 + (i % 4);
      challenges.push(choiceChallenge({
        type: "Padrão",
        question: `Nos pontos (1, ${factor}), (2, ${factor * 2}), (3, ${factor * 3}), a regra é:`,
        correct: `y = ${factor}x`,
        wrong: uniqueWrong(`y = ${factor}x`, [`y = x + ${factor}`, `y = x - ${factor}`, `y = ${factor + 1}x`, `x = ${factor}y`]),
        hint: "Veja quantas vezes o y vale em relação ao x.",
        visual: { kind: "grid", x: 3, y: Math.min(7, factor * 3) },
        explain: `O valor de y é ${factor} vezes o valor de x.`
      }));
    }
  }
  return challenges;
}

function generateStatsChallenges(total) {
  const challenges = [];
  for (let i = 0; challenges.length < total; i += 1) {
    const kind = i % 5;
    if (kind === 0) {
      const a = 4 + (i % 5);
      const b = a + 2;
      const c = a + 4;
      const mean = (a + b + c) / 3;
      challenges.push(choiceChallenge({
        type: "Média",
        question: `As notas ${a}, ${b} e ${c} têm média:`,
        correct: mean,
        wrong: uniqueWrong(mean, [a + b + c, mean + 1, mean - 1, c]),
        hint: "Some os valores e divida pela quantidade.",
        visual: { kind: "chart", bars: [a, b, c], labels: ["N1", "N2", "N3"] },
        explain: `(${a} + ${b} + ${c}) ÷ 3 = ${mean}.`
      }));
    } else if (kind === 1) {
      const mode = 2 + (i % 6);
      challenges.push(choiceChallenge({
        type: "Moda",
        question: `Na lista ${mode - 1}, ${mode}, ${mode}, ${mode + 2}, ${mode + 4}, qual é a moda?`,
        correct: mode,
        wrong: uniqueWrong(mode, [mode - 1, mode + 2, mode + 4, mode * 2]),
        hint: "Moda é o valor que aparece mais vezes.",
        visual: { kind: "chart", bars: [1, 2, 1, 1], labels: [`${mode - 1}`, `${mode}`, `${mode + 2}`, `${mode + 4}`] },
        explain: `${mode} aparece duas vezes.`
      }));
    } else if (kind === 2) {
      const red = 1 + (i % 4);
      const blue = 2 + (i % 5);
      const totalBalls = red + blue;
      challenges.push(choiceChallenge({
        type: "Probabilidade",
        question: `Em uma caixa há ${red} bolas vermelhas e ${blue} azuis. A chance de tirar vermelha é:`,
        correct: `${red}/${totalBalls}`,
        wrong: uniqueWrong(`${red}/${totalBalls}`, [`${blue}/${totalBalls}`, `${red}/${blue}`, `1/${totalBalls}`, `${totalBalls}/${red}`]),
        hint: "Probabilidade = casos favoráveis ÷ casos possíveis.",
        visual: { kind: "balls", red, blue },
        explain: `São ${red} vermelhas em ${totalBalls} bolas: ${red}/${totalBalls}.`
      }));
    } else if (kind === 3) {
      const middle = 5 + (i % 8);
      challenges.push(choiceChallenge({
        type: "Mediana",
        question: `Qual é a mediana de ${middle - 4}, ${middle - 1}, ${middle}, ${middle + 2}, ${middle + 5}?`,
        correct: middle,
        wrong: uniqueWrong(middle, [middle - 1, middle + 2, middle + 5, middle * 5]),
        hint: "A mediana é o valor central da lista organizada.",
        visual: { kind: "chart", bars: [middle - 4, middle - 1, middle, middle + 2, middle + 5], labels: ["", "", "", "", ""] },
        explain: `O valor do meio é ${middle}.`
      }));
    } else {
      const bars = [3 + (i % 4), 7 + (i % 5), 5 + (i % 3)];
      const max = Math.max(...bars);
      challenges.push(choiceChallenge({
        type: "Gráfico",
        question: `No gráfico com valores ${bars.join(", ")}, qual é o maior valor?`,
        correct: max,
        wrong: uniqueWrong(max, [bars[0], bars[2], max + 2, max - 2]),
        hint: "Procure a barra mais alta.",
        visual: { kind: "chart", bars, labels: ["A", "B", "C"] },
        explain: `O maior valor é ${max}.`
      }));
    }
  }
  return challenges;
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function expandBlocksToFifty() {
  const generators = [
    generateIntegerChallenges,
    generateFractionChallenges,
    generatePercentChallenges,
    generateAlgebraChallenges,
    generateGeometryChallenges,
    generateAngleChallenges,
    generateCartesianChallenges,
    generateStatsChallenges
  ];
  blocks.forEach((block, index) => {
    const missing = 50 - block.challenges.length;
    if (missing > 0) {
      block.challenges = [...block.challenges, ...generators[index](missing)];
    }
  });
}

expandBlocksToFifty();

const state = {
  blockIndex: 0,
  challengeIndex: 0,
  stars: Number(localStorage.getItem("mathStars") || 0),
  streak: 0,
  completed: JSON.parse(localStorage.getItem("mathCompleted") || "{}"),
  name: localStorage.getItem("mathPlayer") || "Estudante Notre Dame"
};

const blockList = document.querySelector("#block-list");
const blockKicker = document.querySelector("#block-kicker");
const blockTitle = document.querySelector("#block-title");
const difficulty = document.querySelector("#difficulty");
const lessonText = document.querySelector("#lesson-text");
const challengeType = document.querySelector("#challenge-type");
const challengeCount = document.querySelector("#challenge-count");
const visualArea = document.querySelector("#visual-area");
const question = document.querySelector("#question");
const answers = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#next-button");
const hintButton = document.querySelector("#hint-button");
const stars = document.querySelector("#stars");
const streak = document.querySelector("#streak");
const playerName = document.querySelector("#player-name");
const playerDisplay = document.querySelector("#player-display");

function saveState() {
  localStorage.setItem("mathStars", String(state.stars));
  localStorage.setItem("mathCompleted", JSON.stringify(state.completed));
  localStorage.setItem("mathPlayer", state.name);
}

function updateStatus() {
  stars.textContent = state.stars;
  streak.textContent = state.streak;
  playerName.value = state.name;
  playerDisplay.textContent = state.name;
}

function renderBlocks() {
  blockList.innerHTML = "";
  blocks.forEach((block, index) => {
    const done = state.completed[index] || 0;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `block-button${index === state.blockIndex ? " active" : ""}`;
    button.innerHTML = `
      <span class="block-icon">${block.icon}</span>
      <span>
        <span class="block-title">${block.title}</span>
        <span class="block-subtitle">${block.subtitle}</span>
      </span>
      <span class="block-stars">${done}/${block.challenges.length} ★</span>
    `;
    button.addEventListener("click", () => {
      state.blockIndex = index;
      state.challengeIndex = 0;
      renderGame();
    });
    blockList.appendChild(button);
  });
}

function currentChallenge() {
  return blocks[state.blockIndex].challenges[state.challengeIndex];
}

function renderGame() {
  const block = blocks[state.blockIndex];
  const challenge = currentChallenge();
  blockKicker.textContent = `Bloco ${state.blockIndex + 1}`;
  blockTitle.textContent = block.title;
  difficulty.textContent = block.difficulty;
  lessonText.textContent = block.lesson;
  challengeType.textContent = challenge.type;
  challengeCount.textContent = `${state.challengeIndex + 1} de ${block.challenges.length}`;
  question.textContent = challenge.question;
  feedback.textContent = "Escolha uma resposta para ganhar estrelas.";
  feedback.className = "feedback";
  nextButton.disabled = true;
  renderVisual(challenge.visual);
  renderAnswers(challenge);
  renderBlocks();
  updateStatus();
}

function renderAnswers(challenge) {
  answers.innerHTML = "";
  challenge.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = answer;
    button.addEventListener("click", () => chooseAnswer(index, button));
    answers.appendChild(button);
  });
}

function chooseAnswer(index) {
  const challenge = currentChallenge();
  const buttons = [...document.querySelectorAll(".answer-button")];
  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === challenge.correct) {
      button.classList.add("correct");
    }
    if (buttonIndex === index && index !== challenge.correct) {
      button.classList.add("wrong");
    }
  });

  const key = `${state.blockIndex}-${state.challengeIndex}`;
  if (index === challenge.correct) {
    state.streak += 1;
    if (!state.completed[key]) {
      state.stars += 1;
      state.completed[key] = true;
      state.completed[state.blockIndex] = Object.keys(state.completed)
        .filter((item) => item.startsWith(`${state.blockIndex}-`) && state.completed[item])
        .length;
    }
    feedback.textContent = `Muito bem! ${challenge.explain}`;
    feedback.className = "feedback good";
  } else {
    state.streak = 0;
    feedback.textContent = `Quase. ${challenge.explain}`;
    feedback.className = "feedback bad";
  }
  nextButton.disabled = false;
  saveState();
  updateStatus();
  renderBlocks();
}

function nextChallenge() {
  const block = blocks[state.blockIndex];
  if (state.challengeIndex < block.challenges.length - 1) {
    state.challengeIndex += 1;
  } else {
    state.blockIndex = (state.blockIndex + 1) % blocks.length;
    state.challengeIndex = 0;
  }
  renderGame();
}

function showHint() {
  feedback.textContent = `Dica: ${currentChallenge().hint}`;
  feedback.className = "feedback";
}

function renderVisual(visual) {
  if (visual.kind === "line") return renderNumberLine(visual.marker);
  if (visual.kind === "fraction") return renderFraction(visual.filled, visual.total);
  if (visual.kind === "tiles") return renderFraction(visual.filled, visual.total);
  if (visual.kind === "balance") return renderBalance(visual.left, visual.right);
  if (visual.kind === "chart") return renderChart(visual.bars, visual.labels);
  if (visual.kind === "shape") return renderShape(visual);
  if (visual.kind === "angle") return renderAngle(visual.degrees);
  if (visual.kind === "polygon") return renderPolygon(visual.sides);
  if (visual.kind === "grid") return renderGrid(visual.x, visual.y);
  if (visual.kind === "balls") return renderBalls(visual.red, visual.blue);
}

function renderNumberLine(marker) {
  const positions = [-12, -8, -4, 0, 4, 8, 12];
  const left = ((marker + 12) / 24) * 100;
  visualArea.innerHTML = `
    <div class="number-line">
      <div class="line-track">
        ${positions.map((value) => `<span class="tick" style="left:${((value + 12) / 24) * 100}%"><span>${value}</span></span>`).join("")}
        <span class="marker" style="left:${left}%"></span>
      </div>
    </div>
  `;
}

function renderFraction(filled, total) {
  visualArea.innerHTML = `
    <div class="fraction-visual" style="grid-template-columns: repeat(${Math.min(total, 6)}, minmax(34px, 1fr));">
      ${Array.from({ length: total }, (_, index) => `<span class="fraction-cell${index < filled ? " filled" : ""}"></span>`).join("")}
    </div>
  `;
}

function renderBalance(left, right) {
  visualArea.innerHTML = `
    <div class="balance-visual">
      <div class="scale">
        <span class="beam"></span>
        <span class="pan left">${left}</span>
        <span class="pan right">${right}</span>
      </div>
    </div>
  `;
}

function renderChart(bars, labels) {
  const max = Math.max(...bars);
  const barWidth = 260 / bars.length;
  visualArea.innerHTML = `
    <div class="graph-visual chart">
      <svg viewBox="0 0 330 180" role="img" aria-label="Gráfico de barras">
        <line x1="36" y1="148" x2="310" y2="148" stroke="#21323a" stroke-width="4" />
        <line x1="36" y1="18" x2="36" y2="148" stroke="#21323a" stroke-width="4" />
        ${bars.map((value, index) => {
          const height = (value / max) * 112;
          const x = 54 + index * barWidth;
          const y = 148 - height;
          const color = ["#1d9bd1", "#e94e5f", "#168a72", "#f5bd2d", "#8e3aa9"][index % 5];
          return `<rect x="${x}" y="${y}" width="${Math.max(28, barWidth - 18)}" height="${height}" rx="5" fill="${color}" />
            <text x="${x + Math.max(28, barWidth - 18) / 2}" y="${y - 7}" text-anchor="middle" font-size="15" font-weight="700">${value}</text>
            <text x="${x + Math.max(28, barWidth - 18) / 2}" y="170" text-anchor="middle" font-size="13" font-weight="700">${labels[index] || ""}</text>`;
        }).join("")}
      </svg>
    </div>
  `;
}

function renderShape(visual) {
  const label = visual.shape === "rect" ? `${visual.a} cm × ${visual.b} cm` : visual.shape === "square" ? `lado ${visual.a} cm` : visual.shape === "tri" ? `base ${visual.a}, altura ${visual.b}` : `raio ${visual.a} cm`;
  const svg = {
    rect: `<rect x="58" y="42" width="190" height="96" rx="6" fill="#9fe8d6" stroke="#21323a" stroke-width="5" />`,
    square: `<rect x="84" y="34" width="126" height="126" rx="6" fill="#fff0a8" stroke="#21323a" stroke-width="5" />`,
    tri: `<polygon points="150,24 260,152 38,152" fill="#ffd0d5" stroke="#21323a" stroke-width="5" />`,
    circle: `<circle cx="150" cy="90" r="64" fill="#dceef6" stroke="#21323a" stroke-width="5" /><line x1="150" y1="90" x2="214" y2="90" stroke="#e94e5f" stroke-width="5" />`
  }[visual.shape];
  visualArea.innerHTML = `
    <div class="shape-scene">
      <svg viewBox="0 0 300 180" role="img" aria-label="Figura geométrica">${svg}</svg>
      <h3>${label}</h3>
    </div>
  `;
}

function renderAngle(degrees) {
  const radians = (degrees * Math.PI) / 180;
  const x = 80 + Math.cos(radians) * 95;
  const y = 135 - Math.sin(radians) * 95;
  visualArea.innerHTML = `
    <div class="graph-visual">
      <svg viewBox="0 0 260 170" role="img" aria-label="Ângulo de ${degrees} graus">
        <line x1="80" y1="135" x2="210" y2="135" stroke="#21323a" stroke-width="8" stroke-linecap="round" />
        <line x1="80" y1="135" x2="${x}" y2="${y}" stroke="#e94e5f" stroke-width="8" stroke-linecap="round" />
        <path d="M115 135 A35 35 0 0 0 ${80 + Math.cos(radians) * 35} ${135 - Math.sin(radians) * 35}" fill="none" stroke="#1d9bd1" stroke-width="5" />
        <text x="128" y="100" font-size="22" font-weight="700">${degrees}°</text>
      </svg>
    </div>
  `;
}

function renderPolygon(sides) {
  const points = Array.from({ length: sides }, (_, index) => {
    const angle = (Math.PI * 2 * index) / sides - Math.PI / 2;
    return `${150 + Math.cos(angle) * 70},${90 + Math.sin(angle) * 70}`;
  }).join(" ");
  visualArea.innerHTML = `
    <div class="graph-visual">
      <svg viewBox="0 0 300 180" role="img" aria-label="Polígono">
        <polygon points="${points}" fill="#9fe8d6" stroke="#21323a" stroke-width="5" />
        <text x="150" y="100" text-anchor="middle" font-size="28" font-weight="700">${sides} lados</text>
      </svg>
    </div>
  `;
}

function renderGrid(x, y) {
  const px = 150 + x * 18;
  const py = 90 - y * 18;
  visualArea.innerHTML = `
    <div class="graph-visual">
      <svg viewBox="0 0 300 180" role="img" aria-label="Plano cartesiano">
        ${Array.from({ length: 15 }, (_, i) => `<line x1="${24 + i * 18}" y1="18" x2="${24 + i * 18}" y2="162" stroke="#cfe0dc" />`).join("")}
        ${Array.from({ length: 9 }, (_, i) => `<line x1="24" y1="${18 + i * 18}" x2="276" y2="${18 + i * 18}" stroke="#cfe0dc" />`).join("")}
        <line x1="150" y1="18" x2="150" y2="162" stroke="#21323a" stroke-width="4" />
        <line x1="24" y1="90" x2="276" y2="90" stroke="#21323a" stroke-width="4" />
        <circle cx="${px}" cy="${py}" r="9" fill="#e94e5f" />
        <text x="${Math.min(244, px + 14)}" y="${Math.max(24, py - 12)}" font-size="17" font-weight="700">(${x}, ${y})</text>
      </svg>
    </div>
  `;
}

function renderBalls(red, blue) {
  const balls = [
    ...Array.from({ length: red }, () => "#e94e5f"),
    ...Array.from({ length: blue }, () => "#1d9bd1")
  ];
  visualArea.innerHTML = `
    <div class="graph-visual">
      <svg viewBox="0 0 320 180" role="img" aria-label="Bolas coloridas">
        <rect x="68" y="40" width="184" height="106" rx="18" fill="#fff" stroke="#21323a" stroke-width="5" />
        ${balls.map((color, index) => `<circle cx="${104 + (index % 5) * 30}" cy="${82 + Math.floor(index / 5) * 38}" r="14" fill="${color}" stroke="#21323a" stroke-width="3" />`).join("")}
      </svg>
    </div>
  `;
}

document.querySelector("#save-name").addEventListener("click", () => {
  state.name = playerName.value.trim() || "Estudante Notre Dame";
  saveState();
  updateStatus();
});

document.querySelector("#reset-progress").addEventListener("click", () => {
  state.stars = 0;
  state.streak = 0;
  state.completed = {};
  state.blockIndex = 0;
  state.challengeIndex = 0;
  saveState();
  renderGame();
});

nextButton.addEventListener("click", nextChallenge);
hintButton.addEventListener("click", showHint);

renderGame();
