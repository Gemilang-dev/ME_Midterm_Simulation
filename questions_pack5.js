const PACK5 = [
  {
    id: "p5_q1",
    number: 1,
    points: 10,
    type: "composite",
    intro: "The table below shows the quantity of ceramic flower pots supplied per week by two pottery studios, Studio Terra and Studio Clay.",
    table: {
      title: "Individual and Market Supply of Ceramic Flower Pots",
      headers: [
        [
          { text: "Price (dollars)", rowspan: 2 },
          { text: "Quantity of Flower Pots Supplied", colspan: 3 }
        ],
        [
          { text: "Studio Terra" },
          { text: "Studio Clay" },
          { text: "Market Total" }
        ]
      ],
      rows: [
        ["$30", "300", "450", { inputId: "r1", answer: 750 }],
        ["25", "240", "360", { inputId: "r2", answer: 600 }],
        ["20", "180", "270", { inputId: "r3", answer: 450 }],
        ["15", "120", "180", { inputId: "r4", answer: 300 }],
        ["10", "60", "90", { inputId: "r5", answer: 150 }],
        ["5", "0", "0", { inputId: "r6", answer: 0 }]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.\n\nFill in the \"Market Total\" column.",
    parts: [],
    explanation: "Market supply at each price is found by adding the quantities supplied by Studio Terra and Studio Clay horizontally:\n• At $30: 300 + 450 = 750\n• At $25: 240 + 360 = 600\n• At $20: 180 + 270 = 450\n• At $15: 120 + 180 = 300\n• At $10: 60 + 90 = 150\n• At $5: 0 + 0 = 0"
  },
  {
    id: "p5_q2",
    number: 2,
    points: 10,
    type: "composite",
    intro: "Use the following graph of the market for almond milk to answer the question below.",
    svgGraph: {
      type: "mb_mc",
      title: "",
      xLabel: "Quantity (millions of cartons)",
      yLabel: "Price (dollars per carton)",
      xTicks: [12, 18, 24, 30, 36],
      yTicks: ["2.50", "4.00", "5.50"],
      mbLine: { x1: 12, y1: 5.50, x2: 36, y2: 2.50 },
      mcLine: { x1: 18, y1: 2.50, x2: 30, y2: 5.50 },
      eqPoint: { x: 24, y: 4.00 },
      dashedPoints: [
        { x: 12, y: 5.50 },
        { x: 18, y: 2.50 },
        { x: 24, y: 4.00 },
        { x: 30, y: 5.50 },
        { x: 36, y: 2.50 }
      ]
    },
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "If 24 million cartons of almond milk are being produced, then we know",
        options: [
          "too much almond milk is being produced.",
          "too little almond milk is being produced.",
          "marginal benefit equals marginal cost at $4.00, so the allocatively efficient quantity is being produced.",
          "marginal benefit is $5.50 and marginal cost is $2.50."
        ],
        answer: 2
      }
    ],
    explanation: "At Q = 24 million cartons, the Marginal Benefit (MB) curve and the Marginal Cost (MC) curve intersect at $4.00. When MB = MC, the market produces the allocatively efficient quantity and maximizes economic surplus."
  },
  {
    id: "p5_q3",
    number: 3,
    points: 10,
    type: "composite",
    intro: "The table below depicts the demand for museum admission tickets in Chicago.",
    table: {
      title: "Demand for Museum Tickets",
      headers: [
        [
          { text: "Price (dollars)" },
          { text: "Quantity (tickets)" },
          { text: "Total Revenue (dollars)" }
        ]
      ],
      rows: [
        ["$32.00", "0", { inputId: "tr0", prefix: "$", answer: 0 }],
        ["28.00", "500", { inputId: "tr1", answer: 14000 }],
        ["24.00", "1,000", { inputId: "tr2", answer: 24000 }],
        ["20.00", "1,500", { inputId: "tr3", answer: 30000 }],
        ["16.00", "2,000", { inputId: "tr4", answer: 32000 }],
        ["12.00", "2,500", { inputId: "tr5", answer: 30000 }],
        ["8.00", "3,000", { inputId: "tr6", answer: 24000 }],
        ["4.00", "3,500", { inputId: "tr7", answer: 14000 }],
        ["0.00", "4,000", { inputId: "tr8", answer: 0 }]
      ]
    },
    instructions: "Instructions: Enter your answer as a whole number. If you are entering a negative number include a minus sign.\n\na. Fill in the total revenue column.",
    parts: [
      {
        id: "b",
        type: "number",
        prompt: "b. When the ticket price decreases from $28.00 to $24.00, what is the change in total revenue?",
        prefix: "$",
        answer: 10000
      },
      {
        id: "c",
        type: "number",
        prompt: "c. When the ticket price decreases from $20.00 to $12.00, what is the change in total revenue?",
        prefix: "$",
        answer: 0
      },
      {
        id: "d",
        type: "number",
        prompt: "d. When the ticket price decreases from $8.00 to $4.00, what is the change in total revenue?",
        prefix: "$",
        answer: -10000
      },
      {
        id: "e",
        type: "mcq",
        prompt: "e. When the ticket price is in the range of $28.00 to $24.00, demand is",
        options: ["inelastic.", "unit-elastic.", "perfectly elastic.", "elastic."],
        answer: 3
      },
      {
        id: "f",
        type: "mcq",
        prompt: "f. When the ticket price is in the range of $8.00 to $4.00, demand is",
        options: ["unit-elastic.", "inelastic.", "elastic.", "perfectly elastic."],
        answer: 1
      },
      {
        id: "g",
        type: "mcq",
        prompt: "g. Total revenue for museum tickets is maximized at a price of",
        options: ["$20.00.", "$12.00.", "$16.00.", "$24.00."],
        answer: 2
      },
      {
        id: "h",
        type: "mcq",
        prompt: "h. When total revenue for museum tickets is maximized, demand is",
        options: ["perfectly elastic.", "inelastic.", "unit-elastic.", "elastic."],
        answer: 2
      }
    ],
    explanation: "• Total Revenue (TR) = Price × Quantity.\n• (b) From $28 to $24: TR increases from $14,000 to $24,000 (+$10,000).\n• (c) From $20 to $12: TR goes from $30,000 to $30,000 ($0).\n• (d) From $8 to $4: TR decreases from $24,000 to $14,000 (-$10,000).\n• (e) Price decreases and TR increases → demand is elastic.\n• (f) Price decreases and TR decreases → demand is inelastic.\n• (g) & (h) TR is maximized at $32,000 when P = $16.00, where demand is unit-elastic."
  },
  {
    id: "p5_q4",
    number: 4,
    points: 10,
    type: "composite",
    intro: "",
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "When economists use the 'ceteris paribus' ('all else equal') assumption in studying how price affects quantity demanded, they do so in order to",
        options: [
          "prove that price is the only variable that ever changes in the real world.",
          "isolate the effect of a change in price on quantity demanded by holding other determinants of demand constant.",
          "eliminate the need for empirical data in economic modeling.",
          "show that demand curves never shift over time."
        ],
        answer: 1
      }
    ],
    explanation: "'Ceteris paribus' means 'other things being equal.' Holding income, tastes, and prices of related goods constant allows economists to isolate the pure relationship between a good's own price and its quantity demanded."
  },
  {
    id: "p5_q5",
    number: 5,
    points: 10,
    type: "composite",
    intro: "The table below presents the annual market for luxury patio heaters in Denver. Suppose the state government imposes a $80 excise tax on every patio heater sold to be paid by customers at the point of sale.",
    table: {
      title: "Market for Patio Heaters",
      headers: [
        [
          { text: "Price (dollars)" },
          { text: "Quantity Demanded" },
          { text: "Quantity Supplied" },
          { text: "Quantity Demanded with Excise Tax" }
        ]
      ],
      rows: [
        ["$520", "140", "380", "60"],
        ["480", "180", "340", "100"],
        ["440", "220", "300", "140"],
        ["400", "260", "260", "180"],
        ["360", "300", "220", "220"],
        ["320", "340", "180", "260"],
        ["280", "380", "140", "300"],
        ["240", "420", "100", "340"]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.",
    parts: [
      {
        id: "a_p",
        type: "number",
        prompt: "a. Before the excise tax is imposed, what are the equilibrium price and quantity of patio heaters?\n\nP =",
        prefix: "$",
        answer: 400
      },
      {
        id: "a_q",
        type: "number",
        prompt: "Q =",
        suffix: "heaters",
        answer: 260
      },
      {
        id: "b",
        type: "number",
        prompt: "b. Including the excise tax, what is the new equilibrium price consumers pay for patio heaters after the tax is imposed?",
        prefix: "$",
        answer: 440
      },
      {
        id: "c",
        type: "number",
        prompt: "c. After the excise tax is imposed, what is the new equilibrium quantity of patio heaters?",
        suffix: "heaters",
        answer: 220
      },
      {
        id: "d",
        type: "number",
        prompt: "d. What is the total amount of revenue collected by the government from the excise tax?",
        prefix: "$",
        answer: 17600
      }
    ],
    explanation: "• (a) Initial equilibrium where Qd = Qs: P = $400 and Q = 260 heaters.\n• (b) & (c) After the $80 tax on buyers, 'Quantity Demanded with Excise Tax' equals 'Quantity Supplied' at Q = 220 heaters, where the seller receives $360. Including the $80 tax paid at checkout, consumers pay $360 + $80 = $440.\n• (d) Government tax revenue = $80 × 220 = $17,600."
  },
  {
    id: "p5_q6",
    number: 6,
    points: 10,
    type: "composite",
    intro: "",
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "A bakery notices that whenever the price of butter rises, its cost of producing croissants increases and it supplies fewer croissants; however, whenever the price of scones rises, the bakery switches oven space from bread loaves to scones, reducing its supply of bread loaves. For this bakery, bread loaves and scones are:",
        options: [
          "complements in consumption.",
          "substitutes in production.",
          "joint products (complements in production).",
          "inferior goods."
        ],
        answer: 1
      }
    ],
    explanation: "Substitutes in production are goods that can be produced using the same resources (oven space and baker labor). When the price of scones rises, the bakery reallocates resources toward scones and decreases the supply of bread loaves."
  },
  {
    id: "p5_q7",
    number: 7,
    points: 10,
    type: "composite",
    intro: "Elena hires personal fitness training sessions each month and can afford up to six sessions. The table below describes the marginal benefit Elena gets for each additional session.",
    table: {
      title: "Elena's Marginal Benefit of Personal Training Sessions",
      headers: [
        [
          { text: "Training Sessions" },
          { text: "Marginal Benefit (dollars)" }
        ]
      ],
      rows: [
        ["1", "$100"],
        ["2", "85"],
        ["3", "70"],
        ["4", "55"],
        ["5", "40"],
        ["6", "25"]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.",
    parts: [
      {
        id: "a",
        type: "number",
        prompt: "a. If the price per training session is $70, how many sessions would Elena purchase if she is rational?",
        suffix: "session(s)",
        answer: 3
      },
      {
        id: "b",
        type: "number",
        prompt: "b. If the gym offers a discount lowering the price to $40 per session, how many sessions would Elena purchase if she is rational?",
        suffix: "session(s)",
        answer: 5
      }
    ],
    explanation: "A rational consumer purchases units up to the point where Marginal Benefit equals Price (MB = P):\n• (a) At P = $70, Elena buys 3 sessions (MB of 3rd session = $70).\n• (b) At P = $40, Elena buys 5 sessions (MB of 5th session = $40)."
  },
  {
    id: "p5_q8",
    number: 8,
    points: 10,
    type: "composite",
    intro: "Use the following figure to answer the question below.",
    svgGraph: {
      type: "ppf",
      title: "Carlos's Production Possibilities Frontier",
      xLabel: "Avocados",
      yLabel: "Tomatoes",
      yMax: 400,
      xMax: 80,
      midPoint: { x: 40, y: 200 }
    },
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "Carlos's opportunity cost of producing 1 pound of avocados is ________ pound(s) of tomatoes.",
        options: ["1/5", "4", "5", "8"],
        answer: 2
      }
    ],
    explanation: "To produce 80 pounds of avocados, Carlos gives up 400 pounds of tomatoes. Therefore, the opportunity cost of 1 pound of avocados is 400 / 80 = 5 pounds of tomatoes."
  },
  {
    id: "p5_q9",
    number: 9,
    points: 10,
    type: "composite",
    intro: "Both Victor and Wendy are jewelers who craft silver rings and necklaces. The table below compares their production possibilities schedules.",
    table: {
      title: "Production Possibilities Schedules",
      headers: [
        [
          { text: "Victor", colspan: 2 },
          { text: "Wendy", colspan: 2 }
        ],
        [
          { text: "Rings" },
          { text: "Necklaces" },
          { text: "Rings" },
          { text: "Necklaces" }
        ]
      ],
      rows: [
        ["100", "0", "60", "0"],
        ["80", "10", "48", "10"],
        ["60", "20", "36", "20"],
        ["40", "30", "24", "30"],
        ["20", "40", "12", "40"],
        ["0", "50", "0", "50"]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.",
    parts: [
      {
        id: "a_rin",
        type: "select",
        prompt: "a. Victor and Wendy agree to trade at a rate of 1.5 rings for 1 necklace. With those terms of trade, who is most likely to be the supplier of rings? Who is most likely to be the supplier of necklaces?\n\nRings:",
        options: ["Victor", "Wendy"],
        answer: "Victor"
      },
      {
        id: "a_nec",
        type: "select",
        prompt: "Necklaces:",
        options: ["Victor", "Wendy"],
        answer: "Wendy"
      },
      {
        id: "b_wen_rin",
        type: "number",
        prompt: "b. The two jewelers specialize completely and agree to trade 45 rings for 30 necklaces. How many rings and necklaces will each one have after they complete their trade?\n\nWendy (rings):",
        suffix: "rings",
        answer: 45
      },
      {
        id: "b_wen_nec",
        type: "number",
        prompt: "Wendy (necklaces):",
        suffix: "necklaces",
        answer: 20
      },
      {
        id: "b_vic_rin",
        type: "number",
        prompt: "Victor (rings):",
        suffix: "rings",
        answer: 55
      },
      {
        id: "b_vic_nec",
        type: "number",
        prompt: "Victor (necklaces):",
        suffix: "necklaces",
        answer: 30
      }
    ],
    explanation: "• Victor's opportunity cost of 1 necklace is 100/50 = 2 rings (or 1 ring costs 0.5 necklaces). Wendy's opportunity cost of 1 necklace is 60/50 = 1.2 rings (or 1 ring costs 0.83 necklaces).\n• Thus, Victor specializes in rings (producing 100 rings, 0 necklaces) and Wendy specializes in necklaces (producing 0 rings, 50 necklaces).\n• After trading 45 rings for 30 necklaces:\n  - Wendy has 0 + 45 = 45 rings and 50 - 30 = 20 necklaces.\n  - Victor has 100 - 45 = 55 rings and 0 + 30 = 30 necklaces."
  },
  {
    id: "p5_q10",
    number: 10,
    points: 10,
    type: "composite",
    intro: "The market supply of maple syrup in a Vermont town is shown in the table below.",
    table: {
      title: "Supply of Maple Syrup",
      headers: [
        [
          { text: "Price (dollars per gallon)", rowspan: 2 },
          { text: "Quantity of Maple Syrup Supplied (gallons)", colspan: 2 }
        ],
        [
          { text: "Initial" },
          { text: "New" }
        ]
      ],
      rows: [
        ["$40.00", "500", { inputId: "n1", answer: 350 }],
        ["35.00", "400", { inputId: "n2", answer: 280 }],
        ["30.00", "300", { inputId: "n3", answer: 210 }],
        ["25.00", "200", { inputId: "n4", answer: 140 }]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.\n\na. Suppose an unseasonably warm winter decreases maple sap yields by 30% at every price. Complete the new supply schedule in the table above.",
    parts: [
      {
        id: "b_orig",
        type: "number",
        prompt: "b. At a price of $35.00 per gallon, the original quantity supplied was",
        suffix: "gallons",
        answer: 400
      },
      {
        id: "b_new",
        type: "number",
        prompt: "and the new quantity supplied is",
        suffix: "gallons.",
        answer: 280
      }
    ],
    explanation: "A 30% decrease means the new quantity supplied is 70% (0.70) of the initial quantity:\n• At $40.00: 500 × 0.70 = 350\n• At $35.00: 400 × 0.70 = 280\n• At $30.00: 300 × 0.70 = 210\n• At $25.00: 200 × 0.70 = 140"
  },
  {
    id: "p5_q11",
    number: 11,
    points: 10,
    type: "interactive_graph",
    intro: "Refer to the figure.",
    graphConfig: {
      title: "Market for OrganicCherries",
      toolName: "Consumer Surplus, CS",
      shortLabel: "CS",
      xLabel: "Quantity (pounds of cherries)",
      yLabel: "Price",
      xMax: 250,
      xStep: 50,
      yMax: 10,
      yStep: 1,
      demand: [{ x: 0, y: 9 }, { x: 150, y: 6 }, { x: 250, y: 4 }],
      supply: [{ x: 0, y: 0 }, { x: 150, y: 6 }, { x: 250, y: 10 }],
      eq: { x: 150, y: 6 },
      snapPoints: [
        { x: 0, y: 9 }, { x: 0, y: 6 }, { x: 0, y: 0 },
        { x: 150, y: 6 }, { x: 150, y: 0 }, { x: 50, y: 8 },
        { x: 50, y: 2 }, { x: 100, y: 7 }, { x: 100, y: 4 },
        { x: 250, y: 4 }, { x: 250, y: 10 }
      ],
      targetTriangle: [
        { x: 0, y: 9 },
        { x: 0, y: 6 },
        { x: 150, y: 6 }
      ]
    },
    story: "The graph represents the market for organic cherries (in pounds per week) at a Pacific Northwest market. Suppose the equilibrium price of cherries is $6 per pound and the equilibrium quantity is 150 pounds per week.\n\nUsing the graph, show the area representing CONSUMER SURPLUS in this market, and then determine how much consumer surplus will be generated each week.",
    instructions: "Instructions: Use the tool provided \"Consumer Surplus, CS\" to illustrate this area on the graph (click 3 vertices on the graph to form the Consumer Surplus triangle).",
    parts: [
      {
        id: "cs_val",
        type: "number",
        prompt: "Consumer surplus:",
        prefix: "$",
        answer: 225
      }
    ],
    explanation: "• Graphical Area: Consumer Surplus (CS) is the triangle below the demand curve and above the equilibrium price line ($6) from Q = 0 to Q = 150. Its three vertices are (0, $9), (0, $6), and (150, $6).\n• Calculation: CS = 0.5 × Base × Height = 0.5 × 150 × ($9 - $6) = 0.5 × 150 × $3 = $225."
  },
  {
    id: "p5_q12",
    number: 12,
    points: 10,
    type: "interactive_graph",
    intro: "Refer to the figure.",
    graphConfig: {
      title: "Market for OrganicCherries",
      toolName: "Producer Surplus, PS",
      shortLabel: "PS",
      xLabel: "Quantity (pounds of cherries)",
      yLabel: "Price",
      xMax: 250,
      xStep: 50,
      yMax: 10,
      yStep: 1,
      demand: [{ x: 0, y: 9 }, { x: 150, y: 6 }, { x: 250, y: 4 }],
      supply: [{ x: 0, y: 0 }, { x: 150, y: 6 }, { x: 250, y: 10 }],
      eq: { x: 150, y: 6 },
      snapPoints: [
        { x: 0, y: 9 }, { x: 0, y: 6 }, { x: 0, y: 0 },
        { x: 150, y: 6 }, { x: 150, y: 0 }, { x: 50, y: 8 },
        { x: 50, y: 2 }, { x: 100, y: 7 }, { x: 100, y: 4 },
        { x: 250, y: 4 }, { x: 250, y: 10 }
      ],
      targetTriangle: [
        { x: 0, y: 6 },
        { x: 0, y: 0 },
        { x: 150, y: 6 }
      ]
    },
    story: "The graph represents the market for organic cherries (in pounds per week) at a Pacific Northwest market. Suppose the equilibrium price of cherries is $6 per pound and the equilibrium quantity is 150 pounds per week.\n\nUsing the graph, show the area representing PRODUCER SURPLUS (Supplier Surplus) in this market, and then determine how much producer surplus and total economic surplus are generated each week.",
    instructions: "Instructions: Use the tool provided \"Producer Surplus, PS\" to illustrate the Producer Surplus area on the graph (click 3 vertices on the graph to form the Producer Surplus triangle).",
    parts: [
      {
        id: "ps_val",
        type: "number",
        prompt: "Producer surplus:",
        prefix: "$",
        answer: 450
      },
      {
        id: "es_val",
        type: "number",
        prompt: "Total economic surplus (CS + PS):",
        prefix: "$",
        answer: 675
      }
    ],
    explanation: "• Graphical Area: Producer Surplus (PS) is the triangle below the equilibrium price ($6) and above the supply curve (which starts at the origin (0, $0)) up to Q = 150. Its three vertices are (0, $6), (0, $0), and (150, $6).\n• Calculation:\n  - Producer Surplus (PS) = 0.5 × 150 × ($6 - $0) = 0.5 × 150 × $6 = $450.\n  - Total Economic Surplus (ES = CS + PS) = $225 + $450 = $675."
  },
  {
    id: "p5_q13",
    number: 13,
    points: 10,
    type: "composite",
    intro: "Nina bakes custom wedding cakes on orders. The table below shows her marginal benefit and marginal cost for each cake she bakes per month.",
    table: {
      title: "Nina's Marginal Benefit and Marginal Cost of Baking Cakes",
      headers: [
        [
          { text: "Cakes Baked" },
          { text: "Marginal Benefit (dollars)" },
          { text: "Marginal Cost (dollars)" }
        ]
      ],
      rows: [
        ["1", "$500", "$140"],
        ["2", "440", "200"],
        ["3", "380", "260"],
        ["4", "320", "320"],
        ["5", "260", "380"],
        ["6", "200", "440"],
        ["7", "140", "500"]
      ]
    },
    parts: [
      {
        id: "a",
        type: "mcq",
        prompt: "a. Given the information above, what is Nina's optimal number of cakes to bake each month?",
        options: ["3 cakes", "4 cakes", "5 cakes", "6 cakes"],
        answer: 1
      },
      {
        id: "b",
        type: "mcq",
        prompt: "b. If Nina were to bake 3 cakes per month:",
        options: [
          "the marginal benefit would equal the marginal cost.",
          "the marginal cost would exceed the marginal benefit by $120.",
          "the marginal benefit would exceed the marginal cost by $120.",
          "the marginal benefit would exceed the marginal cost by $240."
        ],
        answer: 2
      },
      {
        id: "c",
        type: "mcq",
        prompt: "c. If Nina were to bake 5 cakes per month:",
        options: [
          "the marginal benefit would equal the marginal cost.",
          "the marginal cost would exceed the marginal benefit by $120.",
          "the marginal benefit would exceed the marginal cost by $120.",
          "the marginal cost would exceed the marginal benefit by $240."
        ],
        answer: 1
      }
    ],
    explanation: "• (a) Optimal output is where MB = MC. At 4 cakes, MB = $320 and MC = $320.\n• (b) At 3 cakes, MB = $380 and MC = $260, so MB exceeds MC by $380 - $260 = $120.\n• (c) At 5 cakes, MB = $260 and MC = $380, so MC exceeds MB by $380 - $260 = $120."
  },
  {
    id: "p5_q14",
    number: 14,
    points: 10,
    type: "composite",
    intro: "Grace and Henry are both tailors producing dress shirts and trousers. The table below compares their production possibilities schedules.",
    table: {
      title: "Production Possibilities Schedules",
      headers: [
        [
          { text: "Grace", colspan: 2 },
          { text: "Henry", colspan: 2 }
        ],
        [
          { text: "Shirts" },
          { text: "Trousers" },
          { text: "Shirts" },
          { text: "Trousers" }
        ]
      ],
      rows: [
        ["24", "0", "45", "0"],
        ["12", "18", "15", "10"],
        ["0", "36", "0", "15"]
      ]
    },
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "If both tailors decided to specialize and trade with each other, the terms of trade that would benefit both Grace and Henry (1 shirt = x trousers) would be between",
        options: [
          "0.33 and 1.5 trousers per shirt.",
          "0.67 and 3 trousers per shirt.",
          "0.5 and 2 trousers per shirt.",
          "0.25 and 1.25 trousers per shirt."
        ],
        answer: 0
      }
    ],
    explanation: "Calculate each tailor's opportunity cost of producing 1 shirt:\n• Grace: 24 shirts = 36 trousers → 1 shirt costs 36 / 24 = 1.5 trousers.\n• Henry: 45 shirts = 15 trousers → 1 shirt costs 15 / 45 = 0.33 (1/3) trousers.\nMutually beneficial terms of trade lie between their opportunity costs: between 0.33 and 1.5 trousers per shirt."
  },
  {
    id: "p5_q15",
    number: 15,
    points: 10,
    type: "composite",
    intro: "Identify which of the following scenarios is likely to shift the demand for organic baby formula to the right.",
    instructions: "Instructions: You may select more than one answer. Click the box with a check mark for the correct answers.",
    parts: [
      {
        id: "main",
        type: "checkbox",
        prompt: "Select all that apply:",
        options: [
          "A national baby boom increases the number of infants born this year by 15%.",
          "Pediatricians publish a widely read study praising the nutritional benefits of organic baby formula.",
          "A supply chain bottleneck makes parents believe that organic baby formula will be much more expensive next month.",
          "A major brand of organic baby formula is recalled due to contamination concerns."
        ],
        answers: [0, 1, 2]
      }
    ],
    explanation: "• More infants increase the number of buyers/consumers (shifts demand right).\n• Positive pediatric endorsement increases consumer preferences (shifts demand right).\n• Expecting higher prices next month prompts parents to stock up today (shifts current demand right).\n• A contamination recall reduces consumer confidence and shifts demand to the left."
  },
  {
    id: "p5_q16",
    number: 16,
    points: 10,
    type: "composite",
    intro: "",
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "In the market for fresh salmon, stricter commercial fishing quotas reduce the number of salmon caught by fishing fleets. At the same time, rising beef prices cause many consumers to buy fish instead of beef. As a result, one should expect",
        options: [
          "the equilibrium price of salmon to fall, but the equilibrium quantity to be indeterminate.",
          "the equilibrium price of salmon to rise, but the equilibrium quantity to be indeterminate.",
          "the equilibrium price of salmon to be indeterminate, but the equilibrium quantity to rise.",
          "the equilibrium price of salmon to be indeterminate, but the equilibrium quantity to fall."
        ],
        answer: 1
      }
    ],
    explanation: "• Stricter fishing quotas decrease Supply (Supply shifts left: P↑, Q↓).\n• Higher prices for a substitute (beef) increase Demand for salmon (Demand shifts right: P↑, Q↑).\n• Combining both shifts: Both forces push equilibrium price UP, while they push equilibrium quantity in opposite directions (making quantity indeterminate)."
  },
  {
    id: "p5_q17",
    number: 17,
    points: 10,
    type: "composite",
    intro: "Alpine Andy and Summit Sara spend their week crafting snowshoes and ski poles. The table below shows their weekly production possibilities schedules.",
    table: {
      title: "Production Possibilities Schedules",
      headers: [
        [
          { text: "Alpine Andy", colspan: 2 },
          { text: "Summit Sara", colspan: 2 }
        ],
        [
          { text: "Snowshoes" },
          { text: "Ski Poles" },
          { text: "Snowshoes" },
          { text: "Ski Poles" }
        ]
      ],
      rows: [
        ["50", "0", "90", "0"],
        ["40", "14", "72", "12"],
        ["30", "28", "54", "24"],
        ["20", "42", "36", "36"],
        ["10", "56", "18", "48"],
        ["0", "70", "0", "60"]
      ]
    },
    parts: [
      {
        id: "a",
        type: "mcq",
        prompt: "a. If Alpine Andy splits his week evenly between crafting snowshoes and ski poles, what is the maximum number of snowshoes and ski poles he could craft?",
        options: [
          "50 snowshoes and 70 ski poles",
          "25 snowshoes and 35 ski poles",
          "35 snowshoes and 25 ski poles",
          "30 snowshoes and 28 ski poles"
        ],
        answer: 1
      },
      {
        id: "b",
        type: "mcq",
        prompt: "b. If Summit Sara splits her week evenly between crafting snowshoes and ski poles, what is the maximum number of snowshoes and ski poles she could craft?",
        options: [
          "45 snowshoes and 30 ski poles",
          "30 snowshoes and 45 ski poles",
          "90 snowshoes and 60 ski poles",
          "36 snowshoes and 36 ski poles"
        ],
        answer: 0
      },
      {
        id: "c",
        type: "mcq",
        prompt: "c. Combined, how many snowshoes and ski poles could Alpine Andy and Summit Sara craft if each one split their week evenly between the two products?",
        options: [
          "65 snowshoes and 70 ski poles",
          "140 snowshoes and 130 ski poles",
          "70 snowshoes and 65 ski poles",
          "90 snowshoes and 70 ski poles"
        ],
        answer: 2
      },
      {
        id: "d_snow",
        type: "select",
        prompt: "d. Who has the comparative advantage in crafting snowshoes? In crafting ski poles?\n\nSnowshoes:",
        options: ["Alpine Andy", "Summit Sara"],
        answer: "Summit Sara"
      },
      {
        id: "d_poles",
        type: "select",
        prompt: "Ski poles:",
        options: ["Alpine Andy", "Summit Sara"],
        answer: "Alpine Andy"
      },
      {
        id: "e",
        type: "mcq",
        prompt: "e. If both Alpine Andy and Summit Sara choose to specialize in the product in which they have a comparative advantage, how many of each product could they produce together?",
        options: [
          "50 snowshoes and 60 ski poles",
          "90 snowshoes and 70 ski poles",
          "70 snowshoes and 90 ski poles",
          "90 snowshoes and 60 ski poles"
        ],
        answer: 1
      }
    ],
    explanation: "• (a) Splitting his week 50/50 gives Alpine Andy half of his maximums: 50/2 = 25 snowshoes and 70/2 = 35 ski poles.\n• (b) Splitting her week 50/50 gives Summit Sara half of her maximums: 90/2 = 45 snowshoes and 60/2 = 30 ski poles.\n• (c) Combined at 50/50: (25 + 45) = 70 snowshoes and (35 + 30) = 65 ski poles.\n• (d) Sara's opportunity cost of 1 snowshoe is 60/90 = 0.67 ski poles, while Andy's is 70/50 = 1.4 ski poles. Thus, Summit Sara has the comparative advantage in snowshoes, and Alpine Andy has the comparative advantage in ski poles (notice Andy actually has the absolute AND comparative advantage in ski poles: 70 > 60).\n• (e) With complete specialization, Sara produces 90 snowshoes and Andy produces 70 ski poles."
  },
  {
    id: "p5_q18",
    number: 18,
    points: 10,
    type: "composite",
    intro: "Evaluate the set of events below. Determine how the events will impact their respective markets.",
    parts: [
      {
        id: "a",
        type: "inline_Cloze",
        prompt: "a. In examining the market for airline tickets, the price of aviation jet fuel drops by 35%.",
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
        prompt: "b. In examining the market for hotel rooms in Orlando, theme parks cut their admission ticket prices in half.",
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
        prompt: "c. In examining the market for corn, farmers expect the price of corn to be 40% higher next month and therefore store their current harvest in silos instead of selling it today.",
        segments: [
          "The effect of the event on today's market will be ",
          { id: "c1", options: ["an increase", "a decrease"], answer: "a decrease" },
          " in ",
          { id: "c2", options: ["supply", "demand", "quantity supplied", "quantity demanded"], answer: "supply" },
          ". As a result, the current equilibrium price will ",
          { id: "c3", options: ["increase", "decrease"], answer: "increase" },
          " and the current equilibrium quantity will ",
          { id: "c4", options: ["increase", "decrease"], answer: "decrease" },
          "."
        ]
      }
    ],
    explanation: "• (a) Lower input costs (jet fuel) increase airline supply (rightward shift), lowering equilibrium price and increasing equilibrium quantity.\n• (b) Theme park tickets and Orlando hotel rooms are complements. A lower price for theme park tickets increases demand for Orlando hotel rooms (rightward shift), raising both equilibrium price and equilibrium quantity.\n• (c) When sellers expect higher prices in the near future and withhold current inventory, current market supply decreases (shifts left), raising current equilibrium price and reducing current equilibrium quantity."
  }
];
