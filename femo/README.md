# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


### 프로젝트 구조
femo/
│
├── public/                  # 정적 파일 (HTML, 이미지, 폰트 등)
│   ├── index.html
│   ├── favicon.ico
│   └── assets/              # 이미지, 아이콘 등
│
├── src/                     # 소스 코드
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Sidebar/
│   │
│   ├── pages/               # 페이지 컴포넌트
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Blog/
│   │   └── Admin/
│   │
│   ├── services/            # API 호출 및 서비스 로직
│   │   ├── api.js
│   │   └── auth.js
│   │
│   ├── hooks/               # 커스텀 훅
│   │   └── useAuth.js
│   │
│   ├── context/             # React Context API 관련 파일
│   │   └── AuthContext.js
│   │
│   ├── styles/              # 전역 스타일 및 테마
│   │   ├── variables.css
│   │   └── global.css
│   │
│   ├── utils/               # 유틸리티 함수
│   │   └── helpers.js
│   │
│   ├── App.js               # 애플리케이션의 루트 컴포넌트
│   └── index.js             # 진입점
│
├── tests/                   # 테스트 파일
│   ├── components/
│   └── pages/
│
├── .env                     # 환경 변수 파일
├── .gitignore               # Git에서 무시할 파일 목록
├── package.json             # 프로젝트 메타데이터 및 의존성
└── README.md                # 프로젝트 설명