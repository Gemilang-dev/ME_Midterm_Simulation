const PACK6 = [
  {
    id: "p6_q1",
    number: 1,
    points: 10,
    type: "composite",
    intro: "The regional market for solar battery packs is supplied by 10 identical small firms (Group A) and 5 identical large firms (Group B). At each price, the quantity supplied by ONE small firm and ONE large firm is shown in the table below. Fill in the Total Market Supply column for all 10 small firms and 5 large firms combined.",
    table: {
      title: "Individual Firm and Total Market Supply of Solar Battery Packs",
      headers: [
        [
          { text: "Price (hundreds of dollars)", rowspan: 2 },
          { text: "Quantity Supplied (battery packs)", colspan: 3 }
        ],
        [
          { text: "One Small Firm (×10 firms)" },
          { text: "One Large Firm (×5 firms)" },
          { text: "Market Total (10A + 5B)" }
        ]
      ],
      rows: [
        ["$25", "18", "44", { inputId: "r1", answer: 400 }],
        ["22", "14", "36", { inputId: "r2", answer: 320 }],
        ["19", "10", "28", { inputId: "r3", answer: 240 }],
        ["16", "6", "20", { inputId: "r4", answer: 160 }],
        ["13", "2", "12", { inputId: "r5", answer: 80 }],
        ["10", "0", "4", { inputId: "r6", answer: 20 }]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.\n\nFill in the \"Market Total (10A + 5B)\" column.",
    parts: [],
    explanation: "Because there are 10 identical small firms and 5 identical large firms, Market Total = 10 × (One Small Firm) + 5 × (One Large Firm):\n• At $25: 10(18) + 5(44) = 180 + 220 = 400\n• At $22: 10(14) + 5(36) = 140 + 180 = 320\n• At $19: 10(10) + 5(28) = 100 + 140 = 240\n• At $16: 10(6) + 5(20) = 60 + 100 = 160\n• At $13: 10(2) + 5(12) = 20 + 60 = 80\n• At $10: 10(0) + 5(4) = 0 + 20 = 20"
  },
  {
    id: "p6_q2",
    number: 2,
    points: 10,
    type: "composite",
    intro: "Use the following graph of the market for carbon-fiber bicycle frames to answer the questions below.",
    svgGraph: {
      type: "mb_mc",
      title: "",
      xLabel: "Quantity (thousands of frames)",
      yLabel: "Price (hundreds of dollars)",
      xTicks: [10, 20, 30, 40, 50],
      yTicks: ["6.00", "12.00", "18.00"],
      mbLine: { x1: 10, y1: 18.00, x2: 50, y2: 6.00 },
      mcLine: { x1: 20, y1: 6.00, x2: 40, y2: 18.00 },
      eqPoint: { x: 30, y: 12.00 },
      dashedPoints: [
        { x: 10, y: 18.00 },
        { x: 20, y: 6.00 },
        { x: 30, y: 12.00 },
        { x: 40, y: 18.00 },
        { x: 50, y: 6.00 }
      ]
    },
    parts: [
      {
        id: "a",
        type: "mcq",
        prompt: "a. Suppose a government production subsidy causes producers to expand output to 40 thousand frames. At 40 thousand frames:",
        options: [
          "marginal cost is $18.00 (hundred), marginal benefit is $9.00 (hundred), and too much is being produced.",
          "marginal cost is $18.00 (hundred), marginal benefit is $6.00 (hundred), and too much is being produced.",
          "marginal benefit exceeds marginal cost by $9.00 (hundred), so too little is being produced.",
          "economic surplus is higher than at 30 thousand frames."
        ],
        answer: 0
      },
      {
        id: "b",
        type: "number",
        prompt: "b. What is the deadweight loss (in thousands of hundreds of dollars, i.e., $100,000s) from overproducing at 40 thousand frames instead of the efficient 30 thousand frames?",
        answer: 45
      }
    ],
    explanation: "• The linear MB curve passes through (10, $18) and (30, $12), so its slope is -$0.30 per thousand frames: MB = 21 - 0.3Q. At Q = 40, MB = 21 - 0.3(40) = $9.00.\n• At Q = 40, MC = $18.00. Because MC ($18) > MB ($9), too much is produced.\n• (b) Deadweight Loss from overproduction between Q = 30 and Q = 40 is the area of the triangle: 0.5 × (40 - 30) × ($18 - $9) = 0.5 × 10 × 9 = 45."
  },
  {
    id: "p6_q3",
    number: 3,
    points: 10,
    type: "composite",
    intro: "The table below depicts the demand for commuter train passes in a metropolitan area.",
    table: {
      title: "Demand for Commuter Train Passes",
      headers: [
        [
          { text: "Price (dollars)" },
          { text: "Quantity (passes)" },
          { text: "Total Revenue (dollars)" }
        ]
      ],
      rows: [
        ["$160.00", "0", { inputId: "tr0", prefix: "$", answer: 0 }],
        ["140.00", "1,000", { inputId: "tr1", answer: 140000 }],
        ["120.00", "2,000", { inputId: "tr2", answer: 240000 }],
        ["100.00", "3,000", { inputId: "tr3", answer: 300000 }],
        ["80.00", "4,000", { inputId: "tr4", answer: 320000 }],
        ["60.00", "5,000", { inputId: "tr5", answer: 300000 }],
        ["40.00", "6,000", { inputId: "tr6", answer: 240000 }],
        ["20.00", "7,000", { inputId: "tr7", answer: 140000 }],
        ["0.00", "8,000", { inputId: "tr8", answer: 0 }]
      ]
    },
    instructions: "Instructions: Enter your answer as a whole number. If you are entering a negative number include a minus sign.\n\na. Fill in the total revenue column.",
    parts: [
      {
        id: "b",
        type: "number",
        prompt: "b. When the price decreases from $140.00 to $120.00, what is the change in total revenue?",
        prefix: "$",
        answer: 100000
      },
      {
        id: "c",
        type: "number",
        prompt: "c. When the price decreases from $100.00 to $60.00, what is the change in total revenue?",
        prefix: "$",
        answer: 0
      },
      {
        id: "d",
        type: "number",
        prompt: "d. When the price decreases from $40.00 to $20.00, what is the change in total revenue?",
        prefix: "$",
        answer: -100000
      },
      {
        id: "e",
        type: "mcq",
        prompt: "e. If the transit authority currently charges $60.00 per pass and wants to INCREASE its total revenue, it should:",
        options: [
          "lower the price to $40.00 because demand is elastic below $80.00.",
          "raise the price toward $80.00 because demand is inelastic in the $60.00 to $80.00 range.",
          "keep the price at $60.00 because total revenue is already maximized.",
          "lower the price to $20.00 to maximize ridership."
        ],
        answer: 1
      },
      {
        id: "f",
        type: "mcq",
        prompt: "f. Using the midpoint formula, what is the absolute price elasticity of demand between $40.00 and $20.00?",
        options: ["0.23", "4.33", "1.00", "0.60"],
        answer: 0
      },
      {
        id: "g",
        type: "mcq",
        prompt: "g. Total revenue is maximized at a price of",
        options: ["$100.00.", "$60.00.", "$80.00.", "$120.00."],
        answer: 2
      },
      {
        id: "h",
        type: "mcq",
        prompt: "h. At the revenue-maximizing price of $80.00, the marginal revenue from selling one more pass is approximately",
        options: ["$80.00.", "$160.00.", "$0 (where demand is unit-elastic).", "negative $40.00."],
        answer: 2
      }
    ],
    explanation: "• Total Revenue (TR) = P × Q.\n• (b) $240,000 - $140,000 = +$100,000.\n• (c) $300,000 - $300,000 = $0.\n• (d) $140,000 - $240,000 = -$100,000.\n• (e) At $60.00, demand is on the lower (inelastic) half of the demand curve. Raising the price from $60.00 to $80.00 increases TR from $300,000 to $320,000.\n• (f) Midpoint elasticity between ($40, 6000) and ($20, 7000):\n  %ΔQ = 1000 / 6500 = 2/13; |%ΔP| = 20 / 30 = 2/3; |Ed| = (2/13) / (2/3) = 3/13 ≈ 0.23 (inelastic).\n• (g) & (h) TR peaks at $320,000 at P = $80.00, where demand is unit-elastic and marginal revenue is zero."
  },
  {
    id: "p6_q4",
    number: 4,
    points: 10,
    type: "composite",
    intro: "",
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "Maria owns a small storefront and operates a boutique bakery. She pays $40,000 a year for ingredients and utilities. If she did not use the storefront for her bakery, she could rent the space out to a neighbor for $24,000 a year and work as a pastry chef at a hotel earning $50,000 a year. What is Maria's total economic cost (explicit plus implicit opportunity cost) of operating her bakery for one year?",
        options: [
          "$40,000",
          "$64,000",
          "$90,000",
          "$114,000"
        ],
        answer: 3
      }
    ],
    explanation: "Total Economic Cost = Explicit Costs ($40,000 for ingredients/utilities) + Implicit Opportunity Costs ($24,000 foregone rental income + $50,000 foregone salary) = $40,000 + $74,000 = $114,000."
  },
  {
    id: "p6_q5",
    number: 5,
    points: 10,
    type: "composite",
    intro: "The table below presents the monthly market for ergonomic office chairs. Suppose the government imposes a $90 per-chair excise tax on buyers.",
    table: {
      title: "Market for Ergonomic Office Chairs",
      headers: [
        [
          { text: "Price (dollars)" },
          { text: "Quantity Demanded" },
          { text: "Quantity Supplied" },
          { text: "Quantity Demanded with Excise Tax" }
        ]
      ],
      rows: [
        ["$450", "160", "520", "40"],
        ["420", "200", "440", "80"],
        ["390", "240", "360", "120"],
        ["360", "280", "280", "160"],
        ["330", "320", "200", "200"],
        ["300", "360", "120", "240"],
        ["270", "400", "40", "280"]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.",
    parts: [
      {
        id: "a_p",
        type: "number",
        prompt: "a. Before the excise tax is imposed, what are the equilibrium price and quantity?\n\nP =",
        prefix: "$",
        answer: 360
      },
      {
        id: "a_q",
        type: "number",
        prompt: "Q =",
        suffix: "chairs",
        answer: 280
      },
      {
        id: "b",
        type: "number",
        prompt: "b. Including the excise tax, what is the new equilibrium price consumers pay per chair?",
        prefix: "$",
        answer: 420
      },
      {
        id: "c",
        type: "number",
        prompt: "c. How much of the $90 per-unit tax burden is borne by consumers (per chair), and how much is borne by producers (per chair)?\n\nConsumer tax burden per chair =",
        prefix: "$",
        answer: 60
      },
      {
        id: "c_prod",
        type: "number",
        prompt: "Producer tax burden per chair =",
        prefix: "$",
        answer: 30
      },
      {
        id: "d",
        type: "number",
        prompt: "d. What is the total government tax revenue at the new equilibrium quantity of 200 chairs?",
        prefix: "$",
        answer: 18000
      }
    ],
    explanation: "• (a) Initial equilibrium where Qd = Qs: P = $360 and Q = 280 chairs.\n• (b) With the $90 tax, 'Quantity Demanded with Excise Tax' equals 'Quantity Supplied' at Q = 200 chairs, where the seller receives $330. Including the $90 tax, consumers pay $330 + $90 = $420.\n• (c) Tax incidence:\n  - Consumers pay $420 instead of $360 → Consumer burden = $420 - $360 = $60 per chair.\n  - Producers receive $330 instead of $360 → Producer burden = $360 - $330 = $30 per chair.\n• (d) Government tax revenue = $90 × 200 chairs = $18,000."
  },
  {
    id: "p6_q6",
    number: 6,
    points: 10,
    type: "composite",
    intro: "",
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "Analysts estimate that for ride-sharing trips, the price elasticity of demand is -1.5, the cross-price elasticity with respect to subway fares is +0.6, and the income elasticity of demand is +1.2. If subway fares rise by 10% and consumer incomes rise by 5% while ride-share prices remain constant, by what percentage will the quantity of ride-sharing trips demanded change?",
        options: [
          "Increase by 12%",
          "Increase by 6%",
          "Decrease by 9%",
          "Increase by 15%"
        ],
        answer: 0
      }
    ],
    explanation: "%ΔQ_rideshare = (E_cross × %ΔP_subway) + (E_income × %ΔIncome) = (0.6 × 10%) + (1.2 × 5%) = +6% + 6% = +12% (an increase of 12%)."
  },
  {
    id: "p6_q7",
    number: 7,
    points: 10,
    type: "composite",
    intro: "Liam buys bags of specialty roasted coffee each month. The table below describes his marginal benefit for each additional bag.",
    table: {
      title: "Liam's Marginal Benefit of Specialty Coffee",
      headers: [
        [
          { text: "Bags of Coffee" },
          { text: "Marginal Benefit (dollars)" }
        ]
      ],
      rows: [
        ["1", "$28"],
        ["2", "24"],
        ["3", "20"],
        ["4", "16"],
        ["5", "12"],
        ["6", "8"]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.",
    parts: [
      {
        id: "a",
        type: "number",
        prompt: "a. If the market price is $16 per bag, how many bags will Liam buy if he is rational?",
        suffix: "bag(s)",
        answer: 4
      },
      {
        id: "b",
        type: "number",
        prompt: "b. At a price of $16 per bag, what is Liam's total discrete Consumer Surplus across all the bags he purchases?",
        prefix: "$",
        answer: 24
      }
    ],
    explanation: "• (a) Liam buys bags as long as MB >= P ($16), so he buys 4 bags.\n• (b) His Total Benefit from 4 bags is $28 + $24 + $20 + $16 = $88. His total payment is 4 × $16 = $64. Therefore, his Total Consumer Surplus is $88 - $64 = ($12 + $8 + $4 + $0) = $24."
  },
  {
    id: "p6_q8",
    number: 8,
    points: 10,
    type: "composite",
    intro: "Use the following figure to answer the questions below.",
    svgGraph: {
      type: "ppf",
      title: "Islandia's Production Possibilities Frontier",
      xLabel: "Coconuts",
      yLabel: "Fish",
      yMax: 600,
      xMax: 200,
      midPoint: { x: 100, y: 300 }
    },
    parts: [
      {
        id: "a",
        type: "mcq",
        prompt: "a. Islandia's opportunity cost of 1 coconut is ________ fish; if a cyclone destroys fishing boats so that maximum fish output falls to 400 while maximum coconut output remains 200, the new opportunity cost of 1 coconut becomes ________ fish.",
        options: [
          "3; 2",
          "1/3; 1/2",
          "3; 4",
          "2; 3"
        ],
        answer: 0
      }
    ],
    explanation: "Initially, 200 coconuts cost 600 fish, so 1 coconut costs 600 / 200 = 3 fish. After maximum fish output drops to 400 while maximum coconut output stays at 200, 1 coconut costs 400 / 200 = 2 fish."
  },
  {
    id: "p6_q9",
    number: 9,
    points: 10,
    type: "composite",
    intro: "Chef Marco and Chef Lin prepare ravioli and tiramisu for a catering company. The table below compares their daily production possibilities schedules.",
    table: {
      title: "Production Possibilities Schedules",
      headers: [
        [
          { text: "Chef Marco", colspan: 2 },
          { text: "Chef Lin", colspan: 2 }
        ],
        [
          { text: "Ravioli" },
          { text: "Tiramisu" },
          { text: "Ravioli" },
          { text: "Tiramisu" }
        ]
      ],
      rows: [
        ["150", "0", "100", "0"],
        ["120", "10", "80", "16"],
        ["90", "20", "60", "32"],
        ["60", "30", "40", "48"],
        ["30", "40", "20", "64"],
        ["0", "50", "0", "80"]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.",
    parts: [
      {
        id: "a_rav",
        type: "select",
        prompt: "a. Marco and Lin agree to trade at a rate of 2 ravioli for 1 tiramisu. With those terms of trade, who will specialize in and supply ravioli? Who will specialize in and supply tiramisu?\n\nRavioli:",
        options: ["Chef Marco", "Chef Lin"],
        answer: "Chef Marco"
      },
      {
        id: "a_tir",
        type: "select",
        prompt: "Tiramisu:",
        options: ["Chef Marco", "Chef Lin"],
        answer: "Chef Lin"
      },
      {
        id: "b_lin_rav",
        type: "number",
        prompt: "b. The two chefs specialize completely and trade 70 ravioli for 35 tiramisu (a rate of 2 ravioli per tiramisu). How many ravioli and tiramisu will each chef have after trade?\n\nChef Lin (ravioli):",
        suffix: "ravioli",
        answer: 70
      },
      {
        id: "b_lin_tir",
        type: "number",
        prompt: "Chef Lin (tiramisu):",
        suffix: "tiramisu",
        answer: 45
      },
      {
        id: "b_mar_rav",
        type: "number",
        prompt: "Chef Marco (ravioli):",
        suffix: "ravioli",
        answer: 80
      },
      {
        id: "b_mar_tir",
        type: "number",
        prompt: "Chef Marco (tiramisu):",
        suffix: "tiramisu",
        answer: 35
      }
    ],
    explanation: "• Marco's cost of 1 tiramisu is 150/50 = 3 ravioli. Lin's cost of 1 tiramisu is 100/80 = 1.25 ravioli.\n• Thus, Marco specializes in ravioli (producing 150 ravioli, 0 tiramisu) and Lin specializes in tiramisu (producing 0 ravioli, 80 tiramisu).\n• After trading 70 ravioli for 35 tiramisu:\n  - Chef Lin has 0 + 70 = 70 ravioli and 80 - 35 = 45 tiramisu.\n  - Chef Marco has 150 - 70 = 80 ravioli and 0 + 35 = 35 tiramisu."
  },
  {
    id: "p6_q10",
    number: 10,
    points: 10,
    type: "composite",
    intro: "The market supply of lithium carbonate in a mining district is shown in the table below.",
    table: {
      title: "Supply of Lithium Carbonate",
      headers: [
        [
          { text: "Price (thousands of dollars per ton)", rowspan: 2 },
          { text: "Quantity Supplied (tons)", colspan: 2 }
        ],
        [
          { text: "Initial" },
          { text: "New (+35%)" }
        ]
      ],
      rows: [
        ["$20", "1,200", { inputId: "n1", answer: 1620 }],
        ["16", "1,000", { inputId: "n2", answer: 1350 }],
        ["12", "800", { inputId: "n3", answer: 1080 }],
        ["8", "600", { inputId: "n4", answer: 810 }]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.\n\na. Suppose a new direct-lithium-extraction (DLE) process increases lithium output by 35% at every price. Complete the new supply schedule in the table above.",
    parts: [
      {
        id: "b_orig",
        type: "number",
        prompt: "b. At a price of $16 thousand per ton, the increase in quantity supplied (New minus Initial) is",
        suffix: "tons.",
        answer: 350
      }
    ],
    explanation: "A 35% increase multiplies each initial quantity by 1.35:\n• At $20: 1,200 × 1.35 = 1,620\n• At $16: 1,000 × 1.35 = 1,350 (an increase of 1,350 - 1,000 = 350 tons)\n• At $12: 800 × 1.35 = 1,080\n• At $8: 600 × 1.35 = 810"
  },
  {
    id: "p6_q11",
    number: 11,
    points: 10,
    type: "interactive_graph",
    intro: "Refer to the figure.",
    graphConfig: {
      title: "Market for Pistachios",
      toolName: "Producer Surplus, PS",
      shortLabel: "PS",
      xLabel: "Quantity (thousands of pounds)",
      yLabel: "Price",
      xMax: 250,
      xStep: 50,
      yMax: 10,
      yStep: 1,
      demand: [{ x: 0, y: 10 }, { x: 150, y: 4 }, { x: 250, y: 0 }],
      supply: [{ x: 0, y: 1 }, { x: 150, y: 4 }, { x: 250, y: 6 }],
      eq: { x: 150, y: 4 },
      snapPoints: [
        { x: 0, y: 10 }, { x: 0, y: 4 }, { x: 0, y: 1 }, { x: 0, y: 0 },
        { x: 150, y: 4 }, { x: 150, y: 0 }, { x: 50, y: 8 }, { x: 50, y: 2 },
        { x: 100, y: 6 }, { x: 100, y: 3 }, { x: 250, y: 0 }, { x: 250, y: 6 }
      ],
      targetTriangle: [
        { x: 0, y: 4 },
        { x: 0, y: 1 },
        { x: 150, y: 4 }
      ]
    },
    story: "The graph represents the market for pistachios (in thousands of pounds per week). Suppose the equilibrium price is $4 per pound and the equilibrium quantity is 150 thousand pounds.\n\nUsing the graph, illustrate the area representing PRODUCER SURPLUS (Supplier Surplus) in this market, and calculate both the Producer Surplus and Consumer Surplus generated each week.",
    instructions: "Instructions: Use the tool provided \"Producer Surplus, PS\" to illustrate the Producer Surplus area on the graph (click 3 vertices on the graph to form the Producer Surplus triangle).",
    parts: [
      {
        id: "ps_val",
        type: "number",
        prompt: "Producer surplus (in thousands of dollars):",
        prefix: "$",
        suffix: "thousand",
        answer: 225
      },
      {
        id: "cs_val",
        type: "number",
        prompt: "Consumer surplus (in thousands of dollars):",
        prefix: "$",
        suffix: "thousand",
        answer: 450
      }
    ],
    explanation: "• Graphical Area: Producer Surplus (PS) is the triangle below the equilibrium price line ($4) and above the supply curve (which starts at (0, $1)) up to Q = 150. Its three vertices are (0, $4), (0, $1), and (150, $4).\n• Calculation:\n  - Producer Surplus (PS) = 0.5 × 150 × ($4 - $1) = 0.5 × 150 × $3 = $225 thousand.\n  - Consumer Surplus (CS) = 0.5 × 150 × ($10 - $4) = 0.5 × 150 × $6 = $450 thousand."
  },
  {
    id: "p6_q12",
    number: 12,
    points: 10,
    type: "interactive_graph",
    intro: "Refer to the figure.",
    graphConfig: {
      title: "Market for Pistachios",
      toolName: "Economic Surplus, ES",
      shortLabel: "ES",
      xLabel: "Quantity (thousands of pounds)",
      yLabel: "Price",
      xMax: 250,
      xStep: 50,
      yMax: 10,
      yStep: 1,
      demand: [{ x: 0, y: 10 }, { x: 150, y: 4 }, { x: 250, y: 0 }],
      supply: [{ x: 0, y: 1 }, { x: 150, y: 4 }, { x: 250, y: 6 }],
      eq: { x: 150, y: 4 },
      snapPoints: [
        { x: 0, y: 10 }, { x: 0, y: 4 }, { x: 0, y: 1 }, { x: 0, y: 0 },
        { x: 150, y: 4 }, { x: 150, y: 0 }, { x: 50, y: 8 }, { x: 50, y: 2 },
        { x: 100, y: 6 }, { x: 100, y: 3 }, { x: 250, y: 0 }, { x: 250, y: 6 }
      ],
      targetTriangle: [
        { x: 0, y: 10 },
        { x: 0, y: 1 },
        { x: 150, y: 4 }
      ]
    },
    story: "Consider the same market for pistachios where the equilibrium price is $4 per pound and the equilibrium quantity is 150 thousand pounds.\n\nFirst, use the graph tool to illustrate the total ECONOMIC SURPLUS (CS + PS) at the competitive equilibrium. Second, calculate the total economic surplus and the deadweight loss if an effective price ceiling of $2 per pound restricted quantity supplied to 50 thousand pounds (where demand willingness-to-pay is $8).",
    instructions: "Instructions: Use the tool provided \"Economic Surplus, ES\" to illustrate the competitive Economic Surplus area on the graph (click 3 vertices).",
    parts: [
      {
        id: "es_val",
        type: "number",
        prompt: "Competitive Economic Surplus at Q = 150 (in thousands of dollars):",
        prefix: "$",
        suffix: "thousand",
        answer: 675
      },
      {
        id: "dwl_val",
        type: "number",
        prompt: "Deadweight Loss if a price ceiling of $2 restricts output to Q = 50 (in thousands of dollars):",
        prefix: "$",
        suffix: "thousand",
        answer: 300
      }
    ],
    explanation: "• Graphical Area: Competitive Economic Surplus (ES = CS + PS) is the large triangle with vertices at (0, $10), (0, $1), and (150, $4).\n• Calculation:\n  - Competitive ES = 0.5 × 150 × ($10 - $1) = 0.5 × 150 × $9 = $675 thousand (which equals $450 CS + $225 PS).\n  - If a price ceiling of $2 restricts quantity supplied to Q = 50 (where MB = $8 and MC = $2), the Deadweight Loss between Q = 50 and Q = 150 is 0.5 × (150 - 50) × ($8 - $2) = 0.5 × 100 × $6 = $300 thousand."
  },
  {
    id: "p6_q13",
    number: 13,
    points: 10,
    type: "composite",
    intro: "An e-commerce warehouse hires overnight packing robots. The table below shows the Marginal Benefit and Marginal Cost for each robot hired per shift.",
    table: {
      title: "Marginal Benefit and Marginal Cost of Packing Robots",
      headers: [
        [
          { text: "Robots Hired" },
          { text: "Marginal Benefit (dollars)" },
          { text: "Marginal Cost (dollars)" }
        ]
      ],
      rows: [
        ["1", "$320", "$80"],
        ["2", "280", "120"],
        ["3", "240", "160"],
        ["4", "200", "200"],
        ["5", "160", "240"],
        ["6", "120", "280"],
        ["7", "80", "320"]
      ]
    },
    parts: [
      {
        id: "a",
        type: "mcq",
        prompt: "a. What is the optimal number of robots to hire, and what is the maximum Total Net Benefit (Total Benefit minus Total Cost) at that optimal choice?",
        options: [
          "4 robots; Total Net Benefit is $480",
          "4 robots; Total Net Benefit is $200",
          "3 robots; Total Net Benefit is $400",
          "5 robots; Total Net Benefit is $400"
        ],
        answer: 0
      },
      {
        id: "b",
        type: "mcq",
        prompt: "b. If the warehouse currently hires 2 robots, increasing to 4 robots will:",
        options: [
          "increase Total Net Benefit by $80 (since the 3rd robot adds $80 net and the 4th adds $0 net).",
          "increase Total Net Benefit by $440.",
          "decrease Total Net Benefit by $80.",
          "leave Total Net Benefit unchanged."
        ],
        answer: 0
      },
      {
        id: "c",
        type: "mcq",
        prompt: "c. If the warehouse were to hire 6 robots instead of 4 robots, Total Net Benefit would:",
        options: [
          "decrease by $240 (since the 5th robot loses $80 net and the 6th robot loses $160 net).",
          "decrease by $160.",
          "increase by $280.",
          "equal zero."
        ],
        answer: 0
      }
    ],
    explanation: "• Net benefit added by each robot (MB - MC):\n  - 1st: $320 - $80 = +$240\n  - 2nd: $280 - $120 = +$160\n  - 3rd: $240 - $160 = +$80\n  - 4th: $200 - $200 = $0 (Optimal: Total Net Benefit = $240 + $160 + $80 + $0 = $480)\n  - 5th: $160 - $240 = -$80\n  - 6th: $120 - $280 = -$160 (Hiring 5th and 6th reduces net benefit by $80 + $160 = $240)."
  },
  {
    id: "p6_q14",
    number: 14,
    points: 10,
    type: "composite",
    intro: "Maya and Leo both write code modules and design UI screens. The table below compares their weekly production possibilities schedules.",
    table: {
      title: "Production Possibilities Schedules",
      headers: [
        [
          { text: "Maya", colspan: 2 },
          { text: "Leo", colspan: 2 }
        ],
        [
          { text: "Code Modules" },
          { text: "UI Screens" },
          { text: "Code Modules" },
          { text: "UI Screens" }
        ]
      ],
      rows: [
        ["16", "0", "36", "0"],
        ["8", "20", "18", "15"],
        ["0", "40", "0", "30"]
      ]
    },
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "Which of the following proposed terms of trade would be mutually beneficial for BOTH Maya and Leo?",
        options: [
          "1 code module for 1.5 UI screens",
          "1 code module for 0.5 UI screens",
          "1 code module for 3 UI screens",
          "1 code module for 4 UI screens"
        ],
        answer: 0
      }
    ],
    explanation: "Calculate each person's opportunity cost of 1 code module:\n• Maya: 16 code modules = 40 UI screens → 1 code module costs 40 / 16 = 2.5 UI screens.\n• Leo: 36 code modules = 30 UI screens → 1 code module costs 30 / 36 = 0.833 (5/6) UI screens.\nAny mutually beneficial trade must lie strictly between 0.833 and 2.5 UI screens per code module. Among the choices, only 1.5 UI screens per code module falls inside this range."
  },
  {
    id: "p6_q15",
    number: 15,
    points: 10,
    type: "composite",
    intro: "Identify which of the following scenarios is likely to shift the SUPPLY curve for new residential houses to the RIGHT.",
    instructions: "Instructions: You may select more than one answer. Click the box with a check mark for the correct answers.",
    parts: [
      {
        id: "main",
        type: "checkbox",
        prompt: "Select all that apply:",
        options: [
          "The price of framing lumber, concrete, and copper piping falls by 25%.",
          "Prefabricated 3D modular construction technology allows builders to erect houses in half the time.",
          "Lower mortgage interest rates cause more families to apply for home loans.",
          "The federal government grants a $15,000 tax credit per house directly to home builders."
        ],
        answers: [0, 1, 3]
      }
    ],
    explanation: "• Lower input prices (lumber, concrete, copper) reduce construction costs, shifting Supply to the right.\n• Faster modular construction technology increases productivity, shifting Supply to the right.\n• Lower mortgage interest rates for homebuyers shift the DEMAND curve for houses to the right, not the supply curve.\n• A tax credit/subsidy to home builders shifts Supply to the right."
  },
  {
    id: "p6_q16",
    number: 16,
    points: 10,
    type: "composite",
    intro: "",
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "In the market for copper, a global manufacturing boom causes a large increase in the demand for copper. At the same time, a miners' strike causes a exactly equal-sized decrease in the supply of copper. Because the rightward shift in demand and the leftward shift in supply are of equal magnitude, one should expect:",
        options: [
          "the equilibrium price of copper to rise substantially, while the equilibrium quantity remains unchanged.",
          "the equilibrium price of copper to remain unchanged, while the equilibrium quantity rises substantially.",
          "both the equilibrium price and the equilibrium quantity of copper to fall.",
          "the equilibrium price of copper to fall substantially, while the equilibrium quantity remains unchanged."
        ],
        answer: 0
      }
    ],
    explanation: "• Demand shifts right (P↑, Q↑) and Supply shifts left (P↑, Q↓).\n• Both shifts push the equilibrium price UP, so equilibrium price rises substantially.\n• Because the rightward demand shift and leftward supply shift have the exact same magnitude, the increase in Q from demand exactly cancels the decrease in Q from supply, leaving equilibrium quantity unchanged."
  },
  {
    id: "p6_q17",
    number: 17,
    points: 10,
    type: "composite",
    intro: "Baker Ben and Pastry chef Priya spend their week baking baguettes and tarts. The table below shows their weekly production possibilities schedules.",
    table: {
      title: "Production Possibilities Schedules",
      headers: [
        [
          { text: "Baker Ben", colspan: 2 },
          { text: "Chef Priya", colspan: 2 }
        ],
        [
          { text: "Baguettes" },
          { text: "Tarts" },
          { text: "Baguettes" },
          { text: "Tarts" }
        ]
      ],
      rows: [
        ["70", "0", "110", "0"],
        ["56", "18", "88", "14"],
        ["42", "36", "66", "28"],
        ["28", "54", "44", "42"],
        ["14", "72", "22", "56"],
        ["0", "90", "0", "70"]
      ]
    },
    parts: [
      {
        id: "a",
        type: "mcq",
        prompt: "a. If Baker Ben splits his week evenly between baguettes and tarts, what is the maximum number of baguettes and tarts he can produce?",
        options: [
          "70 baguettes and 90 tarts",
          "35 baguettes and 45 tarts",
          "45 baguettes and 35 tarts",
          "42 baguettes and 36 tarts"
        ],
        answer: 1
      },
      {
        id: "b",
        type: "mcq",
        prompt: "b. If Chef Priya splits her week evenly between baguettes and tarts, what is the maximum number of baguettes and tarts she can produce?",
        options: [
          "55 baguettes and 35 tarts",
          "35 baguettes and 55 tarts",
          "110 baguettes and 70 tarts",
          "44 baguettes and 42 tarts"
        ],
        answer: 0
      },
      {
        id: "c",
        type: "mcq",
        prompt: "c. Combined, how many baguettes and tarts could Baker Ben and Chef Priya produce if each split their week evenly?",
        options: [
          "80 baguettes and 90 tarts",
          "90 baguettes and 80 tarts",
          "180 baguettes and 160 tarts",
          "110 baguettes and 90 tarts"
        ],
        answer: 1
      },
      {
        id: "d_bag",
        type: "select",
        prompt: "d. Who has the comparative advantage in baking baguettes? In baking tarts?\n\nBaguettes:",
        options: ["Baker Ben", "Chef Priya"],
        answer: "Chef Priya"
      },
      {
        id: "d_tar",
        type: "select",
        prompt: "Tarts:",
        options: ["Baker Ben", "Chef Priya"],
        answer: "Baker Ben"
      },
      {
        id: "e",
        type: "mcq",
        prompt: "e. If both specialize completely according to comparative advantage, how many baguettes and tarts do they produce together, and what is the gain over their 50/50 split?",
        options: [
          "110 baguettes and 90 tarts (a gain of +20 baguettes and +10 tarts)",
          "70 baguettes and 70 tarts (a loss of 20 baguettes and 10 tarts)",
          "110 baguettes and 70 tarts (a gain of +20 baguettes and -10 tarts)",
          "180 baguettes and 160 tarts"
        ],
        answer: 0
      }
    ],
    explanation: "• (a) Ben at 50/50 produces 70/2 = 35 baguettes and 90/2 = 45 tarts.\n• (b) Priya at 50/50 produces 110/2 = 55 baguettes and 70/2 = 35 tarts.\n• (c) Combined at 50/50: (35 + 55) = 90 baguettes and (45 + 35) = 80 tarts.\n• (d) Priya's cost of 1 baguette is 70/110 = 0.64 tarts (vs Ben's 90/70 = 1.29 tarts), so Chef Priya has the comparative advantage in baguettes and Baker Ben in tarts.\n• (e) With complete specialization, Priya produces 110 baguettes and Ben produces 90 tarts—a gain of +20 baguettes (110 - 90) and +10 tarts (90 - 80) compared to the 50/50 split!"
  },
  {
    id: "p6_q18",
    number: 18,
    points: 10,
    type: "composite",
    intro: "Evaluate the set of events below. Determine how the events will impact their respective markets.",
    parts: [
      {
        id: "a",
        type: "inline_Cloze",
        prompt: "a. In examining the market for dark chocolate bars, a severe fungal disease destroys 40% of West African cacao trees.",
        segments: [
          "The effect of the event will be ",
          { id: "a1", options: ["an increase", "a decrease"], answer: "a decrease" },
          " in ",
          { id: "a2", options: ["supply", "demand", "quantity supplied", "quantity demanded"], answer: "supply" },
          ". As a result, the equilibrium price will ",
          { id: "a3", options: ["increase", "decrease"], answer: "increase" },
          " and the equilibrium quantity will ",
          { id: "a4", options: ["increase", "decrease"], answer: "decrease" },
          "."
        ]
      },
      {
        id: "b",
        type: "inline_Cloze",
        prompt: "b. In examining the market for luxury Swiss watches, a booming stock market significantly increases the wealth and disposable income of high-earning consumers.",
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
        prompt: "c. In examining the market for gasoline, suppose an increase in crude oil supply shifts the gasoline supply curve to the right, lowering the price of gasoline. How do drivers respond along their existing gasoline demand curve?",
        segments: [
          "The lower price of gasoline causes ",
          { id: "c1", options: ["an increase", "a decrease"], answer: "an increase" },
          " in ",
          { id: "c2", options: ["supply", "demand", "quantity supplied", "quantity demanded"], answer: "quantity demanded" },
          ". As a result, the new equilibrium price is ",
          { id: "c3", options: ["higher", "lower"], answer: "lower" },
          " and the new equilibrium quantity is ",
          { id: "c4", options: ["higher", "lower"], answer: "higher" },
          "."
        ]
      }
    ],
    explanation: "• (a) Cacao tree destruction raises the cost of raw cacao, decreasing the supply of dark chocolate (leftward shift), raising equilibrium price and lowering equilibrium quantity.\n• (b) Higher wealth/income increases the demand for normal/luxury goods (rightward shift), raising both equilibrium price and equilibrium quantity.\n• (c) When supply shifts right and lowers the equilibrium price, consumers move down ALONG their existing demand curve—which is an increase in quantity demanded (not a shift in demand)."
  }
];
