const PACK3 = [
  {
    id: "p3_q1",
    number: 1,
    points: 10,
    type: "composite",
    intro: "The market for industrial 3D printers consists of three manufacturers: Firm X, Firm Y, and Firm Z. Their individual supply equations are:\n• Firm X: Qx = -20 + 4P (for P >= $5; otherwise Qx = 0)\n• Firm Y: Qy = -40 + 5P (for P >= $8; otherwise Qy = 0)\n• Firm Z: Qz = -60 + 6P (for P >= $10; otherwise Qz = 0)\n\nUse these equations to complete the table below.",
    table: {
      title: "Individual and Market Supply of Industrial 3D Printers",
      headers: [
        [
          { text: "Price (hundreds of dollars)", rowspan: 2 },
          { text: "Quantity of 3D Printers Supplied", colspan: 4 }
        ],
        [
          { text: "Firm X" },
          { text: "Firm Y" },
          { text: "Firm Z" },
          { text: "Market Total" }
        ]
      ],
      rows: [
        ["$16", "44", "40", "36", { inputId: "r1", answer: 120 }],
        ["14", "36", "30", "24", { inputId: "r2", answer: 90 }],
        ["12", "28", "20", "12", { inputId: "r3", answer: 60 }],
        ["10", "20", "10", "0", { inputId: "r4", answer: 30 }],
        ["8", "12", "0", "0", { inputId: "r5", answer: 12 }],
        ["6", "4", "0", "0", { inputId: "r6", answer: 4 }]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.\n\nFill in the \"Market Total\" column.",
    parts: [
      {
        id: "b",
        type: "number",
        prompt: "If the market price rises from $10 to $18 (hundreds of dollars), what would be the total market quantity supplied at P = $18?",
        suffix: "printers",
        answer: 150
      }
    ],
    explanation: "Because individual firms cannot supply negative quantities, a firm only enters the market above its shut-down/choke price (P >= $5 for X, P >= $8 for Y, P >= $10 for Z):\n• At $16: 44 + 40 + 36 = 120\n• At $14: 36 + 30 + 24 = 90\n• At $12: 28 + 20 + 12 = 60\n• At $10: 20 + 10 + 0 = 30\n• At $8: 12 + 0 + 0 = 12\n• At $6: 4 + 0 + 0 = 4\n• At P = $18 (where all 3 firms are active): Q_market = (-20 - 40 - 60) + (4 + 5 + 6)(18) = -120 + 15(18) = -120 + 270 = 150 printers."
  },
  {
    id: "p3_q2",
    number: 2,
    points: 10,
    type: "composite",
    intro: "Use the following graph of the market for lithium batteries to answer the questions below.",
    svgGraph: {
      type: "mb_mc",
      title: "",
      xLabel: "Quantity (millions of units)",
      yLabel: "Price (dollars per unit)",
      xTicks: [10, 20, 30, 40, 50],
      yTicks: ["20.00", "50.00", "80.00"],
      mbLine: { x1: 10, y1: 80.00, x2: 50, y2: 20.00 },
      mcLine: { x1: 20, y1: 20.00, x2: 40, y2: 80.00 },
      eqPoint: { x: 30, y: 50.00 },
      dashedPoints: [
        { x: 10, y: 80.00 },
        { x: 20, y: 20.00 },
        { x: 30, y: 50.00 },
        { x: 40, y: 80.00 },
        { x: 50, y: 20.00 }
      ]
    },
    parts: [
      {
        id: "a",
        type: "mcq",
        prompt: "a. If a production quota restricts output to 20 million units of lithium batteries, then at 20 million units:",
        options: [
          "marginal benefit is $65.00, marginal cost is $20.00, and too little is produced.",
          "marginal benefit is $80.00, marginal cost is $20.00, and too little is produced.",
          "marginal benefit is $35.00, marginal cost is $80.00, and too much is produced.",
          "the market achieves allocative efficiency."
        ],
        answer: 0
      },
      {
        id: "b",
        type: "number",
        prompt: "b. What is the deadweight loss (in millions of dollars) caused by restricting output to 20 million units instead of producing the allocatively efficient quantity of 30 million units?",
        prefix: "$",
        suffix: "million",
        answer: 225
      }
    ],
    explanation: "• From the graph, the linear MB line passes through (10, $80) and (30, $50), so its slope is -$1.50 per million units: MB = 95 - 1.5Q. At Q = 20, MB = 95 - 1.5(20) = $65.00.\n• The MC line passes through (20, $20) and (30, $50), so at Q = 20, MC = $20.00. Since MB ($65) > MC ($20), too little is produced.\n• (b) Deadweight Loss (DWL) from underproducing at Q = 20 instead of Q* = 30 is the area of the triangle between MB and MC from Q = 20 to Q = 30:\n  DWL = 0.5 × (30 - 20) × ($65 - $20) = 0.5 × 10 × $45 = $225 million."
  },
  {
    id: "p3_q3",
    number: 3,
    points: 10,
    type: "composite",
    intro: "The table below depicts the demand for noise-canceling headphones at an electronics retailer.",
    table: {
      title: "Demand for Noise-Canceling Headphones",
      headers: [
        [
          { text: "Price (dollars)" },
          { text: "Quantity (headphones)" },
          { text: "Total Revenue (dollars)" }
        ]
      ],
      rows: [
        ["$240.00", "0", { inputId: "tr0", prefix: "$", answer: 0 }],
        ["210.00", "200", { inputId: "tr1", answer: 42000 }],
        ["180.00", "400", { inputId: "tr2", answer: 72000 }],
        ["150.00", "600", { inputId: "tr3", answer: 90000 }],
        ["120.00", "800", { inputId: "tr4", answer: 96000 }],
        ["90.00", "1,000", { inputId: "tr5", answer: 90000 }],
        ["60.00", "1,200", { inputId: "tr6", answer: 72000 }],
        ["30.00", "1,400", { inputId: "tr7", answer: 42000 }],
        ["0.00", "1,600", { inputId: "tr8", answer: 0 }]
      ]
    },
    instructions: "Instructions: Enter your answer as a whole number. If you are entering a negative number include a minus sign.\n\na. Fill in the total revenue column.",
    parts: [
      {
        id: "b",
        type: "number",
        prompt: "b. When the price decreases from $210.00 to $180.00, what is the change in total revenue?",
        prefix: "$",
        answer: 30000
      },
      {
        id: "c",
        type: "number",
        prompt: "c. When the price decreases from $150.00 to $90.00, what is the change in total revenue?",
        prefix: "$",
        answer: 0
      },
      {
        id: "d",
        type: "number",
        prompt: "d. When the price decreases from $60.00 to $30.00, what is the change in total revenue?",
        prefix: "$",
        answer: -30000
      },
      {
        id: "e",
        type: "mcq",
        prompt: "e. Using the midpoint formula, what is the absolute value of the price elasticity of demand between $210.00 and $180.00?",
        options: ["0.31", "1.00", "4.33", "2.50"],
        answer: 2
      },
      {
        id: "f",
        type: "mcq",
        prompt: "f. When the price is in the range of $60.00 to $30.00, demand is",
        options: ["unit-elastic.", "inelastic.", "elastic.", "perfectly elastic."],
        answer: 1
      },
      {
        id: "g",
        type: "mcq",
        prompt: "g. Total revenue is maximized at a price of",
        options: ["$150.00.", "$90.00.", "$120.00.", "$180.00."],
        answer: 2
      },
      {
        id: "h",
        type: "mcq",
        prompt: "h. If the firm has zero marginal cost and wants to maximize total revenue, it should set the price where demand is",
        options: ["perfectly elastic.", "inelastic.", "unit-elastic.", "elastic."],
        answer: 2
      }
    ],
    explanation: "• Total Revenue (TR) = P × Q.\n• (b) From $210 to $180: $72,000 - $42,000 = +$30,000.\n• (c) From $150 to $90: $90,000 - $90,000 = $0.\n• (d) From $60 to $30: $42,000 - $72,000 = -$30,000.\n• (e) Midpoint elasticity between ($210, 200) and ($180, 400):\n  %ΔQ = (400 - 200) / ((400 + 200)/2) = 200 / 300 = 2/3.\n  %ΔP = (180 - 210) / ((180 + 210)/2) = -30 / 195 = -2/13.\n  |Ed| = (2/3) / (2/13) = 13 / 3 ≈ 4.33 (elastic).\n• (f) Between $60 and $30, lowering price reduces TR, so demand is inelastic.\n• (g) & (h) TR peaks at $96,000 when P = $120.00, where demand is unit-elastic."
  },
  {
    id: "p3_q4",
    number: 4,
    points: 10,
    type: "composite",
    intro: "",
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "A firm has already spent $500,000 developing a software prototype (which cannot be recovered). Completing the software requires an additional $150,000 investment, and the completed software is expected to generate $400,000 in total lifetime revenue. Assuming rational self-interest, the firm should:",
        options: [
          "abandon the project because total cost ($650,000) exceeds total revenue ($400,000).",
          "complete the project because the marginal benefit ($400,000) exceeds the marginal cost ($150,000).",
          "abandon the project unless it can raise the price to recover at least $650,000.",
          "complete the project only if the $500,000 sunk cost can be written off on taxes."
        ],
        answer: 1
      }
    ],
    explanation: "The $500,000 already spent is a sunk cost and is irrelevant to current marginal decision-making. Because the additional (marginal) benefit of completing the software ($400,000) exceeds the additional (marginal) cost ($150,000) by $250,000, a rational firm should complete the project."
  },
  {
    id: "p3_q5",
    number: 5,
    points: 10,
    type: "composite",
    intro: "The table below presents the annual market for commercial espresso grinders in Seattle. Suppose the state government imposes a $150 excise tax on every grinder sold to be paid by customers at the point of sale.",
    table: {
      title: "Market for Commercial Espresso Grinders",
      headers: [
        [
          { text: "Price (dollars)" },
          { text: "Quantity Demanded" },
          { text: "Quantity Supplied" },
          { text: "Quantity Demanded with Excise Tax" }
        ]
      ],
      rows: [
        ["$1,050", "120", "480", "30"],
        ["1,000", "150", "420", "60"],
        ["950", "180", "360", "90"],
        ["900", "210", "300", "120"],
        ["850", "240", "240", "150"],
        ["800", "270", "180", "180"],
        ["750", "300", "120", "210"],
        ["700", "330", "60", "240"]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.",
    parts: [
      {
        id: "a_p",
        type: "number",
        prompt: "a. Before the excise tax is imposed, what are the equilibrium price and quantity of grinders?\n\nP =",
        prefix: "$",
        answer: 850
      },
      {
        id: "a_q",
        type: "number",
        prompt: "Q =",
        suffix: "grinders",
        answer: 240
      },
      {
        id: "b",
        type: "number",
        prompt: "b. Including the excise tax, what is the new equilibrium price consumers pay after the tax is imposed?",
        prefix: "$",
        answer: 950
      },
      {
        id: "c",
        type: "number",
        prompt: "c. After the excise tax is imposed, what is the net price per grinder that sellers keep, and what is the new equilibrium quantity?\n\nPrice sellers receive =",
        prefix: "$",
        answer: 800
      },
      {
        id: "c_q",
        type: "number",
        prompt: "New equilibrium quantity =",
        suffix: "grinders",
        answer: 180
      },
      {
        id: "d",
        type: "number",
        prompt: "d. What is the total government tax revenue, and what is the deadweight loss (DWL) created by the excise tax?\n\nGovernment tax revenue =",
        prefix: "$",
        answer: 27000
      },
      {
        id: "e_dwl",
        type: "number",
        prompt: "Deadweight loss (DWL) =",
        prefix: "$",
        answer: 4500
      }
    ],
    explanation: "• (a) Initial equilibrium where Qd = Qs: P = $850 and Q = 240 grinders.\n• (b) & (c) With the $150 tax on buyers, 'Quantity Demanded with Excise Tax' equals 'Quantity Supplied' at Q = 180 grinders, where the seller's price is $800. Including the $150 tax paid at the register, consumers pay $800 + $150 = $950. (Notice how buyers bear $100 of the tax per unit while sellers bear $50 per unit because supply is more elastic than demand!).\n• (d) Tax Revenue = $150 × 180 = $27,000. Deadweight Loss = 0.5 × Tax × ΔQ = 0.5 × $150 × (240 - 180) = 0.5 × $150 × 60 = $4,500."
  },
  {
    id: "p3_q6",
    number: 6,
    points: 10,
    type: "composite",
    intro: "",
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "Suppose the cross-price elasticity of demand between Good X and Good Y is -1.4, and the income elasticity of demand for Good Y is -0.8. When the price of Good X decreases and consumer incomes simultaneously decrease, what happens to the demand for Good Y?",
        options: [
          "Good X and Good Y are substitutes, Good Y is a normal good, and the demand for Good Y definitely decreases.",
          "Good X and Good Y are complements, Good Y is an inferior good, and the demand for Good Y definitely increases.",
          "Good X and Good Y are complements, Good Y is a normal good, and the change in demand for Good Y is indeterminate.",
          "Good X and Good Y are substitutes, Good Y is an inferior good, and the demand for Good Y definitely increases."
        ],
        answer: 1
      }
    ],
    explanation: "• A negative cross-price elasticity (-1.4 < 0) means Good X and Good Y are complements. Therefore, a decrease in the price of Good X increases the demand for Good Y.\n• A negative income elasticity (-0.8 < 0) means Good Y is an inferior good. Therefore, a decrease in consumer incomes also increases the demand for Good Y.\n• Since both effects shift the demand for Good Y to the right, the demand for Good Y definitely increases."
  },
  {
    id: "p3_q7",
    number: 7,
    points: 10,
    type: "composite",
    intro: "Clara subscribes to cloud computing storage clusters for her analytics startup. The table below shows the TOTAL Benefit (in dollars) she receives from hiring 1 to 6 clusters.",
    table: {
      title: "Clara's Total Benefit of Cloud Storage Clusters",
      headers: [
        [
          { text: "Cloud Clusters" },
          { text: "Total Benefit (dollars)" },
          { text: "Marginal Benefit (dollars)" }
        ]
      ],
      rows: [
        ["1", "$120", { inputId: "mb1", answer: 120 }],
        ["2", "220", { inputId: "mb2", answer: 100 }],
        ["3", "300", { inputId: "mb3", answer: 80 }],
        ["4", "360", { inputId: "mb4", answer: 60 }],
        ["5", "400", { inputId: "mb5", answer: 40 }],
        ["6", "420", { inputId: "mb6", answer: 20 }]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.\n\nFirst, fill in the Marginal Benefit column in the table above.",
    parts: [
      {
        id: "a",
        type: "number",
        prompt: "a. If the rental price is $60 per cluster, how many clusters will Clara rent if she is rational?",
        suffix: "cluster(s)",
        answer: 4
      },
      {
        id: "b",
        type: "number",
        prompt: "b. At a rental price of $60 per cluster, what is Clara's total consumer surplus (Net Benefit = Total Benefit - Total Expenditure) at her optimal choice?",
        prefix: "$",
        answer: 120
      }
    ],
    explanation: "• Marginal Benefit (MB) is the change in Total Benefit from each additional cluster: 120, 100, 80, 60, 40, 20.\n• (a) At P = $60, Clara rents 4 clusters (where MB = $60).\n• (b) At 4 clusters, Total Benefit = $360 and Total Expenditure = 4 × $60 = $240. Her Total Consumer Surplus (Net Benefit) is $360 - $240 = $120."
  },
  {
    id: "p3_q8",
    number: 8,
    points: 10,
    type: "composite",
    intro: "Use the following figure to answer the questions below.",
    svgGraph: {
      type: "ppf",
      title: "Dr. Chen's Production Possibilities Frontier",
      xLabel: "Medical Consultations",
      yLabel: "Lab Reports",
      yMax: 240,
      xMax: 60,
      midPoint: { x: 30, y: 120 }
    },
    parts: [
      {
        id: "a",
        type: "mcq",
        prompt: "a. Dr. Chen's opportunity cost of producing 1 lab report is ________ medical consultation(s), whereas the opportunity cost of 1 medical consultation is ________ lab report(s).",
        options: [
          "4; 1/4",
          "1/4; 4",
          "2; 1/2",
          "1/2; 2"
        ],
        answer: 1
      },
      {
        id: "b",
        type: "number",
        prompt: "b. If Dr. Chen is currently producing 45 medical consultations efficiently on her PPF, what is the maximum number of lab reports she can produce?",
        suffix: "lab reports",
        answer: 60
      }
    ],
    explanation: "• (a) Since 240 lab reports = 60 medical consultations:\n  - 1 lab report costs 60 / 240 = 1/4 (0.25) medical consultations.\n  - 1 medical consultation costs 240 / 60 = 4 lab reports.\n• (b) Along the PPF: Y = 240 - 4X. When X = 45 medical consultations, Y = 240 - 4(45) = 240 - 180 = 60 lab reports."
  },
  {
    id: "p3_q9",
    number: 9,
    points: 10,
    type: "composite",
    intro: "AlphaTech and BetaCorp both manufacture microchips and motherboards. The table below compares their weekly production possibilities schedules.",
    table: {
      title: "Production Possibilities Schedules",
      headers: [
        [
          { text: "AlphaTech", colspan: 2 },
          { text: "BetaCorp", colspan: 2 }
        ],
        [
          { text: "Microchips" },
          { text: "Motherboards" },
          { text: "Microchips" },
          { text: "Motherboards" }
        ]
      ],
      rows: [
        ["120", "0", "90", "0"],
        ["96", "8", "72", "12"],
        ["72", "16", "54", "24"],
        ["48", "24", "36", "36"],
        ["24", "32", "18", "48"],
        ["0", "40", "0", "60"]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.",
    parts: [
      {
        id: "a_chip",
        type: "select",
        prompt: "a. AlphaTech and BetaCorp agree to trade at a rate of 2 microchips for 1 motherboard. With those terms of trade, who will specialize in and supply microchips? Who will specialize in and supply motherboards?\n\nMicrochips:",
        options: ["AlphaTech", "BetaCorp"],
        answer: "AlphaTech"
      },
      {
        id: "a_board",
        type: "select",
        prompt: "Motherboards:",
        options: ["AlphaTech", "BetaCorp"],
        answer: "BetaCorp"
      },
      {
        id: "b_beta_chip",
        type: "number",
        prompt: "b. Suppose both firms completely specialize and agree to trade 50 microchips for 25 motherboards (a rate of 2 microchips per motherboard). How many microchips and motherboards will each firm have after trade?\n\nBetaCorp (microchips):",
        suffix: "microchips",
        answer: 50
      },
      {
        id: "b_beta_board",
        type: "number",
        prompt: "BetaCorp (motherboards):",
        suffix: "motherboards",
        answer: 35
      },
      {
        id: "b_alpha_chip",
        type: "number",
        prompt: "AlphaTech (microchips):",
        suffix: "microchips",
        answer: 70
      },
      {
        id: "b_alpha_board",
        type: "number",
        prompt: "AlphaTech (motherboards):",
        suffix: "motherboards",
        answer: 25
      }
    ],
    explanation: "• AlphaTech's cost of 1 motherboard is 120/40 = 3 microchips (or 1 microchip costs 1/3 motherboard).\n• BetaCorp's cost of 1 motherboard is 90/60 = 1.5 microchips (or 1 microchip costs 2/3 motherboard).\n• Since the trade rate of 2 microchips per motherboard lies between 1.5 and 3, AlphaTech specializes in microchips (producing 120 microchips, 0 motherboards) and BetaCorp specializes in motherboards (producing 0 microchips, 60 motherboards).\n• After trading 50 microchips for 25 motherboards:\n  - BetaCorp has 0 + 50 = 50 microchips and 60 - 25 = 35 motherboards.\n  - AlphaTech has 120 - 50 = 70 microchips and 0 + 25 = 25 motherboards."
  },
  {
    id: "p3_q10",
    number: 10,
    points: 10,
    type: "composite",
    intro: "The market supply of specialty coffee beans in a mountain province is shown in the table below.",
    table: {
      title: "Supply of Specialty Coffee Beans",
      headers: [
        [
          { text: "Price (dollars per bag)", rowspan: 2 },
          { text: "Quantity Supplied (bags)", colspan: 3 }
        ],
        [
          { text: "Initial" },
          { text: "After Drought (-20%)" },
          { text: "After New Tech (+25% from Drought)" }
        ]
      ],
      rows: [
        ["$30.00", "1,000", { inputId: "d1", answer: 800 }, { inputId: "t1", answer: 1000 }],
        ["25.00", "800", { inputId: "d2", answer: 640 }, { inputId: "t2", answer: 800 }],
        ["20.00", "600", { inputId: "d3", answer: 480 }, { inputId: "t3", answer: 600 }],
        ["15.00", "400", { inputId: "d4", answer: 320 }, { inputId: "t4", answer: 400 }]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.\n\na. First, a severe drought decreases coffee production by 20% at every price. Second, a new irrigation technology increases production by 25% relative to the drought levels. Complete both columns in the table above.",
    parts: [
      {
        id: "b",
        type: "mcq",
        prompt: "b. Why does a 20% decrease followed by a 25% increase return quantity supplied exactly to the initial level?",
        options: [
          "Because percentage changes are always additive (25% - 20% = 0%).",
          "Because 0.80 × 1.25 = 1.00 (the 25% increase is applied to the smaller post-drought base of 80%).",
          "Because supply curves are always unit-elastic when technology changes.",
          "It is a coincidence that only holds at a price of $25.00."
        ],
        answer: 1
      }
    ],
    explanation: "• After the 20% decrease, quantity supplied is 0.80 of Initial: 800, 640, 480, 320.\n• A subsequent 25% increase multiplies the post-drought quantities by 1.25. Since 0.80 × 1.25 = 1.00, the quantities return to 1,000, 800, 600, and 400."
  },
  {
    id: "p3_q11",
    number: 11,
    points: 10,
    type: "interactive_graph",
    intro: "Refer to the figure.",
    graphConfig: {
      title: "Market for Avocados (with Price Ceiling)",
      toolName: "Consumer Surplus, CS",
      shortLabel: "CS",
      xLabel: "Quantity (thousands of pounds)",
      yLabel: "Price",
      xMax: 250,
      xStep: 50,
      yMax: 10,
      yStep: 1,
      demand: [{ x: 0, y: 10 }, { x: 100, y: 6 }, { x: 250, y: 0 }],
      supply: [{ x: 0, y: 2 }, { x: 100, y: 6 }, { x: 200, y: 10 }],
      eq: { x: 100, y: 6 },
      snapPoints: [
        { x: 0, y: 10 }, { x: 0, y: 6 }, { x: 0, y: 2 }, { x: 0, y: 0 },
        { x: 100, y: 6 }, { x: 100, y: 0 }, { x: 50, y: 8 }, { x: 50, y: 4 },
        { x: 50, y: 6 }, { x: 200, y: 10 }, { x: 250, y: 0 }
      ],
      targetTriangle: [
        { x: 0, y: 10 },
        { x: 0, y: 6 },
        { x: 100, y: 6 }
      ]
    },
    story: "The graph represents the market for avocados (in thousands of pounds per week). The competitive equilibrium price is $6 per pound and the equilibrium quantity is 100 thousand pounds.\n\nFirst, use the graph tool to illustrate the competitive equilibrium Consumer Surplus (CS) triangle. Then calculate both the Consumer Surplus (CS) and Producer Surplus (PS) at the competitive equilibrium.",
    instructions: "Instructions: Use the tool provided \"Consumer Surplus, CS\" to illustrate the competitive Consumer Surplus triangle on the graph (click 3 vertices).",
    parts: [
      {
        id: "cs_val",
        type: "number",
        prompt: "Competitive Consumer Surplus (in thousands of dollars):",
        prefix: "$",
        suffix: "thousand",
        answer: 200
      },
      {
        id: "ps_val",
        type: "number",
        prompt: "Competitive Producer Surplus (in thousands of dollars):",
        prefix: "$",
        suffix: "thousand",
        answer: 200
      }
    ],
    explanation: "• Graphical Area: Competitive Consumer Surplus (CS) is the triangle with vertices at (0, $10), (0, $6), and (100, $6).\n• Calculation:\n  - CS = 0.5 × 100 × ($10 - $6) = 0.5 × 100 × $4 = $200 thousand.\n  - PS = 0.5 × 100 × ($6 - $2) = 0.5 × 100 × $4 = $200 thousand."
  },
  {
    id: "p3_q12",
    number: 12,
    points: 10,
    type: "interactive_graph",
    intro: "Refer to the figure.",
    graphConfig: {
      title: "Market for Avocados (Quota / Underproduction DWL)",
      toolName: "Deadweight Loss, DWL",
      shortLabel: "DWL",
      xLabel: "Quantity (thousands of pounds)",
      yLabel: "Price",
      xMax: 250,
      xStep: 50,
      yMax: 10,
      yStep: 1,
      demand: [{ x: 0, y: 10 }, { x: 100, y: 6 }, { x: 250, y: 0 }],
      supply: [{ x: 0, y: 2 }, { x: 100, y: 6 }, { x: 200, y: 10 }],
      eq: { x: 100, y: 6 },
      snapPoints: [
        { x: 0, y: 10 }, { x: 0, y: 6 }, { x: 0, y: 2 }, { x: 0, y: 0 },
        { x: 100, y: 6 }, { x: 100, y: 0 }, { x: 50, y: 8 }, { x: 50, y: 4 },
        { x: 50, y: 6 }, { x: 200, y: 10 }, { x: 250, y: 0 }
      ],
      targetTriangle: [
        { x: 50, y: 8 },
        { x: 50, y: 4 },
        { x: 100, y: 6 }
      ]
    },
    story: "Consider again the market for avocados where the competitive equilibrium is P = $6 and Q = 100 thousand pounds. Suppose a strict government quota or price ceiling restricts the quantity traded in the market to only Q = 50 thousand pounds (where marginal benefit on the demand curve is $8 and marginal cost on the supply curve is $4).\n\nUsing the graph, illustrate the triangle representing the Deadweight Loss (DWL) from restricting output to 50 thousand pounds, and calculate both the Deadweight Loss and the remaining Total Economic Surplus at Q = 50.",
    instructions: "Instructions: Use the tool provided \"Deadweight Loss, DWL\" to illustrate the Deadweight Loss triangle on the graph (click its 3 vertices).",
    parts: [
      {
        id: "dwl_val",
        type: "number",
        prompt: "Deadweight Loss (in thousands of dollars):",
        prefix: "$",
        suffix: "thousand",
        answer: 100
      },
      {
        id: "es_val",
        type: "number",
        prompt: "Remaining Economic Surplus at Q = 50 (in thousands of dollars):",
        prefix: "$",
        suffix: "thousand",
        answer: 300
      }
    ],
    explanation: "• Graphical Area: When output is restricted to Q = 50, the unrealized mutually beneficial trades between Q = 50 and Q = 100 form the Deadweight Loss (DWL) triangle with vertices at (50, $8), (50, $4), and (100, $6).\n• Calculation:\n  - DWL = 0.5 × Base × Height = 0.5 × (100 - 50) × ($8 - $4) = 0.5 × 50 × $4 = $100 thousand.\n  - Since maximum competitive Economic Surplus was $200 + $200 = $400 thousand, the remaining Economic Surplus at Q = 50 is $400 - $100 = $300 thousand."
  },
  {
    id: "p3_q13",
    number: 13,
    points: 10,
    type: "composite",
    intro: "A boutique consulting firm hires data analysts by the hour. The table below shows the firm's Total Revenue (Total Benefit) and Total Cost for 1 to 7 hours of analyst work.",
    table: {
      title: "Total Benefit and Total Cost of Analyst Hours",
      headers: [
        [
          { text: "Hours" },
          { text: "Total Benefit ($)" },
          { text: "Total Cost ($)" }
        ]
      ],
      rows: [
        ["1", "$110", "$20"],
        ["2", "205", "55"],
        ["3", "285", "105"],
        ["4", "350", "170"],
        ["5", "400", "250"],
        ["6", "435", "345"],
        ["7", "455", "455"]
      ]
    },
    parts: [
      {
        id: "a",
        type: "mcq",
        prompt: "a. By computing Marginal Benefit (MB) and Marginal Cost (MC) for each hour, determine the optimal number of hours the firm should hire:",
        options: ["3 hours", "4 hours", "5 hours", "6 hours"],
        answer: 1
      },
      {
        id: "b",
        type: "mcq",
        prompt: "b. For the 2nd hour of work:",
        options: [
          "MB is $95 and MC is $35, so hiring the 2nd hour adds $60 to net benefit.",
          "MB is $205 and MC is $55, so hiring the 2nd hour adds $150 to net benefit.",
          "MB equals MC at $65.",
          "MC exceeds MB by $60."
        ],
        answer: 0
      },
      {
        id: "c",
        type: "number",
        prompt: "c. What is the maximum Total Net Benefit (Total Benefit minus Total Cost) achieved at the optimal number of hours?",
        prefix: "$",
        answer: 180
      }
    ],
    explanation: "• Let's compute MB = ΔTB and MC = ΔTC for each hour:\n  - Hour 1: MB = $110, MC = $20 (Net = $90)\n  - Hour 2: MB = $95, MC = $35 (Net = $150)\n  - Hour 3: MB = $80, MC = $50 (Net = $180)\n  - Hour 4: MB = $65, MC = $65 (Net = $180) → Optimal where MB = MC = $65!\n  - Hour 5: MB = $50, MC = $80 (Net = $150)\n• At 4 hours, MB = MC = $65, and Total Net Benefit is maximized at $350 - $170 = $180."
  },
  {
    id: "p3_q14",
    number: 14,
    points: 10,
    type: "composite",
    intro: "Two countries, Solaria and Windia, produce solar cells and wind turbines using labor hours. Unlike an output table, the table below shows the NUMBER OF LABOR HOURS required to produce 1 unit of each good.",
    table: {
      title: "Labor Hours Required per Unit of Output (Input Requirements)",
      headers: [
        [
          { text: "Solaria", colspan: 2 },
          { text: "Windia", colspan: 2 }
        ],
        [
          { text: "1 Solar Cell" },
          { text: "1 Wind Turbine" },
          { text: "1 Solar Cell" },
          { text: "1 Wind Turbine" }
        ]
      ],
      rows: [
        ["10 hours", "40 hours", "15 hours", "30 hours"]
      ]
    },
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "Based on this input-requirement table, which country has the comparative advantage in solar cells, and what is the range of mutually beneficial terms of trade for 1 wind turbine?",
        options: [
          "Solaria has the comparative advantage in solar cells; 1 wind turbine will trade for between 2 and 4 solar cells.",
          "Windia has the comparative advantage in solar cells; 1 wind turbine will trade for between 2 and 4 solar cells.",
          "Solaria has the comparative advantage in wind turbines; 1 wind turbine will trade for between 0.25 and 0.5 solar cells.",
          "Windia has the comparative advantage in both goods; no mutually beneficial trade is possible."
        ],
        answer: 0
      }
    ],
    explanation: "Watch out! This is an INPUT table (hours needed per unit):\n• In Solaria, 1 wind turbine takes 40 hours, which could instead produce 40 / 10 = 4 solar cells. So 1 wind turbine costs 4 solar cells (and 1 solar cell costs 0.25 turbines).\n• In Windia, 1 wind turbine takes 30 hours, which could instead produce 30 / 15 = 2 solar cells. So 1 wind turbine costs 2 solar cells (and 1 solar cell costs 0.5 turbines).\n• Therefore, Solaria has the lower opportunity cost in solar cells (0.25 < 0.5), Windia has the lower opportunity cost in wind turbines (2 < 4), and mutually beneficial terms of trade for 1 wind turbine lie between 2 and 4 solar cells."
  },
  {
    id: "p3_q15",
    number: 15,
    points: 10,
    type: "composite",
    intro: "Assume that instant ramen noodles are an INFERIOR good. Identify which of the following scenarios is likely to shift the demand curve for instant ramen noodles to the RIGHT.",
    instructions: "Instructions: You may select more than one answer. Click the box with a check mark for the correct answers.",
    parts: [
      {
        id: "main",
        type: "checkbox",
        prompt: "Select all that apply:",
        options: [
          "An economic recession causes average household incomes to fall by 15%.",
          "The price of instant ramen noodles is cut by 25% during a supermarket sale.",
          "The price of canned soup (a close substitute for instant ramen) increases by 40%.",
          "University enrollment expands, increasing the population of college students who eat instant ramen."
        ],
        answers: [0, 2, 3]
      }
    ],
    explanation: "• Because instant ramen is an inferior good, a fall in household income increases demand (shifts the demand curve right).\n• A cut in the price of instant ramen itself causes a movement ALONG the demand curve (an increase in quantity demanded), NOT a shift of the demand curve!\n• An increase in the price of a substitute (canned soup) shifts demand for instant ramen to the right.\n• An increase in the number of buyers (college students) shifts demand to the right."
  },
  {
    id: "p3_q16",
    number: 16,
    points: 10,
    type: "composite",
    intro: "",
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "In the market for natural gas, cold winter weather causes a large increase in household heating demand. Simultaneously, new horizontal drilling techniques cause a small increase in the supply of natural gas. Because the increase in demand is much larger in magnitude than the increase in supply, one should expect:",
        options: [
          "both the equilibrium price and the equilibrium quantity of natural gas to rise.",
          "the equilibrium price to fall and the equilibrium quantity to rise.",
          "the equilibrium price to rise and the equilibrium quantity to fall.",
          "both the equilibrium price and the equilibrium quantity to fall."
        ],
        answer: 0
      }
    ],
    explanation: "• Both a rightward shift in Demand (P↑, Q↑) and a rightward shift in Supply (P↓, Q↑) increase equilibrium quantity (Q↑).\n• While Demand pushes price UP and Supply pushes price DOWN, we are explicitly told that the increase in Demand is much larger than the increase in Supply. Therefore, the demand effect dominates on price, and equilibrium price also rises (P↑)."
  },
  {
    id: "p3_q17",
    number: 17,
    points: 10,
    type: "composite",
    intro: "Artisan Alex and Craftsman Casey spend their 40-hour workweek making leather belts and stitched wallets. The table below shows their production possibilities schedules.",
    table: {
      title: "Production Possibilities Schedules",
      headers: [
        [
          { text: "Artisan Alex", colspan: 2 },
          { text: "Craftsman Casey", colspan: 2 }
        ],
        [
          { text: "Belts" },
          { text: "Wallets" },
          { text: "Belts" },
          { text: "Wallets" }
        ]
      ],
      rows: [
        ["50", "0", "120", "0"],
        ["40", "16", "96", "16"],
        ["30", "32", "72", "32"],
        ["20", "48", "48", "48"],
        ["10", "64", "24", "64"],
        ["0", "80", "0", "80"]
      ]
    },
    parts: [
      {
        id: "a",
        type: "mcq",
        prompt: "a. If Artisan Alex splits his week evenly (50% / 50%) between belts and wallets, what is the maximum number of belts and wallets he can produce?",
        options: [
          "50 belts and 80 wallets",
          "25 belts and 40 wallets",
          "40 belts and 25 wallets",
          "30 belts and 32 wallets"
        ],
        answer: 1
      },
      {
        id: "b",
        type: "mcq",
        prompt: "b. If Craftsman Casey splits his week evenly (50% / 50%) between belts and wallets, what is the maximum number of belts and wallets he can produce?",
        options: [
          "60 belts and 40 wallets",
          "40 belts and 60 wallets",
          "120 belts and 80 wallets",
          "48 belts and 48 wallets"
        ],
        answer: 0
      },
      {
        id: "c",
        type: "mcq",
        prompt: "c. Combined, how many belts and wallets do they produce when each splits his week evenly?",
        options: [
          "80 belts and 85 wallets",
          "85 belts and 80 wallets",
          "170 belts and 160 wallets",
          "120 belts and 80 wallets"
        ],
        answer: 1
      },
      {
        id: "d_belts",
        type: "select",
        prompt: "d. Who has the comparative advantage in belts? In wallets?\n\nBelts:",
        options: ["Artisan Alex", "Craftsman Casey"],
        answer: "Craftsman Casey"
      },
      {
        id: "d_wallets",
        type: "select",
        prompt: "Wallets:",
        options: ["Artisan Alex", "Craftsman Casey"],
        answer: "Artisan Alex"
      },
      {
        id: "e",
        type: "mcq",
        prompt: "e. If both specialize completely according to comparative advantage, what is the GAIN from specialization (increase in combined total output) compared to when they both split their week evenly in part (c)?",
        options: [
          "+35 belts and +0 wallets (total output becomes 120 belts and 80 wallets)",
          "+35 belts and +35 wallets",
          "+50 belts and +80 wallets",
          "+0 belts and +40 wallets"
        ],
        answer: 0
      }
    ],
    explanation: "• (a) Alex at 50/50 produces 50/2 = 25 belts and 80/2 = 40 wallets.\n• (b) Casey at 50/50 produces 120/2 = 60 belts and 80/2 = 40 wallets.\n• (c) Combined at 50/50: (25 + 60) = 85 belts and (40 + 40) = 80 wallets.\n• (d) Casey's cost of 1 belt is 80/120 = 0.67 wallets (vs Alex's 80/50 = 1.6 wallets), so Casey has the comparative advantage in belts and Alex in wallets.\n• (e) With complete specialization, Casey makes 120 belts and Alex makes 80 wallets. Compared to 85 belts and 80 wallets in part (c), total output gains +35 belts and +0 wallets!"
  },
  {
    id: "p3_q18",
    number: 18,
    points: 10,
    type: "composite",
    intro: "Evaluate the set of events below. Carefully distinguish between a shift of a curve (supply/demand) and a movement along a curve.",
    parts: [
      {
        id: "a",
        type: "inline_Cloze",
        prompt: "a. In examining the market for residential apartments, the local government imposes a sharp increase in property taxes on landlords who own rental buildings.",
        segments: [
          "The effect of the event will be ",
          { id: "a1", options: ["an increase", "a decrease"], answer: "a decrease" },
          " in ",
          { id: "a2", options: ["supply", "demand", "quantity supplied", "quantity demanded"], answer: "supply" },
          ". As a result, the equilibrium rent will ",
          { id: "a3", options: ["increase", "decrease"], answer: "increase" },
          " and the equilibrium quantity will ",
          { id: "a4", options: ["increase", "decrease"], answer: "decrease" },
          "."
        ]
      },
      {
        id: "b",
        type: "inline_Cloze",
        prompt: "b. In examining the market for streaming video subscriptions, providers double the price of complementary high-speed fiber internet packages.",
        segments: [
          "The effect of the event will be ",
          { id: "b1", options: ["an increase", "a decrease"], answer: "a decrease" },
          " in ",
          { id: "b2", options: ["supply", "demand", "quantity supplied", "quantity demanded"], answer: "demand" },
          ". As a result, the equilibrium price will ",
          { id: "b3", options: ["increase", "decrease"], answer: "decrease" },
          " and the equilibrium quantity will ",
          { id: "b4", options: ["increase", "decrease"], answer: "decrease" },
          "."
        ]
      },
      {
        id: "c",
        type: "inline_Cloze",
        prompt: "c. In examining the market for semiconductor chips, suppose a surge in AI server construction shifts the demand for chips to the right. How do chip producers respond along their existing supply curve?",
        segments: [
          "The rightward shift in demand causes ",
          { id: "c1", options: ["an increase", "a decrease"], answer: "an increase" },
          " in ",
          { id: "c2", options: ["supply", "demand", "quantity supplied", "quantity demanded"], answer: "quantity supplied" },
          ". As a result, the equilibrium price will ",
          { id: "c3", options: ["increase", "decrease"], answer: "increase" },
          " and the equilibrium quantity will ",
          { id: "c4", options: ["increase", "decrease"], answer: "increase" },
          "."
        ]
      }
    ],
    explanation: "• (a) Higher taxes on landlords increase the cost of supplying rental units, decreasing supply (leftward shift), which raises equilibrium rent and reduces equilibrium quantity.\n• (b) An increase in the price of a complement (high-speed internet) decreases the demand for streaming subscriptions (leftward shift), which lowers both equilibrium price and equilibrium quantity.\n• (c) When demand shifts to the right, the resulting higher price induces producers to move up ALONG their existing supply curve—which is an increase in quantity supplied (not a shift in supply!), leading to higher equilibrium price and higher equilibrium quantity."
  }
];
