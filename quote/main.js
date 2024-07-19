const quotes = [
  {
    quote:
      "배우기만 하고 생각하지 않으면 얻는 것이 없고, 생각만 하고 배우지 않으면 위태롭다.",
    author: "공자",
  },
  {
    quote: "인생은 과감한 모험이던가, 아니면 아무것도 아니다.",
    author: "헬렌 켈러",
  },
  {
    quote: "순간들을 소중히 여기다 보면, 긴세월은 저절로 흘러간다.",
    author: "마리아 에지워스",
  },
  {
    quote: "구름의 저편은 언제나 푸른 하늘이 있다.",
    author: "루이자 메이 알코토",
  },
  {
    quote: "그것을 꿈꿀 수 있다면, 그것을 할 수 있다는 것이다.",
    author: "월트 디즈니",
  },
  {
    quote: "당신의 삶을 사랑하세요. 그리고 당신이 사랑하는 삶을 사세요.",
    author: "밥 말리",
  },
  {
    quote:
      "꿈을 밀고 나가는 힘은 이성이 아니라 희망이며, 두뇌가 아니라 심장이다.",
    author: "도스트 에프스카",
  },
  {
    quote: "내일을 위한 최선의 준비는 오늘의 일을 모두 마치는 것이다.",
    author: "W. 오슬러",
  },
  {
    quote: "성공은 열심히 노력하며 기다리는 사람에게 찾아 온다.",
    author: "토마스 A. 에디슨",
  },
  {
    quote: "자신의 부족함을 깨달음으로써 충실한 사람이 된다.",
    author: "아우구스티누스",
  },
  {
    quote:
      "인생은 가까이서 보면 비극이지만 멀리서 보면 희극이다. / 웃음 없는 하루는 낭비의 하루다.",
    author: "찰리 채플린",
  },
  {
    quote:
      "계획 없는 목표는 한낱 꿈에 불과하다. / 행복하게 여행하려면 가볍게 여행해야 한다.",
    author: "생텍쥐페리",
  },
  {
    quote: "이른 아침은 입에 황금을 물고 있다.",
    author: "벤자민 프랭클린",
  },
  {
    quote: "사랑하라! 한번도 상처받지 않은 것처럼!",
    author: "알프레드 디 수자",
  },
];

const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];

function choiceRandom(array) {
  const index = Math.floor(Math.random() * array.length);

  return index;
}

function choiceBackground() {
  const indexImg = choiceRandom(images);
  const backgorundTag = document.createElement("img");

  backgorundTag.src = `.img/${indexImg}.jpg`;
  document.body.appendChild(backgorundTag);
}

choiceBackground();

function reEvent() {
  const indexQuote = choiceRandom(images);
}
