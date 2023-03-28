### package.json 파일 생성
```shell
npm init --yes
```
### Express server, dotenv 설치
```shell
npm install express dotenv
```
### TypeScript 설치
```shell
npm i -D typescript @types/express @types/node
```
### tsconfig.json 파일 생성
```shell
npx tsc --init
```
### TypeScript의 compilerOptions 옵션 수정
```shell
"compilerOptions": {
  "outDir": "./dist"
}
```
```shell
// 초기 설정에서 outDir option 주석 해제 후, 주석처리된 옵션들을 제거한 설정
{
  "compilerOptions": {
    "target": "es2016",                                 
    "module": "commonjs",                               
    "outDir": "./dist",                                
    "esModuleInterop": true,                            
    "forceConsistentCasingInFileNames": true,           
    "strict": true,                                     
    "skipLibCheck": true                                
  }
}
```
### Express server 생성(src 폴더 하위에 index.ts ) 
```typescript
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
```
### .env file 생성
```shell
// .env 파일에 아래 내용 작성
PORT=3000
```
### dev dependencies 설치
```shell
npm install -D concurrently nodemon
```
### package.json 파일의 스크립트 수정
```shell
{
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
  }
}
```
### 서버 실행 테스트
```shell
npm run dev
```