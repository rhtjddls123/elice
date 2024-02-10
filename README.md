## 개발환경

- `nextjs v14.1.0`
- `node v20.10.0`
- `react ^18`
- `styled-component` `tailwindcss` `ESlint` `pretieer` `heroicons`

## 폴더구조

```
elice
├─ app
│  ├─ _components    //component들을 관리합니다.
│  ├─ _hooks         //전역에서 상태관리되는 것을 관리합니다.
│  ├─ _styles        //css파일과 styledComponent를 관리합니다.
│  ├─ _types         //global type을 관리합니다.
│  └─ _utils         //직접 만든 함수를 관리합니다.
├─ pages
│  └─ api           //api들을 관리합니다
└─ public           //svg, img파일들을 관리합니다.

```

## Commit 규칙

```
Init:	프로젝트 초기 생성
Feat:	새로운 기능 추가
Fix:	버그 수정
Design:	CSS 등 사용자 UI 디자인 변경
Style:	코드 포맷팅
Remove:	파일 삭제
Chore:	위에 걸리지 않는 기타 변경사항
```

## Compoenet

- FilterArea: Chip들을 모아두는 area
- Chip: button으로 구현되어있으며, filtering시 사용됨
- CourseArea: 각각의 Course의 대한 정보가 띄워질 Card Area
- CourseListArea: Course Card들이 출력될 area, 한 페이지에 최대 20개만 띄울 수있음
- PaginationArea: Pagination의 숫자button과 arrow button이 모인 area
- PaginationButton: 페이지를 이동할 수 있는 버튼, 현재 페이지 기준 앞쪽으로 최대 4개, 뒷쪽으로 최대 4개의 페이지를 더 표시하도록 구현
- SearchArea: title을 검색할 수 있는 검색창, debounce를 통해 연속적인 입력이 들어와도 300ms마다 검색되게 구현

## 상태관리

### 전역상태관리

useContext를 사용한 \_hooks폴더의 course-context를 사용하여 관리

- filter_condition: elice api를 fetch할때 필요한 데이터
- setTitle: filter_condition에 검색된 title를 update해줌
- setChip: filter_condition에 선택된 Chip들을 update해줌
- setData: fetch받아온 데이터를 update
- data: fetch받아온 데이터를 상태로 갖고있음

### 로컬상태관리

page.tsx

- curPage에 현재 페이지 저장
- params를 State로 두어 url이 변경될 때 course data를 fetch해옴

\_component/Chip.tsx

- buttonToggle을 통해 해당 chip이 선택되었는지 확인
- visit을 이용하여 새로고침 시 query string에 있는 chip 선택되게한 후 쓸데없이 course data를 fetch해오는 것을 막음

\_component/SearchArea.tsx

- searchRef를 통해 input 입력된 값 관리

\_component/PaginationButton.tsx

- fontColor와 backgroundColor를 상태로 두어 변경시에 해당 button의 생상도 변화하게 설정

## Data Fetch방식

- next app router의 fetch함수를 이용하였으며
- data를 받아올 때 해당 filtering 내용이 남을 수 있도록 next/navigation의 useSearchParams와 useRouter 사용
- 기본 offset = 0, count = 20으로 설정되어있으며 offset은 pagination을 통해 변경됨
- fetch해온 data는 id, title, isFree, price, description, logoFileUrl, enrollType을 포함한 course와 현재 가져온 course의 개수인 courseCount로 구성
- GET요청이 아닌경우 500에러 발생

## 코드스타일 관리

priteer와 eslint를 사용하여 규칙 설정

## UI

styled-component를 사용하여 component의 style을 동적으로 변경할 수 있게 구현하였으며, tailwindCSS를 함께 사용하여 빠르게 구현함  
Icon들은 heroicons에서 svg를 받아 사용

## 실행화면

![캡처3](https://github.com/rhtjddls123/elice/assets/60644352/28f9263a-b2d7-4aab-b6f5-b157b2a5be96)
![캡처2](https://github.com/rhtjddls123/elice/assets/60644352/2dc704c7-b606-4879-a91b-f1305d63bfeb)
