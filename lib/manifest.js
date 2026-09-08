(function () {
  "use strict";

  window.__BRAND__ = {
    name: "Esparus",
    defaultLang: "ru",
    langs: ["ru", "en", "kz"],

    nav: {
      ru: { home: "Главная", process: "Процесс", services: "Услуги", stories: "Истории", team: "Команда", contact: "Контакты", cta: "Оставить заявку" },
      en: { home: "Home", process: "Process", services: "Services", stories: "Stories", team: "Team", contact: "Contact", cta: "Get Started" },
      kz: { home: "Басты бет", process: "Процесс", services: "Қызметтер", stories: "Оқиғалар", team: "Команда", contact: "Байланыс", cta: "Өтінім қалдыру" }
    },

    hero: {
      ru: {
        kicker: "Гомологация медицинского диплома в Испании",
        title: "Ваш диплом врача.<br><em>Признанный в Испании.</em>",
        sub: "С 2006 года мы сопровождаем врачей из России, Украины, Казахстана, Беларуси и других стран СНГ через гомологацию диплома — уже больше 700 признанных случаев.",
        cta1: "Составить личный план",
        cta2: "Узнать процесс"
      },
      en: {
        kicker: "Medical Degree Homologation in Spain",
        title: "Your medical degree.<br><em>Recognised in Spain.</em>",
        sub: "Since 2006 we've guided doctors from Russia, Ukraine, Kazakhstan, Belarus and other CIS countries through homologation — more than 700 degrees recognised so far.",
        cta1: "Build my action plan",
        cta2: "See the process"
      },
      kz: {
        kicker: "Испанияда медициналық дипломды тану",
        title: "Сіздің дәрігерлік дипломыңыз.<br><em>Испанияда танылды.</em>",
        sub: "2006 жылдан бері Ресей, Украина, Қазақстан, Беларусь және басқа ТМД елдерінен келген дәрігерлерге дипломды тану процесінде көмектесеміз — қазірге дейін 700-ден астам диплом танылды.",
        cta1: "Жеке жоспар құру",
        cta2: "Процесті білу"
      }
    },

    trust: {
      ru: [
        { num: "20", label: "лет опыта — работаем с 2006 года" },
        { num: "700", suffix: "+", label: "признанных дипломов" },
        { num: "20", label: "лет с одним и тем же присяжным переводчиком" }
      ],
      en: [
        { num: "20", label: "years of experience — since 2006" },
        { num: "700", suffix: "+", label: "degrees recognised" },
        { num: "20", label: "years with the same sworn translator" }
      ],
      kz: [
        { num: "20", label: "жылдық тәжірибе — 2006 жылдан бері" },
        { num: "700", suffix: "+", label: "танылған диплом" },
        { num: "20", label: "жыл бірдей ант берген аудармашымен" }
      ]
    },

    marquee: {
      ru: ["Россия", "Украина", "Казахстан", "Беларусь", "Молдова", "Кыргызстан", "Узбекистан"],
      en: ["Russia", "Ukraine", "Kazakhstan", "Belarus", "Moldova", "Kyrgyzstan", "Uzbekistan"],
      kz: ["Ресей", "Украина", "Қазақстан", "Беларусь", "Молдова", "Қырғызстан", "Өзбекстан"]
    },

    founder: {
      ru: {
        kicker: "История",
        year: "2006",
        title: "Как появился Эспарус",
        paragraphs: [
          "Рауф работал в Ла-Линеа, у самой границы с Гибралтаром, и постоянно слышал одно и то же: испанским клиникам не хватает врачей.",
          "Его жена ответила просто: «Рауф, в России столько врачей — многие захотят приехать работать в Испанию». С этого разговора всё и началось.",
          "Сначала — сайт и несколько знакомых, которые тоже захотели подтвердить диплом. Потом Рауф завёл блог о процессе гомологации, который сейчас читают больше трёх тысяч человек, и годами лично звонил в Министерство образования, чтобы разобраться в каждом новом требовании.",
          "С 2006 года мы прошли через несколько разных систем подачи документов — и каждый раз объясняли клиентам, что изменилось. Сегодня почти все новые клиенты приходят по рекомендации тех, кому мы уже помогли."
        ],
        quote: "Врачом — в Испанию.",
        quoteCaption: "Так Рауф формулирует миссию Эспарус — одной фразой, без маркетинга."
      },
      en: {
        kicker: "Story",
        year: "2006",
        title: "How Esparus began",
        paragraphs: [
          "Rauf worked in La Línea, right on the border with Gibraltar, and kept hearing the same thing: Spanish clinics were short of doctors.",
          "His wife's answer was simple: \"Rauf, there are so many doctors in Russia — plenty of them would want to come work in Spain.\" That conversation is where it started.",
          "First came a website, and a few acquaintances who wanted their degrees recognised too. Then Rauf started a blog about the homologation process — now read by more than three thousand people — and spent years personally calling the Ministry of Education to understand every new requirement as it changed.",
          "Since 2006 we've been through several different filing systems, and each time we've explained to clients what changed. Today, almost all our new clients arrive through a recommendation from someone we've already helped."
        ],
        quote: "A doctor — in Spain.",
        quoteCaption: "That's how Rauf sums up Esparus's mission in one phrase, no marketing attached."
      },
      kz: {
        kicker: "Тарих",
        year: "2006",
        title: "Эспарус қалай пайда болды",
        paragraphs: [
          "Рауф Ла-Линеада, Гибралтар шекарасының дәл жанында жұмыс істеді және үнемі бір нәрсені естіді: испан клиникаларында дәрігерлер жетіспейді.",
          "Әйелі қарапайым жауап берді: «Рауф, Ресейде дәрігерлер соншалықты көп — олардың көбі Испанияда жұмыс істегісі келеді». Осы әңгімеден бәрі басталды.",
          "Алдымен — сайт және дипломдарын растағысы келген бірнеше таныс. Кейін Рауф гомологация процесі туралы блог жүргізе бастады — қазір оны үш мыңнан астам адам оқиды — және жаңа әр талапты түсіну үшін жылдар бойы Білім министрлігіне жеке қоңырау шалды.",
          "2006 жылдан бері біз бірнеше әртүрлі құжат тапсыру жүйесінен өттік — және әр жолы клиенттерге не өзгергенін түсіндірдік. Бүгінде жаңа клиенттеріміздің көбі біз бұрын көмектескен адамдардың ұсынысы арқылы келеді."
        ],
        quote: "Дәрігер болып — Испанияға.",
        quoteCaption: "Рауф Эспарустың миссиясын осылай, маркетингсіз, бір сөйлеммен тұжырымдайды."
      }
    },

    whyUs: {
      ru: {
        kicker: "Почему Эспарус",
        items: [
          { t: "Опыт и качество", d: "Так один из основателей Эспарус отвечает на вопрос, чем компания отличается от других на рынке — одной фразой, без длинных обоснований." },
          { t: "Конкуренты — бывшие клиенты", d: "Большинство гестoрий и консультантов, с которыми мы конкурируем на рынке, — это люди, которые когда-то сами прошли гомологацию с нашей помощью." }
        ]
      },
      en: {
        kicker: "Why Esparus",
        items: [
          { t: "Experience and quality", d: "That's how one of Esparus's founders answers what sets the company apart — one phrase, no long justification needed." },
          { t: "Our competitors are former clients", d: "Most of the consultants we compete with in this market are people who went through homologation with our help themselves." }
        ]
      },
      kz: {
        kicker: "Неге Эспарус",
        items: [
          { t: "Тәжірибе мен сапа", d: "Эспарустың негізін қалаушыларының бірі компанияны нарықтағы басқалардан не ерекшелендіретінін осылай, бір сөйлеммен жауап береді." },
          { t: "Бәсекелестеріміз — бұрынғы клиенттер", d: "Біз нарықта бәсекелесетін көптеген кеңесшілер — бір кезде өздері біздің көмегімізбен дипломын таныған адамдар." }
        ]
      }
    },

    process: {
      ru: {
        title: "Как это происходит",
        sub: "Реалистичные шаги, без бюрократических сюрпризов.",
        steps: [
          { n: "01", t: "Бесплатная консультация", d: "Оцениваем ваш диплом и страну выпуска и сразу называем реалистичные сроки — не официальные полгода, а те 9–18 месяцев, что бывают на практике." },
          { n: "02", t: "Личный план и документы", d: "Собираем апостили, переводим досье у присяжного переводчика, с которым работаем 20 лет, и готовим программу дисциплин в часах — так, как требует министерство." },
          { n: "03", t: "Подача и сопровождение", d: "Подаём дело и ведём его на всех этапах, включая период тишины, когда документы уже поданы, а ответа ещё нет. Тем временем вы готовитесь к экзамену B2 по испанскому — самому тревожному этапу для большинства." },
          { n: "04", t: "Признание диплома", d: "Получаете гомологацию — и можете работать врачом в государственной или частной клинике Испании, а затем оформить признание специальности и коллегиацию." }
        ]
      },
      en: {
        title: "How it works",
        sub: "Realistic steps, no bureaucratic surprises.",
        steps: [
          { n: "01", t: "Free consultation", d: "We assess your degree and country of origin and give you realistic timelines right away — not the official six months, but the 9–18 months that happen in practice." },
          { n: "02", t: "Personal plan and paperwork", d: "We gather apostilles, have your file translated by the sworn translator we've worked with for 20 years, and prepare your subject programme in hours, exactly as the ministry requires." },
          { n: "03", t: "Filing and follow-up", d: "We submit your case and manage it at every stage, including the silent period after filing when no answer has come yet. Meanwhile you prepare for the Spanish B2 exam — the step that worries people most." },
          { n: "04", t: "Degree recognised", d: "You receive your homologation and can practise medicine in a public or private clinic in Spain, then move on to specialty recognition and joining the medical college." }
        ]
      },
      kz: {
        title: "Бұл қалай жұмыс істейді",
        sub: "Бюрократиялық тосынсыз нақты қадамдар.",
        steps: [
          { n: "01", t: "Тегін кеңес", d: "Дипломыңыз бен шыққан еліңізді бағалап, бірден нақты мерзімдерді айтамыз — ресми алты ай емес, іс жүзінде болатын 9–18 ай." },
          { n: "02", t: "Жеке жоспар және құжаттар", d: "Апостильдерді жинап, 20 жыл бірге жұмыс істеп келе жатқан ант берген аудармашыда досьені аудартып, министрлік талап ететіндей пән бағдарламасын сағат бойынша дайындаймыз." },
          { n: "03", t: "Тапсыру және сүйемелдеу", d: "Ісіңізді тапсырып, құжаттар тапсырылған, бірақ жауап әлі келмеген үнсіздік кезеңі де қоса, әр кезеңде сүйемелдейміз. Осы уақытта сіз көпшілікті ең көп алаңдататын кезең — испан тілінен B2 емтиханына дайындаласыз." },
          { n: "04", t: "Диплом танылды", d: "Гомологацияны алып, Испанияның мемлекеттік немесе жеке клиникасында дәрігер болып жұмыс істей аласыз, содан кейін мамандықты тану мен алқаға мүшелікті ресімдейсіз." }
        ]
      }
    },

    documents: {
      ru: {
        kicker: "На практике",
        title: "Какие документы нужны",
        sub: "Список, который реально спрашивает министерство — по опыту 700+ дел.",
        items: [
          "Диплом и приложение к диплому — с апостилем",
          "Приложение к диплому с указанием часов, а не «условных единиц» — иначе документ вернут на доработку",
          "Свидетельство о браке с апостилем — если фамилия менялась",
          "Паспорт и NIE",
          "Справка о стаже или трудовая книжка с апостилем — стаж должен покрывать 3 года из последних 6 (не нужна, если вы закончили университет менее 2 лет назад)",
          "Переводы всех документов у присяжного переводчика в Испании",
          "Языковой экзамен B2 по испанскому — обязателен"
        ]
      },
      en: {
        kicker: "In practice",
        title: "The documents you'll need",
        sub: "The list the ministry actually asks for, based on 700+ cases.",
        items: [
          "Degree and diploma supplement — apostilled",
          "Diploma supplement showing hours, not \"conventional units\" — otherwise it gets sent back for correction",
          "Marriage certificate with apostille — if your surname changed",
          "Passport and NIE",
          "Work-experience certificate or labour record book, apostilled — must cover 3 of the last 6 years (not needed if you graduated less than 2 years ago)",
          "Certified translations of every document, done in Spain by a sworn translator",
          "Spanish B2 language exam — mandatory"
        ]
      },
      kz: {
        kicker: "Іс жүзінде",
        title: "Қандай құжаттар керек",
        sub: "Министрлік нақты сұрайтын тізім — 700-ден астам іс тәжірибесі бойынша.",
        items: [
          "Диплом және дипломға қосымша — апостильмен",
          "Дипломға қосымшада «шартты бірлік» емес, сағат саны көрсетілуі керек — әйтпесе құжат түзетуге қайтарылады",
          "Неке туралы куәлік, апостильмен — тегі өзгерген болса",
          "Төлқұжат және NIE",
          "Апостильденген еңбек өтілі анықтамасы немесе еңбек кітапшасы — соңғы 6 жылдың 3 жылын қамтуы керек (университетті 2 жылдан аз бұрын бітірген болсаңыз қажет емес)",
          "Барлық құжаттардың Испаниядағы ант берген аудармашы жасаған аудармасы",
          "Испан тілінен B2 емтиханы — міндетті"
        ]
      }
    },

    services: {
      ru: {
        title: "Услуги",
        items: [
          { name: "Бесплатная консультация", price: "бесплатно", d: "Оцениваем диплом и страну выпуска, называем реалистичные сроки." },
          { name: "Личный план и досье", price: "по итогам консультации", d: "Сбор документов, апостили и подготовка программы дисциплин под конкретное министерство." },
          { name: "Полное сопровождение гомологации", price: "по итогам консультации", d: "Подача дела и сопровождение на всех этапах — до получения гомологации." },
          { name: "Официальные переводы", price: "по итогам консультации", d: "Переводы у присяжного переводчика, с которым мы работаем 20 лет." }
        ]
      },
      en: {
        title: "Services",
        items: [
          { name: "Free consultation", price: "free", d: "We assess your degree and country of origin, and give you realistic timelines." },
          { name: "Personal plan and file", price: "quoted at consultation", d: "Document gathering, apostilles and a subject programme built for the right ministry." },
          { name: "Full homologation support", price: "quoted at consultation", d: "We file your case and manage it at every stage, through to homologation." },
          { name: "Official translations", price: "quoted at consultation", d: "Done by the sworn translator we've worked with for 20 years." }
        ]
      },
      kz: {
        title: "Қызметтер",
        items: [
          { name: "Тегін кеңес", price: "тегін", d: "Дипломыңыз бен шыққан еліңізді бағалап, нақты мерзімдерді айтамыз." },
          { name: "Жеке жоспар және досье", price: "кеңес нәтижесінде", d: "Құжаттарды жинау, апостильдер және нақты министрлікке арналған пән бағдарламасы." },
          { name: "Гомологацияны толық сүйемелдеу", price: "кеңес нәтижесінде", d: "Ісіңізді тапсырып, гомологация алғанға дейін әр кезеңде сүйемелдейміз." },
          { name: "Ресми аудармалар", price: "кеңес нәтижесінде", d: "20 жыл бірге жұмыс істеп келе жатқан ант берген аудармашыда." }
        ]
      }
    },

    myths: {
      ru: {
        kicker: "Мифы и реальность",
        title: "Что чаще всего путают",
        items: [
          { myth: "«Признать медицинский диплом в Испании невозможно»", fact: "Это было правдой много лет назад. Сейчас процесс отлажен: мы признаём дипломы с 2006 года — уже больше 700 случаев." },
          { myth: "«В приложении к диплому можно указывать зачётные единицы»", fact: "Министерство требует часы, а не условные единицы. Если университет выдал документ в единицах, его нужно переоформить заранее — иначе придёт запрос на доработку." },
          { myth: "«Справка о стаже нужна всем»", fact: "Нет. Если вы закончили университет меньше двух лет назад, справку о стаже подавать не нужно — можно подаваться сразу." },
          { myth: "«Раз документы поданы — дальше можно не беспокоиться»", fact: "Именно период тишины после подачи вызывает больше всего тревоги у клиентов. Мы отслеживаем статус дела и вовремя отвечаем на любые запросы министерства." }
        ],
        diy: {
          title: "«А что, если я попробую сам?»",
          body: "Мы всегда отвечаем одинаково: пожалуйста, делайте сами. У нас большой опыт — мы знаем, как подготовить каждый документ без ошибок. Мы начинаем с бесплатной консультации, а дальше вы сами решаете: подавать документы самостоятельно или через нас.",
          cta: "Записаться на бесплатную консультацию"
        }
      },
      en: {
        kicker: "Myths & reality",
        title: "What people get wrong most often",
        items: [
          { myth: "\"Recognising a medical degree in Spain is impossible\"", fact: "That was true many years ago. The process is well established now: we've been recognising degrees since 2006 — over 700 cases so far." },
          { myth: "\"The diploma supplement can list credit units\"", fact: "The ministry requires hours, not conventional units. If your university issued the document in units, it needs reformatting in advance — otherwise expect a request for correction." },
          { myth: "\"Everyone needs a work-experience certificate\"", fact: "No. If you graduated less than two years ago, you don't need one — you can file straight away." },
          { myth: "\"Once the documents are filed, you can stop worrying\"", fact: "The silent period after filing is exactly what worries clients most. We track the case status and respond to any ministry request on time." }
        ],
        diy: {
          title: "\"What if I just try it myself?\"",
          body: "We always give the same answer: please, go ahead. We have plenty of experience preparing every document correctly. We start with a free consultation, and after that you decide for yourself — file it on your own, or through us.",
          cta: "Book a free consultation"
        }
      },
      kz: {
        kicker: "Мифтер мен ақиқат",
        title: "Ең жиі шатастыратын нәрселер",
        items: [
          { myth: "«Испанияда медициналық дипломды тану мүмкін емес»", fact: "Бұл бұрын, көп жыл бұрын рас болатын. Қазір процесс жолға қойылған: біз 2006 жылдан бері диплом танимыз — қазірге дейін 700-ден астам жағдай." },
          { myth: "«Дипломға қосымшада кредит бірліктерін көрсетуге болады»", fact: "Министрлік шартты бірлік емес, сағат санын талап етеді. Егер университет құжатты бірлікпен берсе, оны алдын ала қайта ресімдеу керек — әйтпесе түзету туралы сұрау келеді." },
          { myth: "«Еңбек өтілі анықтамасы бәріне керек»", fact: "Жоқ. Егер университетті екі жылдан аз бұрын бітірген болсаңыз, еңбек өтілі анықтамасы қажет емес — бірден тапсыруға болады." },
          { myth: "«Құжаттар тапсырылған соң алаңдаудың қажеті жоқ»", fact: "Тапсырудан кейінгі үнсіздік кезеңі клиенттерді ең көп алаңдататын нәрсе. Біз істің мәртебесін бақылап, министрліктің кез келген сұрауына уақытында жауап береміз." }
        ],
        diy: {
          title: "«Ал өзім көрсем ше?»",
          body: "Біз әрдайым бір жауап береміз: өтінеміз, өзіңіз жасаңыз. Бізде үлкен тәжірибе бар — әр құжатты қатесіз дайындауды білеміз. Біз тегін кеңестен бастаймыз, одан кейін өзіңіз шешесіз: құжаттарды өзіңіз тапсыру керек пе, әлде біз арқылы ма.",
          cta: "Тегін кеңеске жазылу"
        }
      }
    },

    testimonials: {
      ru: [
        { quote: "Я не ожидал, что мне признают диплом так быстро.", name: "Клиент, чьё дело решилось через две недели после звонка в министерство" },
        { quote: "Среди наших клиентов — супруги, которые вместе с нами омологировали российские дипломы, а потом поступили в MIR и набрали больше баллов, чем кто-либо ещё в тот год.", name: "История из практики Эспарус" }
      ],
      en: [
        { quote: "I didn't expect my degree to be recognised so fast.", name: "Client whose case closed two weeks after a ministry phone call" },
        { quote: "Among our clients is a married couple who homologated their Russian degrees with us, then sat the MIR exam and scored higher than anyone else that year.", name: "A story from Esparus's files" }
      ],
      kz: [
        { quote: "Дипломымды осынша тез танитынын күтпеппін.", name: "Ісі министрлікке қоңырау шалғаннан кейін екі аптада шешілген клиент" },
        { quote: "Клиенттеріміздің арасында ресейлік дипломдарын бізбен бірге таныған, содан кейін MIR емтиханына түсіп, сол жылы басқалардан көбірек балл жинаған ерлі-зайыптылар бар.", name: "Эспарус тәжірибесінен бір оқиға" }
      ]
    },

    team: {
      ru: {
        title: "Рауф и Ляйла",
        d: "Больше 20 лет мы занимаемся признанием медицинских дипломов в Испании — с 2006 года. Говорим по-русски и по-испански, знаем систему изнутри и ведём каждое дело лично, а не передаём его в общий поток."
      },
      en: {
        title: "Rauf and Lyayla",
        d: "For more than 20 years — since 2006 — we've handled medical degree recognition in Spain. We speak Russian and Spanish, know the system from the inside, and handle every case personally rather than passing it into a queue."
      },
      kz: {
        title: "Рауф пен Ляйла",
        d: "20 жылдан астам уақыт — 2006 жылдан бері — Испанияда медициналық дипломдарды тану ісімен айналысамыз. Орысша және испанша сөйлейміз, жүйені ішінен білеміз және әр істі жалпы ағынға жібермей, өзіміз жеке жүргіземіз."
      }
    },

    cta: {
      ru: { title: "Готовы сделать первый шаг?", sub: "Бесплатная консультация — без обязательств.", button: "Записаться на консультацию" },
      en: { title: "Ready to take the first step?", sub: "Free consultation — no obligation.", button: "Book a consultation" },
      kz: { title: "Алғашқы қадам жасауға дайынсыз ба?", sub: "Тегін кеңес — міндеттеме жоқ.", button: "Кеңеске жазылу" }
    },

    footer: {
      ru: { rights: "Все права защищены.", contactLabel: "Контакты" },
      en: { rights: "All rights reserved.", contactLabel: "Contact" },
      kz: { rights: "Барлық құқықтар қорғалған.", contactLabel: "Байланыс" }
    },

    contact: { phone1: "+34 678 976 685", phone2: "+34 664 090 985", email1: "rauf@esparus.es", email2: "lila@esparus.es" }
  };
})();
