# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

서울시 미세먼지 정보 서비스
이 프로젝트는 서울시 열린데이터 광장의 OpenAPI를 활용하여 실시간 미세먼지 정보를 제공하는 웹 애플리케이션입니다.

주요 기능

실시간 미세먼지 정보: 서울시 전역 및 지역별 미세먼지(PM10, PM2.5) 수치 제공
지역별 필터링: 서울시 25개 자치구별 미세먼지 정보 필터링 기능
측정소별 상세 정보: 각 측정소별 미세먼지 수치 및 측정 시간 제공
대응 방법 안내: 미세먼지 단계별 대응 방법 정보 제공

사용 기술

React
서울시 열린데이터 광장 OpenAPI
Axios HTTP 클라이언트