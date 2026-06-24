<div align="center">

# Sibam Prasad Sahoo — Portfolio

### CS/AIML student building distributed systems and applied ML in production.

[![Live Site](https://img.shields.io/badge/Live-Visit_Site-2ea44f?style=for-the-badge)](#)
[![GitHub](https://img.shields.io/badge/GitHub-SIBAM890-181717?style=for-the-badge&logo=github)](https://github.com/SIBAM890)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/sibam-prasad-sahoo)
[![Hugging Face](https://img.shields.io/badge/🤗_Hugging_Face-Dev--CrafterX-FFD21E?style=for-the-badge)](https://huggingface.co/Dev-CrafterX)

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=000)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=fff)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

</div>

---

## Overview

This repository contains the source code for my personal portfolio — a fast, single-page site built with **React** and **Vite** to showcase my work across distributed systems engineering, applied machine learning, and full-stack development.

Rather than a static resume, the goal is a living, navigable record of what I've actually shipped: production systems at scale, ML pipelines debugged and improved with measurable lift, and projects built end-to-end from hardware to dashboard.

> 📄 Looking for the resume itself? See [`/public/resume.pdf`](./public) or the [Experience](#-experience) and [Projects](#-projects) sections below.

---

## ✨ Highlights

| | |
|---|---|
| 🎓 **B.Tech, AI & ML** | Sri Sri University, Cuttack — CGPA 9.1/10 (Top 5% of department) |
| 🏭 **Production Engineering** | Cut order-processing latency ~45% across 8 distributed components at 50,000+ events/day |
| 🛰️ **National Selection** | 1 of 40 selected nationwide for ISRO's Bhuvan Training Programme (NRSC) |
| 🏆 **Hackathon Results** | Top 50 of 15,800+ (PAN IIT) · Top 800 of 52,000+ (Global RLHF Grand Finale) |
| 🧠 **Applied ML Impact** | Improved a production ML pipeline's accuracy by 11 points by root-causing a silent data-leakage bug |
| 👥 **Leadership** | Founder & Chapter Lead, GDG On Campus — built a 10-member team, ran 10+ technical events |

---

## 🧰 Tech Stack

**This site:**

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Tooling | Vite 7, Oxlint |
| Deployment | _(add: Vercel / Netlify / GitHub Pages)_ |

**What I build with (demonstrated across the projects below):**

```text
Languages        Python (Advanced) · Java · JavaScript · C++ (Arduino/Embedded)
Backend/Systems  Spring Boot 3.3 · FastAPI · Node.js · Apache Kafka · Docker · Redis
                 PostgreSQL · MongoDB · Cloud Run
Systems Design   Distributed Systems · Concurrency & Multi-threading · Event-driven
                 Architecture · Idempotency · Horizontal Scalability · Reliability Engineering
ML / AI          PyTorch · TensorFlow · Scikit-Learn · HuggingFace Transformers
                 Sentence-BERT · LayoutLMv3 · YOLOv8 · RAG Pipelines · Gemini API · Vertex AI
DSA              Arrays · Trees · Dynamic Programming · Graphs — 350+ LeetCode problems solved
```

---

## 💼 Experience

### Software Engineering Intern — Zaalima Dev. Pvt. Ltd. · *Feb 2026 – May 2026, Bangalore*
`Java 21` `Spring Boot 3.3` `Apache Kafka` `Redis` `Docker` `PostgreSQL`

- Reduced order-processing latency by **~45%** across 8 distributed components (50,000+ events/day in production) by redesigning a synchronous call chain into an event-driven architecture of 12 concurrent multi-threaded Kafka consumers, using offset-based synchronization and idempotency invariants to eliminate race conditions.
- Eliminated a class of cross-service data-consistency bugs by architecting shared-state synchronization contracts across 8 service boundaries — with dead-letter queues and retry-with-backoff — enabling a zero-downtime release with full integration test coverage across a 4-engineer team.

### Geospatial ML Trainee — NRSC, ISRO · *Mar 2026 – Apr 2026, Hyderabad*
`Python` `LSTM` `QGIS` `Bhuvan Platform`

- Selected **1 of 40 nationwide** for ISRO's Bhuvan Training Programme; trained LSTM models on multi-year, multi-spectral satellite time-series (CHAMAN, AMRUT, NICES) to forecast land-use change, with outputs integrated into live Bhuvan pipelines used by government agencies.

### AI and ML Intern — 3SKILL · *Dec 2025 – Feb 2026, Bhubaneswar*
`Python` `Scikit-Learn` `PyTorch` `Pandas` `NumPy`

- Improved production ML pipeline accuracy by **11 percentage points** (5-fold CV: 87.1%, F1: 0.882) by tracing a silent target-leakage bug to its root cause, then benchmarking 5 retrained models across 1,599 records to reach 88.3% accuracy against a 77% baseline.

---

## 🚀 Projects

### [Nyayadarsi — Procurement Fraud Detection System](https://github.com/SIBAM890)
*PAN IIT Hackathon · Top 50 of 15,800+ registrations*

`Python` `LayoutLMv3` `YOLOv8` `Tesseract OCR` `Gemini 1.5 Flash` `FastAPI` `PostgreSQL`

A multimodal pipeline combining LayoutLMv3 layout semantics, YOLOv8 visual-anomaly detection, and OCR to unify 45+ document formats into a single fraud-scoring flow across 5 unit-tested modules.

### [PreferenceLab — RLHF Reward Model Training Environment](https://github.com/SIBAM890)
*Global Grand Finale · Top 800 of 52,000+ participants*

`Python` `Gymnasium` `Reinforcement Learning` `FastAPI` `HF Spaces`

A 3-tier open-source RL environment — trajectory collection → reward modeling → preference export — generating structured RLHF training data, deployed live and publicly accessible.

### [Urja Tracker — Full-Stack IoT Energy Monitor](https://github.com/SIBAM890/UrjaTracker)
`C++ (Arduino)` `Python` `Flask` `SQLite` `Threading`

A 3-tier IoT system: Arduino C++ firmware (watchdog timer, interrupt-safe sensor loop) streaming JSON over serial to a multi-threaded Python/Flask backend with SQLite persistence and a live Chart.js dashboard.

---

## 🏅 Leadership & Achievements

- **Founder & Chapter Lead, GDG On Campus, Sri Sri University (2026)** — built a 10-member organizing team and ran 10+ technical events from a standing start.

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) ≥ 18
- npm (or pnpm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/SIBAM890/<repo-name>.git
cd <repo-name>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

---

## 📁 Project Structure

```text
.
├── public/             # Static assets (favicon, resume, images)
├── src/
│   ├── components/      # Reusable UI components
│   ├── sections/         # Page sections (Hero, Experience, Projects, etc.)
│   ├── assets/            # Images, icons, fonts
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

> Adjust this tree to match your actual `src/` layout once components are added.

---

## 📬 Contact

- **Email:** sibam.s24btcseai@srisriuniversity.edu.in
- **GitHub:** [@SIBAM890](https://github.com/SIBAM890)
- **LinkedIn:** [sibam-prasad-sahoo](https://linkedin.com/in/sibam-prasad-sahoo)
- **Hugging Face:** [Dev-CrafterX](https://huggingface.co/Dev-CrafterX)

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

<div align="center">

Built with ⚛️ React + ⚡ Vite

</div>
