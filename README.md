# 🍽️ COOKiT
## 요리 초보를 위한 보유 식재료 기반 맞춤 레시피 큐레이터 서비스

COOKiT은 요리 초보자를 위한 AI 기반의 요리 지원 서비스로, 사용자가 보유한 식재료를 기반으로 맞춤형 레시피를 추천하고 식재료를 쉽게 관리할 수 있도록 지원합니다. OCR을 통한 식재료 자동 등록, GPT-4o Vision 기반 신선도 분석, 개인화된 레시피 추천 기능을 통해 요리의 진입장벽을 낮추고 식재료 낭비를 줄이는 것을 목표로 합니다.
## 📁 Repository 구조

- [WEFRESH-FRONT](https://github.com/2024EwhaCapstone/WEFRESH-FRONT) (React Native-ios)
- [WEFRESH-SERVER](https://github.com/2024EwhaCapstone/WEFRESH-SERVER) (SpringBoot)

---

## 📦 Source Code 설명

### Frontend (📱 React Native 기반 모바일 앱 (iOS))

- 프레임워크로 리액트 네이티브를 사용하여 iOS 대상으로 하여 개발하며 typescript를 통해 안정성 있는 개발.
- 공통 UI 컴포넌트 분리, 네비게이션 구조화, 상태 관리 효율화 등을 통해 모듈화된 구조로 개발.
- UI/UX 개선, 앱 아이콘, Splash 이미지 등 시각적 요소도 실제 사용 환경을 고려하여 구성.
- AWS Amplify를 통해 배포하여 CI/CD 자동화와 애자일 방식의 개발을 목표로 함.
- 디버그 및 기능 테스트를 위한 .app 바이너리 파일을 아카이브하여 iOS 시뮬레이터에서 실행 가능한 상태로 제공.

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

## 📁 Folder 구조
<pre>

<code>
src/                             # Main source code directory
├── api/                         # API 호출 함수 모음
│   ├── api.js                   # Axios 설정 및 공통 API 구성
│   ├── foodApi.js               # 음식 관련 API 함수 정의
│   ├── main.js                  # 메인 화면 관련 API 함수
│   ├── my.js                    # 마이페이지 관련 API 함수
│   └── recipeApi.js             # 레시피 관련 API 함수
│
├── assets/                      # 앱에서 사용하는 이미지 및 아이콘
│   ├── icons/                   # 아이콘 리소스
│   └── images/                  # 일반 이미지 리소스
│
├── components/                  # 재사용 가능한 UI 컴포넌트 모음
│   ├── addfood/                 # 음식 추가 기능 관련 컴포넌트
│   ├── global/                  # 공통 스타일 및 전역 요소
│   ├── home/                    # 홈 화면 관련 컴포넌트
│   ├── login/                   # 로그인 화면 관련 컴포넌트
│   ├── my/                      # 마이페이지 관련 컴포넌트
│   ├── recipe/                  # 레시피 관련 컴포넌트
│   └── refrigerator/            # 냉장고 화면 관련 컴포넌트
│
├── navigation/                  # 네비게이션 설정
│   ├── BottomTabNavigator.tsx         # 하단 탭 네비게이터
│   ├── RefrigeratorStackNavigator.tsx # 냉장고 스택 네비게이터
│   └── RootNavigator.tsx              # 앱 전체 루트 네비게이터
│
├── screens/                     # 실제로 화면에 보여지는 페이지 컴포넌트들
│   ├── AddFoodScreen.tsx
│   ├── FoodDetailScreen.tsx
│   ├── FoodRegisterScreen.tsx
│   ├── HomeScreen.tsx
│   ├── LoadingScreen.tsx
│   ├── LoginScreen.tsx
│   ├── MyPageScreen.tsx
│   ├── OnboardingScreen.tsx
│   ├── ProfileCompleteScreen.tsx
│   ├── RecipeDetailScreen.tsx
│   ├── RecipeListScreen.tsx
│   ├── RecipeRecommendScreen.tsx
│   └── RefrigeratorScreen.tsx
│
└── App.tsx                      # 앱 진입점
</code>

</pre>
