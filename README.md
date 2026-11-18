# Managerial Economics Midterm Exam Simulator

An interactive web-based exam simulator for **Managerial Economics**, featuring **90 practice questions across 5 public practice packs** (18 questions per pack, 180 points per pack), instant auto-grading, step-by-step explanations, and an interactive **SVG Triangle Plotting Tool** for **Consumer Surplus (CS)**, **Producer/Supplier Surplus (PS)**, **Economic Surplus (ES)**, and **Deadweight Loss (DWL)**.

---

## Do I Need to Install Anything? (Apakah Perlu Install Sesuatu?)

**No installation is required!** (Tidak ada yang perlu di-install!)
- **Zero Dependencies**: Built with 100% pure HTML, CSS, and Vanilla JavaScript.
- **No Node.js, Python, Database, or Web Server Needed**: Works completely offline directly in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari, Brave).

---

## How to Use (Cara Penggunaan)

### Option 1: Download ZIP from GitHub (Cara Paling Mudah)
1. Click the green **`<> Code`** button at the top of this GitHub repository and select **`Download ZIP`**.
2. Extract (Unzip) the downloaded folder to your computer.
3. Double-click **[`index.html`](index.html)** to open it in your browser.

### Option 2: Clone with Git
```bash
git clone https://github.com/Gemilang-dev/ME_Midterm_Simulation.git
cd ME_Midterm_Simulation
```
Then open **`index.html`** in your web browser.

---

## Simulator Features

1. **5 Public Question Packs (90 Questions Total)**:
   - **Practice Set A (Standard)** (`questions_pack2.js`): 18 questions covering market supply summation, allocative efficiency ($MB = MC$), total revenue & price elasticity of demand, rational decision-making, excise tax incidence, substitutes & complements, discrete marginal benefit, linear PPF opportunity cost, comparative advantage & gains from trade, percentage supply shifts, interactive **Consumer Surplus (CS)** & **Economic Surplus (ES)** graphing, and market equilibrium shifts.
   - **Practice Set B (Challenge)** (`questions_pack3.js`): 18 slightly harder questions featuring 3-firm horizontal supply summation with choke prices, quota Deadweight Loss ($DWL$), midpoint elasticity formula, sunk costs vs. marginal analysis, tax incidence & $DWL$, cross-price & income elasticity, labor-input comparative advantage tables, and shift vs. movement along a curve.
   - **Practice Set C (PS & ES Graph)** (`questions_pack4.js`): 18 parallel questions featuring interactive **Producer/Supplier Surplus (PS)** triangle plotting on Question 11 and **Economic Surplus (ES)** triangle plotting on Question 12.
   - **Practice Set D (CS & PS Graph)** (`questions_pack5.js`): 18 parallel questions featuring interactive **Consumer Surplus (CS)** triangle plotting on Question 11 and **Producer/Supplier Surplus (PS)** triangle plotting on Question 12.
   - **Practice Set E (Advanced PS & ES)** (`questions_pack6.js`): 18 advanced questions featuring multi-firm market supply multipliers, subsidy overproduction $DWL$, explicit vs. implicit economic costs, and interactive **Producer Surplus (PS)** & **Economic Surplus (ES)** graphing with price ceiling analysis.

2. **Interactive Graph Triangle Tool (Questions 11 & 12 in Every Pack)**:
   - Just like the McGraw-Hill Connect graphing tool, Questions 11 and 12 require you to **click 3 vertex points directly on the graph** to shade the triangle representing **Consumer Surplus (CS)**, **Producer Surplus (PS)**, **Economic Surplus (ES)**, or **Deadweight Loss (DWL)**, in addition to entering the numeric dollar value.
   - Use the **"Clear / Redraw Triangle"** button inside the graph tool panel whenever you want to reset your plotted points.

3. **Instant Auto-Grading & Detailed Explanations**:
   - Click **"Check Answer"** at the bottom of any question to grade that specific question immediately and view its step-by-step **Explanation**.
   - Click **"Submit & Grade Pack"** in the top control bar to grade all 18 questions in the active pack and compute your total score out of **180 points**.
   - Click **"Show Correct Answers"** to reveal the exact answers for every input field, dropdown, multiple-choice option, and the green target triangle outline on the interactive graphs.

4. **Single Question vs. Full Exam View**:
   - Click **"View: Single Question"** in the top bar to navigate one question at a time using the numbered pills (`1`–`18`) or `Previous / Next` buttons, or switch to **"View: All 18 Questions"** to scroll through the entire exam on one page.

---

## Project Structure

```text
├── index.html            # Main exam simulator interface & interactive SVG graphing engine
├── questions_pack2.js    # Practice Set A (18 questions - CS & ES interactive graphs)
├── questions_pack3.js    # Practice Set B (18 questions - CS & DWL interactive graphs)
├── questions_pack4.js    # Practice Set C (18 questions - PS & ES interactive graphs)
├── questions_pack5.js    # Practice Set D (18 questions - CS & PS interactive graphs)
├── questions_pack6.js    # Practice Set E (18 questions - Advanced PS & ES interactive graphs)
├── .gitignore            # Excludes local screenshots and local-only files
└── README.md             # Documentation and usage instructions
```
