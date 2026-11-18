const PACK4 = [
  {
    id: "p4_q1",
    number: 1,
    points: 10,
    type: "composite",
    intro: "The table below shows the quantity of gourmet pizzas supplied per day by two pizzerias, Luigi's Brick Oven and Napoli Crust.",
    table: {
      title: "Individual and Market Supply of Gourmet Pizzas",
      headers: [
        [
          { text: "Price (dollars)", rowspan: 2 },
          { text: "Quantity of Gourmet Pizzas Supplied", colspan: 3 }
        ],
        [
          { text: "Luigi's Brick Oven" },
          { text: "Napoli Crust" },
          { text: "Market Total" }
        ]
      ],
      rows: [
        ["$24", "160", "240", { inputId: "r1", answer: 400 }],
        ["20", "130", "190", { inputId: "r2", answer: 320 }],
        ["16", "100", "140", { inputId: "r3", answer: 240 }],
        ["12", "70", "90", { inputId: "r4", answer: 160 }],
        ["8", "40", "40", { inputId: "r5", answer: 80 }],
        ["4", "0", "0", { inputId: "r6", answer: 0 }]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.\n\nFill in the \"Market Total\" column.",
    parts: [],
    explanation: "Market supply at each price is the horizontal sum of the quantities supplied by Luigi's Brick Oven and Napoli Crust:\n• At $24: 160 + 240 = 400\n• At $20: 130 + 190 = 320\n• At $16: 100 + 140 = 240\n• At $12: 70 + 90 = 160\n• At $8: 40 + 40 = 80\n• At $4: 0 + 0 = 0"
  },
  {
    id: "p4_q2",
    number: 2,
    points: 10,
    type: "composite",
    intro: "Use the following graph of the market for organic honey to answer the question below.",
    svgGraph: {
      type: "mb_mc",
      title: "",
      xLabel: "Quantity (thousands of jars)",
      yLabel: "Price (dollars per jar)",
      xTicks: [20, 30, 40, 50, 60],
      yTicks: ["4.00", "8.00", "12.00"],
      mbLine: { x1: 20, y1: 12.00, x2: 60, y2: 4.00 },
      mcLine: { x1: 30, y1: 4.00, x2: 50, y2: 12.00 },
      eqPoint: { x: 40, y: 8.00 },
      dashedPoints: [
        { x: 20, y: 12.00 },
        { x: 30, y: 4.00 },
        { x: 40, y: 8.00 },
        { x: 50, y: 12.00 },
        { x: 60, y: 4.00 }
      ]
    },
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "If 50 thousand jars of organic honey are being produced, then we know",
        options: [
          "marginal benefit is $12.00.",
          "too little honey is being produced.",
          "too much honey is being produced because marginal cost ($12.00) exceeds marginal benefit ($6.00).",
          "the market is achieving maximum economic surplus."
        ],
        answer: 2
      }
    ],
    explanation: "Allocative efficiency occurs at Q = 40 thousand jars where MB = MC = $8.00. At Q = 50 thousand jars, Marginal Cost ($12.00) exceeds Marginal Benefit ($6.00), meaning too much honey is being produced."
  },
  {
    id: "p4_q3",
    number: 3,
    points: 10,
    type: "composite",
    intro: "The table below depicts the demand for kayak rentals at Lake Tahoe.",
    table: {
      title: "Demand for Kayak Rentals",
      headers: [
        [
          { text: "Price (dollars)" },
          { text: "Quantity (rentals)" },
          { text: "Total Revenue (dollars)" }
        ]
      ],
      rows: [
        ["$80.00", "0", { inputId: "tr0", prefix: "$", answer: 0 }],
        ["70.00", "100", { inputId: "tr1", answer: 7000 }],
        ["60.00", "200", { inputId: "tr2", answer: 12000 }],
        ["50.00", "300", { inputId: "tr3", answer: 15000 }],
        ["40.00", "400", { inputId: "tr4", answer: 16000 }],
        ["30.00", "500", { inputId: "tr5", answer: 15000 }],
        ["20.00", "600", { inputId: "tr6", answer: 12000 }],
        ["10.00", "700", { inputId: "tr7", answer: 7000 }],
        ["0.00", "800", { inputId: "tr8", answer: 0 }]
      ]
    },
    instructions: "Instructions: Enter your answer as a whole number. If you are entering a negative number include a minus sign.\n\na. Fill in the total revenue column.",
    parts: [
      {
        id: "b",
        type: "number",
        prompt: "b. When the rental price decreases from $70.00 to $60.00, what is the change in total revenue?",
        prefix: "$",
        answer: 5000
      },
      {
        id: "c",
        type: "number",
        prompt: "c. When the rental price decreases from $50.00 to $30.00, what is the change in total revenue?",
        prefix: "$",
        answer: 0
      },
      {
        id: "d",
        type: "number",
        prompt: "d. When the rental price decreases from $20.00 to $10.00, what is the change in total revenue?",
        prefix: "$",
        answer: -5000
      },
      {
        id: "e",
        type: "mcq",
        prompt: "e. When the price of kayak rentals is in the range of $70.00 to $60.00, demand is",
        options: ["inelastic.", "unit-elastic.", "perfectly elastic.", "elastic."],
        answer: 3
      },
      {
        id: "f",
        type: "mcq",
        prompt: "f. When the price of kayak rentals is in the range of $20.00 to $10.00, demand is",
        options: ["unit-elastic.", "inelastic.", "elastic.", "perfectly elastic."],
        answer: 1
      },
      {
        id: "g",
        type: "mcq",
        prompt: "g. Total revenue for kayak rentals is maximized at a price of",
        options: ["$50.00.", "$30.00.", "$40.00.", "$60.00."],
        answer: 2
      },
      {
        id: "h",
        type: "mcq",
        prompt: "h. When total revenue for kayak rentals is maximized, demand is",
        options: ["perfectly elastic.", "inelastic.", "unit-elastic.", "elastic."],
        answer: 2
      }
    ],
    explanation: "• Total Revenue (TR) = Price × Quantity.\n• (b) From $70 to $60: TR rises from $7,000 to $12,000 (+$5,000).\n• (c) From $50 to $30: TR stays at $15,000 ($0 change).\n• (d) From $20 to $10: TR falls from $12,000 to $7,000 (-$5,000).\n• (e) Since a price decrease from $70 to $60 increases TR, demand is elastic.\n• (f) Since a price decrease from $20 to $10 reduces TR, demand is inelastic.\n• (g) & (h) TR is maximized at $16,000 when P = $40.00, where demand is unit-elastic."
  },
  {
    id: "p4_q4",
    number: 4,
    points: 10,
    type: "composite",
    intro: "",
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "In economics, the phrase 'there is no such thing as a free lunch' illustrates the fundamental concept that",
        options: [
          "restaurants always charge hidden fees for food.",
          "Because resources are scarce, every choice involves an opportunity cost—someone must give up the next-best alternative.",
          "government programs never benefit consumers.",
          "financial costs are always equal to economic costs."
        ],
        answer: 1
      }
    ],
    explanation: "Because productive resources (time, labor, capital, land) are scarce, using them to produce one good (even if given away for 'free' to the recipient) requires sacrificing the next-best alternative use of those resources (opportunity cost)."
  },
  {
    id: "p4_q5",
    number: 5,
    points: 10,
    type: "composite",
    intro: "The table below presents the monthly market for smartwatches in Austin, Texas. Suppose the state government imposes a $60 excise tax on every smartwatch sold to be paid by customers at the point of sale.",
    table: {
      title: "Market for Smartwatches",
      headers: [
        [
          { text: "Price (dollars)" },
          { text: "Quantity Demanded" },
          { text: "Quantity Supplied" },
          { text: "Quantity Demanded with Excise Tax" }
        ]
      ],
      rows: [
        ["$360", "200", "600", "100"],
        ["330", "250", "550", "150"],
        ["300", "300", "500", "200"],
        ["270", "350", "450", "250"],
        ["240", "400", "400", "300"],
        ["210", "450", "350", "350"],
        ["180", "500", "300", "400"],
        ["150", "550", "250", "450"]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.",
    parts: [
      {
        id: "a_p",
        type: "number",
        prompt: "a. Before the excise tax is imposed, what are the equilibrium price and quantity of smartwatches?\n\nP =",
        prefix: "$",
        answer: 240
      },
      {
        id: "a_q",
        type: "number",
        prompt: "Q =",
        suffix: "smartwatches",
        answer: 400
      },
      {
        id: "b",
        type: "number",
        prompt: "b. Including the excise tax, what is the new equilibrium price consumers pay for smartwatches after the tax is imposed?",
        prefix: "$",
        answer: 270
      },
      {
        id: "c",
        type: "number",
        prompt: "c. After the excise tax is imposed, what is the new equilibrium quantity of smartwatches?",
        suffix: "smartwatches",
        answer: 350
      },
      {
        id: "d",
        type: "number",
        prompt: "d. What is the total amount of revenue collected by the government from the excise tax?",
        prefix: "$",
        answer: 21000
      }
    ],
    explanation: "• (a) Initial equilibrium where Qd = Qs: P = $240 and Q = 400 smartwatches.\n• (b) & (c) After the $60 tax on buyers, 'Quantity Demanded with Excise Tax' equals 'Quantity Supplied' at Q = 350 smartwatches, where the price received by sellers is $210. Including the $60 tax paid at checkout, consumers pay $210 + $60 = $270.\n• (d) Government tax revenue = $60 × 350 = $21,000."
  },
  {
    id: "p4_q6",
    number: 6,
    points: 10,
    type: "composite",
    intro: "",
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "After graduation, Nadia gets a promotion that doubles her annual salary. As a result, she stops buying canned instant soup and buys fresh organic soup instead. From this information, an economist would conclude that for Nadia:",
        options: [
          "canned instant soup is an inferior good, and fresh organic soup is a normal good.",
          "canned instant soup is a normal good, and fresh organic soup is an inferior good.",
          "canned instant soup and fresh organic soup are complements.",
          "the law of demand does not apply to canned instant soup."
        ],
        answer: 0
      }
    ],
    explanation: "An inferior good is a good for which demand decreases when income rises (canned instant soup), whereas a normal good is a good for which demand increases when income rises (fresh organic soup)."
  },
  {
    id: "p4_q7",
    number: 7,
    points: 10,
    type: "composite",
    intro: "Julian enjoys attending live jazz concerts and can afford up to six tickets this season. The table below describes the marginal benefit Julian gets for each additional concert ticket.",
    table: {
      title: "Julian's Marginal Benefit of Jazz Concert Tickets",
      headers: [
        [
          { text: "Concert Tickets" },
          { text: "Marginal Benefit (dollars)" }
        ]
      ],
      rows: [
        ["1", "$75"],
        ["2", "65"],
        ["3", "55"],
        ["4", "45"],
        ["5", "35"],
        ["6", "25"]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.",
    parts: [
      {
        id: "a",
        type: "number",
        prompt: "a. If the price of a concert ticket is $45, how many tickets would Julian buy if he is rational?",
        suffix: "ticket(s)",
        answer: 4
      },
      {
        id: "b",
        type: "number",
        prompt: "b. If the price of a concert ticket fell to $25, how many tickets would Julian buy if he is rational?",
        suffix: "ticket(s)",
        answer: 6
      }
    ],
    explanation: "A rational consumer purchases units up to the point where Marginal Benefit equals Price (MB = P):\n• (a) At P = $45, Julian buys 4 tickets (MB of 4th ticket = $45).\n• (b) At P = $25, Julian buys 6 tickets (MB of 6th ticket = $25)."
  },
  {
    id: "p4_q8",
    number: 8,
    points: 10,
    type: "composite",
    intro: "Use the following figure to answer the question below.",
    svgGraph: {
      type: "ppf",
      title: "Maya's Production Possibilities Frontier",
      xLabel: "Silk Scarves",
      yLabel: "Wool Sweaters",
      yMax: 180,
      xMax: 90,
      midPoint: { x: 45, y: 90 }
    },
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "Maya's opportunity cost of producing 1 silk scarf is ________ wool sweater(s).",
        options: ["1/2", "2", "3", "45"],
        answer: 1
      }
    ],
    explanation: "To produce 90 silk scarves, Maya must give up 180 wool sweaters. Thus, the opportunity cost of 1 silk scarf is 180 / 90 = 2 wool sweaters."
  },
  {
    id: "p4_q9",
    number: 9,
    points: 10,
    type: "composite",
    intro: "Both Hannah and Oliver run small furniture workshops. They decide to trade wooden stools and bookshelves. The table below compares their production possibilities schedules.",
    table: {
      title: "Production Possibilities Schedules",
      headers: [
        [
          { text: "Hannah", colspan: 2 },
          { text: "Oliver", colspan: 2 }
        ],
        [
          { text: "Stools" },
          { text: "Bookshelves" },
          { text: "Stools" },
          { text: "Bookshelves" }
        ]
      ],
      rows: [
        ["80", "0", "50", "0"],
        ["64", "8", "40", "8"],
        ["48", "16", "30", "16"],
        ["32", "24", "20", "24"],
        ["16", "32", "10", "32"],
        ["0", "40", "0", "40"]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.",
    parts: [
      {
        id: "a_sto",
        type: "select",
        prompt: "a. Hannah and Oliver agree to trade at a rate of 1.5 stools for 1 bookshelf. With those terms of trade, who is most likely to be the supplier of stools? Who is most likely to be the supplier of bookshelves?\n\nStools:",
        options: ["Hannah", "Oliver"],
        answer: "Hannah"
      },
      {
        id: "a_boo",
        type: "select",
        prompt: "Bookshelves:",
        options: ["Hannah", "Oliver"],
        answer: "Oliver"
      },
      {
        id: "b_oli_sto",
        type: "number",
        prompt: "b. The two workshop owners specialize completely and agree to trade 30 stools for 20 bookshelves. How many stools and bookshelves will each one have after they complete their trade?\n\nOliver (stools):",
        suffix: "stools",
        answer: 30
      },
      {
        id: "b_oli_boo",
        type: "number",
        prompt: "Oliver (bookshelves):",
        suffix: "bookshelves",
        answer: 20
      },
      {
        id: "b_han_sto",
        type: "number",
        prompt: "Hannah (stools):",
        suffix: "stools",
        answer: 50
      },
      {
        id: "b_han_boo",
        type: "number",
        prompt: "Hannah (bookshelves):",
        suffix: "bookshelves",
        answer: 20
      }
    ],
    explanation: "• Hannah's opportunity cost of 1 bookshelf is 80/40 = 2 stools (or 1 stool costs 0.5 bookshelves). Oliver's opportunity cost of 1 bookshelf is 50/40 = 1.25 stools (or 1 stool costs 0.8 bookshelves).\n• Thus, Hannah specializes in stools (producing 80 stools, 0 bookshelves) and Oliver specializes in bookshelves (producing 0 stools, 40 bookshelves).\n• After trading 30 stools for 20 bookshelves:\n  - Oliver has 0 + 30 = 30 stools and 40 - 20 = 20 bookshelves.\n  - Hannah has 80 - 30 = 50 stools and 0 + 20 = 20 bookshelves."
  },
  {
    id: "p4_q10",
    number: 10,
    points: 10,
    type: "composite",
    intro: "The market supply of sweet corn in a farming county is shown in the table below.",
    table: {
      title: "Supply of Sweet Corn",
      headers: [
        [
          { text: "Price (dollars per bushel)", rowspan: 2 },
          { text: "Quantity of Corn Supplied (bushels)", colspan: 2 }
        ],
        [
          { text: "Initial" },
          { text: "New" }
        ]
      ],
      rows: [
        ["$10.00", "1,000", { inputId: "n1", answer: 1200 }],
        ["8.00", "800", { inputId: "n2", answer: 960 }],
        ["6.00", "600", { inputId: "n3", answer: 720 }],
        ["4.00", "400", { inputId: "n4", answer: 480 }]
      ]
    },
    instructions: "Instructions: Enter your answers as a whole number.\n\na. Suppose a high-yield hybrid seed increases production of sweet corn by 20% at every price. Complete the new supply schedule in the table above.",
    parts: [
      {
        id: "b_orig",
        type: "number",
        prompt: "b. At a price of $8.00 per bushel, the original quantity supplied was",
        suffix: "bushels",
        answer: 800
      },
      {
        id: "b_new",
        type: "number",
        prompt: "and the new quantity supplied is",
        suffix: "bushels.",
        answer: 960
      }
    ],
    explanation: "A 20% increase means the new quantity supplied is 120% (1.20) of the initial quantity:\n• At $10.00: 1,000 × 1.20 = 1,200\n• At $8.00: 800 × 1.20 = 960\n• At $6.00: 600 × 1.20 = 720\n• At $4.00: 400 × 1.20 = 480"
  },
  {
    id: "p4_q11",
    number: 11,
    points: 10,
    type: "interactive_graph",
    intro: "Refer to the figure.",
    graphConfig: {
      title: "Market for Raspberries",
      toolName: "Producer Surplus, PS",
      shortLabel: "PS",
      xLabel: "Quantity (pounds of raspberries)",
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
        { x: 0, y: 6 },
        { x: 0, y: 2 },
        { x: 100, y: 6 }
      ]
    },
    story: "The graph represents the market for raspberries (in pounds per week) at a local farmers' market. Suppose the equilibrium price of raspberries is $6 per pound and the equilibrium quantity is 100 pounds of raspberries per week.\n\nUsing the graph, show the area representing PRODUCER SURPLUS (Supplier Surplus) in this market, and then determine how much producer surplus will be generated by the market each week.",
    instructions: "Instructions: Use the tool provided \"Producer Surplus, PS\" to illustrate this area on the graph (click 3 vertices on the graph to form the Producer Surplus triangle).",
    parts: [
      {
        id: "ps_val",
        type: "number",
        prompt: "Producer surplus:",
        prefix: "$",
        answer: 200
      }
    ],
    explanation: "• Graphical Area: Producer Surplus (PS) is the triangle BELOW the equilibrium price line ($6) and ABOVE the supply curve, bounded by the vertical axis from Q = 0 to Q = 100. Its three vertices are (0, $6), (0, $2), and (100, $6).\n• Calculation: Area of the PS triangle = 0.5 × Base × Height = 0.5 × 100 × ($6 - $2) = 0.5 × 100 × $4 = $200."
  },
  {
    id: "p4_q12",
    number: 12,
    points: 10,
    type: "interactive_graph",
    intro: "Refer to the figure.",
    graphConfig: {
      title: "Market for Raspberries",
      toolName: "Economic Surplus, ES",
      shortLabel: "ES",
      xLabel: "Quantity (pounds of raspberries)",
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
        { x: 0, y: 2 },
        { x: 100, y: 6 }
      ]
    },
    story: "The graph represents the market for raspberries (in pounds per week) at a local farmers' market. Suppose the equilibrium price of raspberries is $6 per pound and the equilibrium quantity is 100 pounds per week.\n\nUsing the graph, illustrate the total ECONOMIC SURPLUS (Consumer Surplus + Producer Surplus) and determine how much economic surplus is generated in the market each week.",
    instructions: "Instructions: Use the tool provided \"Economic Surplus, ES\" to illustrate this area on the graph (click 3 vertices on the graph to form the Economic Surplus triangle).",
    parts: [
      {
        id: "es_val",
        type: "number",
        prompt: "Economic surplus:",
        prefix: "$",
        answer: 400
      }
    ],
    explanation: "• Graphical Area: Economic Surplus (ES = CS + PS) is the full triangle between the demand curve and the supply curve from Q = 0 to Q = 100. Its three vertices are (0, $10), (0, $2), and (100, $6).\n• Calculation: CS = 0.5 × 100 × ($10 - $6) = $200; PS = 0.5 × 100 × ($6 - $2) = $200. Total Economic Surplus = $200 + $200 = $400."
  },
  {
    id: "p4_q13",
    number: 13,
    points: 10,
    type: "composite",
    intro: "Marcus runs a mobile car detailing service on Saturdays. The table below shows his marginal benefit and marginal cost for each car he details per day.",
    table: {
      title: "Marcus's Marginal Benefit and Marginal Cost of Car Detailing",
      headers: [
        [
          { text: "Cars Detailed" },
          { text: "Marginal Benefit (dollars)" },
          { text: "Marginal Cost (dollars)" }
        ]
      ],
      rows: [
        ["1", "$90", "$30"],
        ["2", "80", "40"],
        ["3", "70", "50"],
        ["4", "60", "60"],
        ["5", "50", "70"],
        ["6", "40", "80"]
      ]
    },
    parts: [
      {
        id: "a",
        type: "mcq",
        prompt: "a. Given the information above, what is Marcus's optimal number of cars to detail per day?",
        options: ["2 cars", "3 cars", "4 cars", "5 cars"],
        answer: 2
      },
      {
        id: "b",
        type: "mcq",
        prompt: "b. If Marcus were to detail only 2 cars per day:",
        options: [
          "the marginal benefit would equal the marginal cost.",
          "the marginal cost would exceed the marginal benefit by $40.",
          "the marginal benefit would exceed the marginal cost by $40.",
          "the marginal benefit would exceed the marginal cost by $20."
        ],
        answer: 2
      },
      {
        id: "c",
        type: "mcq",
        prompt: "c. If Marcus were to detail 6 cars per day:",
        options: [
          "the marginal benefit would equal the marginal cost.",
          "the marginal cost would exceed the marginal benefit by $40.",
          "the marginal benefit would exceed the marginal cost by $40.",
          "the marginal cost would exceed the marginal benefit by $20."
        ],
        answer: 1
      }
    ],
    explanation: "• (a) Optimal quantity occurs where MB = MC. At 4 cars, MB = $60 and MC = $60.\n• (b) At 2 cars, MB = $80 and MC = $40, so MB exceeds MC by $80 - $40 = $40.\n• (c) At 6 cars, MB = $40 and MC = $80, so MC exceeds MB by $80 - $40 = $40."
  },
  {
    id: "p4_q14",
    number: 14,
    points: 10,
    type: "composite",
    intro: "Chloe and Ethan are both graphic designers producing logos and web banners. The table below compares their production possibilities schedules.",
    table: {
      title: "Production Possibilities Schedules",
      headers: [
        [
          { text: "Chloe", colspan: 2 },
          { text: "Ethan", colspan: 2 }
        ],
        [
          { text: "Logos" },
          { text: "Web Banners" },
          { text: "Logos" },
          { text: "Web Banners" }
        ]
      ],
      rows: [
        ["10", "0", "40", "0"],
        ["5", "15", "20", "10"],
        ["0", "30", "0", "20"]
      ]
    },
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "If both designers decided to specialize and trade with each other, the terms of trade that would benefit both Chloe and Ethan (1 logo = x web banners) would be between",
        options: [
          "0.5 and 3 web banners per logo.",
          "0.33 and 2 web banners per logo.",
          "1 and 4 web banners per logo.",
          "0.5 and 2 web banners per logo."
        ],
        answer: 0
      }
    ],
    explanation: "Calculate each designer's opportunity cost of producing 1 logo:\n• Chloe: 10 logos = 30 web banners → 1 logo costs 30 / 10 = 3 web banners.\n• Ethan: 40 logos = 20 web banners → 1 logo costs 20 / 40 = 0.5 web banners.\nMutually beneficial terms of trade must lie between their opportunity costs: between 0.5 and 3 web banners per logo."
  },
  {
    id: "p4_q15",
    number: 15,
    points: 10,
    type: "composite",
    intro: "Identify which of the following scenarios is likely to shift the demand for home air conditioners to the right.",
    instructions: "Instructions: You may select more than one answer. Click the box with a check mark for the correct answers.",
    parts: [
      {
        id: "main",
        type: "checkbox",
        prompt: "Select all that apply:",
        options: [
          "Meteorologists forecast the hottest summer heatwave in 50 years.",
          "A housing boom increases the number of new households in the region by 18%.",
          "Manufacturers reduce the retail price of air conditioners by 15%.",
          "Consumers expect air conditioner prices to surge next month due to a compressor shortage."
        ],
        answers: [0, 1, 3]
      }
    ],
    explanation: "• Extreme summer heat increases consumer preferences/need for cooling (shifts demand right).\n• More households increase the number of buyers (shifts demand right).\n• A reduction in the retail price of air conditioners causes a movement ALONG the demand curve (an increase in quantity demanded), not a shift of the demand curve.\n• Expecting higher prices next month encourages buyers to purchase now (shifts current demand right)."
  },
  {
    id: "p4_q16",
    number: 16,
    points: 10,
    type: "composite",
    intro: "",
    parts: [
      {
        id: "main",
        type: "mcq",
        prompt: "A new pest-resistant wheat seed significantly increases wheat yields per acre for farmers. At the same time, a popular low-carb diet trend causes millions of consumers to cut back on wheat products. As a result, one should expect",
        options: [
          "the equilibrium price of wheat to rise, but the equilibrium quantity to be indeterminate.",
          "the equilibrium price of wheat to fall, but the equilibrium quantity to be indeterminate.",
          "the equilibrium price of wheat to be indeterminate, but the equilibrium quantity to rise.",
          "the equilibrium price of wheat to be indeterminate, but the equilibrium quantity to fall."
        ],
        answer: 1
      }
    ],
    explanation: "• Higher wheat yields increase Supply (Supply shifts right: P↓, Q↑).\n• The low-carb diet trend decreases Demand (Demand shifts left: P↓, Q↓).\n• Combining both effects: Both shifts push the equilibrium price DOWN, while they push equilibrium quantity in opposite directions (making quantity indeterminate)."
  },
  {
    id: "p4_q17",
    number: 17,
    points: 10,
    type: "composite",
    intro: "Coastal Carl and Island Ivy spend their time making surfboards and paddles. The table below shows their weekly production possibilities schedules.",
    table: {
      title: "Production Possibilities Schedules",
      headers: [
        [
          { text: "Coastal Carl", colspan: 2 },
          { text: "Island Ivy", colspan: 2 }
        ],
        [
          { text: "Surfboards" },
          { text: "Paddles" },
          { text: "Surfboards" },
          { text: "Paddles" }
        ]
      ],
      rows: [
        ["20", "0", "60", "0"],
        ["16", "12", "48", "16"],
        ["12", "24", "36", "32"],
        ["8", "36", "24", "48"],
        ["4", "48", "12", "64"],
        ["0", "60", "0", "80"]
      ]
    },
    parts: [
      {
        id: "a",
        type: "mcq",
        prompt: "a. If Coastal Carl splits his week evenly between making surfboards and paddles, what is the maximum number of surfboards and paddles he could make?",
        options: [
          "20 surfboards and 60 paddles",
          "10 surfboards and 30 paddles",
          "30 surfboards and 10 paddles",
          "12 surfboards and 24 paddles"
        ],
        answer: 1
      },
      {
        id: "b",
        type: "mcq",
        prompt: "b. If Island Ivy splits her week evenly between making surfboards and paddles, what is the maximum number of surfboards and paddles she could make?",
        options: [
          "30 surfboards and 40 paddles",
          "40 surfboards and 30 paddles",
          "60 surfboards and 80 paddles",
          "24 surfboards and 48 paddles"
        ],
        answer: 0
      },
      {
        id: "c",
        type: "mcq",
        prompt: "c. Combined, how many surfboards and paddles could Coastal Carl and Island Ivy make if each one split their week evenly between the two products?",
        options: [
          "70 surfboards and 40 paddles",
          "80 surfboards and 140 paddles",
          "40 surfboards and 70 paddles",
          "60 surfboards and 60 paddles"
        ],
        answer: 2
      },
      {
        id: "d_surf",
        type: "select",
        prompt: "d. Who has the comparative advantage in making surfboards? In making paddles?\n\nSurfboards:",
        options: ["Coastal Carl", "Island Ivy"],
        answer: "Island Ivy"
      },
      {
        id: "d_pad",
        type: "select",
        prompt: "Paddles:",
        options: ["Coastal Carl", "Island Ivy"],
        answer: "Coastal Carl"
      },
      {
        id: "e",
        type: "mcq",
        prompt: "e. If both Coastal Carl and Island Ivy choose to specialize in the product in which they have a comparative advantage, how many of each product could they produce together?",
        options: [
          "20 surfboards and 80 paddles",
          "60 surfboards and 60 paddles",
          "60 surfboards and 80 paddles",
          "80 surfboards and 60 paddles"
        ],
        answer: 1
      }
    ],
    explanation: "• (a) Splitting his week 50/50 gives Coastal Carl half of his maximums: 20/2 = 10 surfboards and 60/2 = 30 paddles.\n• (b) Splitting her week 50/50 gives Island Ivy half of her maximums: 60/2 = 30 surfboards and 80/2 = 40 paddles.\n• (c) Combined at 50/50: (10 + 30) = 40 surfboards and (30 + 40) = 70 paddles.\n• (d) Ivy's opportunity cost of 1 surfboard is 80/60 = 1.33 paddles, while Carl's is 60/20 = 3 paddles. Thus, Island Ivy has the comparative advantage in surfboards, and Coastal Carl has the comparative advantage in paddles.\n• (e) With complete specialization, Ivy produces 60 surfboards and Carl produces 60 paddles."
  },
  {
    id: "p4_q18",
    number: 18,
    points: 10,
    type: "composite",
    intro: "Evaluate the set of events below. Determine how the events will impact their respective markets.",
    parts: [
      {
        id: "a",
        type: "inline_Cloze",
        prompt: "a. In examining the market for wooden dining tables, wildfire regulations sharply increase the price of raw timber lumber.",
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
        prompt: "b. In examining the market for movie theater tickets, streaming platforms release blockbuster movies at home on the same day for a much lower price.",
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
        prompt: "c. In examining the market for electric vehicles, five major new automotive manufacturers enter the domestic EV market.",
        segments: [
          "The effect of the event will be ",
          { id: "c1", options: ["an increase", "a decrease"], answer: "an increase" },
          " in ",
          { id: "c2", options: ["supply", "demand", "quantity supplied", "quantity demanded"], answer: "supply" },
          ". As a result, the equilibrium price will ",
          { id: "c3", options: ["increase", "decrease"], answer: "decrease" },
          " and the equilibrium quantity will ",
          { id: "c4", options: ["increase", "decrease"], answer: "increase" },
          "."
        ]
      }
    ],
    explanation: "• (a) Higher input prices (timber) increase production costs and decrease supply (leftward shift), raising equilibrium price and lowering equilibrium quantity.\n• (b) A lower price for a substitute (home streaming) decreases demand for movie theater tickets (leftward shift), lowering both equilibrium price and equilibrium quantity.\n• (c) An increase in the number of sellers increases market supply (rightward shift), lowering equilibrium price and raising equilibrium quantity."
  }
];
