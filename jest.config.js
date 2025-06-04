module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  
  // 테스트 파일 패턴
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js)',
    '**/*.(test|spec).(ts|tsx|js)'
  ],
  
  // 모듈 경로 매핑
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  
  // 변환 설정
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  
  // 설정 파일들
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  
  // 커버리지 설정
  collectCoverageFrom: [
    'src/**/*.(ts|tsx)',
    '!src/**/*.d.ts',
    '!src/**/*.stories.*',
  ],
  
  // 모듈 확장자
  moduleFileExtensions: [
    'ts',
    'tsx', 
    'js',
    'jsx',
    'json',
    'node'
  ],
  
  // 성능 최적화
  maxWorkers: '50%',
};