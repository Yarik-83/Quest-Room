
import {IQuest} from "./src/interface"
import img1 from "./src/assets/bg/bg1.jpg";
import img2 from "./src/assets/bg/bg2.png";
import img3 from "./src/assets/bg/bg3.png";
import img4 from "./src/assets/bg/bg4.jpg";
import img5 from "./src/assets/bg/bg5.jpg";
import img6 from "./src/assets/bg/bg6.jpg";
import img7 from "./src/assets/bg/bg7.jpg";


export const quests: Array<IQuest> = [
  {
    id: 1,
    title: "ПАЦЮЧА ПАСТКА",
    description:
      'Гра "Пацюча пастка" - це пригода для 2-4 гравців, які грають за пацюків, що живуть у старому будинку. Гравці повинні зібрати якомога більше їжі, проходячи через кімнати, тунелі та засіки, де чекає на них багато небезпек. Гра проходить у темряві, тому гравці можуть користуватися тільки фонариками, що додає більше напруження. Але увага, є хижі ховрахи, які полюють на пацюків. Якщо гравці збирають забагато їжі, то це може привернути увагу хижаків. Переможцем стає той, хто збере найбільшу кількість їжі та повернеся до своєї нори живим.',
    genre: "страшне",
    level: "середній",
    people: "2-4 осіб",
    time: "90 хв",
    picture: img1,
  },
  {
    id: 2,
    title: "ТАЄМНИЙ ЕКСПЕРИМЕНТ",
    description:
      'Гра "Таємний експеримент" - це квест для 2-6 гравців, які відправляються в підземну лабораторію, де створюються біо-роботи. Гравці повинні знайти та використати різноманітні інструменти, щоб взаємодіяти з комп"ютерами, знайти схованки та розв"язати головоломки. Однак, у них є обмежений час, щоб знайти вихід, оскільки лабораторія може обвалитися в будь-який момент. Біо-роботи перешкоджають їм на кожному кроці, тому гравці повинні уникнути бойових зіткнень. Ціль гри - вийти з лабораторії, з якомога більшою кількістю секретних розробок.',
    genre: "Sci-Fi",
    level: "складний",
    people: "2-6 осіб",
    time: "120 хв",
    picture: img2,
  },
  {
    id: 3,
    title: "ГОТЕЛЬ НАЙМАНЦІВ",
    description:
      " Гра 'Вбивство в готелі' - це детективна гра для 3-6 гравців, які грають ролі детективів, що розслідують вбивство, що сталося в підвалі готелю. Гравці повинні взаємодіяти зі свідками, зібрати показання та зібрати докази щоб з'ясувати, хто здійснив злочин. Підозрюваним можуть стати навіть гравці, що додає несподівані повороти сюжету. Ігрові карти та деталі гри містять підказки та натяки, тому розкрити злочин вдасться лише найкмітливішому гравцеві. Переможцем стає той, хто знаходить вбивцю та представляє достатньо доказів, щоб довести провину.",
    genre: "Детективне",
    level: "складний",
    people: "3-6 осіб",
    time: "100 хв",
    picture: img3,
  },
  {
    id: 4,
    title: "ЗАНЕПАД СУЗІР’Я D64",
    description: `Гра "Занепад сузір’я D64" - це настільна гра для 3-7 гравців, які керують космічними експедиціями на планеті, де колись існувала високорозвинена цивілізація. Гравці повинні знайти та дослідити залишки цивілізації, зібрати різноманітні артефакти та з'ясувати, що сталося з цією цивілізацією. Гравці отримують картки зі слідами цивілізації та виконують різні місії, щоб дізнатися більше про історію планети. Гра також містить елементи стратегії, оскільки гравці повинні приймати рішення про те, які області досліджувати та які ресурси використовувати, щоб знайти артефакти та розв'язати загадки. Переможцем стає той, хто збирає найбільшу кількість артефактів та вирішує загадки цивілізації.`,
    genre: "Містичне",
    level: "складний",
    people: "3-7 осіб",
    time: "120 хв",
    picture: img4,
  },
  {
    id: 5,
    title: "ШПИГУН З МИНУЛОГО",
    description:
      'Гра "Шпигун з минулого" - це настільна гра для 4-6 гравців, де кожен гравець грає за шпигуна з минулого, який повернувся до світу злочину, щоб розкрити та запобігти злочинам. Основна мета полягає в тому, щоб дізнатися якнайбільше інформації про злочинців та зупинити їх, перш ніж буде занадто пізно. Гравці можуть використовувати картки подій, щоб отримати перевагу над іншими гравцям. Гра містить елементи дедукції та шансу, оскільки гравці повинні вирішувати, яку інформацію зібрати та які ходи зробити, щоб збільшити свої шанси на перемогу. Переможцем стає той, хто першим збере достатньо доказів, щоб розкрити плани злочинців та зупинити їх.',
    genre: "Детективне",
    level: "легкий",
    people: "4-6 осіб",
    time: "80 хв",
    picture: img5,
  },
  {
    id: 6,
    title: "ЛИСТ ДО ОАЗИСУ",
    description:
      'Гра "Лист до оазусу" - це настільна гра для 2-4 гравців, де кожен гравець грає за пустельних мандрівників, що шукають оазис в безводній пустелі. Гравці повинні обирати правильний шлях через пустелю, збирати ресурси та воду, щоб пережити, і відбирати ресурси у своїх суперників, щоб домогтися перемоги. Основна мета полягає в тому, щоб дійти до оазису першим і зібрати якомога більше ресурсів. Гравці можуть використовувати картки подій, щоб отримати перевагу або завадити іншим гравцям. Гра містить елементи стратегії та шансу, оскільки гравці повинні вирішувати, який шлях обрати та які ресурси зібрати, щоб збільшити свої шанси на перемогу. Переможцем стає той, хто дійде до оазису першим і зібере найбільшу кількість ресурсів.',
    genre: "Пригодне",
    level: "легкий",
    people: "2-4 осіб",
    time: "90 хв",
    picture: img6,
  },
  {
    id: 7,
    title: "РИТУАЛ",
    description:
      'Гра "Ритуал" - це настільна гра для 2-4 гравців, де кожен гравець грає за пустельних мандрівників, що шукають оазис в безводній пустелі. Гравці повинні обирати правильний шлях через пустелю, збирати ресурси та воду, щоб пережити, і відбирати ресурси у своїх суперників, щоб домогтися перемоги. Основна мета полягає в тому, щоб дійти до оазису першим і зібрати якомога більше ресурсів. Гравці можуть використовувати картки подій, щоб отримати перевагу або завадити іншим гравцям. Гра містить елементи стратегії та шансу, оскільки гравці повинні вирішувати, який шлях обрати та які ресурси зібрати, щоб збільшити свої шанси на перемогу. Переможцем стає той, хто дійде до оазису першим і зібере найбільшу кількість ресурсів.',
    genre: "Страшне",
    level: "легкий",
    people: "2-5 осіб",
    time: "90 хв",
    picture: img7,
  },
];
