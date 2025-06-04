// 🚀 Mini React with Vite ⚡️
console.log('⚡️ Vite + Mini React 프로젝트가 시작되었습니다!');

// 성능 측정
const startTime = performance.now();

// 간단한 DOM 조작으로 시작
const rootElement = document.getElementById('root');

if (rootElement) {
    const content = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <h1 style="color: #646cff;">⚡️ Vite + Mini React!</h1>
            <p style="color: #666;">이제 <strong>엄청나게 빠른</strong> 개발 환경을 사용하고 있습니다!</p>
            
            <div style="margin: 20px 0; padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px;">
                <strong>🚀 Vite의 장점들:</strong>
                <ul style="margin: 10px 0;">
                    <li>⚡️ 번개처럼 빠른 개발 서버</li>
                    <li>🔄 즉시 반영되는 HMR</li>
                    <li>📦 ESBuild 기반 번들링</li>
                    <li>⚙️ 최소한의 설정</li>
                </ul>
            </div>
            
            <div style="margin: 20px 0; padding: 15px; background: #e8f5e8; border-radius: 4px; border-left: 4px solid #4caf50;">
                <strong>✅ 확인된 기능들:</strong>
                <ul>
                    <li>✅ TypeScript 컴파일 (ESBuild)</li>
                    <li>✅ Vite 개발 서버</li>
                    <li>✅ 즉시 Hot Module Replacement</li>
                    <li>✅ SWC 기반 JSX 변환</li>
                </ul>
            </div>
            
            <div style="padding: 15px; background: #fff3cd; border-radius: 4px; border-left: 4px solid #ffc107;">
                <strong>🚀 다음 단계:</strong> createElement 함수 구현하기
            </div>
            
            <p style="margin-top: 20px; font-size: 14px; color: #666;">
                시작 시간: ${(performance.now() - startTime).toFixed(2)}ms ⚡️
            </p>
        </div>
    `;
    
    rootElement.innerHTML = content;
}

// 타입 안전성 확인
interface AppConfig {
    name: string;
    version: string;
    buildTool: string;
}

const appConfig: AppConfig = {
    name: 'Mini React',
    version: '1.0.0',
    buildTool: 'Vite ⚡️'
};

console.log(`${appConfig.name} v${appConfig.version} with ${appConfig.buildTool}`);

// HMR 지원
if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log('🔥 Hot Module Replacement 작동 중!');
    });
}

export default appConfig;