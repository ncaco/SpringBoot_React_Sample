# SpringBoot_React_Sample

## 프로젝트 소개
스프링부트 + 리액트 + JPA를 활용한 풀스택 웹 애플리케이션 샘플 프로젝트입니다.

## 기술 스택
### Backend
- Java 17
- Spring Boot 3.x
- Spring Data JPA
- H2 Database
- Lombok
- Gradle

### Frontend
- React 18
- Node.js
- npm
- React Router
- Axios

## 프로젝트 구조
```bash
├── demo/ # 스프링부트 백엔드
│ ├── src/
│ │ ├── main/
│ │ │ ├── java/ # 자바 소스 코드
│ │ │ └── resources/ # 설정 파일
│ │ └── test/ # 테스트 코드
│ └── build.gradle
│
└── frontend/ # 리액트 프론트엔드
├── src/
│ ├── components/ # 리액트 컴포넌트
│ ├── pages/ # 페이지 컴포넌트
│ └── services/ # API 서비스
└── package.json
```

## 주요 기능
- 사용자 인증 (로그인/회원가입)
- CRUD 기능 구현
- RESTful API
- 반응형 웹 디자인

## 시작하기

### Backend 실행
```bash
cd demo
./gradlew bootRun
```

### Frontend 실행
```bash
cd frontend
npm install
npm start
```

## API 문서
- Swagger UI: `http://localhost:8080/swagger-ui.html`

## 개발 환경 설정
1. JDK 17 설치
2. Node.js 설치 (v16 이상)
3. IDE 설정 (Cursor 등)

## 테스트
- 백엔드 테스트: `./gradlew test`
- 프론트엔드 테스트: `npm test`

## 라이선스
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 기여하기
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
