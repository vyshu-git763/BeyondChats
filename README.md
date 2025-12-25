# BeyondChats - Article Ingestion & AI Update System(Assignment)

This project is my submission for the Technical Product Manager assignment at BeyondChats.

The goal of this assignment is to design and build a simplified system that:
- Ingests blog articles
- Differentiates between original and AI-updated versions
- Exposes APIs for article consumption
- Displays the content in a clean, lightweight frontend

Given the limited time window, I focused on getting a working end-to-end prototype in place, while being transparent about assumptions, trade-offs, and what I would build differently in a production setup.



## Assignment Context & Scope

This submission is intentionally scoped to demonstrate system design thinking, API clarity, and frontend consumption rather than production-grade scraping or AI pipelines.

Where features are mocked or simulated, I have explicitly documented how they would be implemented in a real-world setup.




## High-Level Architecture

The system is divided into three logical layers:

1. **Backend API (PHP)**
   - Serves article data via REST APIs
   - Returns both original and AI-updated articles
   - Acts as the single source of truth for the frontend

2. **Frontend (ReactJS)**
   - Fetches articles from the backend API
   - Displays original and AI-updated articles side by side
   - Focuses on readability, clarity, and a minimal UI

3. **AI Update Pipeline (Conceptual)**
   - Represented conceptually in this assignment
   - Explained in detail in the later sections


## Data Flow Overview

1. The backend exposes an API endpoint that returns a list of articles.
2. Each article contains:
   - Title
   - Content
   - Status (Original / AI-updated)
   - Published date
3. The React frontend calls this API on page load.
4. Articles are rendered as cards with clear visual differentiation between:
   - Original articles
   - AI-updated articles


## Article Ingestion & Scraping (Design Decision)

The assignment mentions scraping articles from BeyondChats and storing them using a Laravel backend.

Given the limited time window and the fact that this assignment is meant to evaluate system thinking rather than scraping depth, article ingestion is mocked in this prototype.

In a real-world system, this layer would:
- Periodically scrape articles from the BeyondChats blog
- Normalize and clean extracted content
- Store articles in a database via Laravel models
- Handle failures, retries, and content validation

For this submission, I chose to focus on:
- API design
- Frontend consumption
- Clear differentiation between original and AI-updated content

This allowed me to ship a working end-to-end system while clearly documenting how the ingestion layer would evolve in production.


## AI-Updated Articles (Conceptual Flow)

The AI-updated articles shown in the frontend represent how the system would behave after AI processing.

In a production setup, the flow would be:
1. Fetch an original article from the backend API.
2. Search for similar high-ranking articles on the web.
3. Extract and analyze their structure, tone, and formatting.
4. Use an LLM to enhance the original article while preserving intent.
5. Store the updated version with references to the source articles.

Due to time and infrastructure constraints, for this assignment, I chose to simulate the final output of this pipeline rather than integrating real LLM calls.



## Tech Stack

- Frontend: ReactJS
- Backend: PHP (lightweight setup)
- Package Management: Composer
- API Communication: REST

While Laravel and NodeJS-based pipelines were mentioned in the assignment, I opted for a lightweight PHP backend to focus on:
- API behavior
- Integration clarity
- End-to-end execution within the time limit

Laravel would be a natural next step for scaling, authentication, and long-term maintainability.



## Local Setup Instructions

### Backend
1. Navigate to the backend directory
2. Start the PHP development server:

```bash
php -S localhost:8000
```


### Frontend
1. Navigate to the frontend directory
2. Install dependencies:

```bash
npm install
```
3. Start the development server:

```bash
npm run dev
```



## Notes on Product Decisions

- **Scope over completeness:**  
  Given the time constraint, I prioritized building a working end-to-end flow (backend → API → frontend) over implementing every feature mentioned in the assignment. My goal was to demonstrate how the system behaves and fits together rather than optimize individual components in isolation.

- **Mocked ingestion instead of live scraping:**  
  While the assignment mentions scraping articles from the BeyondChats blog, I chose to mock the ingestion layer. This allowed me to focus on API design, data contracts, and frontend consumption, while clearly documenting how real scraping, scheduling, and storage would be handled in a production system.

- **Lightweight backend choice:**  
  I used a simple PHP setup instead of a full Laravel application to keep the backend minimal and transparent. Laravel would be the natural next step for scaling, persistence, authentication, and job queues, but for this assignment, simplicity helped reduce setup overhead and debugging time.

- **Clear separation of original vs AI-updated content:**  
  One of the core product goals was to clearly differentiate between original and AI-updated articles. This is reflected both in the API response structure and in the frontend UI, ensuring that users can immediately understand what they are viewing.

- **Design for extensibility:**  
  The current implementation assumes that AI-updated articles are generated offline and stored as separate versions. This mirrors how such a system would evolve in reality, allowing future extensions like version history, audit trails, and human review workflows.

Overall, I approached this assignment as a product exercise rather than a pure engineering task, focusing on clarity, trade-offs, and how the system would realistically evolve beyond a prototype.
This exercise reinforced my interest in working at the intersection of product, engineering, and applied AI, especially in systems where clarity and trust in content matter.



## Live Demo

- Frontend: https://beyondchats-frontend-lyui.onrender.com/
- Backend API: https://beyondchats-backend-brw3.onrender.com/



## Future Improvements

If given additional time, my next priority would be automating article ingestion and introducing article versioning, as these unlock scalability and trust before investing further in AI quality.

- Real article scraping with scheduling and retries
- Full Laravel backend with database persistence
- NodeJS-based AI processing pipeline
- Article versioning and audit history
- Deployment with CI/CD and monitoring