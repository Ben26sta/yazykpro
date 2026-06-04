export const LANGUAGES = {
  en: {
    id: "en", name: "Английский", flag: "🇬🇧", color: "#3b82f6",
    levels: ["A1 Начинающий", "A2 Базовый", "B1 Средний"],
  },
  de: {
    id: "de", name: "Немецкий", flag: "🇩🇪", color: "#f59e0b",
    levels: ["A1 Начинающий", "A2 Базовый", "B1 Средний"],
  },
  fr: {
    id: "fr", name: "Французский", flag: "🇫🇷", color: "#e85d4a",
    levels: ["A1 Начинающий", "A2 Базовый", "B1 Средний"],
  }
};

export const LESSONS = {
  en: [
    {
      id: "en_1", title: "Приветствия", emoji: "👋", level: "A1",
      description: "Hello, Hi, Goodbye и первые фразы",
      theory: "• Hello / Hi — Привет\n• Good morning — Доброе утро\n• Good evening — Добрый вечер\n• Goodbye / Bye — До свидания\n• How are you? — Как дела?\n• I'm fine, thanks — Хорошо, спасибо\n• Nice to meet you — Приятно познакомиться\n• My name is... — Меня зовут...",
      words: [
        { word: "Hello", translation: "Привет", example: "Hello! How are you?" },
        { word: "Goodbye", translation: "До свидания", example: "Goodbye! See you tomorrow." },
        { word: "Thank you", translation: "Спасибо", example: "Thank you very much!" },
        { word: "Please", translation: "Пожалуйста", example: "Can you help me, please?" },
        { word: "Sorry", translation: "Извините", example: "Sorry, I'm late." },
        { word: "Yes / No", translation: "Да / Нет", example: "Yes, I can. No, I can't." },
      ],
      questions: [
        { type: "choice", q: "Как переводится 'Hello'?", options: ["Пока", "Привет", "Спасибо", "Извините"], answer: "Привет" },
        { type: "choice", q: "Как сказать 'Спасибо' по-английски?", options: ["Sorry", "Please", "Thank you", "Goodbye"], answer: "Thank you" },
        { type: "choice", q: "'How are you?' означает:", options: ["Как тебя зовут?", "Как дела?", "Где ты живёшь?", "Сколько лет?"], answer: "Как дела?" },
        { type: "translate", q: "Переведи на английский: 'До свидания'", answer: "goodbye", hint: "Goodbye / Bye" },
        { type: "choice", q: "Что значит 'Nice to meet you'?", options: ["Пока", "Как дела?", "Приятно познакомиться", "Доброе утро"], answer: "Приятно познакомиться" },
        { type: "translate", q: "Переведи: 'Извините'", answer: "sorry", hint: "Sorry" },
      ]
    },
    {
      id: "en_2", title: "Числа 1-20", emoji: "🔢", level: "A1",
      description: "Числа, счёт, основная математика",
      theory: "1-one, 2-two, 3-three, 4-four, 5-five\n6-six, 7-seven, 8-eight, 9-nine, 10-ten\n11-eleven, 12-twelve, 13-thirteen, 14-fourteen, 15-fifteen\n16-sixteen, 17-seventeen, 18-eighteen, 19-nineteen, 20-twenty",
      words: [
        { word: "One", translation: "Один", example: "One apple." },
        { word: "Five", translation: "Пять", example: "Five fingers." },
        { word: "Ten", translation: "Десять", example: "Ten seconds." },
        { word: "Twenty", translation: "Двадцать", example: "Twenty students." },
      ],
      questions: [
        { type: "choice", q: "Как по-английски '7'?", options: ["Six", "Eight", "Seven", "Nine"], answer: "Seven" },
        { type: "choice", q: "Что значит 'twelve'?", options: ["11", "12", "13", "20"], answer: "12" },
        { type: "choice", q: "Как написать '15' словами?", options: ["Fifty", "Fifteen", "Five", "Sixteen"], answer: "Fifteen" },
        { type: "translate", q: "Напиши цифрами: 'nineteen'", answer: "19", hint: "19" },
        { type: "choice", q: "'Twenty' — это:", options: ["12", "2", "20", "200"], answer: "20" },
        { type: "translate", q: "Как по-английски число 'три'?", answer: "three", hint: "three" },
      ]
    },
    {
      id: "en_3", title: "Цвета", emoji: "🎨", level: "A1",
      description: "Основные цвета и их использование",
      theory: "• Red — Красный\n• Blue — Синий\n• Green — Зелёный\n• Yellow — Жёлтый\n• Black — Чёрный\n• White — Белый\n• Orange — Оранжевый\n• Purple — Фиолетовый\n• Pink — Розовый\n• Brown — Коричневый",
      words: [
        { word: "Red", translation: "Красный", example: "Red roses are beautiful." },
        { word: "Blue", translation: "Синий", example: "The sky is blue." },
        { word: "Green", translation: "Зелёный", example: "Grass is green." },
        { word: "Black", translation: "Чёрный", example: "Black cat." },
      ],
      questions: [
        { type: "choice", q: "Как переводится 'Blue'?", options: ["Зелёный", "Красный", "Синий", "Жёлтый"], answer: "Синий" },
        { type: "choice", q: "Небо голубое. Как это по-английски?", options: ["The sky is green", "The sky is blue", "The sky is red", "The sky is white"], answer: "The sky is blue" },
        { type: "translate", q: "Переведи: 'Чёрный'", answer: "black", hint: "black" },
        { type: "choice", q: "Что значит 'Yellow'?", options: ["Розовый", "Оранжевый", "Жёлтый", "Коричневый"], answer: "Жёлтый" },
        { type: "translate", q: "Как по-английски 'Зелёный'?", answer: "green", hint: "green" },
      ]
    },
    {
      id: "en_4", title: "Еда и напитки", emoji: "🍕", level: "A1",
      description: "Продукты, заказ в кафе, предпочтения",
      theory: "• Water — Вода\n• Coffee — Кофе\n• Tea — Чай\n• Bread — Хлеб\n• Apple — Яблоко\n• Chicken — Курица\n• Rice — Рис\n• Salad — Салат\n• I'd like... — Я бы хотел...\n• Can I have...? — Можно мне...?",
      words: [
        { word: "Water", translation: "Вода", example: "Can I have water, please?" },
        { word: "Coffee", translation: "Кофе", example: "I drink coffee every morning." },
        { word: "Apple", translation: "Яблоко", example: "An apple a day keeps the doctor away." },
        { word: "Bread", translation: "Хлеб", example: "Fresh bread is delicious." },
      ],
      questions: [
        { type: "choice", q: "Как сказать 'Вода' по-английски?", options: ["Milk", "Water", "Juice", "Tea"], answer: "Water" },
        { type: "choice", q: "'I'd like coffee' означает:", options: ["Я не хочу кофе", "Я бы хотел кофе", "У вас есть кофе?", "Кофе готово"], answer: "Я бы хотел кофе" },
        { type: "translate", q: "Переведи: 'Яблоко'", answer: "apple", hint: "apple" },
        { type: "choice", q: "Как по-английски 'Хлеб'?", options: ["Rice", "Chicken", "Bread", "Salad"], answer: "Bread" },
        { type: "translate", q: "Как попросить воду в кафе?", answer: "can i have water please", hint: "Can I have water, please?" },
      ]
    },
    {
      id: "en_5", title: "Семья", emoji: "👨‍👩‍👧‍👦", level: "A1",
      description: "Члены семьи, описание родственников",
      theory: "• Mother / Mom — Мама\n• Father / Dad — Папа\n• Sister — Сестра\n• Brother — Брат\n• Grandmother — Бабушка\n• Grandfather — Дедушка\n• Son — Сын\n• Daughter — Дочь\n• Wife — Жена\n• Husband — Муж",
      words: [
        { word: "Mother", translation: "Мама", example: "My mother is a doctor." },
        { word: "Father", translation: "Папа", example: "My father works at home." },
        { word: "Sister", translation: "Сестра", example: "I have two sisters." },
        { word: "Brother", translation: "Брат", example: "My brother is older than me." },
      ],
      questions: [
        { type: "choice", q: "Как по-английски 'Бабушка'?", options: ["Grandfather", "Mother", "Grandmother", "Sister"], answer: "Grandmother" },
        { type: "translate", q: "Переведи: 'Брат'", answer: "brother", hint: "brother" },
        { type: "choice", q: "'My sister is young' означает:", options: ["Моя сестра старая", "Моя сестра молодая", "У меня нет сестры", "Моя сестра красивая"], answer: "Моя сестра молодая" },
        { type: "choice", q: "Как сказать 'Сын'?", options: ["Daughter", "Son", "Brother", "Father"], answer: "Son" },
        { type: "translate", q: "Переведи: 'Муж'", answer: "husband", hint: "husband" },
      ]
    },
    {
      id: "en_6", title: "Путешествия", emoji: "✈️", level: "A2",
      description: "Аэропорт, отель, транспорт, фразы туриста",
      theory: "• Airport — Аэропорт\n• Hotel — Отель\n• Passport — Паспорт\n• Ticket — Билет\n• Where is...? — Где находится...?\n• How much is it? — Сколько стоит?\n• I need help — Мне нужна помощь\n• Check in/out — Заселение/выезд\n• Train station — Вокзал",
      words: [
        { word: "Airport", translation: "Аэропорт", example: "The airport is far from here." },
        { word: "Passport", translation: "Паспорт", example: "Don't forget your passport!" },
        { word: "Ticket", translation: "Билет", example: "I need a ticket to London." },
        { word: "Hotel", translation: "Отель", example: "The hotel is very comfortable." },
      ],
      questions: [
        { type: "choice", q: "Как сказать 'Паспорт'?", options: ["Ticket", "Passport", "Hotel", "Airport"], answer: "Passport" },
        { type: "choice", q: "'How much is it?' означает:", options: ["Где это?", "Сколько стоит?", "Когда отправление?", "Как туда добраться?"], answer: "Сколько стоит?" },
        { type: "translate", q: "Переведи: 'Билет'", answer: "ticket", hint: "ticket" },
        { type: "choice", q: "Как попросить помощь?", options: ["I have help", "I need help", "Help me not", "Where is help?"], answer: "I need help" },
        { type: "translate", q: "Как спросить где что-то находится?", answer: "where is", hint: "Where is...?" },
      ]
    },
  ],

  de: [
    {
      id: "de_1", title: "Приветствия", emoji: "👋", level: "A1",
      description: "Hallo, Guten Tag и первые фразы",
      theory: "• Hallo / Hi — Привет\n• Guten Morgen — Доброе утро\n• Guten Tag — Добрый день\n• Guten Abend — Добрый вечер\n• Auf Wiedersehen — До свидания\n• Tschüss — Пока\n• Wie geht es Ihnen? — Как дела? (вежл.)\n• Wie geht's? — Как дела? (неформ.)\n• Danke — Спасибо\n• Bitte — Пожалуйста",
      words: [
        { word: "Hallo", translation: "Привет", example: "Hallo! Wie geht's?" },
        { word: "Danke", translation: "Спасибо", example: "Danke schön!" },
        { word: "Bitte", translation: "Пожалуйста", example: "Bitte sehr!" },
        { word: "Tschüss", translation: "Пока", example: "Tschüss! Bis morgen!" },
      ],
      questions: [
        { type: "choice", q: "Как переводится 'Danke'?", options: ["Привет", "Пожалуйста", "Спасибо", "Пока"], answer: "Спасибо" },
        { type: "choice", q: "Как сказать 'Доброе утро' по-немецки?", options: ["Guten Abend", "Guten Morgen", "Guten Tag", "Hallo"], answer: "Guten Morgen" },
        { type: "translate", q: "Переведи: 'Пока' (неформально)", answer: "tschüss", hint: "Tschüss" },
        { type: "choice", q: "'Auf Wiedersehen' означает:", options: ["Привет", "Спасибо", "До свидания", "Как дела?"], answer: "До свидания" },
        { type: "choice", q: "Как по-немецки 'Пожалуйста'?", options: ["Danke", "Hallo", "Bitte", "Tschüss"], answer: "Bitte" },
      ]
    },
    {
      id: "de_2", title: "Числа 1-20", emoji: "🔢", level: "A1",
      description: "Zahlen — числа на немецком",
      theory: "1-ein, 2-zwei, 3-drei, 4-vier, 5-fünf\n6-sechs, 7-sieben, 8-acht, 9-neun, 10-zehn\n11-elf, 12-zwölf, 13-dreizehn, 14-vierzehn, 15-fünfzehn\n16-sechzehn, 17-siebzehn, 18-achtzehn, 19-neunzehn, 20-zwanzig",
      words: [
        { word: "Eins", translation: "Один", example: "Eins, zwei, drei..." },
        { word: "Zehn", translation: "Десять", example: "Ich bin zehn Jahre alt." },
        { word: "Zwanzig", translation: "Двадцать", example: "Zwanzig Euro, bitte." },
      ],
      questions: [
        { type: "choice", q: "Как по-немецки '5'?", options: ["Vier", "Sechs", "Fünf", "Drei"], answer: "Fünf" },
        { type: "choice", q: "Что значит 'zwölf'?", options: ["11", "12", "20", "2"], answer: "12" },
        { type: "translate", q: "Напиши цифрами: 'zwanzig'", answer: "20", hint: "20" },
        { type: "choice", q: "'Sieben' — это:", options: ["6", "8", "7", "9"], answer: "7" },
        { type: "translate", q: "Как по-немецки 'десять'?", answer: "zehn", hint: "zehn" },
      ]
    },
    {
      id: "de_3", title: "Еда и напитки", emoji: "🍕", level: "A1",
      description: "Essen und Trinken — в кафе и ресторане",
      theory: "• Wasser — Вода\n• Kaffee — Кофе\n• Tee — Чай\n• Brot — Хлеб\n• Apfel — Яблоко\n• Ich möchte... — Я бы хотел...\n• Was kostet das? — Сколько стоит?\n• Die Rechnung, bitte — Счёт, пожалуйста",
      words: [
        { word: "Wasser", translation: "Вода", example: "Ein Glas Wasser, bitte." },
        { word: "Kaffee", translation: "Кофе", example: "Ich trinke jeden Morgen Kaffee." },
        { word: "Brot", translation: "Хлеб", example: "Frisches Brot ist lecker." },
      ],
      questions: [
        { type: "choice", q: "Как по-немецки 'Вода'?", options: ["Kaffee", "Tee", "Wasser", "Milch"], answer: "Wasser" },
        { type: "choice", q: "'Ich möchte Kaffee' означает:", options: ["У вас есть кофе?", "Я бы хотел кофе", "Кофе готово", "Без кофе"], answer: "Я бы хотел кофе" },
        { type: "translate", q: "Как попросить счёт?", answer: "die rechnung bitte", hint: "Die Rechnung, bitte" },
        { type: "choice", q: "Что значит 'Brot'?", options: ["Масло", "Хлеб", "Молоко", "Сыр"], answer: "Хлеб" },
      ]
    },
    {
      id: "de_4", title: "Путешествия", emoji: "✈️", level: "A2",
      description: "Reisen — аэропорт, транспорт, отель",
      theory: "• Flughafen — Аэропорт\n• Bahnhof — Вокзал\n• Hotel — Отель\n• Ticket / Fahrkarte — Билет\n• Wo ist...? — Где находится...?\n• Wie viel kostet...? — Сколько стоит...?\n• Ich brauche Hilfe — Мне нужна помощь\n• Reisepass — Паспорт",
      words: [
        { word: "Flughafen", translation: "Аэропорт", example: "Der Flughafen ist groß." },
        { word: "Bahnhof", translation: "Вокзал", example: "Der Bahnhof ist in der Mitte." },
        { word: "Reisepass", translation: "Паспорт", example: "Vergiss deinen Reisepass nicht!" },
      ],
      questions: [
        { type: "choice", q: "Как по-немецки 'Аэропорт'?", options: ["Bahnhof", "Flughafen", "Hotel", "Straße"], answer: "Flughafen" },
        { type: "choice", q: "'Wo ist der Bahnhof?' означает:", options: ["Когда поезд?", "Где вокзал?", "Сколько стоит билет?", "Как добраться?"], answer: "Где вокзал?" },
        { type: "translate", q: "Переведи: 'Паспорт'", answer: "reisepass", hint: "Reisepass" },
        { type: "choice", q: "Как попросить помощь?", options: ["Ich habe Hilfe", "Ich brauche Hilfe", "Hilfe ist gut", "Keine Hilfe"], answer: "Ich brauche Hilfe" },
      ]
    },
  ],

  fr: [
    {
      id: "fr_1", title: "Приветствия", emoji: "👋", level: "A1",
      description: "Bonjour, Salut и первые фразы",
      theory: "• Bonjour — Добрый день / Привет\n• Salut — Привет (неформ.)\n• Bonsoir — Добрый вечер\n• Au revoir — До свидания\n• Merci — Спасибо\n• S'il vous plaît — Пожалуйста\n• Comment allez-vous? — Как дела? (вежл.)\n• Ça va? — Как дела? (неформ.)\n• Je m'appelle... — Меня зовут...",
      words: [
        { word: "Bonjour", translation: "Добрый день", example: "Bonjour! Comment allez-vous?" },
        { word: "Merci", translation: "Спасибо", example: "Merci beaucoup!" },
        { word: "S'il vous plaît", translation: "Пожалуйста", example: "Un café, s'il vous plaît." },
        { word: "Au revoir", translation: "До свидания", example: "Au revoir! À bientôt!" },
      ],
      questions: [
        { type: "choice", q: "Как переводится 'Merci'?", options: ["Привет", "До свидания", "Спасибо", "Пожалуйста"], answer: "Спасибо" },
        { type: "choice", q: "Как сказать 'Привет' неформально?", options: ["Bonjour", "Bonsoir", "Salut", "Au revoir"], answer: "Salut" },
        { type: "translate", q: "Переведи: 'До свидания'", answer: "au revoir", hint: "Au revoir" },
        { type: "choice", q: "'Ça va?' означает:", options: ["Как тебя зовут?", "Как дела?", "Где ты живёшь?", "Спасибо"], answer: "Как дела?" },
        { type: "choice", q: "Как по-французски 'Пожалуйста'?", options: ["Merci", "Bonjour", "S'il vous plaît", "Salut"], answer: "S'il vous plaît" },
      ]
    },
    {
      id: "fr_2", title: "Числа 1-20", emoji: "🔢", level: "A1",
      description: "Les chiffres — числа на французском",
      theory: "1-un, 2-deux, 3-trois, 4-quatre, 5-cinq\n6-six, 7-sept, 8-huit, 9-neuf, 10-dix\n11-onze, 12-douze, 13-treize, 14-quatorze, 15-quinze\n16-seize, 17-dix-sept, 18-dix-huit, 19-dix-neuf, 20-vingt",
      words: [
        { word: "Un / Une", translation: "Один / Одна", example: "Un café, s'il vous plaît." },
        { word: "Dix", translation: "Десять", example: "J'ai dix ans." },
        { word: "Vingt", translation: "Двадцать", example: "Vingt euros." },
      ],
      questions: [
        { type: "choice", q: "Как по-французски '5'?", options: ["Quatre", "Six", "Cinq", "Sept"], answer: "Cinq" },
        { type: "choice", q: "Что значит 'douze'?", options: ["11", "12", "20", "2"], answer: "12" },
        { type: "translate", q: "Напиши цифрами: 'vingt'", answer: "20", hint: "20" },
        { type: "choice", q: "'Sept' — это:", options: ["6", "8", "7", "9"], answer: "7" },
        { type: "translate", q: "Как по-французски 'десять'?", answer: "dix", hint: "dix" },
      ]
    },
    {
      id: "fr_3", title: "Еда и напитки", emoji: "🍕", level: "A1",
      description: "La nourriture — в кафе и ресторане",
      theory: "• Eau — Вода\n• Café — Кофе\n• Thé — Чай\n• Pain — Хлеб\n• Pomme — Яблоко\n• Je voudrais... — Я бы хотел...\n• C'est combien? — Сколько стоит?\n• L'addition, s'il vous plaît — Счёт, пожалуйста",
      words: [
        { word: "Eau", translation: "Вода", example: "Un verre d'eau, s'il vous plaît." },
        { word: "Café", translation: "Кофе", example: "Je bois du café le matin." },
        { word: "Pain", translation: "Хлеб", example: "Le pain français est délicieux!" },
      ],
      questions: [
        { type: "choice", q: "Как по-французски 'Вода'?", options: ["Café", "Thé", "Eau", "Lait"], answer: "Eau" },
        { type: "choice", q: "'Je voudrais du café' означает:", options: ["У вас есть кофе?", "Я бы хотел кофе", "Без кофе", "Кофе готово"], answer: "Я бы хотел кофе" },
        { type: "translate", q: "Как попросить счёт?", answer: "l'addition s'il vous plaît", hint: "L'addition, s'il vous plaît" },
        { type: "choice", q: "Что значит 'Pain'?", options: ["Боль", "Хлеб", "Масло", "Молоко"], answer: "Хлеб" },
      ]
    },
    {
      id: "fr_4", title: "Путешествия", emoji: "✈️", level: "A2",
      description: "Les voyages — аэропорт, транспорт, отель",
      theory: "• Aéroport — Аэропорт\n• Gare — Вокзал\n• Hôtel — Отель\n• Billet — Билет\n• Où est...? — Где находится...?\n• Combien ça coûte? — Сколько стоит?\n• J'ai besoin d'aide — Мне нужна помощь\n• Passeport — Паспорт",
      words: [
        { word: "Aéroport", translation: "Аэропорт", example: "L'aéroport est loin." },
        { word: "Gare", translation: "Вокзал", example: "La gare est au centre." },
        { word: "Passeport", translation: "Паспорт", example: "N'oublie pas ton passeport!" },
      ],
      questions: [
        { type: "choice", q: "Как по-французски 'Аэропорт'?", options: ["Gare", "Aéroport", "Hôtel", "Rue"], answer: "Aéroport" },
        { type: "choice", q: "'Où est la gare?' означает:", options: ["Когда поезд?", "Где вокзал?", "Сколько билет?", "Как ехать?"], answer: "Где вокзал?" },
        { type: "translate", q: "Переведи: 'Паспорт'", answer: "passeport", hint: "Passeport" },
        { type: "choice", q: "Как попросить помощь?", options: ["J'ai l'aide", "J'ai besoin d'aide", "L'aide est bonne", "Sans aide"], answer: "J'ai besoin d'aide" },
      ]
    },
  ]
};
