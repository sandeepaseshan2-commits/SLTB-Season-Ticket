# SLTB Season Ticket Web Application

## Group Information
- **Student 1:** Seshan Sandeepa – [ITBIN-2312-0024] – DevOps / Release Manager/Frontend Developer
- **Student 2:** Watshala Kithulgala – [ITBIN-2312-0025] – Backend Developer
- **Student 3:** Lishani Samarakoon – [ITBIN-2312-0005] – Backend Developer

## Project Overview
This project is a full-stack web application developed for the Sri Lanka Transport Board (SLTB).  
The system allows users to apply for season tickets online instead of visiting physical counters.

The application includes user authentication, an online season ticket application form, image upload, payment simulation, and QR-based ticket generation (demo).  
This project was developed as part of the Advanced Git & DevOps Team Collaboration Assignment, focusing on teamwork, version control, CI/CD pipelines, and cloud deployment.

## Live Deployment
Live URL: https://sltb-season-ticket.vercel.app

## Build Status
![CI Pipeline](https://github.com/sandeepaseshan2-commits/SLTB-Season-Ticket/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/sandeepaseshan2-commits/SLTB-Season-Ticket/actions/workflows/deploy.yml/badge.svg)

## Technologies Used
- Frontend: React + Vite
- Backend: Node.js + Express
- Version Control: Git & GitHub
- CI/CD: GitHub Actions
- Deployment: Vercel
- Containerization: Docker (optional)

## Key Features
- User registration and login
- Online season ticket application form
- Image upload for user documents
- Payment process simulation
- QR code and ticket generation (demo)
- Basic admin view
- Responsive user interface for mobile and desktop

## Branch Strategy
- main – Production-ready code
- develop – Integration branch
- feature/* – Feature branches for individual team members

## Individual Contributions

### Seshan Sandeepa (DevOps / Release Manager)
- Created and configured the GitHub repository
- Managed branch strategy and merge handling
- Implemented frontend components
- Configured GitHub Actions CI/CD pipelines
- Managed automated deployment using Vercel
- Updated and maintained project documentation

### Watshala Kithulgala (Backend Developer)
- Developed backend server using Node.js and Express
- Implemented REST API endpoints
- Performed API testing and backend validation
- Connected frontend and backend services

### Lishani Samarakoon (Frontend / Application & Payment)
- Implemented season ticket application functionality
- Developed payment method logic (simulation)
- Handled backend logic for application flow
- Supported frontend and backend integration

## How to Run the Project Locally

### Requirements
- Node.js version 18 or higher
- Git

### Steps
```bash
git clone https://github.com/sandeepaseshan2-commits/SLTB-Season-Ticket.git
cd SLTB-Season-Ticket
npm install
npm run dev
