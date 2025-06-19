# 🍽️ COOKiT
## 요리 초보를 위한 보유 식재료 기반 맞춤 레시피 큐레이터 서비스

COOKiT은 요리 초보자를 위한 AI 기반의 요리 지원 서비스로, 사용자가 보유한 식재료를 기반으로 맞춤형 레시피를 추천하고 식재료를 쉽게 관리할 수 있도록 지원합니다. OCR을 통한 식재료 자동 등록, GPT-4o Vision 기반 신선도 분석, 개인화된 레시피 추천 기능을 통해 요리의 진입장벽을 낮추고 식재료 낭비를 줄이는 것을 목표로 합니다.
## 📁 Repository 구조

- [WEFRESH-FRONT](https://github.com/2024EwhaCapstone/WEFRESH-FRONT) (React Native-ios)
- [WEFRESH-SERVER](https://github.com/2024EwhaCapstone/WEFRESH-SERVER) (SpringBoot)

---

## 📦 Source Code 설명

### Frontend (📱 Mobile App)
- React Native 기반 앱 (ios) + Typescript
- AWS Amplify를 통해 배포하여 CI/CD 자동화와 애자일 방식의 개발 목표로 함.


---
## 📱 How to build
레포지토리 클론해서 프로젝트 돌리기

```bash
git clone https://github.com/2024EwhaCapstone/WEFRESH-FRONT.git
cd WEFRESH-FRONT
npm install
cd ios
pod install
cd ..
npx react-native bundle \
  --entry-file index.js \
  --platform ios \
  --dev false \
  --bundle-output ios/main.jsbundle \
  --assets-dest ios
npx react-native run-ios
```

## 🛠️ How to test
####  iOS 시뮬레이터에서 `.app` 바이너리 실행 (빌드된 앱 테스트)

1. xcode 실행
2. `.app` 바이너리 파일 준비 (예: `000.app`)
   (cookit.app binary file 설치)
  [📦 Download cookit.zip](https://github.com/2024EwhaCapstone/Growth/releases/download/v1.0.0/cookit.zip)
3. 다음의 명령어 실행
```bash
open -a Simulator
xcrun simctl install booted ~/app파일 주소
xcrun simctl launch booted org.reactjs.native.yoonjinchoi.wefresh
```
