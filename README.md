# 개인 포트폴리오 · DFRAKE

HTML/CSS/JavaScript로 구성한 개인 포트폴리오 웹 화면입니다. 프로젝트, 자기소개, 기술 목록, 연락처 섹션을 제공합니다.

![HTML5](https://img.shields.io/badge/HTML5-111827?style=flat-square&logo=html5&logoColor=F97316)
![CSS](https://img.shields.io/badge/CSS-111827?style=flat-square&logo=css&logoColor=60A5FA)
![JavaScript](https://img.shields.io/badge/JavaScript-111827?style=flat-square&logo=javascript&logoColor=FACC15)

## 구현 범위

- **화면 구조**: Projects, About, Skills, Contact 섹션과 탐색 메뉴
- **상호작용**: 메뉴를 누르면 해당 섹션만 표시하고 부드럽게 스크롤
- **스타일**: CSS 변수, 프로젝트 카드, 작은 화면을 위한 미디어 쿼리
- **의존성**: 외부 Pretendard 폰트 사용, 별도 앱 빌드 과정 없음

이 저장소의 실행 코드는 HTML/CSS/JavaScript입니다. 화면에 기재된 Java·Spring Boot·MyBatis는 개인 기술 소개이며, 해당 백엔드 구현이 이 저장소에 포함되어 있다는 의미는 아닙니다.

## 로컬에서 보기

저장소 루트에서 실행합니다.

```bash
python3 -m http.server 8000
```

브라우저에서 [http://localhost:8000/html/pf.html](http://localhost:8000/html/pf.html)을 엽니다. 정적 파일 서버이므로 Python 외 별도 패키지 설치는 필요하지 않습니다.

## 파일 구조

```text
.
├── html/pf.html   # 화면과 콘텐츠
├── css/pf.css     # 스타일과 반응형 규칙
└── js/pf.js       # 메뉴 선택과 섹션 표시
```

## 현재 상태와 개선 계획

- 현재 첫 로딩에서 모든 본문 섹션을 숨깁니다. 메뉴 선택 전에도 대표 프로젝트가 보이도록 초기 화면 개선이 필요합니다.
- 학력·이메일·전화번호에 임시 값이 포함되어 있습니다. 제출·배포 전 실제 공개 가능한 정보로 교체하거나 항목을 정리할 예정입니다.
- 공개 배포 주소와 화면 캡처는 아직 이 문서에 등록하지 않았습니다. 확인된 주소와 실제 화면만 추가합니다.
- React 전환, 백엔드 연동, 배포 자동화는 이 저장소에서 확인된 구현 범위에 포함되지 않습니다.

## 링크

- [GitHub 프로필](https://github.com/DFRAKE)
- [기술 블로그](https://velog.io/@dfrake/posts)
