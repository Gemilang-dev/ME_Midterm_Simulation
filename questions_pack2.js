const PACK2 = [
  {
    id: "p2_q1",
    number: 1,
    points: 10,
    type: "composite",
    intro: "The table below shows the quantity of artisan sourdough loaves supplied by two bakeries, Bakery Alpha and Bakery Beta.",
    table: {
      title: "Individual and Market Supply of Artisan Sourdough Loaves",
      headers: [
        [
          { text: "Price (dollars)", rowspan: 2 },
          { text: "Quantity of Sourdough Loaves Supplied", colspan: 3 }
        ],
        [
          { text: "Bakery Alpha" },
          { text: "Bakery Beta" },
          { text: "Market Total" }
        ]
      ],
      rows: [
        ["$18", "250", "350", { inputId: "r1", answer: 600 }],
        ["15", "200", "280", { inputId: "r2", answer: 480 }],
        ["12", "150", "210", { inputId: "r3", answer: 360 }],
        ["9", "100", "140", { inputId: "r4", answer: 240 }],
        ["6", "50", "70", { inputId: "r5", answer: 120 }],
        ["3", "0", "0", { inputId: "r6", answer: 0 }]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.\n\nFill in the \"Market Total\" column.",
    parts: [],
    explanation: "To find the market supply at each price, sum the quantities supplied by Bakery Alpha and Bakery Beta horizontally at each price level:\n• At $18: 250 + 350 = 600\n• At $15: 200 + 280 = 480\n• At $12: 150 + 210 = 360\n• At $9: 100 + 140 = 240\n• At $6: 50 + 70 = 120\n• At $3: 0 + 0 = 0"
  },
  {
    id: "p2_q2",
    number: 2,
    points: 10,
    type: "composite",
    intro: "Use the following graph of the market for orange juice to answer the question below.",
    svgGraph: {
      type: "mb_mc",
      title: "",
      xLabel: "Quantity (millions of gallons)",
      yLabel: "Price (dollars per gallon)",
      xTicks: [10, 15, 20, 25, 30],
      yTicks: ["2.00", "3.00", "4.00"],
      mbLine: { x1: 10, y1: 4.00, x2: 30, y2: 2.00 },
      mcLine: { x1: 15, y1: 2.00, x2: 25, y2: 4.00 },
      eqPoint: { x: 20, y: 3.00 },
      dashedPoints: [
        { x: 10, y: 4.00 },
        { x: 15, y: 2.00 },
        { x: 20, y: 3.00 },
        { x: 25, y: 4.00 },
        { x: 30, y: 2.00 }
      ]
    },
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "If 15 million gallons of orange juice are being produced, then we know",
        options: [
          "marginal cost is $3.50.",
          "too little orange juice is being produced.",
          "too much orange juice is being produced.",
          "marginal cost is greater than marginal benefit."
        ],
        answer: 1
      }
    ],
    explanation: "The allocatively efficient quantity is 20 million gallons where MB = MC = $3.00. At 15 million gallons, Marginal Benefit ($3.50) is greater than Marginal Cost ($2.00). Since society values additional gallons more than it costs to produce them, too little orange juice is being produced."
  },
  {
    id: "p2_q3",
    number: 3,
    points: 10,
    type: "composite",
    intro: "The table below depicts the demand for beach umbrellas at Miami Beach.",
    table: {
      title: "Demand for Beach Umbrellas",
      headers: [
        [
          { text: "Price (dollars)" },
          { text: "Quantity (umbrellas)" },
          { text: "Total Revenue (dollars)" }
        ]
      ],
      rows: [
        ["$40.00", "0", { inputId: "tr0", prefix: "$", answer: 0 }],
        ["35.00", "500", { inputId: "tr1", answer: 17500 }],
        ["30.00", "1,000", { inputId: "tr2", answer: 30000 }],
        ["25.00", "1,500", { inputId: "tr3", answer: 37500 }],
        ["20.00", "2,000", { inputId: "tr4", answer: 40000 }],
        ["15.00", "2,500", { inputId: "tr5", answer: 37500 }],
        ["10.00", "3,000", { inputId: "tr6", answer: 30000 }],
        ["5.00", "3,500", { inputId: "tr7", answer: 17500 }],
        ["0.00", "4,000", { inputId: "tr8", answer: 0 }]
      ]
    },
    instructions: "Instructions: Enter your answer as a whole number. If you are entering a negative number include a minus sign.\n\na. Fill in the total revenue column.",
    parts: [
      {
        id: "b",
        type: "number",
        prompt: "b. When the price of an umbrella decreases from $35.00 to $30.00, what is the change in total revenue?",
        prefix: "$",
        answer: 12500
      },
      {
        id: "c",
        type: "number",
        prompt: "c. When the price of an umbrella decreases from $25.00 to $15.00, what is the change in total revenue?",
        prefix: "$",
        answer: 0
      },
      {
        id: "d",
        type: "number",
        prompt: "d. When the price of an umbrella decreases from $10.00 to $5.00, what is the change in total revenue?",
        prefix: "$",
        answer: -12500
      },
      {
        id: "e",
        type: "mcq",
        prompt: "e. When the price of umbrellas is in the range of $35.00 to $30.00, demand is",
        options: ["inelastic.", "unit-elastic.", "perfectly elastic.", "elastic."],
        answer: 3
      },
      {
        id: "f",
        type: "mcq",
        prompt: "f. When the price of umbrellas is in the range of $10.00 to $5.00, demand is",
        options: ["unit-elastic.", "inelastic.", "elastic.", "perfectly elastic."],
        answer: 1
      },
      {
        id: "g",
        type: "mcq",
        prompt: "g. Total revenue for beach umbrellas is maximized at a price of",
        options: ["$25.00.", "$15.00.", "$20.00.", "$30.00."],
        answer: 2
      },
      {
        id: "h",
        type: "mcq",
        prompt: "h. When total revenue for beach umbrellas is maximized, demand is",
        options: ["perfectly elastic.", "inelastic.", "unit-elastic.", "elastic."],
        answer: 2
      }
    ],
    explanation: "• Total Revenue (TR) = Price × Quantity.\n• (b) From $35 to $30: TR rises from $17,500 to $30,000, so ΔTR = +$12,500.\n• (c) From $25 to $15: TR goes from $37,500 to $37,500, so ΔTR = $0.\n• (d) From $10 to $5: TR falls from $30,000 to $17,500, so ΔTR = -$12,500.\n• (e) Because a price cut from $35 to $30 increases TR, demand is elastic in this range.\n• (f) Because a price cut from $10 to $5 decreases TR, demand is inelastic in this range.\n• (g) & (h) Total revenue is maximized at $40,000 when P = $20.00, where demand is unit-elastic."
  },
  {
    id: "p2_q4",
    number: 4,
    points: 10,
    type: "composite",
    intro: "",
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "According to the economic principle of marginal analysis, a decision maker will choose to undertake an activity whenever",
        options: [
          "total benefit is positive, regardless of total cost.",
          "the expected marginal benefit equals or exceeds the expected marginal cost.",
          "average cost is at its minimum possible value.",
          "sunk costs can be fully recovered from the decision."
        ],
        answer: 1
      }
    ],
    explanation: "Rational decision makers use marginal analysis: an action should be taken if and only if its expected Marginal Benefit is greater than or equal to its expected Marginal Cost (MB >= MC)."
  },
  {
    id: "p2_q5",
    number: 5,
    points: 10,
    type: "composite",
    intro: "The table below presents the annual market for mountain bikes in Boulder, Colorado. Suppose the city government imposes a $100 excise tax on every mountain bike sold to be paid by customers at the point of sale.",
    table: {
      title: "Market for Mountain Bikes",
      headers: [
        [
          { text: "Price (dollars)" },
          { text: "Quantity of Bikes Demanded" },
          { text: "Quantity of Bikes Supplied" },
          { text: "Quantity of Bikes Demanded with Excise Tax" }
        ]
      ],
      rows: [
        ["$800", "100", "400", "0"],
        ["750", "150", "350", "50"],
        ["700", "200", "300", "100"],
        ["650", "250", "250", "150"],
        ["600", "300", "200", "200"],
        ["550", "350", "150", "250"],
        ["500", "400", "100", "300"],
        ["450", "450", "50", "350"]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.",
    parts: [
      {
        id: "a_p",
        type: "number",
        prompt: "a. Before the excise tax is imposed, what are the equilibrium price and quantity of mountain bikes in Boulder?\n\nP =",
        prefix: "$",
        answer: 650
      },
      {
        id: "a_q",
        type: "number",
        prompt: "Q =",
        suffix: "bikes",
        answer: 250
      },
      {
        id: "b",
        type: "number",
        prompt: "b. Including the excise tax, what is the new equilibrium price consumers pay for mountain bikes after the tax is imposed?",
        prefix: "$",
        answer: 700
      },
      {
        id: "c",
        type: "number",
        prompt: "c. After the excise tax is imposed, what is the new equilibrium quantity of mountain bikes?",
        suffix: "bikes",
        answer: 200
      },
      {
        id: "d",
        type: "number",
        prompt: "d. What is the total amount of revenue collected by the government from the excise tax on mountain bikes?",
        prefix: "$",
        answer: 20000
      }
    ],
    explanation: "• (a) Before the tax, Quantity Demanded equals Quantity Supplied at P = $650 and Q = 250 bikes.\n• (b) & (c) After the $100 tax on buyers, 'Quantity Demanded with Excise Tax' equals 'Quantity Supplied' at Q = 200 bikes, where the price received by sellers is $600. Including the $100 excise tax paid at the point of sale, consumers pay $600 + $100 = $700 per bike.\n• (d) Government tax revenue = $100 × 200 bikes = $20,000."
  },
  {
    id: "p2_q6",
    number: 6,
    points: 10,
    type: "composite",
    intro: "",
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "Marcus notices that the price of espresso machines has fallen significantly at his local department store. All else equal, he decides to buy more espresso coffee beans than he normally purchases. From the information given, you might conclude that:",
        options: [
          "espresso machines and espresso coffee beans are substitutes.",
          "espresso machines are an inferior good.",
          "espresso machines and espresso coffee beans are complements.",
          "espresso coffee beans are a Giffen good."
        ],
        answer: 2
      }
    ],
    explanation: "Two goods are complements when a decrease in the price of one good (espresso machines) leads to an increase in the demand for the other good (espresso coffee beans)."
  },
  {
    id: "p2_q7",
    number: 7,
    points: 10,
    type: "composite",
    intro: "Devon collects vintage vinyl records, and can afford to buy up to six records this month. The table below describes the marginal benefit Devon gets for each additional vinyl record he adds to his collection.",
    table: {
      title: "Devon's Marginal Benefit of Vintage Vinyl Records",
      headers: [
        [
          { text: "Vinyl Records" },
          { text: "Marginal Benefit (dollars)" }
        ]
      ],
      rows: [
        ["1", "$30"],
        ["2", "26"],
        ["3", "22"],
        ["4", "18"],
        ["5", "14"],
        ["6", "10"]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.",
    parts: [
      {
        id: "a",
        type: "number",
        prompt: "a. If the price of vintage vinyl records is $18 per record, how many records would Devon buy if he is rational?",
        suffix: "record(s)",
        answer: 4
      },
      {
        id: "b",
        type: "number",
        prompt: "b. If the price of vintage vinyl records rose to $26 per record, how many records would Devon buy if he is rational?",
        suffix: "record(s)",
        answer: 2
      }
    ],
    explanation: "A rational buyer purchases units up to the point where Marginal Benefit equals Price (MB = P):\n• (a) At P = $18, Devon buys 4 records (the 4th record has MB = $18, whereas the 5th has MB = $14 < $18).\n• (b) At P = $26, Devon buys 2 records (the 2nd record has MB = $26)."
  },
  {
    id: "p2_q8",
    number: 8,
    points: 10,
    type: "composite",
    intro: "Use the following figure to answer the question below.",
    svgGraph: {
      type: "ppf",
      title: "Elena's Production Possibilities Frontier",
      xLabel: "Strawberries",
      yLabel: "Potatoes",
      yMax: 450,
      xMax: 150,
      midPoint: { x: 75, y: 225 }
    },
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "Elena's opportunity cost of producing 1 pound of strawberries is ________ pound(s) of potatoes.",
        options: ["1/3", "3", "2", "4.5"],
        answer: 1
      }
    ],
    explanation: "Along Elena's linear PPF, producing 150 pounds of strawberries requires giving up 450 pounds of potatoes. Thus, the opportunity cost of 1 pound of strawberries is 450 / 150 = 3 pounds of potatoes."
  },
  {
    id: "p2_q9",
    number: 9,
    points: 10,
    type: "composite",
    intro: "Both Clara and Mateo are bakery owners. They decide that they would like to trade croissants and muffins in order to better stock their bakery display cases. The table below compares their production possibilities schedules.",
    table: {
      title: "Production Possibilities Schedules",
      headers: [
        [
          { text: "Clara", colspan: 2 },
          { text: "Mateo", colspan: 2 }
        ],
        [
          { text: "Croissants" },
          { text: "Muffins" },
          { text: "Croissants" },
          { text: "Muffins" }
        ]
      ],
      rows: [
        ["60", "0", "40", "0"],
        ["48", "6", "32", "6"],
        ["36", "12", "24", "12"],
        ["24", "18", "16", "18"],
        ["12", "24", "8", "24"],
        ["0", "30", "0", "30"]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.",
    parts: [
      {
        id: "a_cro",
        type: "select",
        prompt: "a. Clara and Mateo agree to trade at a rate of two croissants for one muffin. With those terms of trade, who is most likely to be the supplier of croissants? Who is most likely to be the supplier of muffins?\n\nCroissants:",
        options: ["Clara", "Mateo"],
        answer: "Clara"
      },
      {
        id: "a_muf",
        type: "select",
        prompt: "Muffins:",
        options: ["Clara", "Mateo"],
        answer: "Mateo"
      },
      {
        id: "b_mat_cro",
        type: "number",
        prompt: "b. The two bakery owners agree to specialize and to trade 20 croissants for 20 muffins (at a 1-for-1 terms of trade). How many croissants and muffins will each one have after they complete their trade?\n\nMateo (croissants):",
        suffix: "croissants",
        answer: 20
      },
      {
        id: "b_mat_muf",
        type: "number",
        prompt: "Mateo (muffins):",
        suffix: "muffins",
        answer: 10
      },
      {
        id: "b_cla_cro",
        type: "number",
        prompt: "Clara (croissants):",
        suffix: "croissants",
        answer: 40
      },
      {
        id: "b_cla_muf",
        type: "number",
        prompt: "Clara (muffins):",
        suffix: "muffins",
        answer: 20
      }
    ],
    explanation: "• Clara's opportunity cost of 1 croissant is 30/60 = 0.5 muffins (or 1 muffin costs 2 croissants). Mateo's opportunity cost of 1 croissant is 30/40 = 0.75 muffins (or 1 muffin costs 1.33 croissants).\n• Therefore, Clara has the comparative advantage in croissants and specializes by producing 60 croissants and 0 muffins. Mateo has the comparative advantage in muffins and specializes by producing 0 croissants and 30 muffins.\n• After trading 20 croissants for 20 muffins:\n  - Mateo has 0 + 20 = 20 croissants and 30 - 20 = 10 muffins.\n  - Clara has 60 - 20 = 40 croissants and 0 + 20 = 20 muffins."
  },
  {
    id: "p2_q10",
    number: 10,
    points: 10,
    type: "composite",
    intro: "The market supply of organic strawberries in a valley town is shown in the table below.",
    table: {
      title: "Supply of Organic Strawberries",
      headers: [
        [
          { text: "Price (dollars per crate)", rowspan: 2 },
          { text: "Quantity of Strawberries Supplied (crates)", colspan: 2 }
        ],
        [
          { text: "Initial" },
          { text: "New" }
        ]
      ],
      rows: [
        ["$20.00", "800", { inputId: "n1", answer: 600 }],
        ["18.00", "600", { inputId: "n2", answer: 450 }],
        ["16.00", "400", { inputId: "n3", answer: 300 }],
        ["14.00", "200", { inputId: "n4", answer: 150 }]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.\n\na. Suppose a new fertilizer tax decreases production of strawberry crates by 25% at every price. Complete the new supply schedule in the table above.",
    parts: [
      {
        id: "b_orig",
        type: "number",
        prompt: "b. At a price of $18.00 per crate, the original quantity supplied was",
        suffix: "crates",
        answer: 600
      },
      {
        id: "b_new",
        type: "number",
        prompt: "and the new quantity supplied is",
        suffix: "crates.",
        answer: 450
      }
    ],
    explanation: "A 25% decrease means the new quantity supplied is 75% (0.75) of the initial quantity:\n• At $20.00: 800 × 0.75 = 600\n• At $18.00: 600 × 0.75 = 450\n• At $16.00: 400 × 0.75 = 300\n• At $14.00: 200 × 0.75 = 150"
  },
  {
    id: "p2_q11",
    number: 11,
    points: 10,
    type: "interactive_graph",
    intro: "Refer to the figure.",
    graphConfig: {
      title: "Market for Blueberries",
      toolName: "Consumer Surplus, CS",
      shortLabel: "CS",
      xLabel: "Quantity (pounds of blueberries)",
      yLabel: "Price",
      xMax: 250,
      xStep: 50,
      yMax: 10,
      yStep: 1,
      demand: [{ x: 0, y: 8 }, { x: 150, y: 5 }, { x: 250, y: 3 }],
      supply: [{ x: 0, y: 2 }, { x: 150, y: 5 }, { x: 250, y: 7 }],
      eq: { x: 150, y: 5 },
      snapPoints: [
        { x: 0, y: 8 }, { x: 0, y: 5 }, { x: 0, y: 2 }, { x: 0, y: 0 },
        { x: 150, y: 5 }, { x: 150, y: 0 }, { x: 50, y: 7 }, { x: 50, y: 3 },
        { x: 100, y: 6 }, { x: 100, y: 4 }, { x: 250, y: 3 }, { x: 250, y: 7 }
      ],
      targetTriangle: [
        { x: 0, y: 8 },
        { x: 0, y: 5 },
        { x: 150, y: 5 }
      ]
    },
    story: "The graph represents the market for blueberries (in pounds per week) at a regional farmers' market. Suppose the equilibrium price of blueberries is $5 per pound and the equilibrium quantity is 150 pounds of blueberries per week.\n\nUsing the graph, show the area representing consumer surplus in this market, and then determine how much consumer surplus will be generated by the market each week.",
    instructions: "Instructions: Use the tool provided \"Consumer Surplus, CS\" to illustrate this area on the graph (click 3 vertices on the graph to form the triangle).",
    parts: [
      {
        id: "cs_val",
        type: "number",
        prompt: "Consumer surplus:",
        prefix: "$",
        answer: 225
      }
    ],
    explanation: "• Graphical Area: Consumer Surplus (CS) is the triangle below the demand curve and above the equilibrium price ($5) from Q = 0 to Q = 150. Its three vertices are (0, $8), (0, $5), and (150, $5).\n• Calculation: CS = 0.5 × Base × Height = 0.5 × 150 × ($8 - $5) = 0.5 × 150 × $3 = $225."
  },
  {
    id: "p2_q12",
    number: 12,
    points: 10,
    type: "interactive_graph",
    intro: "Refer to the figure.",
    graphConfig: {
      title: "Market for Blueberries",
      toolName: "Economic Surplus, ES",
      shortLabel: "ES",
      xLabel: "Quantity (pounds of blueberries)",
      yLabel: "Price",
      xMax: 250,
      xStep: 50,
      yMax: 10,
      yStep: 1,
      demand: [{ x: 0, y: 8 }, { x: 150, y: 5 }, { x: 250, y: 3 }],
      supply: [{ x: 0, y: 2 }, { x: 150, y: 5 }, { x: 250, y: 7 }],
      eq: { x: 150, y: 5 },
      snapPoints: [
        { x: 0, y: 8 }, { x: 0, y: 5 }, { x: 0, y: 2 }, { x: 0, y: 0 },
        { x: 150, y: 5 }, { x: 150, y: 0 }, { x: 50, y: 7 }, { x: 50, y: 3 },
        { x: 100, y: 6 }, { x: 100, y: 4 }, { x: 250, y: 3 }, { x: 250, y: 7 }
      ],
      targetTriangle: [
        { x: 0, y: 8 },
        { x: 0, y: 2 },
        { x: 150, y: 5 }
      ]
    },
    story: "The graph represents the market for blueberries (in pounds per week) at a regional farmers' market. Suppose the equilibrium price of blueberries is $5 per pound and the equilibrium quantity is 150 pounds of blueberries per week.\n\nUsing the graph, illustrate the area of economic surplus and determine how much economic surplus is generated in the market each week.",
    instructions: "Instructions: Use the tool provided \"Economic Surplus, ES\" to illustrate this area on the graph (click 3 vertices on the graph to form the triangle).",
    parts: [
      {
        id: "es_val",
        type: "number",
        prompt: "Economic surplus:",
        prefix: "$",
        answer: 450
      }
    ],
    explanation: "• Graphical Area: Economic Surplus (ES = CS + PS) is the triangle between the demand curve and the supply curve from Q = 0 to Q = 150. Its three vertices are (0, $8), (0, $2), and (150, $5).\n• Calculation: ES = 0.5 × Base × Height = 0.5 × 150 × ($8 - $2) = 0.5 × 150 × $6 = $450."
  },
  {
    id: "p2_q13",
    number: 13,
    points: 10,
    type: "composite",
    intro: "Sophia tutors math students on weekends. The table below shows her marginal benefit and marginal cost for each hour she spends tutoring per week.",
    table: {
      title: "Sophia's Marginal Benefit and Marginal Cost of Tutoring",
      headers: [
        [
          { text: "Hours Spent Tutoring" },
          { text: "Marginal Benefit (dollars)" },
          { text: "Marginal Cost (dollars)" }
        ]
      ],
      rows: [
        ["1", "$40", "$10"],
        ["2", "35", "15"],
        ["3", "30", "20"],
        ["4", "25", "25"],
        ["5", "20", "30"],
        ["6", "15", "35"],
        ["7", "10", "40"]
      ]
    },
    parts: [
      {
        id: "a",
        type: "mcq",
        prompt: "a. Given the information above, what is Sophia's optimal amount of time spent tutoring each week?",
        options: ["3 hours", "4 hours", "5 hours", "2 hours"],
        answer: 1
      },
      {
        id: "b",
        type: "mcq",
        prompt: "b. If Sophia were to spend 2 hours each week tutoring:",
        options: [
          "the marginal benefit would equal the marginal cost.",
          "the marginal cost would exceed the marginal benefit by $20.",
          "the marginal benefit would exceed the marginal cost by $20.",
          "the marginal benefit would exceed the marginal cost by $10."
        ],
        answer: 2
      },
      {
        id: "c",
        type: "mcq",
        prompt: "c. If Sophia were to spend 6 hours each week tutoring:",
        options: [
          "the marginal benefit would equal the marginal cost.",
          "the marginal cost would exceed the marginal benefit by $20.",
          "the marginal benefit would exceed the marginal cost by $20.",
          "the marginal cost would exceed the marginal benefit by $10."
        ],
        answer: 1
      }
    ],
    explanation: "• (a) Optimal hours occur where MB = MC. At 4 hours, MB = $25 and MC = $25.\n• (b) At 2 hours, MB = $35 and MC = $15, so MB exceeds MC by $35 - $15 = $20.\n• (c) At 6 hours, MB = $15 and MC = $35, so MC exceeds MB by $35 - $15 = $20."
  },
  {
    id: "p2_q14",
    number: 14,
    points: 10,
    type: "composite",
    intro: "Liam and Noah are both woodworkers producing chairs and tables. The table below compares their production possibilities schedules.",
    table: {
      title: "Production Possibilities Schedules",
      headers: [
        [
          { text: "Liam", colspan: 2 },
          { text: "Noah", colspan: 2 }
        ],
        [
          { text: "Chairs" },
          { text: "Tables" },
          { text: "Chairs" },
          { text: "Tables" }
        ]
      ],
      rows: [
        ["30", "0", "60", "0"],
        ["15", "15", "30", "10"],
        ["0", "30", "0", "20"]
      ]
    },
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "If both producers decided to specialize and trade with each other, the terms of trade that would benefit both Liam and Noah (1 chair = x tables) would be between",
        options: [
          "0.33 and 1 table per chair.",
          "1 and 3 tables per chair.",
          "0.5 and 2 tables per chair.",
          "0.25 and 1.5 tables per chair."
        ],
        answer: 0
      }
    ],
    explanation: "Calculate each woodworker's opportunity cost of producing 1 chair:\n• Liam: 30 chairs = 30 tables → 1 chair costs 30 / 30 = 1 table.\n• Noah: 60 chairs = 20 tables → 1 chair costs 20 / 60 = 0.33 (1/3) tables.\nMutually beneficial terms of trade must lie between their opportunity costs: between 0.33 and 1 table per chair."
  },
  {
    id: "p2_q15",
    number: 15,
    points: 10,
    type: "composite",
    intro: "Identify which of the following scenarios is likely to shift the demand for electric bicycles to the right.",
    instructions: "Instructions: You may select more than one answer. Click the box with a check mark for the correct answers.",
    parts: [
      {
        id: "main",
        type: "checkbox",
        prompt: "Select all that apply:",
        options: [
          "The price of gasoline and public transit passes rises sharply.",
          "Consumers expect the price of electric bicycles to drop by 40% next month.",
          "Cities build extensive new protected bike lanes, making cycling much safer and more convenient.",
          "Rising consumer incomes increase purchases of normal goods like electric bicycles."
        ],
        answers: [0, 2, 3]
      }
    ],
    explanation: "• Higher prices of substitutes (gasoline/driving and public transit) increase demand for electric bicycles (shifts right).\n• Expecting a big price drop next month causes buyers to delay purchases today, decreasing current demand (shifts left).\n• Better complementary infrastructure (bike lanes) increases consumer preference for e-bikes (shifts right).\n• Higher income increases demand for normal goods (shifts right)."
  },
  {
    id: "p2_q16",
    number: 16,
    points: 10,
    type: "composite",
    intro: "",
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "A breakthrough in automated harvesting robotics dramatically lowers the cost of picking almonds. At the same time, a viral medical report warns that eating almonds can trigger severe digestive discomfort in many adults. As a result, one should expect",
        options: [
          "the equilibrium price of almonds to rise, but the equilibrium quantity to be indeterminate.",
          "the equilibrium price of almonds to fall, but the equilibrium quantity to be indeterminate.",
          "the equilibrium price of almonds to be indeterminate, but the equilibrium quantity to rise.",
          "the equilibrium price of almonds to be indeterminate, but the equilibrium quantity to fall."
        ],
        answer: 1
      }
    ],
    explanation: "• Automated harvesting lowers production costs, shifting Supply to the right (P↓, Q↑).\n• The negative medical report reduces consumer tastes for almonds, shifting Demand to the left (P↓, Q↓).\n• Combining both shifts: Both forces push the equilibrium price DOWN, while they push equilibrium quantity in opposite directions (making quantity indeterminate)."
  },
  {
    id: "p2_q17",
    number: 17,
    points: 10,
    type: "composite",
    intro: "River Rick and Forest Fran spend their time weaving baskets and carving bowls. The table below shows their production possibilities schedules, which describe various combinations of baskets and bowls they each can produce efficiently in a week.",
    table: {
      title: "Production Possibilities Schedules",
      headers: [
        [
          { text: "River Rick", colspan: 2 },
          { text: "Forest Fran", colspan: 2 }
        ],
        [
          { text: "Baskets" },
          { text: "Bowls" },
          { text: "Baskets" },
          { text: "Bowls" }
        ]
      ],
      rows: [
        ["40", "0", "100", "0"],
        ["32", "10", "80", "12"],
        ["24", "20", "60", "24"],
        ["16", "30", "40", "36"],
        ["8", "40", "20", "48"],
        ["0", "50", "0", "60"]
      ]
    },
    parts: [
      {
        id: "a",
        type: "mcq",
        prompt: "a. If River Rick splits his week evenly between weaving baskets and carving bowls, what is the maximum number of baskets and bowls he could produce?",
        options: [
          "40 baskets and 50 bowls",
          "20 baskets and 25 bowls",
          "25 baskets and 20 bowls",
          "100 baskets and 60 bowls"
        ],
        answer: 1
      },
      {
        id: "b",
        type: "mcq",
        prompt: "b. If Forest Fran splits her week evenly between weaving baskets and carving bowls, what is the maximum number of baskets and bowls she could produce?",
        options: [
          "50 baskets and 30 bowls",
          "30 baskets and 50 bowls",
          "100 baskets and 60 bowls",
          "60 baskets and 24 bowls"
        ],
        answer: 0
      },
      {
        id: "c",
        type: "mcq",
        prompt: "c. Combined, how many baskets and bowls could River Rick and Forest Fran produce if each one split their week evenly between the two products?",
        options: [
          "55 baskets and 70 bowls",
          "140 baskets and 110 bowls",
          "70 baskets and 55 bowls",
          "100 baskets and 50 bowls"
        ],
        answer: 2
      },
      {
        id: "d_baskets",
        type: "select",
        prompt: "d. Who has the comparative advantage in weaving baskets? In carving bowls?\n\nBaskets:",
        options: ["River Rick", "Forest Fran"],
        answer: "Forest Fran"
      },
      {
        id: "d_bowls",
        type: "select",
        prompt: "Bowls:",
        options: ["River Rick", "Forest Fran"],
        answer: "River Rick"
      },
      {
        id: "e",
        type: "mcq",
        prompt: "e. If both River Rick and Forest Fran choose to specialize in the product in which they have a comparative advantage, how many of each product could they produce together?",
        options: [
          "40 baskets and 60 bowls",
          "100 baskets and 50 bowls",
          "50 baskets and 100 bowls",
          "100 baskets and 60 bowls"
        ],
        answer: 1
      }
    ],
    explanation: "• (a) Splitting his week 50/50 gives River Rick half of his maximums: 40/2 = 20 baskets and 50/2 = 25 bowls.\n• (b) Splitting her week 50/50 gives Forest Fran half of her maximums: 100/2 = 50 baskets and 60/2 = 30 bowls.\n• (c) Combined at a 50/50 split: (20 + 50) = 70 baskets and (25 + 30) = 55 bowls.\n• (d) Fran's opportunity cost of 1 basket is 60/100 = 0.6 bowls, while Rick's is 50/40 = 1.25 bowls. Thus, Forest Fran has the comparative advantage in baskets, and River Rick has the comparative advantage in bowls.\n• (e) Specializing completely yields 100 baskets (by Fran) and 50 bowls (by Rick)."
  },
  {
    id: "p2_q18",
    number: 18,
    points: 10,
    type: "composite",
    intro: "Evaluate the set of events below. Determine how the events will impact their respective markets.",
    parts: [
      {
        id: "a",
        type: "inline_Cloze",
        prompt: "a. In examining the market for solar panels, the government provides a new production subsidy to solar panel manufacturers.",
        segments: [
          "The effect of the event will be ",
          { id: "a1", options: ["an increase", "a decrease"], answer: "an increase" },
          " in ",
          { id: "a2", options: ["supply", "demand", "quantity supplied", "quantity demanded"], answer: "supply" },
          ". As a result, the equilibrium price will ",
          { id: "a3", options: ["increase", "decrease"], answer: "decrease" },
          " and the equilibrium quantity will ",
          { id: "a4", options: ["increase", "decrease"], answer: "increase" },
          "."
        ]
      },
      {
        id: "b",
        type: "inline_Cloze",
        prompt: "b. In examining the market for gym memberships, a popular New Year fitness resolution sweeps the country.",
        segments: [
          "The effect of the event will be ",
          { id: "b1", options: ["an increase", "a decrease"], answer: "an increase" },
          " in ",
          { id: "b2", options: ["supply", "demand", "quantity supplied", "quantity demanded"], answer: "demand" },
          ". As a result, the equilibrium price will ",
          { id: "b3", options: ["increase", "decrease"], answer: "increase" },
          " and the equilibrium quantity will ",
          { id: "b4", options: ["increase", "decrease"], answer: "increase" },
          "."
        ]
      },
      {
        id: "c",
        type: "inline_Cloze",
        prompt: "c. In examining the market for printed newspapers, millions of readers switch permanently to free digital news apps.",
        segments: [
          "The effect of the event will be ",
          { id: "c1", options: ["an increase", "a decrease"], answer: "a decrease" },
          " in ",
          { id: "c2", options: ["supply", "demand", "quantity supplied", "quantity demanded"], answer: "demand" },
          ". As a result, the equilibrium price will ",
          { id: "c3", options: ["increase", "decrease"], answer: "decrease" },
          " and the equilibrium quantity will ",
          { id: "c4", options: ["increase", "decrease"], answer: "decrease" },
          "."
        ]
      }
    ],
    explanation: "• (a) A production subsidy lowers net production costs for manufacturers, increasing supply (shifting right), which lowers equilibrium price and raises equilibrium quantity.\n• (b) Favorable consumer tastes/preferences increase demand (shifting right), which raises both equilibrium price and equilibrium quantity.\n• (c) Consumers switching away to substitutes decreases demand for printed newspapers (shifting left), which lowers both equilibrium price and equilibrium quantity."
  }
];
