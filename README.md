# RealDevWorld Leaderboard

A lightweight static website for showcasing AI agent performance on real-world software development tasks. The site is built around the **RealDevBench** dataset published in the paper *“RealDevWorld: Benchmarking Production-Ready Software Engineering”* and provides a comprehensive leaderboard, dataset overview, research insights and interactive demos.

[![Website](https://img.shields.io/badge/Website-Live-brightgreen)](https://your-github-username.github.io/RealDevWorld-Leaderboard)
[![Dataset](https://img.shields.io/badge/Dataset-HuggingFace-yellow)](https://huggingface.co/datasets/stellaHsr-mm/RealDevBench)
[![Agent](https://img.shields.io/badge/Agent-AppEvalPilot-blue)](https://github.com/tanghaom/AppEvalPilot)

## 📖 Overview

**RealDevWorld Leaderboard** is a fully client-side web application designed to compare and visualise the capabilities of AI coding agents across multi-stage software engineering tasks. It aggregates evaluation results from **RealDevBench**, highlights key metrics such as requirement understanding, code implementation and debugging ability, and offers rich visual analytics for further research.

## ✨ Key Features

- **🏆 Dynamic Leaderboard** – sortable, filterable ranking of agents across multiple metrics
- **📊 Data Visualisation** – pie charts, bar graphs and tables for in-depth performance inspection
- **🗂 Dataset Overview** – concise introduction to RealDevBench, split by categories & statistics
- **🔬 Research Insights** – methodology diagrams, evaluation pipeline and experimental results
- **🎥 Agent Demo** – embedded video demonstrating the reference agent *AppEvalPilot* in action
- **📱 Responsive Design** – works seamlessly on desktop and mobile devices

## 🛠 Tech Stack

- **Frontend** – HTML5, CSS3, vanilla JavaScript (ES6+)
- **Styling** – modern CSS features (Flexbox, Grid, gradients, animations, glassmorphism)
- **Media** – HTML5 `<video>` player, lightweight SVG/PNG charts
- **Design** – fully responsive layout with focus on clean, modern UI/UX

## 📁 Project Structure

```text
RelDevWorldLeaderboard/
├── index.html               # Landing page (overview, leaderboard, demos, case studies)
├── dataset.html             # Dedicated dataset & research page (optional, may be merged)
├── agent-detail.html        # Detailed page for a single agent
├── css/
│   └── main.css             # Global stylesheet
├── js/
│   └── main.js              # Interactive behaviour & mock data
├── images/                  # Charts, icons and illustrations
├── videos/                  # Demo video assets
└── README.md                # Project documentation (this file)
```

## 🚀 Local Development

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/RealDevWorld-Leaderboard.git
   cd RealDevWorld-Leaderboard
   ```
2. **Launch a local static server**
   
   Using Python (recommended):
   ```bash
   # Python 3
   python -m http.server 8000
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   Using Node.js:
   ```bash
   npx serve .
   ```

   Via **Live Server** (VS Code extension) is also fine.
3. **Open your browser** at `http://localhost:8000`.

### Development Notes

- The site is 100 % static – no build step is required.
- All styles live in `css/main.css`.
- All JavaScript logic is in `js/main.js` (currently using mock data; hook it up to real APIs if desired).
- Image assets reside under `images/`; video files under `videos/`.

## 📊 Dataset – RealDevBench

- **194** real-world, production-level development tasks
- **4** major categories covering diverse engineering scenarios
- **Multi-dimensional** scoring: design understanding, implementation quality, debugging efficacy and more
- Available on [Hugging Face](https://huggingface.co/datasets/stellaHsr-mm/RealDevBench)

## 🤖 Reference Agent – AppEvalPilot

- Open-source evaluation agent used as a baseline
- Source code: <https://github.com/tanghaom/AppEvalPilot>
- Live demo: <https://appevalpilot.realdev.world/>

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub:  
   ```bash
   git add .
   git commit -m "Deploy website"
   git push origin main
   ```
2. In **Repository → Settings → Pages**, choose:
   - **Source**: *Deploy from a branch*
   - **Branch**: `main` – **Folder**: `/ (root)`
3. Wait a minute, then visit:  
   `https://your-username.github.io/RealDevWorld-Leaderboard`

### Alternative Hosting

- **Netlify** – drag & drop the folder or connect your Git repo
- **Vercel** – import the repo and deploy automatically
- **Traditional hosting** – upload all files to your web server’s document root

## 🎨 Page Sections

1. **Overview** – project intro & key highlights
2. **Dataset & Research** – RealDevBench details and analysis
3. **Leaderboard** – live ranking of agents
4. **Agent Demo** – video presentation of AppEvalPilot
5. **Case Studies** – qualitative deep dives into selected tasks

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/my-awesome-feature`
3. Commit your changes: `git commit -m "Add awesome feature"`
4. Push to GitHub: `git push origin feature/my-awesome-feature`
5. Open a pull request and describe your change

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

⭐ If you find this project useful, please give it a star – it helps a lot! 