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
      <span class="block-stars">${done}/5 ★</span>
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
