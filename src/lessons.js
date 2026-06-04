export const LANGUAGES = {
  en: { id:"en", name:"Английский", flag:"🇬🇧", color:"#3b82f6" },
  de: { id:"de", name:"Немецкий", flag:"🇩🇪", color:"#f59e0b" },
  fr: { id:"fr", name:"Французский", flag:"🇫🇷", color:"#e85d4a" },
};

export const LANG_LIST = ["en","de","fr"];

export const LESSONS = {
  en: [
    // ===== A1 =====
    {
      id:"en_a1_1", title:"Приветствия", emoji:"👋", level:"A1", group:"Основы",
      description:"Hello, Goodbye и первые фразы",
      theory:"• Hello / Hi — Привет\n• Good morning — Доброе утро\n• Good evening — Добрый вечер\n• Goodbye / Bye — До свидания\n• How are you? — Как дела?\n• I'm fine, thanks — Хорошо, спасибо\n• Nice to meet you — Приятно познакомиться\n• My name is... — Меня зовут...\n• What's your name? — Как тебя зовут?",
      words:[
        {word:"Hello",translation:"Привет",example:"Hello! How are you?"},
        {word:"Goodbye",translation:"До свидания",example:"Goodbye! See you tomorrow."},
        {word:"Thank you",translation:"Спасибо",example:"Thank you very much!"},
        {word:"Please",translation:"Пожалуйста",example:"Can you help me, please?"},
        {word:"Sorry",translation:"Извините",example:"Sorry, I'm late."},
      ],
      questions:[
        {type:"choice",q:"Как переводится 'Hello'?",options:["Пока","Привет","Спасибо","Извините"],answer:"Привет"},
        {type:"choice",q:"Как сказать 'Спасибо'?",options:["Sorry","Please","Thank you","Goodbye"],answer:"Thank you"},
        {type:"choice",q:"'How are you?' означает:",options:["Как тебя зовут?","Как дела?","Где ты?","Сколько лет?"],answer:"Как дела?"},
        {type:"input",q:"Переведи: 'До свидания'",answer:"goodbye",hint:"Goodbye"},
        {type:"choice",q:"'Nice to meet you' — это:",options:["Пока","Как дела?","Приятно познакомиться","Доброе утро"],answer:"Приятно познакомиться"},
        {type:"input",q:"Как сказать 'Меня зовут Анна'?",answer:"my name is anna",hint:"My name is Anna"},
        {type:"choice",q:"Как попрощаться неформально?",options:["Hello","Good morning","Bye","Thank you"],answer:"Bye"},
        {type:"input",q:"Переведи: 'Извините'",answer:"sorry",hint:"Sorry"},
      ]
    },
    {
      id:"en_a1_2", title:"Числа 1-100", emoji:"🔢", level:"A1", group:"Основы",
      description:"Числа, счёт, математика",
      theory:"1-one, 2-two, 3-three, 4-four, 5-five, 6-six, 7-seven, 8-eight, 9-nine, 10-ten\n11-eleven, 12-twelve, 13-thirteen, 14-fourteen, 15-fifteen\n16-sixteen, 17-seventeen, 18-eighteen, 19-nineteen, 20-twenty\n30-thirty, 40-forty, 50-fifty, 60-sixty, 70-seventy, 80-eighty, 90-ninety, 100-one hundred\n21-twenty-one, 35-thirty-five",
      words:[
        {word:"Twenty",translation:"Двадцать",example:"Twenty students in class."},
        {word:"Fifty",translation:"Пятьдесят",example:"Fifty percent."},
        {word:"Hundred",translation:"Сто",example:"One hundred dollars."},
      ],
      questions:[
        {type:"choice",q:"Как по-английски '7'?",options:["Six","Eight","Seven","Nine"],answer:"Seven"},
        {type:"choice",q:"Что значит 'twelve'?",options:["11","12","13","20"],answer:"12"},
        {type:"input",q:"Напиши цифрами: 'nineteen'",answer:"19",hint:"19"},
        {type:"choice",q:"'Forty' — это:",options:["14","4","40","400"],answer:"40"},
        {type:"input",q:"Как по-английски '100'?",answer:"one hundred",hint:"one hundred"},
        {type:"choice",q:"'Seventy-five' — это:",options:["57","75","705","570"],answer:"75"},
        {type:"input",q:"Напиши словами число 13",answer:"thirteen",hint:"thirteen"},
        {type:"choice",q:"Как написать '21'?",options:["Twelve-one","Twenty-one","Two-one","Twone"],answer:"Twenty-one"},
      ]
    },
    {
      id:"en_a1_3", title:"Цвета и формы", emoji:"🎨", level:"A1", group:"Основы",
      description:"Цвета, формы, описание предметов",
      theory:"Цвета: Red-красный, Blue-синий, Green-зелёный, Yellow-жёлтый, Black-чёрный, White-белый, Orange-оранжевый, Purple-фиолетовый, Pink-розовый, Brown-коричневый, Grey-серый\nФормы: Circle-круг, Square-квадрат, Triangle-треугольник, Rectangle-прямоугольник",
      words:[
        {word:"Red",translation:"Красный",example:"Red roses are beautiful."},
        {word:"Blue",translation:"Синий/Голубой",example:"The sky is blue."},
        {word:"Circle",translation:"Круг",example:"Draw a circle."},
      ],
      questions:[
        {type:"choice",q:"'Blue' — это:",options:["Зелёный","Красный","Синий","Жёлтый"],answer:"Синий"},
        {type:"input",q:"Переведи: 'Чёрный'",answer:"black",hint:"black"},
        {type:"choice",q:"Что значит 'Yellow'?",options:["Розовый","Оранжевый","Жёлтый","Коричневый"],answer:"Жёлтый"},
        {type:"input",q:"Как по-английски 'Зелёный'?",answer:"green",hint:"green"},
        {type:"choice",q:"'Purple' — это:",options:["Розовый","Фиолетовый","Серый","Коричневый"],answer:"Фиолетовый"},
        {type:"choice",q:"Как по-английски 'Круг'?",options:["Square","Triangle","Circle","Rectangle"],answer:"Circle"},
        {type:"input",q:"Переведи: 'Белый'",answer:"white",hint:"white"},
        {type:"choice",q:"'Grey' — это:",options:["Синий","Зелёный","Серый","Коричневый"],answer:"Серый"},
      ]
    },
    {
      id:"en_a1_4", title:"Семья", emoji:"👨‍👩‍👧‍👦", level:"A1", group:"Люди",
      description:"Члены семьи, родственники",
      theory:"• Mother/Mom — Мама\n• Father/Dad — Папа\n• Sister — Сестра\n• Brother — Брат\n• Grandmother — Бабушка\n• Grandfather — Дедушка\n• Son — Сын\n• Daughter — Дочь\n• Wife — Жена\n• Husband — Муж\n• Baby — Малыш\n• Parents — Родители\n• Children — Дети",
      words:[
        {word:"Mother",translation:"Мама",example:"My mother is a doctor."},
        {word:"Father",translation:"Папа",example:"My father works from home."},
        {word:"Sister",translation:"Сестра",example:"I have two sisters."},
        {word:"Brother",translation:"Брат",example:"My brother is older."},
      ],
      questions:[
        {type:"choice",q:"'Grandmother' — это:",options:["Мама","Тётя","Бабушка","Сестра"],answer:"Бабушка"},
        {type:"input",q:"Переведи: 'Брат'",answer:"brother",hint:"brother"},
        {type:"choice",q:"'My sister is young' означает:",options:["Моя сестра старая","Моя сестра молодая","У меня нет сестры","Моя сестра красивая"],answer:"Моя сестра молодая"},
        {type:"input",q:"Как по-английски 'Муж'?",answer:"husband",hint:"husband"},
        {type:"choice",q:"'Children' — это:",options:["Ребёнок","Дети","Родители","Семья"],answer:"Дети"},
        {type:"input",q:"Переведи: 'Дочь'",answer:"daughter",hint:"daughter"},
        {type:"choice",q:"Как сказать 'Папа' (неформально)?",options:["Father","Parent","Dad","Son"],answer:"Dad"},
        {type:"input",q:"Переведи: 'Родители'",answer:"parents",hint:"parents"},
      ]
    },
    {
      id:"en_a1_5", title:"Еда и напитки", emoji:"🍕", level:"A1", group:"Еда",
      description:"Продукты, кафе, предпочтения",
      theory:"• Water — Вода\n• Coffee — Кофе\n• Tea — Чай\n• Milk — Молоко\n• Bread — Хлеб\n• Apple — Яблоко\n• Chicken — Курица\n• Rice — Рис\n• Salad — Салат\n• Cake — Торт\n• I'd like... — Я бы хотел...\n• Can I have...? — Можно мне...?\n• Delicious — Вкусный\n• Hungry — Голодный",
      words:[
        {word:"Water",translation:"Вода",example:"Can I have water, please?"},
        {word:"Coffee",translation:"Кофе",example:"I drink coffee every morning."},
        {word:"Bread",translation:"Хлеб",example:"Fresh bread is delicious."},
        {word:"Apple",translation:"Яблоко",example:"An apple a day..."},
      ],
      questions:[
        {type:"choice",q:"'Water' — это:",options:["Молоко","Вода","Сок","Чай"],answer:"Вода"},
        {type:"input",q:"Переведи: 'Яблоко'",answer:"apple",hint:"apple"},
        {type:"choice",q:"'I'd like coffee' означает:",options:["У вас есть кофе?","Я не хочу кофе","Я бы хотел кофе","Кофе готово"],answer:"Я бы хотел кофе"},
        {type:"input",q:"Как по-английски 'Хлеб'?",answer:"bread",hint:"bread"},
        {type:"choice",q:"'Hungry' означает:",options:["Сытый","Голодный","Вкусный","Свежий"],answer:"Голодный"},
        {type:"input",q:"Как попросить воду?",answer:"can i have water please",hint:"Can I have water, please?"},
        {type:"choice",q:"'Delicious' — это:",options:["Свежий","Горячий","Вкусный","Холодный"],answer:"Вкусный"},
        {type:"input",q:"Переведи: 'Молоко'",answer:"milk",hint:"milk"},
      ]
    },
    {
      id:"en_a1_6", title:"Дни и время", emoji:"📅", level:"A1", group:"Время",
      description:"Дни недели, время, распорядок дня",
      theory:"Дни: Monday-понедельник, Tuesday-вторник, Wednesday-среда, Thursday-четверг, Friday-пятница, Saturday-суббота, Sunday-воскресенье\nВремя: morning-утро, afternoon-день, evening-вечер, night-ночь\n• What time is it? — Который час?\n• It's 3 o'clock — 3 часа\n• Today — Сегодня, Tomorrow — Завтра, Yesterday — Вчера",
      words:[
        {word:"Monday",translation:"Понедельник",example:"Monday is the first day of the week."},
        {word:"Weekend",translation:"Выходные",example:"I love weekends!"},
        {word:"Tomorrow",translation:"Завтра",example:"See you tomorrow!"},
      ],
      questions:[
        {type:"choice",q:"'Wednesday' — это:",options:["Вторник","Среда","Четверг","Пятница"],answer:"Среда"},
        {type:"input",q:"Как по-английски 'Пятница'?",answer:"friday",hint:"Friday"},
        {type:"choice",q:"'What time is it?' означает:",options:["Какой день?","Который час?","Какой год?","Когда?"],answer:"Который час?"},
        {type:"input",q:"Переведи: 'Вчера'",answer:"yesterday",hint:"yesterday"},
        {type:"choice",q:"'Morning' — это:",options:["Вечер","День","Ночь","Утро"],answer:"Утро"},
        {type:"input",q:"Как по-английски 'Воскресенье'?",answer:"sunday",hint:"Sunday"},
        {type:"choice",q:"'Tonight' означает:",options:["Сегодня утром","Сегодня вечером","Завтра ночью","Вчера вечером"],answer:"Сегодня вечером"},
        {type:"input",q:"Переведи: 'Выходные'",answer:"weekend",hint:"weekend"},
      ]
    },
    // ===== A2 =====
    {
      id:"en_a2_1", title:"Путешествия", emoji:"✈️", level:"A2", group:"Путешествия",
      description:"Аэропорт, отель, транспорт",
      theory:"• Airport — Аэропорт\n• Hotel — Отель\n• Passport — Паспорт\n• Ticket — Билет\n• Where is...? — Где находится...?\n• How much is it? — Сколько стоит?\n• I need help — Мне нужна помощь\n• Check in/out — Заселение/выезд\n• Train station — Вокзал\n• Single/Double room — Одноместный/двухместный номер\n• Reservation — Бронирование",
      words:[
        {word:"Airport",translation:"Аэропорт",example:"The airport is 30km away."},
        {word:"Passport",translation:"Паспорт",example:"Don't forget your passport!"},
        {word:"Reservation",translation:"Бронирование",example:"I have a reservation."},
      ],
      questions:[
        {type:"choice",q:"'Passport' — это:",options:["Билет","Паспорт","Отель","Виза"],answer:"Паспорт"},
        {type:"choice",q:"'How much is it?' означает:",options:["Где это?","Сколько стоит?","Когда отправление?","Как туда?"],answer:"Сколько стоит?"},
        {type:"input",q:"Переведи: 'Билет'",answer:"ticket",hint:"ticket"},
        {type:"choice",q:"'Check out' — это:",options:["Заселение","Выезд","Завтрак","Номер"],answer:"Выезд"},
        {type:"input",q:"Как попросить помощь?",answer:"i need help",hint:"I need help"},
        {type:"choice",q:"'Train station' — это:",options:["Аэропорт","Автобусная остановка","Вокзал","Метро"],answer:"Вокзал"},
        {type:"input",q:"Переведи: 'Бронирование'",answer:"reservation",hint:"reservation"},
        {type:"choice",q:"'Single room' — это:",options:["Двухместный номер","Одноместный номер","Люкс","Общий номер"],answer:"Одноместный номер"},
      ]
    },
    {
      id:"en_a2_2", title:"Работа и профессии", emoji:"💼", level:"A2", group:"Работа",
      description:"Профессии, рабочее место, карьера",
      theory:"• Doctor — Врач\n• Teacher — Учитель\n• Engineer — Инженер\n• Manager — Менеджер\n• Programmer — Программист\n• Designer — Дизайнер\n• Lawyer — Юрист\n• Accountant — Бухгалтер\n• I work as a... — Я работаю как...\n• What do you do? — Кем ты работаешь?\n• Office — Офис\n• Salary — Зарплата\n• Boss — Начальник",
      words:[
        {word:"Doctor",translation:"Врач",example:"She is a great doctor."},
        {word:"Engineer",translation:"Инженер",example:"He works as an engineer."},
        {word:"Salary",translation:"Зарплата",example:"Good salary is important."},
      ],
      questions:[
        {type:"choice",q:"'What do you do?' означает:",options:["Что ты делаешь сейчас?","Кем ты работаешь?","Где ты живёшь?","Как дела?"],answer:"Кем ты работаешь?"},
        {type:"input",q:"Переведи: 'Учитель'",answer:"teacher",hint:"teacher"},
        {type:"choice",q:"'Lawyer' — это:",options:["Врач","Юрист","Инженер","Менеджер"],answer:"Юрист"},
        {type:"input",q:"Как по-английски 'Зарплата'?",answer:"salary",hint:"salary"},
        {type:"choice",q:"'I work as a programmer' означает:",options:["Я хочу быть программистом","Я работаю программистом","Я знаю программирование","Я учился на программиста"],answer:"Я работаю программистом"},
        {type:"input",q:"Переведи: 'Начальник'",answer:"boss",hint:"boss"},
        {type:"choice",q:"'Accountant' — это:",options:["Менеджер","Дизайнер","Бухгалтер","Инженер"],answer:"Бухгалтер"},
        {type:"input",q:"Переведи: 'Офис'",answer:"office",hint:"office"},
      ]
    },
    {
      id:"en_a2_3", title:"Покупки", emoji:"🛍️", level:"A2", group:"Повседневная жизнь",
      description:"Магазин, цены, размеры",
      theory:"• Shop/Store — Магазин\n• Price — Цена\n• Expensive — Дорогой\n• Cheap — Дешёвый\n• Size — Размер\n• Receipt — Чек\n• Sale — Распродажа\n• Discount — Скидка\n• Cash — Наличные\n• Card — Карта\n• Can I try it on? — Можно примерить?\n• Too big/small — Слишком большой/маленький",
      words:[
        {word:"Expensive",translation:"Дорогой",example:"This is too expensive."},
        {word:"Discount",translation:"Скидка",example:"50% discount today!"},
        {word:"Receipt",translation:"Чек",example:"Can I have the receipt?"},
      ],
      questions:[
        {type:"choice",q:"'Cheap' — это:",options:["Дорогой","Дешёвый","Бесплатный","Новый"],answer:"Дешёвый"},
        {type:"input",q:"Как спросить о примерке?",answer:"can i try it on",hint:"Can I try it on?"},
        {type:"choice",q:"'Sale' означает:",options:["Продажа/Распродажа","Покупка","Возврат","Обмен"],answer:"Продажа/Распродажа"},
        {type:"input",q:"Переведи: 'Скидка'",answer:"discount",hint:"discount"},
        {type:"choice",q:"'Too small' означает:",options:["Слишком большой","Слишком маленький","Хорошо подходит","Красивый"],answer:"Слишком маленький"},
        {type:"input",q:"Как по-английски 'Чек'?",answer:"receipt",hint:"receipt"},
        {type:"choice",q:"'Cash or card?' означает:",options:["Дорого или дёшево?","Наличные или карта?","Купить или вернуть?","Большой или маленький?"],answer:"Наличные или карта?"},
        {type:"input",q:"Переведи: 'Размер'",answer:"size",hint:"size"},
      ]
    },
    {
      id:"en_a2_4", title:"Здоровье", emoji:"🏥", level:"A2", group:"Здоровье",
      description:"Самочувствие, симптомы, у врача",
      theory:"• I feel sick — Я чувствую себя плохо\n• Headache — Головная боль\n• Fever — Температура\n• Cold — Простуда\n• Medicine — Лекарство\n• Doctor — Врач\n• Hospital — Больница\n• Appointment — Приём (у врача)\n• Prescription — Рецепт\n• Allergy — Аллергия\n• I have a pain in... — У меня болит...",
      words:[
        {word:"Headache",translation:"Головная боль",example:"I have a terrible headache."},
        {word:"Fever",translation:"Температура",example:"She has a high fever."},
        {word:"Medicine",translation:"Лекарство",example:"Take this medicine twice a day."},
      ],
      questions:[
        {type:"choice",q:"'I feel sick' означает:",options:["Я здоров","Я устал","Я болен","Я голоден"],answer:"Я болен"},
        {type:"input",q:"Переведи: 'Головная боль'",answer:"headache",hint:"headache"},
        {type:"choice",q:"'Fever' — это:",options:["Простуда","Температура","Боль","Аллергия"],answer:"Температура"},
        {type:"input",q:"Как по-английски 'Больница'?",answer:"hospital",hint:"hospital"},
        {type:"choice",q:"'Prescription' — это:",options:["Рецепт","Диагноз","Анализ","Операция"],answer:"Рецепт"},
        {type:"input",q:"Переведи: 'Аллергия'",answer:"allergy",hint:"allergy"},
        {type:"choice",q:"'Make an appointment' означает:",options:["Принять лекарство","Записаться на приём","Позвонить в скорую","Выписаться из больницы"],answer:"Записаться на приём"},
        {type:"input",q:"Как сказать 'У меня болит голова'?",answer:"i have a headache",hint:"I have a headache"},
      ]
    },
    // ===== B1 =====
    {
      id:"en_b1_1", title:"Настоящее время", emoji:"⏰", level:"B1", group:"Грамматика",
      description:"Present Simple vs Present Continuous",
      theory:"Present Simple (факты, привычки):\n• I work / She works\n• I don't work / She doesn't work\n• Do you work? / Does she work?\nПрисутствие: always, usually, often, sometimes, never\n\nPresent Continuous (прямо сейчас):\n• I am working / She is working\n• I'm not working / She isn't working\n• Are you working?\nПрисутствие: now, at the moment, currently, today",
      words:[
        {word:"Usually",translation:"Обычно",example:"I usually wake up at 7."},
        {word:"Currently",translation:"В настоящее время",example:"She is currently working."},
      ],
      questions:[
        {type:"choice",q:"Выберите правильный вариант: 'She ___ coffee every morning.'",options:["is drinking","drinks","drink","are drinking"],answer:"drinks"},
        {type:"choice",q:"'I ___ TV right now.' (смотрю прямо сейчас)",options:["watch","am watching","watches","watched"],answer:"am watching"},
        {type:"input",q:"Поставь в отрицание: 'She works here.'",answer:"she doesn't work here",hint:"She doesn't work here."},
        {type:"choice",q:"'He always ___ to work by car.'",options:["is going","go","goes","going"],answer:"goes"},
        {type:"choice",q:"Когда используем Present Continuous?",options:["Для привычек","Для прямо сейчас","Для прошлого","Для будущего"],answer:"Для прямо сейчас"},
        {type:"input",q:"Составь вопрос: you / work / do / here",answer:"do you work here",hint:"Do you work here?"},
        {type:"choice",q:"'They ___ a meeting at the moment.'",options:["have","are having","has","is having"],answer:"are having"},
        {type:"input",q:"Переведи: 'Она обычно читает книги вечером.'",answer:"she usually reads books in the evening",hint:"She usually reads books in the evening."},
      ]
    },
    {
      id:"en_b1_2", title:"Прошедшее время", emoji:"⌛", level:"B1", group:"Грамматика",
      description:"Past Simple и неправильные глаголы",
      theory:"Past Simple — завершённое прошлое:\n• Regular: work → worked, play → played\n• Irregular: go → went, see → saw, eat → ate\n• have → had, do → did, make → made\n• come → came, get → got, give → gave\n• know → knew, take → took, think → thought\nОтрицание: didn't + V1\nВопрос: Did + подлежащее + V1?",
      words:[
        {word:"Yesterday",translation:"Вчера",example:"I went to the gym yesterday."},
        {word:"Last week",translation:"На прошлой неделе",example:"Last week was great."},
      ],
      questions:[
        {type:"choice",q:"Past Simple от 'go':",options:["goed","gone","went","goes"],answer:"went"},
        {type:"input",q:"Поставь в прошедшее: 'She eats breakfast.'",answer:"she ate breakfast",hint:"She ate breakfast."},
        {type:"choice",q:"'Did you ___ the film?' (смотреть)",options:["saw","see","seen","seeing"],answer:"see"},
        {type:"input",q:"Переведи: 'Я не знал об этом.'",answer:"i didn't know about it",hint:"I didn't know about it."},
        {type:"choice",q:"Past Simple от 'make':",options:["maked","maked","made","maken"],answer:"made"},
        {type:"input",q:"Поставь в отрицание: 'He came yesterday.'",answer:"he didn't come yesterday",hint:"He didn't come yesterday."},
        {type:"choice",q:"'Where ___ you last weekend?'",options:["are","were","was","did"],answer:"were"},
        {type:"input",q:"Составь вопрос: did / she / what / eat",answer:"what did she eat",hint:"What did she eat?"},
      ]
    },
    {
      id:"en_b1_3", title:"Будущее время", emoji:"🔮", level:"B1", group:"Грамматика",
      description:"Will, Going to, Present Continuous для будущего",
      theory:"Will — спонтанные решения, предсказания:\n• I'll help you. / It will rain.\nGoing to — планы, намерения:\n• I'm going to visit Paris.\nPresent Continuous — договорённости:\n• I'm meeting John tomorrow.\n\nWill: I will/won't + V\nGoing to: am/is/are going to + V",
      words:[
        {word:"Probably",translation:"Вероятно",example:"It will probably rain."},
        {word:"Plan",translation:"Планировать",example:"I'm planning to travel."},
      ],
      questions:[
        {type:"choice",q:"Спонтанное решение: 'The phone is ringing.' — '___ answer it!'",options:["I'm going to","I","I'll","I going to"],answer:"I'll"},
        {type:"choice",q:"План заранее: '___ visit my parents this weekend.'",options:["I'll","I'm going to","I","I goes"],answer:"I'm going to"},
        {type:"input",q:"Переведи: 'Она, вероятно, опоздает.'",answer:"she will probably be late",hint:"She will probably be late."},
        {type:"choice",q:"'Look at those clouds! It ___ rain.'",options:["will","is going to","goes to","would"],answer:"is going to"},
        {type:"input",q:"Поставь в отрицание с will: 'I will come.'",answer:"i won't come",hint:"I won't come."},
        {type:"choice",q:"'I ___ dinner with Anna tonight.' (договорились заранее)",options:["will have","am having","have","had"],answer:"am having"},
        {type:"input",q:"Составь вопрос: will / what / you / do / tomorrow",answer:"what will you do tomorrow",hint:"What will you do tomorrow?"},
        {type:"choice",q:"'Will' используется для:",options:["Только планов","Только предсказаний","Спонтанных решений и предсказаний","Прошлых событий"],answer:"Спонтанных решений и предсказаний"},
      ]
    },
    {
      id:"en_b1_4", title:"Условные предложения", emoji:"🤔", level:"B1", group:"Грамматика",
      description:"If-clauses: Zero, First, Second Conditional",
      theory:"Zero Conditional (факты):\n• If + Present Simple, Present Simple\n• If you heat water to 100°C, it boils.\n\nFirst Conditional (реальное будущее):\n• If + Present Simple, will + V\n• If it rains, I'll stay home.\n\nSecond Conditional (нереальное/маловероятное):\n• If + Past Simple, would + V\n• If I had money, I would travel.",
      words:[
        {word:"Condition",translation:"Условие",example:"Under one condition..."},
        {word:"Unless",translation:"Если не / Кроме если",example:"Unless you hurry, you'll be late."},
      ],
      questions:[
        {type:"choice",q:"'If I ___ you, I would apologize.' (Second Conditional)",options:["am","were","will be","be"],answer:"were"},
        {type:"choice",q:"'If it rains, we ___ cancel the trip.' (First Conditional)",options:["would","will","can","should"],answer:"will"},
        {type:"input",q:"Переведи (Second Conditional): 'Если бы я был богатым, я бы купил яхту.'",answer:"if i were rich i would buy a yacht",hint:"If I were rich, I would buy a yacht."},
        {type:"choice",q:"Zero Conditional: 'If you mix red and blue, you ___ purple.'",options:["will get","get","got","would get"],answer:"get"},
        {type:"input",q:"Составь First Conditional: 'изучить / английский / найти / лучшую работу'",answer:"if i learn english i will find a better job",hint:"If I learn English, I will find a better job."},
        {type:"choice",q:"Какое условие нереальное/маловероятное?",options:["Zero","First","Second","Third"],answer:"Second"},
        {type:"input",q:"Переведи: 'Если не поторопишься, опоздаешь.'",answer:"unless you hurry you'll be late",hint:"Unless you hurry, you'll be late."},
        {type:"choice",q:"'If I ___ harder, I would have passed.' (Third Conditional)",options:["studied","had studied","study","would study"],answer:"had studied"},
      ]
    },
    // ===== B2 =====
    {
      id:"en_b2_1", title:"Бизнес английский", emoji:"💼", level:"B2", group:"Бизнес",
      description:"Переговоры, презентации, деловая переписка",
      theory:"Переговоры:\n• I'd like to propose... — Я хотел бы предложить...\n• Could we consider...? — Могли бы мы рассмотреть...?\n• That's a fair point — Это справедливое замечание\n• I'm afraid I can't agree — Боюсь, не могу согласиться\n\nПрезентации:\n• To begin with... — Для начала...\n• Moving on to... — Переходя к...\n• In conclusion... — В заключение...\n\nПереписка:\n• I am writing with regard to... — Пишу по поводу...\n• Please find attached... — Во вложении...",
      words:[
        {word:"Proposal",translation:"Предложение/Предложение о сотрудничестве",example:"Let me make a proposal."},
        {word:"Deadline",translation:"Дедлайн/Срок",example:"The deadline is Friday."},
        {word:"Budget",translation:"Бюджет",example:"We need to discuss the budget."},
      ],
      questions:[
        {type:"choice",q:"'Please find attached' в письме означает:",options:["Пожалуйста, найдите меня","Во вложении вы найдёте","Пожалуйста, прикрепите","Найдите прикреплённое"],answer:"Во вложении вы найдёте"},
        {type:"input",q:"Как начать деловое письмо по поводу встречи?",answer:"i am writing with regard to our meeting",hint:"I am writing with regard to our meeting."},
        {type:"choice",q:"'That's a fair point' в переговорах:",options:["Это несправедливо","Это справедливое замечание","Я не согласен","Это неважно"],answer:"Это справедливое замечание"},
        {type:"input",q:"Переведи: 'Дедлайн'",answer:"deadline",hint:"deadline"},
        {type:"choice",q:"'In conclusion' используется:",options:["В начале презентации","В середине","В конце","После вопросов"],answer:"В конце"},
        {type:"input",q:"Как вежливо не согласиться в переговорах?",answer:"i'm afraid i can't agree",hint:"I'm afraid I can't agree."},
        {type:"choice",q:"'Moving on to our next point' означает:",options:["Возвращаясь к началу","Переходя к следующему пункту","Завершая презентацию","Отвечая на вопросы"],answer:"Переходя к следующему пункту"},
        {type:"input",q:"Переведи: 'Бюджет'",answer:"budget",hint:"budget"},
      ]
    },
    {
      id:"en_b2_2", title:"Идиомы и фразеологизмы", emoji:"🎭", level:"B2", group:"Продвинутый",
      description:"Устойчивые выражения в разговорном английском",
      theory:"Популярные идиомы:\n• Break a leg! — Ни пуха ни пера!\n• Hit the nail on the head — Попасть в точку\n• Under the weather — Нездоровится\n• Cost an arm and a leg — Стоить целое состояние\n• Bite the bullet — Стиснуть зубы\n• Spill the beans — Выболтать секрет\n• It's a piece of cake — Это пустяк\n• Once in a blue moon — Очень редко\n• Burn bridges — Сжигать мосты\n• Hit the books — Взяться за учёбу",
      words:[
        {word:"Break a leg",translation:"Ни пуха ни пера (удачи)",example:"Break a leg at your interview!"},
        {word:"Piece of cake",translation:"Пустяк / Проще простого",example:"This test was a piece of cake!"},
      ],
      questions:[
        {type:"choice",q:"'Break a leg!' означает:",options:["Сломай ногу!","Ни пуха ни пера!","Беги быстрее!","Будь осторожен!"],answer:"Ни пуха ни пера!"},
        {type:"choice",q:"'I'm feeling under the weather' означает:",options:["Я на улице","Мне нехорошо/Нездоровится","Я под дождём","Мне жарко"],answer:"Мне нехорошо/Нездоровится"},
        {type:"input",q:"Переведи: 'It's a piece of cake.'",answer:"it's easy / it's a piece of cake",hint:"Это пустяк / Проще простого"},
        {type:"choice",q:"'Spill the beans' означает:",options:["Просыпать бобы","Выболтать секрет","Приготовить еду","Сделать ошибку"],answer:"Выболтать секрет"},
        {type:"choice",q:"'Once in a blue moon' означает:",options:["Раз в жизни","Каждый день","Очень редко","Никогда"],answer:"Очень редко"},
        {type:"input",q:"Как сказать 'взяться за учёбу' идиомой?",answer:"hit the books",hint:"Hit the books"},
        {type:"choice",q:"'Cost an arm and a leg' означает:",options:["Стоить дёшево","Стоить целое состояние","Быть бесплатным","Стоить средне"],answer:"Стоить целое состояние"},
        {type:"choice",q:"'Hit the nail on the head' означает:",options:["Ударить по гвоздю","Сделать ошибку","Попасть в точку","Решить проблему силой"],answer:"Попасть в точку"},
      ]
    },
    // ===== C1 =====
    {
      id:"en_c1_1", title:"Сложные конструкции", emoji:"🧠", level:"C1", group:"Экспертный",
      description:"Инверсия, эмфаза, сложный синтаксис",
      theory:"Инверсия (формальный стиль):\n• Never have I seen such beauty.\n• Not only did he lie, but he also stole.\n• Rarely does she make mistakes.\n• Had I known, I would have helped.\n\nЭмфатические конструкции:\n• It was John who called. (не кто-то другой)\n• What I need is more time.\n• The fact that she left surprised us.\n\nNominalization:\n• decide → decision\n• investigate → investigation",
      words:[
        {word:"Inversion",translation:"Инверсия (обратный порядок слов)",example:"Never have I seen this."},
        {word:"Emphasis",translation:"Эмфаза/Усиление",example:"It WAS important."},
      ],
      questions:[
        {type:"choice",q:"Инверсия: 'Never ___ such a film.'",options:["I have seen","have I seen","I saw","did I see"],answer:"have I seen"},
        {type:"input",q:"Перефразируй с инверсией: 'I had never been so scared.'",answer:"never had i been so scared",hint:"Never had I been so scared."},
        {type:"choice",q:"Эмфатическая конструкция: '___ John who broke the window.'",options:["It is","That was","He was","There was"],answer:"It is"},
        {type:"input",q:"Образуй номинализацию от 'investigate'",answer:"investigation",hint:"investigation"},
        {type:"choice",q:"'Not only did he fail, ___ he refused to try again.'",options:["but also","and","or","yet"],answer:"but also"},
        {type:"input",q:"Перефразируй: 'I rarely see him.' (инверсия)",answer:"rarely do i see him",hint:"Rarely do I see him."},
        {type:"choice",q:"'What I enjoy most ___ travelling.'",options:["is","are","am","be"],answer:"is"},
        {type:"input",q:"Образуй номинализацию от 'decide'",answer:"decision",hint:"decision"},
      ]
    },
    {
      id:"en_c1_2", title:"Академический английский", emoji:"🎓", level:"C1", group:"Экспертный",
      description:"Эссе, аргументация, академический стиль",
      theory:"Структура эссе:\n• Introduction: thesis statement\n• Body paragraphs: topic sentence + evidence + analysis\n• Conclusion: restate thesis + implications\n\nАкадемические связки:\n• Furthermore / Moreover — Более того\n• Nevertheless / However — Тем не менее\n• Consequently — Следовательно\n• In contrast — В отличие от этого\n• It could be argued that... — Можно утверждать, что...\n• The evidence suggests... — Данные свидетельствуют о том, что...",
      words:[
        {word:"Furthermore",translation:"Более того/Кроме того",example:"Furthermore, studies show..."},
        {word:"Nevertheless",translation:"Тем не менее",example:"Nevertheless, we must continue."},
        {word:"Consequently",translation:"Следовательно",example:"Consequently, prices rose."},
      ],
      questions:[
        {type:"choice",q:"Какая связка выражает противопоставление?",options:["Furthermore","Consequently","Nevertheless","Therefore"],answer:"Nevertheless"},
        {type:"input",q:"Переведи академически: 'Более того, исследования показывают...'",answer:"furthermore studies show",hint:"Furthermore, studies show..."},
        {type:"choice",q:"'It could be argued that...' используется для:",options:["Прямых утверждений","Осторожных/взвешенных утверждений","Опровержений","Выводов"],answer:"Осторожных/взвешенных утверждений"},
        {type:"input",q:"Переведи: 'Следовательно'",answer:"consequently",hint:"Consequently"},
        {type:"choice",q:"Thesis statement находится в:",options:["Заключении","Введении","Основной части","После заключения"],answer:"Введении"},
        {type:"input",q:"Как академически выразить: 'Данные показывают, что...'",answer:"the evidence suggests that",hint:"The evidence suggests that..."},
        {type:"choice",q:"'In contrast' означает:",options:["Похожим образом","В отличие от этого","Следовательно","Более того"],answer:"В отличие от этого"},
        {type:"input",q:"Переведи: 'Тем не менее, мы должны продолжить.'",answer:"nevertheless we must continue",hint:"Nevertheless, we must continue."},
      ]
    },
  ],

  de: [
    {
      id:"de_a1_1", title:"Приветствия", emoji:"👋", level:"A1", group:"Основы",
      description:"Hallo, Guten Tag и первые фразы",
      theory:"• Hallo / Hi — Привет\n• Guten Morgen — Доброе утро\n• Guten Tag — Добрый день\n• Guten Abend — Добрый вечер\n• Auf Wiedersehen — До свидания\n• Tschüss — Пока\n• Wie geht es Ihnen? — Как дела? (вежл.)\n• Wie geht's? — Как дела? (неформ.)\n• Danke schön — Большое спасибо\n• Bitte sehr — Пожалуйста\n• Ich heiße... — Меня зовут...",
      words:[
        {word:"Hallo",translation:"Привет",example:"Hallo! Wie geht's?"},
        {word:"Danke",translation:"Спасибо",example:"Danke schön!"},
        {word:"Bitte",translation:"Пожалуйста",example:"Bitte sehr!"},
        {word:"Entschuldigung",translation:"Извините",example:"Entschuldigung, wo ist der Bahnhof?"},
      ],
      questions:[
        {type:"choice",q:"'Danke' означает:",options:["Привет","Пожалуйста","Спасибо","Пока"],answer:"Спасибо"},
        {type:"choice",q:"'Guten Morgen' — это:",options:["Добрый вечер","Доброе утро","Добрый день","Спокойной ночи"],answer:"Доброе утро"},
        {type:"input",q:"Переведи: 'Пока' (неформально)",answer:"tschüss",hint:"Tschüss"},
        {type:"choice",q:"'Auf Wiedersehen' означает:",options:["Привет","Спасибо","До свидания","Как дела?"],answer:"До свидания"},
        {type:"input",q:"Как по-немецки 'Извините'?",answer:"entschuldigung",hint:"Entschuldigung"},
        {type:"choice",q:"'Wie heißen Sie?' означает:",options:["Как дела?","Как вас зовут?","Сколько лет?","Где вы живёте?"],answer:"Как вас зовут?"},
        {type:"input",q:"Переведи: 'Меня зовут Анна'",answer:"ich heiße anna",hint:"Ich heiße Anna"},
        {type:"choice",q:"'Guten Abend' — это:",options:["Доброе утро","Добрый день","Добрый вечер","Спокойной ночи"],answer:"Добрый вечер"},
      ]
    },
    {
      id:"de_a1_2", title:"Артикли в немецком", emoji:"📝", level:"A1", group:"Грамматика",
      description:"Der, Die, Das — определённые артикли",
      theory:"Немецкий имеет 3 рода:\n• Der — мужской (der Mann, der Hund)\n• Die — женский (die Frau, die Katze)\n• Das — средний (das Kind, das Buch)\n\nМножественное число: die (для всех родов)\n• die Männer, die Frauen, die Kinder\n\nНеопределённые артикли:\n• ein (м.р.), eine (ж.р.), ein (с.р.)\n\nОтрицание:\n• kein/keine/kein — никакого/никакой",
      words:[
        {word:"Der Mann",translation:"Мужчина (м.р.)",example:"Der Mann ist groß."},
        {word:"Die Frau",translation:"Женщина (ж.р.)",example:"Die Frau ist klug."},
        {word:"Das Kind",translation:"Ребёнок (с.р.)",example:"Das Kind spielt."},
      ],
      questions:[
        {type:"choice",q:"Артикль слова 'Buch' (книга):",options:["der","die","das","ein"],answer:"das"},
        {type:"choice",q:"'Die Frau' — это:",options:["Мужской род","Женский род","Средний род","Множественное число"],answer:"Женский род"},
        {type:"input",q:"Множественное число: 'das Kind → die...'",answer:"kinder",hint:"Kinder"},
        {type:"choice",q:"Артикль слова 'Hund' (собака):",options:["der","die","das","ein"],answer:"der"},
        {type:"input",q:"Переведи с артиклем: 'женщина'",answer:"die frau",hint:"die Frau"},
        {type:"choice",q:"'Ein' используется с:",options:["Только мужским родом","Мужским и средним родом","Только женским родом","Всеми родами"],answer:"Мужским и средним родом"},
        {type:"input",q:"Как сказать 'Нет книги'?",answer:"kein buch",hint:"kein Buch"},
        {type:"choice",q:"'Die Katze' (кошка) — это:",options:["Мужской род","Средний род","Женский род","Множественное число"],answer:"Женский род"},
      ]
    },
    {
      id:"de_a1_3", title:"Числа и время", emoji:"🔢", level:"A1", group:"Основы",
      description:"Zahlen — числа, время, даты",
      theory:"1-ein, 2-zwei, 3-drei, 4-vier, 5-fünf\n6-sechs, 7-sieben, 8-acht, 9-neun, 10-zehn\n11-elf, 12-zwölf, 13-dreizehn, 20-zwanzig\n30-dreißig, 40-vierzig, 50-fünfzig, 100-hundert\n21-einundzwanzig (буквально: один-и-двадцать)\n\nВремя:\n• Wie viel Uhr ist es? — Который час?\n• Es ist drei Uhr — 3 часа\n• halb vier — половина четвёртого (3:30)",
      words:[
        {word:"Zwanzig",translation:"Двадцать",example:"Zwanzig Euro, bitte."},
        {word:"Hundert",translation:"Сто",example:"Einhundert Prozent."},
      ],
      questions:[
        {type:"choice",q:"Как по-немецки '5'?",options:["Vier","Sechs","Fünf","Drei"],answer:"Fünf"},
        {type:"input",q:"Напиши цифрами: 'zwanzig'",answer:"20",hint:"20"},
        {type:"choice",q:"'Dreißig' — это:",options:["13","3","30","300"],answer:"30"},
        {type:"input",q:"Как по-немецки 'двенадцать'?",answer:"zwölf",hint:"zwölf"},
        {type:"choice",q:"'Wie viel Uhr ist es?' означает:",options:["Какой день?","Который час?","Какой год?","Сколько стоит?"],answer:"Который час?"},
        {type:"input",q:"Как написать '21' по-немецки?",answer:"einundzwanzig",hint:"einundzwanzig"},
        {type:"choice",q:"'Halb vier' — это:",options:["4:00","3:30","4:30","3:15"],answer:"3:30"},
        {type:"input",q:"Переведи: 'сто'",answer:"hundert",hint:"hundert"},
      ]
    },
    {
      id:"de_a2_1", title:"Падежи в немецком", emoji:"📚", level:"A2", group:"Грамматика",
      description:"Nominativ, Akkusativ, Dativ",
      theory:"4 падежа:\n• Nominativ (кто? что?) — подлежащее\n  Der Mann kauft. Die Frau liest. Das Kind spielt.\n• Akkusativ (кого? что?) — прямое дополнение\n  Ich sehe den Mann / die Frau / das Kind\n• Dativ (кому? чему?) — косвенное дополнение\n  Ich helfe dem Mann / der Frau / dem Kind\n• Genitiv (кого? чего?) — принадлежность\n  Das Buch des Mannes\n\nАртикли меняются!",
      words:[
        {word:"Nominativ",translation:"Именительный падеж",example:"Der Hund bellt."},
        {word:"Akkusativ",translation:"Винительный падеж",example:"Ich sehe den Hund."},
        {word:"Dativ",translation:"Дательный падеж",example:"Ich gebe dem Hund Futter."},
      ],
      questions:[
        {type:"choice",q:"'Ich sehe ___ Mann.' (Akkusativ)",options:["der","den","dem","des"],answer:"den"},
        {type:"choice",q:"'___ Hund bellt.' (Nominativ м.р.)",options:["Den","Dem","Der","Des"],answer:"Der"},
        {type:"input",q:"Поставь в Akkusativ: 'die Frau'",answer:"die frau",hint:"die Frau (женский не меняется в Akk.)"},
        {type:"choice",q:"'Ich helfe ___ Frau.' (Dativ)",options:["die","der","den","das"],answer:"der"},
        {type:"input",q:"Поставь в Akkusativ: 'der Mann'",answer:"den mann",hint:"den Mann"},
        {type:"choice",q:"'Das Buch ___ Kindes' (Genitiv с.р.)",options:["der","des","dem","den"],answer:"des"},
        {type:"input",q:"Переведи: 'Я вижу женщину.'",answer:"ich sehe die frau",hint:"Ich sehe die Frau."},
        {type:"choice",q:"В Dativ мужской артикль:",options:["der","den","dem","des"],answer:"dem"},
      ]
    },
    {
      id:"de_a2_2", title:"Еда и ресторан", emoji:"🍽️", level:"A2", group:"Повседневная жизнь",
      description:"Заказ еды, ресторан, рецепты",
      theory:"• Speisekarte — Меню\n• Ich möchte bestellen — Я хотел бы заказать\n• Was empfehlen Sie? — Что вы рекомендуете?\n• Für mich bitte... — Для меня, пожалуйста...\n• Die Rechnung, bitte — Счёт, пожалуйста\n• Getränke — Напитки\n• Vorspeise — Закуска\n• Hauptgericht — Основное блюдо\n• Nachspeise/Dessert — Десерт\n• Vegetarisch — Вегетарианский\n• Gut schmecken — Вкусно",
      words:[
        {word:"Speisekarte",translation:"Меню",example:"Darf ich die Speisekarte haben?"},
        {word:"Hauptgericht",translation:"Основное блюдо",example:"Was ist das Hauptgericht heute?"},
        {word:"Rechnung",translation:"Счёт",example:"Die Rechnung, bitte!"},
      ],
      questions:[
        {type:"choice",q:"'Speisekarte' — это:",options:["Посетитель","Меню","Официант","Кухня"],answer:"Меню"},
        {type:"input",q:"Как попросить счёт?",answer:"die rechnung bitte",hint:"Die Rechnung, bitte!"},
        {type:"choice",q:"'Was empfehlen Sie?' означает:",options:["Что вы заказали?","Что вы рекомендуете?","Что у вас есть?","Что вкусно?"],answer:"Что вы рекомендуете?"},
        {type:"input",q:"Переведи: 'Основное блюдо'",answer:"hauptgericht",hint:"Hauptgericht"},
        {type:"choice",q:"'Vegetarisch' означает:",options:["Очень вкусный","Вегетарианский","Острый","Свежий"],answer:"Вегетарианский"},
        {type:"input",q:"Как сказать 'Я хотел бы заказать'?",answer:"ich möchte bestellen",hint:"Ich möchte bestellen"},
        {type:"choice",q:"'Nachspeise' — это:",options:["Закуска","Суп","Основное блюдо","Десерт"],answer:"Десерт"},
        {type:"input",q:"Переведи: 'Напитки'",answer:"getränke",hint:"Getränke"},
      ]
    },
    {
      id:"de_b1_1", title:"Модальные глаголы", emoji:"🎯", level:"B1", group:"Грамматика",
      description:"können, müssen, wollen, dürfen, sollen, mögen",
      theory:"Модальные глаголы:\n• können — мочь, уметь (I can)\n  Ich kann schwimmen.\n• müssen — должен (must/have to)\n  Ich muss arbeiten.\n• wollen — хотеть (want to)\n  Ich will reisen.\n• dürfen — иметь право (may/be allowed)\n  Darf ich...? — Можно мне...?\n• sollen — должен (по чьей-то воле)\n  Du sollst nicht lügen.\n• mögen — нравиться\n  Ich mag Musik.",
      words:[
        {word:"können",translation:"мочь, уметь",example:"Ich kann Deutsch sprechen."},
        {word:"müssen",translation:"должен (необходимость)",example:"Wir müssen lernen."},
        {word:"dürfen",translation:"иметь право, можно",example:"Darf ich fragen?"},
      ],
      questions:[
        {type:"choice",q:"'Ich ___ Deutsch sprechen.' (умею)",options:["muss","will","kann","darf"],answer:"kann"},
        {type:"choice",q:"'Du ___ nicht hier rauchen.' (не разрешено)",options:["kannst","musst","sollst","darfst"],answer:"darfst"},
        {type:"input",q:"Переведи: 'Мне нужно работать.'",answer:"ich muss arbeiten",hint:"Ich muss arbeiten."},
        {type:"choice",q:"'Ich ___ nach Paris reisen.' (хочу)",options:["muss","kann","will","soll"],answer:"will"},
        {type:"input",q:"Как спросить разрешение войти?",answer:"darf ich reinkommen",hint:"Darf ich reinkommen?"},
        {type:"choice",q:"'Sollen' выражает:",options:["Желание","Умение","Обязанность по чужой воле","Разрешение"],answer:"Обязанность по чужой воле"},
        {type:"input",q:"Переведи: 'Ты умеешь плавать?'",answer:"kannst du schwimmen",hint:"Kannst du schwimmen?"},
        {type:"choice",q:"'Ich mag Musik' означает:",options:["Я должен слушать музыку","Мне нравится музыка","Я хочу музыку","Я умею играть музыку"],answer:"Мне нравится музыка"},
      ]
    },
    {
      id:"de_b2_1", title:"Придаточные предложения", emoji:"🔗", level:"B2", group:"Грамматика",
      description:"Nebensätze — подчинительные союзы",
      theory:"Главное правило: в придаточном глагол ВСЕГДА в конце!\n\nСоюзы:\n• dass — что (I think that...)\n  Ich denke, dass er kommt.\n• weil — потому что\n  Ich lerne, weil es wichtig ist.\n• wenn — если/когда\n  Wenn es regnet, bleibe ich zuhause.\n• obwohl — хотя\n  Obwohl es kalt ist, gehe ich raus.\n• damit — чтобы (цель)\n  Ich lerne, damit ich Erfolg habe.",
      words:[
        {word:"weil",translation:"потому что",example:"Ich lerne, weil es wichtig ist."},
        {word:"obwohl",translation:"хотя",example:"Obwohl er müde ist, arbeitet er."},
        {word:"damit",translation:"чтобы (цель)",example:"Ich spare, damit ich reisen kann."},
      ],
      questions:[
        {type:"choice",q:"'Ich lerne Deutsch, ___ ich in Deutschland arbeiten will.'",options:["dass","weil","obwohl","wenn"],answer:"weil"},
        {type:"input",q:"Переведи с правильным порядком слов: 'Я думаю, что он придёт.'",answer:"ich denke dass er kommt",hint:"Ich denke, dass er kommt."},
        {type:"choice",q:"В придаточном предложении глагол стоит:",options:["В начале","После подлежащего","В конце","Перед союзом"],answer:"В конце"},
        {type:"input",q:"Переведи: 'Хотя он устал, он работает.'",answer:"obwohl er müde ist arbeitet er",hint:"Obwohl er müde ist, arbeitet er."},
        {type:"choice",q:"'Wenn es schneit, ___ ich Ski fahren.'",options:["will ich","ich will","ich wille","wille ich"],answer:"will ich"},
        {type:"input",q:"Переведи: 'Я экономлю, чтобы путешествовать.'",answer:"ich spare damit ich reisen kann",hint:"Ich spare, damit ich reisen kann."},
        {type:"choice",q:"Какой союз означает 'хотя'?",options:["weil","dass","damit","obwohl"],answer:"obwohl"},
        {type:"input",q:"Поставь глагол правильно: 'Ich weiß, dass er (kommen) ___.'",answer:"kommt",hint:"kommt"},
      ]
    },
    {
      id:"de_c1_1", title:"Konjunktiv II", emoji:"🎭", level:"C1", group:"Экспертный",
      description:"Сослагательное наклонение — вежливость и нереальность",
      theory:"Konjunktiv II используется для:\n1. Вежливых просьб:\n  Könnten Sie mir helfen? — Не могли бы вы помочь?\n  Würden Sie...? — Не могли бы вы...?\n\n2. Нереальных условий (как Second Conditional):\n  Wenn ich reich wäre, würde ich reisen.\n  (Если бы я был богат, я бы путешествовал.)\n\n3. Советов:\n  An deiner Stelle würde ich... — На твоём месте я бы...\n\nОбразование: würde + Infinitiv (для большинства глаголов)\nИсключения: wäre (sein), hätte (haben), könnte (können)",
      words:[
        {word:"würde",translation:"бы (вспомогат. глагол)",example:"Ich würde gerne kommen."},
        {word:"wäre",translation:"был бы (Konj. II от sein)",example:"Wenn ich reich wäre..."},
        {word:"hätte",translation:"имел бы (Konj. II от haben)",example:"Ich hätte gerne mehr Zeit."},
      ],
      questions:[
        {type:"choice",q:"Вежливая просьба: '___ Sie mir bitte helfen?'",options:["Können","Könnten","Konnte","Konnten"],answer:"Könnten"},
        {type:"input",q:"Переведи (Konj. II): 'Если бы я был богатым, я бы путешествовал.'",answer:"wenn ich reich wäre würde ich reisen",hint:"Wenn ich reich wäre, würde ich reisen."},
        {type:"choice",q:"'Ich ___ das gerne machen.' (хотел бы сделать)",options:["werde","würde","wäre","hätte"],answer:"würde"},
        {type:"input",q:"Как вежливо спросить: 'Не могли бы вы открыть окно?'",answer:"könnten sie das fenster öffnen",hint:"Könnten Sie das Fenster öffnen?"},
        {type:"choice",q:"Konjunktiv II от 'haben':",options:["hätte","hatte","haben","habe"],answer:"hätte"},
        {type:"input",q:"Переведи: 'На твоём месте я бы извинился.'",answer:"an deiner stelle würde ich mich entschuldigen",hint:"An deiner Stelle würde ich mich entschuldigen."},
        {type:"choice",q:"'An deiner Stelle würde ich...' используется для:",options:["Вежливых вопросов","Советов","Нереальных условий","Жалоб"],answer:"Советов"},
        {type:"input",q:"Konjunktiv II от 'sein'?",answer:"wäre",hint:"wäre"},
      ]
    },
  ],

  fr: [
    {
      id:"fr_a1_1", title:"Приветствия", emoji:"👋", level:"A1", group:"Основы",
      description:"Bonjour, Salut и первые фразы",
      theory:"• Bonjour — Добрый день / Привет\n• Salut — Привет (неформ.)\n• Bonsoir — Добрый вечер\n• Bonne nuit — Спокойной ночи\n• Au revoir — До свидания\n• À bientôt — До скорого\n• Merci (beaucoup) — Спасибо (большое)\n• De rien — Не за что\n• S'il vous plaît — Пожалуйста (вежл.)\n• Comment vous appelez-vous? — Как вас зовут?\n• Je m'appelle... — Меня зовут...",
      words:[
        {word:"Bonjour",translation:"Добрый день/Привет",example:"Bonjour! Comment allez-vous?"},
        {word:"Merci",translation:"Спасибо",example:"Merci beaucoup!"},
        {word:"Au revoir",translation:"До свидания",example:"Au revoir! À bientôt!"},
        {word:"Excusez-moi",translation:"Извините",example:"Excusez-moi, où est la gare?"},
      ],
      questions:[
        {type:"choice",q:"'Merci' означает:",options:["Привет","До свидания","Спасибо","Пожалуйста"],answer:"Спасибо"},
        {type:"choice",q:"Как неформально сказать 'Привет'?",options:["Bonjour","Bonsoir","Salut","Au revoir"],answer:"Salut"},
        {type:"input",q:"Переведи: 'До свидания'",answer:"au revoir",hint:"Au revoir"},
        {type:"choice",q:"'De rien' означает:",options:["Не за что","Пожалуйста (при просьбе)","Спасибо","Извините"],answer:"Не за что"},
        {type:"input",q:"Как сказать 'Меня зовут Пьер'?",answer:"je m'appelle pierre",hint:"Je m'appelle Pierre"},
        {type:"choice",q:"'Bonsoir' — это:",options:["Доброе утро","Добрый день","Добрый вечер","Спокойной ночи"],answer:"Добрый вечер"},
        {type:"input",q:"Переведи: 'Большое спасибо'",answer:"merci beaucoup",hint:"Merci beaucoup"},
        {type:"choice",q:"'À bientôt' означает:",options:["До свидания (навсегда)","До скорого","Добрый вечер","Привет"],answer:"До скорого"},
      ]
    },
    {
      id:"fr_a1_2", title:"Артикли французского", emoji:"📝", level:"A1", group:"Грамматика",
      description:"Le, La, Les, Un, Une — артикли",
      theory:"Определённые артикли:\n• le — мужской род: le garçon (мальчик)\n• la — женский род: la fille (девочка)\n• les — множественное число: les enfants\n• l' — перед гласной: l'ami, l'école\n\nНеопределённые артикли:\n• un — мужской: un chat (кот)\n• une — женский: une maison (дом)\n• des — множественное: des chats\n\nОтрицание: un/une → de/d'\nJe n'ai pas de chat.",
      words:[
        {word:"le garçon",translation:"мальчик (м.р.)",example:"Le garçon joue."},
        {word:"la fille",translation:"девочка (ж.р.)",example:"La fille chante."},
        {word:"l'ami",translation:"друг (перед гласной)",example:"L'ami arrive."},
      ],
      questions:[
        {type:"choice",q:"Артикль слова 'livre' (книга, м.р.):",options:["la","le","les","une"],answer:"le"},
        {type:"input",q:"Поставь артикль: '___ école' (перед гласной)",answer:"l'école",hint:"l'école"},
        {type:"choice",q:"'Une' используется с:",options:["Мужским родом","Женским родом","Множественным числом","Всеми родами"],answer:"Женским родом"},
        {type:"input",q:"Переведи с артиклем: 'кот' (м.р., неопр.)",answer:"un chat",hint:"un chat"},
        {type:"choice",q:"В отрицании 'un/une' меняется на:",options:["le/la","de/d'","les","des"],answer:"de/d'"},
        {type:"input",q:"Множественное число: 'le chat → ___'",answer:"les chats",hint:"les chats"},
        {type:"choice",q:"'Les' используется для:",options:["Мужского рода","Женского рода","Множественного числа","Перед гласной"],answer:"Множественного числа"},
        {type:"input",q:"Переведи: 'у меня нет кота' (отрицание)",answer:"je n'ai pas de chat",hint:"Je n'ai pas de chat."},
      ]
    },
    {
      id:"fr_a1_3", title:"Числа и счёт", emoji:"🔢", level:"A1", group:"Основы",
      description:"Les chiffres — числа 1-100",
      theory:"1-un/une, 2-deux, 3-trois, 4-quatre, 5-cinq\n6-six, 7-sept, 8-huit, 9-neuf, 10-dix\n11-onze, 12-douze, 13-treize, 14-quatorze, 15-quinze\n16-seize, 17-dix-sept, 18-dix-huit, 19-dix-neuf\n20-vingt, 30-trente, 40-quarante, 50-cinquante\n60-soixante, 70-soixante-dix (60+10!)\n80-quatre-vingts (4×20!), 90-quatre-vingt-dix\n100-cent",
      words:[
        {word:"Vingt",translation:"Двадцать",example:"Vingt euros."},
        {word:"Soixante-dix",translation:"Семьдесят (60+10)",example:"Il a soixante-dix ans."},
        {word:"Quatre-vingts",translation:"Восемьдесят (4×20)",example:"Quatre-vingts kilos."},
      ],
      questions:[
        {type:"choice",q:"Как по-французски '5'?",options:["Quatre","Six","Cinq","Sept"],answer:"Cinq"},
        {type:"input",q:"Напиши цифрами: 'vingt'",answer:"20",hint:"20"},
        {type:"choice",q:"'Soixante-dix' — это:",options:["60","76","70","67"],answer:"70"},
        {type:"choice",q:"'Quatre-vingts' — это:",options:["40","48","84","80"],answer:"80"},
        {type:"input",q:"Как по-французски '70'?",answer:"soixante-dix",hint:"soixante-dix"},
        {type:"choice",q:"'Quinze' — это:",options:["5","50","15","51"],answer:"15"},
        {type:"input",q:"Переведи: 'девяносто'",answer:"quatre-vingt-dix",hint:"quatre-vingt-dix"},
        {type:"choice",q:"'Dix-neuf' — это:",options:["19","91","10","9"],answer:"19"},
      ]
    },
    {
      id:"fr_a2_1", title:"Прошедшее время Passé Composé", emoji:"⌛", level:"A2", group:"Грамматика",
      description:"Passé composé — основное прошедшее время",
      theory:"Passé composé = avoir/être + participe passé\n\nС avoir (большинство глаголов):\n• parler → j'ai parlé (я говорил)\n• finir → j'ai fini\n• prendre → j'ai pris\n\nС être (движение и изменение):\n• aller → je suis allé(e) (я пошёл/пошла)\n• venir → je suis venu(e)\n• partir → je suis parti(e)\n\nНеправильные причастия:\n• faire → fait, voir → vu, avoir → eu, être → été",
      words:[
        {word:"j'ai parlé",translation:"я говорил",example:"J'ai parlé avec Marie."},
        {word:"je suis allé",translation:"я пошёл (м.р.)",example:"Je suis allé au cinéma."},
        {word:"j'ai fini",translation:"я закончил",example:"J'ai fini mes devoirs."},
      ],
      questions:[
        {type:"choice",q:"Passé composé от 'parler' (я говорил):",options:["j'ai parler","j'ai parlé","je suis parlé","j'ai parle"],answer:"j'ai parlé"},
        {type:"choice",q:"'Aller' в Passé composé использует:",options:["avoir","être","оба","ни одного"],answer:"être"},
        {type:"input",q:"Переведи: 'Я пошла в кино.' (ж.р.)",answer:"je suis allée au cinéma",hint:"Je suis allée au cinéma."},
        {type:"choice",q:"Participe passé от 'voir':",options:["voi","voit","vu","voir"],answer:"vu"},
        {type:"input",q:"Переведи: 'Он сделал домашнее задание.'",answer:"il a fait ses devoirs",hint:"Il a fait ses devoirs."},
        {type:"choice",q:"'J'ai fini' означает:",options:["Я заканчиваю","Я закончил","Я закончу","Я хочу закончить"],answer:"Я закончил"},
        {type:"input",q:"Participe passé от 'être'?",answer:"été",hint:"été"},
        {type:"choice",q:"'Elle est venue' — глагол с:",options:["avoir","être","двумя","без вспомогательного"],answer:"être"},
      ]
    },
    {
      id:"fr_a2_2", title:"Еда и ресторан", emoji:"🍽️", level:"A2", group:"Повседневная жизнь",
      description:"Заказ в ресторане, французская кухня",
      theory:"• La carte / Le menu — Меню\n• Je voudrais commander — Я хотел бы заказать\n• Qu'est-ce que vous recommandez? — Что вы рекомендуете?\n• Pour moi, ... — Для меня...\n• L'addition, s'il vous plaît — Счёт, пожалуйста\n• C'est délicieux! — Это восхитительно!\n• L'entrée — Закуска\n• Le plat principal — Основное блюдо\n• Le dessert — Десерт\n• Bien cuit / Saignant — Хорошо прожаренный / С кровью",
      words:[
        {word:"La carte",translation:"Меню (карта блюд)",example:"La carte, s'il vous plaît!"},
        {word:"Le plat principal",translation:"Основное блюдо",example:"Le plat principal est délicieux."},
        {word:"L'addition",translation:"Счёт",example:"L'addition, s'il vous plaît."},
      ],
      questions:[
        {type:"choice",q:"'La carte' — это:",options:["Карта города","Меню","Счёт","Официант"],answer:"Меню"},
        {type:"input",q:"Как попросить счёт?",answer:"l'addition s'il vous plaît",hint:"L'addition, s'il vous plaît"},
        {type:"choice",q:"'C'est délicieux!' означает:",options:["Это дорого!","Это восхитительно!","Это холодно!","Это много!"],answer:"Это восхитительно!"},
        {type:"input",q:"Переведи: 'Что вы рекомендуете?'",answer:"qu'est-ce que vous recommandez",hint:"Qu'est-ce que vous recommandez?"},
        {type:"choice",q:"'Saignant' (о стейке) означает:",options:["Хорошо прожаренный","Средней прожарки","С кровью","Без соуса"],answer:"С кровью"},
        {type:"input",q:"Переведи: 'Основное блюдо'",answer:"le plat principal",hint:"le plat principal"},
        {type:"choice",q:"'L'entrée' — это:",options:["Вход","Закуска","Основное блюдо","Десерт"],answer:"Закуска"},
        {type:"input",q:"Как сказать 'Это восхитительно'?",answer:"c'est délicieux",hint:"C'est délicieux!"},
      ]
    },
    {
      id:"fr_b1_1", title:"Subjonctif (сослагательное)", emoji:"🎭", level:"B1", group:"Грамматика",
      description:"Subjonctif présent — когда и как использовать",
      theory:"Subjonctif используется после:\n• il faut que — нужно чтобы\n• vouloir que — хотеть чтобы\n• bien que / quoique — хотя\n• pour que — чтобы (цель)\n• avant que — до того как\n\nОбразование: основа 3 л. мн.ч. + -e, -es, -e, -ions, -iez, -ent\nparler → ils parlent → que je parle\nfinir → ils finissent → que je finisse\n\nНеправильные: être → sois, avoir → aie, aller → aille",
      words:[
        {word:"il faut que",translation:"нужно, чтобы",example:"Il faut que tu viennes."},
        {word:"bien que",translation:"хотя",example:"Bien qu'il soit fatigué, il travaille."},
        {word:"pour que",translation:"чтобы (цель)",answer:"Je parle lentement pour que tu comprennes."},
      ],
      questions:[
        {type:"choice",q:"'Il faut que tu ___ (venir).' (Subjonctif)",options:["viens","viennes","venez","vient"],answer:"viennes"},
        {type:"choice",q:"Subjonctif используется после 'bien que', потому что:",options:["Это правило","Это выражает уступку/противопоставление","Это будущее время","Это отрицание"],answer:"Это выражает уступку/противопоставление"},
        {type:"input",q:"Переведи: 'Нужно, чтобы ты пришёл.'",answer:"il faut que tu viennes",hint:"Il faut que tu viennes."},
        {type:"choice",q:"Subjonctif от 'être' (je):",options:["suis","soit","sois","es"],answer:"sois"},
        {type:"input",q:"Переведи: 'Хотя он устал, он работает.'",answer:"bien qu'il soit fatigué il travaille",hint:"Bien qu'il soit fatigué, il travaille."},
        {type:"choice",q:"'Pour que' выражает:",options:["Уступку","Цель","Условие","Причину"],answer:"Цель"},
        {type:"input",q:"Subjonctif от 'avoir' (je)?",answer:"aie",hint:"aie"},
        {type:"choice",q:"'Je veux que tu ___ (faire) ça.'",options:["fais","fasse","fait","ferait"],answer:"fasse"},
      ]
    },
    {
      id:"fr_b2_1", title:"Стиль и регистры речи", emoji:"🎩", level:"B2", group:"Продвинутый",
      description:"Формальный vs неформальный, письмо, деловой стиль",
      theory:"Регистры:\nФормальный (vous, vouvoiement):\n• Je vous prie d'agréer... — Примите уверения...\n• Veuillez trouver ci-joint... — Прошу найти в приложении...\n• Dans l'attente de votre réponse — В ожидании вашего ответа\n\nНеформальный (tu, tutoiement):\n• T'as vu? — Ты видел? (т'as = tu as)\n• C'est trop bien! — Это так здорово!\n• Y'a pas de problème — Нет проблем\n\nЧастицы в разговорной речи:\n• genre — типа\n• quoi — ну / вот\n• ben — ну (hesitation)",
      words:[
        {word:"Veuillez",translation:"Пожалуйста (формальн.)",example:"Veuillez trouver ci-joint..."},
        {word:"ci-joint",translation:"в приложении",example:"Le document ci-joint."},
        {word:"vouvoiement",translation:"обращение на 'вы'",example:"Le vouvoiement est poli."},
      ],
      questions:[
        {type:"choice",q:"'Veuillez trouver ci-joint' означает:",options:["Вы найдёте меня здесь","Пожалуйста, найдите в приложении","Пожалуйста, найдите меня","Прикрепите документ"],answer:"Пожалуйста, найдите в приложении"},
        {type:"choice",q:"'Vouvoiement' — это обращение на:",options:["ты","вы","они","мы"],answer:"вы"},
        {type:"input",q:"Как неформально сказать 'Tu as vu?' (разговорное)?",answer:"t'as vu",hint:"T'as vu?"},
        {type:"choice",q:"'Dans l'attente de votre réponse' означает:",options:["Жду вашего ответа","Получил ваш ответ","Отправляю ответ","Нет ответа"],answer:"Жду вашего ответа"},
        {type:"input",q:"Как по-французски 'в приложении' (деловое)?",answer:"ci-joint",hint:"ci-joint"},
        {type:"choice",q:"Разговорная частица 'genre' означает:",options:["Жанр","Типа/что-то вроде","Поколение","Пол"],answer:"Типа/что-то вроде"},
        {type:"choice",q:"Деловое письмо заканчивают формулой:",options:["Au revoir","À bientôt","Je vous prie d'agréer mes salutations","Salut"],answer:"Je vous prie d'agréer mes salutations"},
        {type:"input",q:"Переведи неформально: 'Il n'y a pas de problème'",answer:"y'a pas de problème",hint:"Y'a pas de problème"},
      ]
    },
    {
      id:"fr_c1_1", title:"Продвинутая грамматика", emoji:"🧠", level:"C1", group:"Экспертный",
      description:"Conditionnel passé, voix passive, discours indirect",
      theory:"Conditionnel passé (что было бы если бы):\n• j'aurais fait — я бы сделал\n• elle serait venue — она бы пришла\n= avoir/être в conditionnel + participe passé\n\nVoix passive (пассивный залог):\n• être + participe passé\n• Le gâteau est mangé par Marie.\n• La lettre a été écrite par Paul.\n\nDiscours indirect (косвенная речь):\n• 'Je viens' → Il dit qu'il vient.\n• 'Je suis venu' → Il dit qu'il est venu.\n• 'Je viendrai' → Il dit qu'il viendrait.",
      words:[
        {word:"j'aurais fait",translation:"я бы сделал (усл. прош.)",example:"J'aurais fait autrement."},
        {word:"voix passive",translation:"пассивный залог",example:"La maison est construite."},
        {word:"discours indirect",translation:"косвенная речь",example:"Il dit qu'il viendra."},
      ],
      questions:[
        {type:"choice",q:"Conditionnel passé от 'faire' (je):",options:["j'aurais fait","j'avais fait","je ferais","j'ai fait"],answer:"j'aurais fait"},
        {type:"input",q:"Переведи в пассив: 'Marie mange le gâteau.'",answer:"le gâteau est mangé par marie",hint:"Le gâteau est mangé par Marie."},
        {type:"choice",q:"'Il dit qu'il viendrait' — это:",options:["Прямая речь","Косвенная речь с изменением времени","Пассивный залог","Сослагательное"],answer:"Косвенная речь с изменением времени"},
        {type:"input",q:"Conditionnel passé от 'venir' (elle)?",answer:"elle serait venue",hint:"elle serait venue"},
        {type:"choice",q:"В косвенной речи 'Je viendrai' становится:",options:["qu'il viendra","qu'il viendrait","qu'il est venu","qu'il vient"],answer:"qu'il viendrait"},
        {type:"input",q:"Переведи: 'Письмо было написано Полем.'",answer:"la lettre a été écrite par paul",hint:"La lettre a été écrite par Paul."},
        {type:"choice",q:"Conditionnel passé используется для:",options:["Будущего","Прошлого нереального условия","Настоящего факта","Приказа"],answer:"Прошлого нереального условия"},
        {type:"input",q:"Переведи в косвенную речь: 'Je suis fatigué' → Il dit...",answer:"il dit qu'il est fatigué",hint:"Il dit qu'il est fatigué."},
      ]
    },
  ]
};
