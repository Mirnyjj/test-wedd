import { weddingActions } from "./wedding.actions";
import { handleActions } from "redux-actions";

const initialState = {
  currentGuest: {
    name: "Гость",
    url: "guest",
    appeal: "Дорогой",
  },
  noneGuest: true,
  loading: false,
  error: "",
  date: "15.08.2025",
  family: {
    man: "Илья",
    woman: "Елена",
    title: "wedding",
  },
  users: [
    {
      name: "Мама и Папа",
      url: "mama-papa",
      appeal: "Дорогие",
      x: 4,
    },
    { name: "Сергей и Анна", url: "sergey-anna", appeal: "Дорогие", x: 1 },
    {
      name: "крестная, дядя Андрей и Арина",
      url: "krestnaya",
      appeal: "Дорогие",
      x: 4,
    },
    {
      name: "Денис и Анастасия",
      url: "denis-nastya",
      appeal: "Дорогие",
      x: 4,
    },
    {
      name: "Игорь и Анна",
      url: "igor-any",
      appeal: "Дорогие",
      x: 4,
    },
    { name: "Луиза и Сергей", url: "luiza-sergey", appeal: "Дорогие", x: 2 },
    {
      name: "дядя Сергей, тетя Лена, Максим, Александр и Ирина",
      url: "zhelniny",
      appeal: "Дорогие",
      x: 2,
    },
    { name: "дядя Витя и Стас", url: "tihanovy", appeal: "Дорогие", x: 1 },
    { name: "Василий и Екатерина", url: "vasy-katy", appeal: "Дорогие", x: 1 },
    { name: "Эдуард и Индира", url: "edyard-indira", appeal: "Дорогие", x: 1 },
    { name: "Ангелина", url: "angelina", appeal: "Дорогая", x: 1 },
    { name: "Дмитрий и Оксана", url: "dima-oksana", appeal: "Дорогие", x: 4 },
    {
      name: "Александр и Анастасия",
      url: "sasha-nastya",
      appeal: "Дорогие",
      x: 3,
    },
    { name: "Александр и Анна", url: "sasha-any", appeal: "Дорогие", x: 4 },
    { name: "Никита", url: "nikita", appeal: "Дорогой", x: 4 },
    {
      name: "дядя Андрей",
      url: "dyda-andrei",
      appeal: "Дорогой",
      x: 4,
    },
    { name: "Екатерина и Валерия", url: "katy-lera", appeal: "Дорогие", x: 4 },
    {
      name: "Елена, Виктор, Егор, Мария и Иван",
      url: "lena-vitya",
      appeal: "Дорогие",
      x: 4,
    },
    {
      name: "Анастасия и Денис",
      url: "nastya-i-denis",
      appeal: "Дорогие",
      x: 4,
    },
    { name: "Андрей и Марина", url: "andrey-marina", appeal: "Дорогие", x: 1 },
    { name: "Ксения", url: "ksysha", appeal: "Дорогая", x: 4 },
    { name: "Наргиз", url: "nargis", appeal: "Дорогая", x: 4 },
    { name: "Анастасия", url: "nastya", appeal: "Дорогая", x: 4 },
    {
      name: "Татьяна",
      url: "tanya",
      appeal: "Дорогая",
      x: 4,
    },
    {
      name: "Мария",
      url: "masha",
      appeal: "Дорогая",
      x: 4,
    },
    {
      name: "Юлия и Николай",
      url: "yla",
      appeal: "Дорогие",
      x: 3,
    },
    { name: "Александр", url: "aleksandr", appeal: "Дорогой", x: 1 },
    { name: "Артем", url: "artem", appeal: "Дорогой", x: 3 },
  ],
  dressCode: {
    title: "Цветовая гамма",
    content:
      "На нашей свадьбе ограничений по дресс-коду нет, но мы будем рады, если Вы воздержитесь от ярких цветов и броских принтов.",
  },
  // contacts: {
  //   title: "Организатор",
  //   content:
  //     "По всем вопросам, связанным с трансфером, торжеством и сюрпризами, обращаться к нашему свадебному организатору",
  //   name: "Ирина",
  //   phone: "+7 (912) 924-91-65"
  // },
  // transfer: {
  //   title: "Трансфер",
  //   content:
  //     "Не волнуйтесь о том, как добраться на наш праздник! " +
  //     "Всех гостей будет ожидать трансфер к месту проведения церемонии бракосочетания " +
  //     "в 14:20 по адресу: ул. Коммунистическая, 10. "
  // },

  address: [
    {
      title: "Адрес проведения церемонии бракосочетания",
      content:
        "Церемония бракосочетания: Самарская область, Волжский район, п. Придорожный, мкр Южный город, ул. Николаевский проспект, д.2",
      urlMap:
        "https://yandex.ru/map-widget/v1/?um=constructor%3A1acbd37819e09096da6c645a1d55952c31ccdad459de4dd66dba9b2f947ddc98&amp;source=constructor",
      urlCar: "https://yandex.ru/maps/-/CHgdEGo3",
      id: "guests",
    },
    {
      title: "Адрес проведения банкета",
      content: "Самара, Прогонный проезд 6",
      urlMap:
        "https://yandex.ru/map-widget/v1/?um=constructor%3A2db052ea7af78d5536259b65025e3a54ded6b79f6db5dad64bae98eddad34a0e&amp;source=constructor",
      urlCar: "https://yandex.ru/maps/-/CHgdEXoA",
      id: "guests",
    },
  ],
  appeal: {
    title: "Обращение к гостям",
    content:
      "Один день в этом году будет для нас особенным, и мы хотим провести его в кругу близких и друзей. С большим удовольствием приглашаем Вас разделить с нами этот праздник - нашу свадьбу!",
    // "создавали и разделяли самые яркие и незабываемые моменты в нашей жизни, " +
    // "приходили к нам на помощь, наполняли нашу жизнь самыми искренними и тёплыми эмоциями. " +
    // "Нам было бы приятно и радостно, если бы Вы стали свидетелями столь важного мероприятия и разделили с нами наше счастье! " +
    // "Позвольте пригласить Вас на самое главное торжество всей нашей жизни, которое состоится 14 июля 2024 года",
    other: "Дорогие и любимые наши гости!",
  },
  program: [
    {
      time: "11:30",
      title: "Церемония бракосочетания в ЗАГС",
      street: "",
    },
    {
      time: "15:30",
      title: "Сбор гостей",
      street: "",
    },
    {
      time: "16:00",
      title: "Праздничный банкет",
      street: "",
    },
  ],
  menu: [
    {
      name: "header",
      title: "Главная",
    },
    {
      name: "appeal",
      title: "Пригласительный",
    },
    {
      name: "counter",
      title: "Дней до свадьбы",
    },
    {
      name: "feedback",
      title: "Анкета",
    },
    {
      name: "programDay",
      title: "Тайминг",
    },
    {
      name: "photo",
      title: "Фото",
    },
    {
      name: "gamma",
      title: "Дресс-код",
    },
    {
      name: "details",
      title: "Детали",
    },
    {
      name: "holiday",
      title: "Место проведения",
    },
  ],
  feedbackContent: {
    questions: [
      {
        title: "Блюда из какого мяса предпочтительнее для Вас?",
        name: "eat",
        type: "checkbox",
        necessarily: false,
        answers: ["Свинина", "Птица", "Вегетарианские"],
      },
      {
        title: "Какие напитки Вы предпочитаете?",
        name: "beer",
        type: "checkbox",
        necessarily: false,
        answers: [
          "Красное вино",
          "Белое вино",
          "Водка",
          "Коньяк",
          "Безалкогольные",
          // "Предпочтения в напитках каждого гостя"
        ],
        other: "Предпочтения в напитках каждого гостя",
      },
      {
        title:
          "Необходим ли Вам трансфер из города Ульяновск и обратно в день торжества?",
        name: "transfer",
        type: "radio",
        necessarily: true,
        answers: ["Да", "Нет"],
      },
      {
        title:
          "Планируете ли Вы присутствовать на втором дне нашего торжества, который будет проходить в городе Ульяновск?",
        name: "secondDay",
        type: "radio",
        necessarily: true,
        answers: ["Да", "Нет"],
      },
    ],
  },
};

const setGuest = (state, action) => ({
  ...state,
  currentGuest: action.payload,
});

const setMenu = (state, action) => ({
  ...state,
  menu: [...action.payload],
});

const reducerMap = {
  [weddingActions.SET_GUEST]: setGuest,
  [weddingActions.SET_MENU]: setMenu,
};

export const weddingReducers = handleActions(reducerMap, initialState);
