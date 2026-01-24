# SLTB Season Ticket Web Application

## Group Information
- **Student 1:** Seshan Sandeepa – [ITBIN-2312-0024] – DevOps / Release Manager/Frontend Developer
- **Student 2:** Watshala Kithulgala – [ITBIN-2312-0025] – Backend Developer
- **Student 3:** Lishani Samarakoon – [ITBIN-2312-0005] – Backend Developer

## Project Overview
The SLTB Season Ticket Management System is a web-based application developed to manage season ticket applications for public transport users.  
Users can submit applications, upload photos, and complete a demo payment process.  
Administrators can review applications, approve or reject them, and verify payment status.  
This project demonstrates full-stack development and team collaboration using Git and DevOps practices.

## Live Deployment
Live URL: https://sltb-season-ticket.vercel.app

## Build Status
![CI Pipeline](https://github.com/sandeepaseshan2-commits/SLTB-Season-Ticket/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/sandeepaseshan2-commits/SLTB-Season-Ticket/actions/workflows/deploy.yml/badge.svg)

## Technologies Used

- HTML5, CSS3, JavaScript  
- React.js with Vite (Frontend)  
- Node.js and Express.js (Backend)  
- MongoDB and Mongoose  
- Multer (Image Upload)  
- Git and GitHub  
- GitHub Actions (CI/CD)  
- Postman (API Testing)

## Key Features
- Season ticket application form  
- Image upload functionality  
- Payment handling with status update  
- Admin approval and rejection system  
- RESTful API integration  
- MongoDB data storage  
- Automated CI/CD pipeline

## Branch Strategy
- main – Production-ready code
- develop – Integration branch
- feature/* – Feature branches for individual team members

## Individual Contributions

### Seshan Sandeepa (DevOps / Release Manager / Frontend)
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


### S.W.M.L.M. Samarakoon (Backend / Application & Payment)
- Implemented season ticket application functionality
- Developed payment method logic (simulation)
- Handled backend logic for application flow
- Supported frontend and backend integration

 develop
## Deployment Process

GitHub Actions is used for CI/CD. Each push to the main branch triggers automated checks and deployment steps on the selected hosting platform.

## Challenges Faced

- Git merge conflicts during collaboration
- Branch synchronization and rebase handling
- Connecting frontend payment UI with backend APIs
- Debugging MongoDB updates and payment logic
- Build Status
- CI/CD workflows configured and build passing successfully.
=======
 ## Challenges Faced
- **Merge conflict resolution:** During development, a merge conflict occurred when integrating changes from multiple feature branches into `develop`.
- **Resolution:** We pulled the latest `develop` branch, resolved conflict markers in the affected files using VS Code, tested the application locally, and committed the fix before merging.

main

## How to Run the Project Locally

### Requirements
- Node.js version 18 or higher
- Git
- MongoDB (local or MongoDB Atlas)

### Steps
```bash
git clone https://github.com/sandeepaseshan2-commits/SLTB-Season-Ticket.git
cd SLTB-Season-Ticket
npm install
npm run dev
