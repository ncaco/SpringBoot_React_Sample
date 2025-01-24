# SpringBoot React Sample Project

## Project Structure
```
├── demo/               # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/        # Java source files
│   │   │   └── resources/   # Application properties, static resources
│   │   └── test/           # Test files
│   └── pom.xml            # Maven dependencies
│
└── femo/               # React Frontend
    ├── src/            # React source files
    ├── public/         # Static files
    └── package.json    # NPM dependencies
```

## Setup Instructions

### Backend (Spring Boot)
1. Open `demo` directory
2. Run Spring Boot application:
```bash
./mvnw spring-boot:run
```

### Frontend (React)
1. Open `femo` directory
2. Install dependencies:
```bash
npm install
```
3. Start development server:
```bash
npm run dev
```

## Technologies Used
- Backend: Spring Boot 3.x
- Frontend: React + TypeScript
- Build Tools: Maven (Backend), Vite (Frontend) 