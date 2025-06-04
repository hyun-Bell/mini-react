/// <reference types="vite/client" />

// 전역 타입 선언
declare global {
  // Jest와 React Testing Library를 위한 환경 변수
  var IS_REACT_ACT_ENVIRONMENT: boolean;
  
  // Node.js 환경 변수 타입 확장
  namespace NodeJS {
    interface Global {
      IS_REACT_ACT_ENVIRONMENT: boolean;
    }
  }
  
  // 브라우저 환경에서 사용할 Window 인터페이스 확장
  interface Window {
    // 필요시 브라우저 전용 속성들 추가
  }
}

// Vite 환경 변수 타입 정의
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // 더 많은 환경 변수들...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// 이 파일을 모듈로 만들기 위한 export
export {};