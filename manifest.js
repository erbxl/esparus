(function () {
  "use strict";

  window.__BRAND__ = {
    name: "Esparus",
    defaultLang: "ru",
    langs: ["ru", "en", "kz"],

    nav: {
      ru: {
        home: "Главная", howItWorks: "Как это происходит", services: "Услуги", resources: "Ресурсы",
        about: "О нас", faq: "Вопросы", contact: "Контакты", cta: "Оставить заявку",
        svcNewsletter: "E-mail рассылка", svcConsultation: "Личная консультация", svcDiploma: "Признать диплом",
        svcSpanish: "Испанский язык", svcTranslations: "Переводы на испанский",
        resTrabajo: "Как найти работу", resMir: "Резидентура MIR", resDentistas: "Стоматологам",
        resEspecialidades: "Признание специальности", resEspanol: "Испанский и DELE",
        resResidencia: "Виза и ВНЖ", resDocumentacion: "Документы и ссылки"
      },
      en: {
        home: "Home", howItWorks: "How it works", services: "Services", resources: "Resources",
        about: "About us", faq: "FAQ", contact: "Contact", cta: "Get Started",
        svcNewsletter: "Email newsletter", svcConsultation: "Personal consultation", svcDiploma: "Diploma recognition",
        svcSpanish: "Spanish language", svcTranslations: "Spanish translations",
        resTrabajo: "Finding a job", resMir: "MIR residency", resDentistas: "For dentists",
        resEspecialidades: "Specialty recognition", resEspanol: "Spanish & DELE",
        resResidencia: "Visa & residency", resDocumentacion: "Documents & links"
      },
      kz: {
        home: "Басты бет", howItWorks: "Бұл қалай болады", services: "Қызметтер", resources: "Ресурстар",
        about: "Біз туралы", faq: "Сұрақтар", contact: "Байланыс", cta: "Өтінім қалдыру",
        svcNewsletter: "E-mail таратылымы", svcConsultation: "Жеке кеңес", svcDiploma: "Дипломды тану",
        svcSpanish: "Испан тілі", svcTranslations: "Испан тіліне аудармалар",
        resTrabajo: "Жұмыс табу", resMir: "MIR резидентурасы", resDentistas: "Стоматологтарға",
        resEspecialidades: "Мамандықты тану", resEspanol: "Испан тілі және DELE",
        resResidencia: "Виза және ВНЖ", resDocumentacion: "Құжаттар мен сілтемелер"
      }
    },

    hero: {
      ru: {
        kicker: "Гомологация и сопровождение для врачей",
        title: "Ваш путь к работе врачом в Испании — ясен с первого шага",
        sub: "Помогаем с гомологацией диплома, документами и планированием процесса, чтобы вы понимали, что делать, когда и почему. С 2006 года прошли этот путь больше чем с 700 врачами из России, Украины, Казахстана, Беларуси и других стран СНГ.",
        cta1: "Составить личный план",
        cta2: "Как это происходит",
        points: ["20 лет опыта", "Личное сопровождение", "Процесс полностью дистанционно"]
      },
      en: {
        kicker: "Homologation and support for doctors",
        title: "Your path to practising medicine in Spain, clear from the first step",
        sub: "We help with degree homologation, paperwork and planning the process, so you know what to do, when and why. Since 2006 we've walked this path with more than 700 doctors from Russia, Ukraine, Kazakhstan, Belarus and other CIS countries.",
        cta1: "Build my action plan",
        cta2: "See how it works",
        points: ["20 years of experience", "Personal support", "Fully remote process"]
      },
      kz: {
        kicker: "Дәрігерлерге гомологация және сүйемелдеу",
        title: "Испанияда дәрігер болып жұмыс істеу жолыңыз — алғашқы қадамнан анық",
        sub: "Дипломды гомологациялауға, құжаттарға және процесті жоспарлауға көмектесеміз — не істеу керегін, қашан және неге екенін білесіз. 2006 жылдан бері Ресей, Украина, Қазақстан, Беларусь және басқа ТМД елдерінен 700-ден астам дәрігермен осы жолдан өттік.",
        cta1: "Жеке жоспар құру",
        cta2: "Бұл қалай болатынын білу",
        points: ["20 жылдық тәжірибе", "Жеке сүйемелдеу", "Толықтай қашықтан процесс"]
      }
    },

    trust: {
      ru: [
        { num: "20", label: "лет опыта — с 2006 года" },
        { num: "700", suffix: "+", label: "признанных дипломов" },
        { num: "0", label: "отказов — признание с первого раза" }
      ],
      en: [
        { num: "20", label: "years of experience — since 2006" },
        { num: "700", suffix: "+", label: "degrees recognised" },
        { num: "0", label: "rejections — recognised first time" }
      ],
      kz: [
        { num: "20", label: "жылдық тәжірибе — 2006 жылдан бері" },
        { num: "700", suffix: "+", label: "танылған диплом" },
        { num: "0", label: "бас тарту — бірінші реттен танылады" }
      ]
    },

    marquee: {
      ru: ["Россия", "Украина", "Казахстан", "Беларусь", "Молдова", "Кыргызстан", "Узбекистан"],
      en: ["Russia", "Ukraine", "Kazakhstan", "Belarus", "Moldova", "Kyrgyzstan", "Uzbekistan"],
      kz: ["Ресей", "Украина", "Қазақстан", "Беларусь", "Молдова", "Қырғызстан", "Өзбекстан"]
    },

    startSteps: {
      ru: {
        kicker: "С чего начать",
        title: "Не обязательно понимать весь процесс с первого дня",
        sub: "Мы помогаем превратить вашу ситуацию в понятную последовательность шагов.",
        steps: [
          { n: "01", t: "Расскажите о своей ситуации", d: "Страна, вуз, специальность, стаж и то, чего вы хотите добиться." },
          { n: "02", t: "Определяем маршрут", d: "Объясняем, какие документы нужны и в каком порядке действовать." },
          { n: "03", t: "Идём вместе", d: "Можем сопровождать гомологацию, переводы и дальнейшие шаги — насколько это нужно именно вам." }
        ]
      },
      en: {
        kicker: "Where to start",
        title: "You don't need to understand the whole process on day one",
        sub: "We help turn your situation into a clear sequence of steps.",
        steps: [
          { n: "01", t: "Tell us your situation", d: "Country, degree, specialty, experience and what you're aiming for." },
          { n: "02", t: "We map the route", d: "We explain which documents you need and the right order to handle them." },
          { n: "03", t: "We move forward together", d: "We can support homologation, translations and next steps — as much as you actually need." }
        ]
      },
      kz: {
        kicker: "Неден бастау керек",
        title: "Бірінші күннен процестің бәрін түсінудің қажеті жоқ",
        sub: "Жағдайыңызды түсінікті қадамдар тізбегіне айналдыруға көмектесеміз.",
        steps: [
          { n: "01", t: "Жағдайыңыз туралы айтыңыз", d: "Ел, жоғары оқу орны, мамандық, өтіл және мақсатыңыз." },
          { n: "02", t: "Маршрутты анықтаймыз", d: "Қандай құжаттар керек және қандай ретпен әрекет ету керегін түсіндіреміз." },
          { n: "03", t: "Бірге жүреміз", d: "Гомологацияны, аудармаларды және келесі қадамдарды сізге керек деңгейде сүйемелдей аламыз." }
        ]
      }
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

    comoFunciona: {
      ru: {
        kicker: "Как это происходит",
        title: "Весь путь — от первого письма до работы врачом",
        sub: "Шесть этапов, через которые мы проводим клиентов уже больше 20 лет.",
        forWhomTitle: "Для кого эта страница",
        forWhom: [
          "Вы врач с дипломом из России, Украины, Казахстана, Беларуси или другой страны СНГ",
          "Вы ещё не начинали гомологацию и хотите понять реальную последовательность действий",
          "Вы уже начали процесс сами и хотите свериться, всё ли идёт правильно"
        ],
        stepsTitle: "Процесс целиком",
        fullSteps: [
          { n: "01", t: "Оценка ситуации", d: "Бесплатная консультация: смотрим на ваш диплом, вуз и страну выпуска, называем реалистичные сроки." },
          { n: "02", t: "Подготовка документов", d: "Апостили, справка о стаже (если нужна), приложение к диплому с часами вместо «условных единиц»." },
          { n: "03", t: "Переводы и легализация", d: "Присяжный перевод всех документов у переводчика, с которым мы работаем 20 лет." },
          { n: "04", t: "Подача дела", d: "Подаём досье в Министерство образования Испании и подтверждаем получение." },
          { n: "05", t: "Сопровождение", d: "Отслеживаем статус дела в период тишины и вовремя отвечаем на любые запросы министерства." },
          { n: "06", t: "Следующий профессиональный этап", d: "После признания — коллегиация, поиск работы, при желании — специальность через MIR." }
        ],
        weDoTitle: "Что делаем мы",
        weDo: ["Подаём дело в министерство и ведём его до конца", "Организуем апостили и присяжные переводы", "Отслеживаем статус и отвечаем на запросы министерства", "Готовим программу дисциплин в часах, как требует министерство"],
        youDoTitle: "Что делаете вы",
        youDo: ["Присылаете сканы документов по email", "Сдаёте экзамен B2 по испанскому", "Готовите справку о стаже, если она нужна в вашем случае", "Отвечаете, если нужны дополнительные бумаги"],
        timelineTitle: "Реалистичные сроки",
        timeline: "Официальный срок — полгода, но на практике процесс занимает 9–18 месяцев. Больше всего тревоги вызывает не сам процесс, а тишина после подачи — мы отслеживаем статус дела и вовремя отвечаем на любые запросы министерства.",
        faqNote: "Остались вопросы?",
        faqCta: "Смотреть все вопросы →"
      },
      en: {
        kicker: "How it works",
        title: "The whole path — from the first email to practising medicine",
        sub: "Six stages we've guided clients through for more than 20 years.",
        forWhomTitle: "Who this page is for",
        forWhom: [
          "You're a doctor with a degree from Russia, Ukraine, Kazakhstan, Belarus or another CIS country",
          "You haven't started homologation yet and want to understand the real sequence of steps",
          "You've already started the process yourself and want to check you're on the right track"
        ],
        stepsTitle: "The full process",
        fullSteps: [
          { n: "01", t: "Assessing your situation", d: "A free consultation: we look at your degree, university and country of origin, and give you realistic timelines." },
          { n: "02", t: "Preparing documents", d: "Apostilles, a work-experience certificate (if needed), a diploma supplement showing hours rather than \"conventional units\"." },
          { n: "03", t: "Translation and legalisation", d: "A sworn translation of every document by the translator we've worked with for 20 years." },
          { n: "04", t: "Filing the case", d: "We submit your file to Spain's Ministry of Education and confirm it was received." },
          { n: "05", t: "Follow-up", d: "We track the case status during the silent period and respond to any ministry request on time." },
          { n: "06", t: "Your next professional step", d: "After recognition: joining the medical college, finding work, and — if you want — a specialty via MIR." }
        ],
        weDoTitle: "What we handle",
        weDo: ["Filing your case with the ministry and seeing it through to the end", "Arranging apostilles and sworn translations", "Tracking status and responding to ministry requests", "Preparing your subject programme in hours, exactly as the ministry requires"],
        youDoTitle: "What you handle",
        youDo: ["Sending us scans of your documents by email", "Passing the Spanish B2 exam", "Preparing a work-experience certificate, if your case needs one", "Replying if extra paperwork is requested"],
        timelineTitle: "A realistic timeline",
        timeline: "The official timeline is six months, but in practice the process takes 9–18 months. What causes the most anxiety isn't the process itself but the silence after filing — we track the case status and respond to any ministry request on time.",
        faqNote: "Still have questions?",
        faqCta: "See all questions →"
      },
      kz: {
        kicker: "Бұл қалай болады",
        title: "Бүкіл жол — алғашқы хаттан дәрігер болып жұмыс істеуге дейін",
        sub: "20 жылдан астам уақыт бойы клиенттерді өткізіп келе жатқан алты кезең.",
        forWhomTitle: "Бұл бет кімге арналған",
        forWhom: [
          "Сіз Ресей, Украина, Қазақстан, Беларусь немесе басқа ТМД елінің дипломы бар дәрігерсіз",
          "Гомологацияны әлі бастамадыңыз және нақты қадамдар ретін білгіңіз келеді",
          "Процесті өзіңіз бастадыңыз және дұрыс бара жатқаныңызды тексергіңіз келеді"
        ],
        stepsTitle: "Толық процесс",
        fullSteps: [
          { n: "01", t: "Жағдайды бағалау", d: "Тегін кеңес: дипломыңызды, ЖОО мен шыққан еліңізді қарап, нақты мерзімдерді айтамыз." },
          { n: "02", t: "Құжаттарды дайындау", d: "Апостильдер, еңбек өтілі анықтамасы (керек болса), «шартты бірлік» емес сағат көрсетілген дипломға қосымша." },
          { n: "03", t: "Аударма және заңдастыру", d: "20 жыл бірге жұмыс істеп келе жатқан аудармашыда барлық құжаттардың ант берген аудармасы." },
          { n: "04", t: "Істі тапсыру", d: "Досьені Испания Білім министрлігіне тапсырып, қабылданғанын растаймыз." },
          { n: "05", t: "Сүйемелдеу", d: "Үнсіздік кезеңінде істің мәртебесін бақылап, министрліктің кез келген сұрауына уақытында жауап береміз." },
          { n: "06", t: "Келесі кәсіби қадам", d: "Тану болғаннан кейін — алқаға мүшелік, жұмыс іздеу, қаласаңыз — MIR арқылы мамандық." }
        ],
        weDoTitle: "Біз не істейміз",
        weDo: ["Ісіңізді министрлікке тапсырып, соңына дейін жүргіземіз", "Апостиль мен ант берген аудармаларды ұйымдастырамыз", "Мәртебені бақылап, министрлік сұрауларына жауап береміз", "Министрлік талап ететіндей пән бағдарламасын сағат бойынша дайындаймыз"],
        youDoTitle: "Сіз не істейсіз",
        youDo: ["Құжаттардың сканерін email арқылы жібересіз", "Испан тілінен B2 емтиханын тапсырасыз", "Керек болса, еңбек өтілі анықтамасын дайындайсыз", "Қосымша құжат сұралса, жауап бересіз"],
        timelineTitle: "Нақты мерзімдер",
        timeline: "Ресми мерзім — алты ай, бірақ іс жүзінде процесс 9–18 ай алады. Ең көп алаңдатушылықты процестің өзі емес, тапсырудан кейінгі үнсіздік тудырады — біз істің мәртебесін бақылап, министрліктің кез келген сұрауына уақытында жауап береміз.",
        faqNote: "Сұрақтарыңыз қалды ма?",
        faqCta: "Барлық сұрақтарды көру →"
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

    servicesSummary: {
      ru: {
        title: "Выберите уровень помощи, который вам нужен",
        sub: "Каждый шаг можно пройти отдельно — или доверить нам целиком.",
        items: [
          { name: "Первые шаги", price: "бесплатно", d: "Email-рассылка с базовой информацией о процессе.", href: "servicios/rassylka.html" },
          { name: "Личная консультация", price: "100 €", d: "Час на все ваши вопросы: план, сроки, варианты для семьи.", href: "servicios/consulta.html" },
          { name: "Признание диплома", price: "1200 €, по этапам", d: "Полное сопровождение гомологации диплома под ключ.", href: "servicios/homologacion.html", featured: true, badge: "Основная услуга" },
          { name: "Испанский язык", price: "по запросу", d: "Подготовка к экзамену DELE B2 с преподавателями-носителями.", href: "servicios/espanol.html" },
          { name: "Переводы на испанский", price: "от 40 €", d: "Официальные присяжные переводы документов.", href: "servicios/traducciones.html" }
        ]
      },
      en: {
        title: "Choose the level of help you need",
        sub: "Take each step on its own — or hand us the whole process.",
        items: [
          { name: "First steps", price: "free", d: "An email newsletter with the basics of the process.", href: "servicios/rassylka.html" },
          { name: "Personal consultation", price: "€100", d: "An hour for all your questions: plan, timeline, family options.", href: "servicios/consulta.html" },
          { name: "Degree recognition", price: "€1,200, in stages", d: "Full turnkey support through homologation.", href: "servicios/homologacion.html", featured: true, badge: "Main service" },
          { name: "Spanish language", price: "on request", d: "DELE B2 exam prep with native-speaking teachers.", href: "servicios/espanol.html" },
          { name: "Spanish translations", price: "from €40", d: "Official sworn translations of your documents.", href: "servicios/traducciones.html" }
        ]
      },
      kz: {
        title: "Керек көмек деңгейін таңдаңыз",
        sub: "Әр қадамды бөлек өтуге болады — немесе бәрін бізге сеніп тапсырыңыз.",
        items: [
          { name: "Алғашқы қадамдар", price: "тегін", d: "Процестің негіздері туралы электрондық хат таратылымы.", href: "servicios/rassylka.html" },
          { name: "Жеке кеңес", price: "100 €", d: "Барлық сұрағыңызға бір сағат: жоспар, мерзім, отбасы үшін нұсқалар.", href: "servicios/consulta.html" },
          { name: "Дипломды тану", price: "1200 €, кезеңімен", d: "Гомологацияны толық, түйіндемелі сүйемелдеу.", href: "servicios/homologacion.html", featured: true, badge: "Негізгі қызмет" },
          { name: "Испан тілі", price: "сұрау бойынша", d: "Ана тілі испан оқытушыларымен DELE B2 емтиханына дайындық.", href: "servicios/espanol.html" },
          { name: "Испан тіліне аудармалар", price: "40 €-ден", d: "Құжаттардың ресми ант берген аудармасы.", href: "servicios/traducciones.html" }
        ]
      }
    },

    servicesPage: {
      ru: { kicker: "Услуги", title: "Как мы можем помочь", sub: "От бесплатной рассылки до полного сопровождения гомологации — выбирайте то, что нужно именно сейчас.",
        compareHead: ["Услуга", "Для кого", "Цена"] },
      en: { kicker: "Services", title: "How we can help", sub: "From a free newsletter to full homologation support — pick what you need right now.",
        compareHead: ["Service", "Ideal for", "Price"] },
      kz: { kicker: "Қызметтер", title: "Біз қалай көмектесе аламыз", sub: "Тегін таратылымнан гомологацияны толық сүйемелдеуге дейін — қазір керегін таңдаңыз.",
        compareHead: ["Қызмет", "Кімге қажет", "Баға"] }
    },

    servicesCompare: {
      ru: [
        { name: "Личная консультация", forWhom: "Не знаете, с чего начать", price: "100 €", href: "servicios/consulta.html" },
        { name: "Признание диплома", forWhom: "Хотите доверить процесс целиком", price: "1200 €, по этапам", href: "servicios/homologacion.html", featured: true },
        { name: "Переводы на испанский", forWhom: "Документы уже готовы", price: "от 40 €", href: "servicios/traducciones.html" },
        { name: "Испанский язык", forWhom: "Нужна подготовка к DELE B2", price: "по запросу", href: "servicios/espanol.html" },
        { name: "E-mail рассылка", forWhom: "Хотите для начала разобраться в теме", price: "бесплатно", href: "servicios/rassylka.html" }
      ],
      en: [
        { name: "Personal consultation", forWhom: "You don't know where to start", price: "€100", href: "servicios/consulta.html" },
        { name: "Degree recognition", forWhom: "You want to hand off the whole process", price: "€1,200, in stages", href: "servicios/homologacion.html", featured: true },
        { name: "Spanish translations", forWhom: "Your documents are already ready", price: "from €40", href: "servicios/traducciones.html" },
        { name: "Spanish language", forWhom: "You need DELE B2 preparation", price: "on request", href: "servicios/espanol.html" },
        { name: "Email newsletter", forWhom: "You want to learn the basics first", price: "free", href: "servicios/rassylka.html" }
      ],
      kz: [
        { name: "Жеке кеңес", forWhom: "Неден бастау керегін білмейсіз", price: "100 €", href: "servicios/consulta.html" },
        { name: "Дипломды тану", forWhom: "Процесті толық сеніп тапсырғыңыз келеді", price: "1200 €, кезеңімен", href: "servicios/homologacion.html", featured: true },
        { name: "Испан тіліне аудармалар", forWhom: "Құжаттар дайын", price: "40 €-ден", href: "servicios/traducciones.html" },
        { name: "Испан тілі", forWhom: "DELE B2-ге дайындық керек", price: "сұрау бойынша", href: "servicios/espanol.html" },
        { name: "E-mail таратылымы", forWhom: "Алдымен тақырыпты түсінгіңіз келеді", price: "тегін", href: "servicios/rassylka.html" }
      ]
    },

    proof: {
      ru: { title: "20 лет опыта, а не обещаний", items: [
        { num: "20", suffix: "+", label: "лет сопровождаем врачей" },
        { num: "700", suffix: "+", label: "признанных дипломов" },
        { num: "1", label: "команда, которая ведёт вас лично" }
      ] },
      en: { title: "20 years of experience, not promises", items: [
        { num: "20", suffix: "+", label: "years supporting doctors" },
        { num: "700", suffix: "+", label: "degrees recognised" },
        { num: "1", label: "team that guides you personally" }
      ] },
      kz: { title: "Уәде емес, 20 жылдық тәжірибе", items: [
        { num: "20", suffix: "+", label: "жыл дәрігерлерді сүйемелдейміз" },
        { num: "700", suffix: "+", label: "танылған диплом" },
        { num: "1", label: "сізді жеке жүргізетін команда" }
      ] }
    },

    sobreNosotros: {
      ru: {
        kicker: "О нас", title: "За Эспарус стоят люди, а не анонимная форма",
        sub: "Рауф и Ляйла ведут каждое дело лично — больше 20 лет, с 2006 года."
      },
      en: {
        kicker: "About us", title: "Behind Esparus are people, not an anonymous form",
        sub: "Rauf and Lyayla handle every case personally — for more than 20 years, since 2006."
      },
      kz: {
        kicker: "Біз туралы", title: "Эспарустың артында адамдар тұр, анонимді форма емес",
        sub: "Рауф пен Ляйла әр істі жеке жүргізеді — 2006 жылдан бері, 20 жылдан астам уақыт."
      }
    },

    people: {
      ru: [
        { name: "Рауф Халиуллин", role: "Консультация и планирование", d: "Помогает разобраться в вариантах и превратить вашу ситуацию в конкретный план — от первого звонка до подачи документов." },
        { name: "Ляйла Халиуллина", role: "Документация и гомологация", d: "Ведёт документацию и сопровождение процесса в Испании, а также подготовку к испанскому языку." }
      ],
      en: [
        { name: "Rauf Khaliulin", role: "Consultation and planning", d: "Helps you understand your options and turns your situation into a concrete plan — from the first call to filing your documents." },
        { name: "Lyayla Khaliulina", role: "Documentation and homologation", d: "Handles documentation and follow-up in Spain, as well as Spanish language preparation." }
      ],
      kz: [
        { name: "Рауф Халиуллин", role: "Кеңес және жоспарлау", d: "Нұсқаларды түсінуге көмектеседі және жағдайыңызды нақты жоспарға айналдырады — алғашқы қоңыраудан құжат тапсыруға дейін." },
        { name: "Ляйла Халиуллина", role: "Құжаттама және гомологация", d: "Испаниядағы құжаттама мен процесті сүйемелдеуді, сондай-ақ испан тіліне дайындықты жүргізеді." }
      ]
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

    cta: {
      ru: { title: "Не знаете, каким должен быть первый шаг?", sub: "Расскажите коротко о своей ситуации — поможем определить самый логичный путь.", button: "Записаться на консультацию" },
      en: { title: "Not sure what your first step should be?", sub: "Tell us briefly about your situation — we'll help you find the most logical path.", button: "Book a consultation" },
      kz: { title: "Алғашқы қадам қандай болу керегін білмейсіз бе?", sub: "Жағдайыңыз туралы қысқаша айтыңыз — ең логикалық жолды анықтауға көмектесеміз.", button: "Кеңеске жазылу" }
    },

    faqHome: {
      ru: { kicker: "Вопросы", title: "Частые вопросы", seeAll: "Смотреть все вопросы →" },
      en: { kicker: "FAQ", title: "Frequently asked questions", seeAll: "See all questions →" },
      kz: { kicker: "Сұрақтар", title: "Жиі қойылатын сұрақтар", seeAll: "Барлық сұрақтарды көру →" }
    },

    faqPage: {
      ru: {
        kicker: "Вопросы", title: "Ответы на вопросы", sub: "Собрали то, что чаще всего спрашивают на бесплатной консультации.",
        categories: ["Все", "Гомологация", "Испанский", "Работа", "Оплата"],
        items: [
          { cat: "Гомологация", q: "Могу ли я начать процесс, находясь за границей?", a: "Да. Весь процесс можно вести дистанционно: вы присылаете нам сканы документов по email, а всю испанскую часть — подачу в министерство и сопровождение — берём на себя мы." },
          { cat: "Испанский", q: "Нужно ли знать испанский, чтобы начать?", a: "Нет, начать процесс гомологации можно без испанского. Но для самого признания обязателен экзамен B2, а для поступления в резидентуру MIR потребуется уже C1." },
          { cat: "Гомологация", q: "Сколько занимает гомологация?", a: "Официальный срок — полгода, но на практике процесс занимает 9–18 месяцев. Мы всегда называем реалистичные сроки, а не официальные." },
          { cat: "Гомологация", q: "Какие документы понадобятся?", a: "Диплом и приложение с апостилем (в часах, а не условных единицах), свидетельство о браке при смене фамилии, паспорт и NIE, справка о стаже (если нужна), присяжные переводы и экзамен B2. Полный список — на странице «Признание диплома»." },
          { cat: "Работа", q: "Помогаете ли вы стоматологам?", a: "Да, но процесс для стоматологов отличается: вместо интернатуры сдаются 4 экзамена по отдельным дисциплинам, а MIR для стоматологов не предусмотрен. Подробнее — в разделе «Стоматологам»." },
          { cat: "Гомологация", q: "Можно ли начать процесс, ещё находясь в интернатуре?", a: "Да, это один из лучших моментов для старта — тогда к моменту выпуска процесс уже будет идти." },
          { cat: "Оплата", q: "Как проходит оплата?", a: "Гомологация оплачивается тремя платежами — 300 €, 400 € и 500 €, последний и самый крупный только после подтверждения признания. Принимаем PayPal, перевод на счёт в Сбербанке и наличные при встрече в Испании." },
          { cat: "Работа", q: "Можно ли сначала записаться просто на консультацию?", a: "Да, с личной консультации (100 €, около часа) удобно начать, если пока не понятно, какой путь подходит именно вам." }
        ]
      },
      en: {
        kicker: "FAQ", title: "Frequently asked questions", sub: "The questions we hear most often during a free consultation.",
        categories: ["All", "Homologation", "Spanish", "Work", "Payment"],
        items: [
          { cat: "Homologation", q: "Can I start the process while I'm still abroad?", a: "Yes. The whole process can be handled remotely: you send us scans of your documents by email, and we take care of the Spanish side — filing with the ministry and following up." },
          { cat: "Spanish", q: "Do I need to know Spanish to get started?", a: "No, you can start homologation without Spanish. But the B2 exam is mandatory for recognition itself, and you'll need C1 to enter the MIR residency programme." },
          { cat: "Homologation", q: "How long does homologation take?", a: "The official timeline is six months, but in practice it takes 9–18 months. We always give you realistic timelines, not the official ones." },
          { cat: "Homologation", q: "What documents will I need?", a: "Your degree and diploma supplement with apostille (in hours, not conventional units), a marriage certificate if your surname changed, passport and NIE, a work-experience certificate (if needed), sworn translations and the B2 exam. Full list on the Degree Recognition page." },
          { cat: "Work", q: "Do you help dentists too?", a: "Yes, though the process is different for dentists: instead of an internship, you sit 4 exams in separate disciplines, and there is no MIR for dentists. More on the \"For dentists\" page." },
          { cat: "Homologation", q: "Can I start the process while I'm still doing my internship?", a: "Yes, that's actually one of the best times to start — the process will already be underway by the time you graduate." },
          { cat: "Payment", q: "How does payment work?", a: "Homologation is paid in three instalments — €300, €400 and €500 — with the last and largest one due only after recognition is confirmed. We accept PayPal, bank transfer to a Sberbank account, and cash in person in Spain." },
          { cat: "Work", q: "Can I just book a consultation first?", a: "Yes — a personal consultation (€100, about an hour) is a good place to start if you're not yet sure which path fits your case." }
        ]
      },
      kz: {
        kicker: "Сұрақтар", title: "Сұрақтарға жауаптар", sub: "Тегін кеңесте ең жиі қойылатын сұрақтарды жинадық.",
        categories: ["Барлығы", "Гомологация", "Испан тілі", "Жұмыс", "Төлем"],
        items: [
          { cat: "Гомологация", q: "Шетелде жүріп процесті бастай аламын ба?", a: "Иә. Бүкіл процесті қашықтан жүргізуге болады: құжаттардың сканерін email арқылы жібересіз, ал испан жағын — министрлікке тапсыру мен сүйемелдеуді — біз аламыз." },
          { cat: "Испан тілі", q: "Бастау үшін испан тілін білу керек пе?", a: "Жоқ, гомологацияны испансыз бастауға болады. Бірақ тану үшін B2 емтиханы міндетті, ал MIR резидентурасына түсу үшін C1 деңгейі керек." },
          { cat: "Гомологация", q: "Гомологация қанша уақыт алады?", a: "Ресми мерзім — алты ай, бірақ іс жүзінде 9–18 ай алады. Біз әрдайым ресми емес, нақты мерзімдерді айтамыз." },
          { cat: "Гомологация", q: "Қандай құжаттар керек болады?", a: "Диплом мен апостильденген қосымша (шартты бірлік емес, сағатпен), тегі өзгерсе — неке туралы куәлік, төлқұжат пен NIE, еңбек өтілі анықтамасы (керек болса), ант берген аудармалар және B2 емтиханы. Толық тізім — «Дипломды тану» бетінде." },
          { cat: "Жұмыс", q: "Стоматологтарға көмектесесіздер ме?", a: "Иә, бірақ стоматологтар үшін процесс өзгеше: интернатура орнына жеке пәндерден 4 емтихан тапсырылады, ал MIR стоматологтарға арналмаған. Толығырақ — «Стоматологтарға» бетінде." },
          { cat: "Гомологация", q: "Интернатурада жүріп процесті бастауға бола ма?", a: "Иә, бұл бастаудың ең қолайлы сәттерінің бірі — бітіру кезінде процесс қазірдің өзінде жүріп жатады." },
          { cat: "Төлем", q: "Төлем қалай жүреді?", a: "Гомологация үш төлеммен — 300 €, 400 € және 500 € — төленеді, соңғы әрі ең үлкен төлем тану расталғаннан кейін ғана. PayPal, Сбербанк шотына аударым және Испанияда кездескенде қолма-қол қабылдаймыз." },
          { cat: "Жұмыс", q: "Алдымен жай кеңеске жазылуға бола ма?", a: "Иә, қай жол өзіңізге сай екені әлі анық болмаса, жеке кеңестен (100 €, шамамен бір сағат) бастаған қолайлы." }
        ]
      }
    },

    resourcesHub: {
      ru: {
        kicker: "Ресурсы", title: "Материалы для подготовки вашего пути",
        sub: "Собрали в одном месте то, что раньше было разбросано по десятку отдельных страниц.",
        cards: [
          { key: "documentacion", title: "Документы и полезные ссылки", d: "Справочник ссылок и материалов на весь процесс.", href: "recursos/documentacion.html" },
          { key: "trabajo", title: "Как найти работу", d: "Три реальных пути трудоустройства врача после признания диплома.", href: "recursos/trabajar-en-espana.html" },
          { key: "mir", title: "Резидентура MIR", d: "Как поступить на специализацию после гомологации.", href: "recursos/mir.html" },
          { key: "dentistas", title: "Стоматологам", d: "Чем процесс для стоматологов отличается от врачей.", href: "recursos/dentistas.html" },
          { key: "especialidades", title: "Признание специальности", d: "Второй этап после гомологации диплома.", href: "recursos/especialidades.html" },
          { key: "espanol", title: "Испанский и DELE", d: "Какой уровень нужен для гомологации, а какой — для MIR.", href: "recursos/espanol-dele.html" },
          { key: "residencia", title: "Виза и вид на жительство", d: "Три пути получения резиденции для врача.", href: "recursos/residencia.html" }
        ]
      },
      en: {
        kicker: "Resources", title: "Material to help you plan your path",
        sub: "Everything that used to be scattered across a dozen separate pages, gathered in one place.",
        cards: [
          { key: "documentacion", title: "Documents & useful links", d: "A reference directory for the whole process.", href: "recursos/documentacion.html" },
          { key: "trabajo", title: "Finding a job", d: "Three real employment paths after your degree is recognised.", href: "recursos/trabajar-en-espana.html" },
          { key: "mir", title: "MIR residency", d: "How to enter specialty training after homologation.", href: "recursos/mir.html" },
          { key: "dentistas", title: "For dentists", d: "How the process differs from doctors.", href: "recursos/dentistas.html" },
          { key: "especialidades", title: "Specialty recognition", d: "The second stage after diploma homologation.", href: "recursos/especialidades.html" },
          { key: "espanol", title: "Spanish & DELE", d: "Which level you need for homologation, and which for MIR.", href: "recursos/espanol-dele.html" },
          { key: "residencia", title: "Visa & residency", d: "Three routes to residency for a doctor.", href: "recursos/residencia.html" }
        ]
      },
      kz: {
        kicker: "Ресурстар", title: "Жолыңызды жоспарлауға арналған материалдар",
        sub: "Бұрын ондаған бөлек беттерге шашылған нәрсені бір жерге жинадық.",
        cards: [
          { key: "documentacion", title: "Құжаттар мен пайдалы сілтемелер", d: "Бүкіл процеске арналған сілтемелер анықтамалығы.", href: "recursos/documentacion.html" },
          { key: "trabajo", title: "Жұмыс табу", d: "Диплом танылғаннан кейінгі үш нақты жұмысқа орналасу жолы.", href: "recursos/trabajar-en-espana.html" },
          { key: "mir", title: "MIR резидентурасы", d: "Гомологациядан кейін мамандануға қалай түсу керек.", href: "recursos/mir.html" },
          { key: "dentistas", title: "Стоматологтарға", d: "Процесс дәрігерлерден қалай ерекшеленеді.", href: "recursos/dentistas.html" },
          { key: "especialidades", title: "Мамандықты тану", d: "Диплом гомологациясынан кейінгі екінші кезең.", href: "recursos/especialidades.html" },
          { key: "espanol", title: "Испан тілі және DELE", d: "Гомологацияға қандай деңгей керек, MIR-ге қандай.", href: "recursos/espanol-dele.html" },
          { key: "residencia", title: "Виза және ВНЖ", d: "Дәрігер үшін резиденция алудың үш жолы.", href: "recursos/residencia.html" }
        ]
      }
    },

    resourceArticles: {
      trabajo: {
        ru: { kicker: "Работа", title: "Как найти работу врачу в Испании", updated: "Обновлено: сентябрь 2026",
          lede: "После признания диплома у вас есть три основных пути трудоустройства — у каждого свои условия.",
          sections: [
            { h: "Совмещение учёбы и работы", items: ["Языковые курсы, подготовка к MIR и курсы по специальности — параллельно с частичной занятостью", "Через 3 года такой путь даёт резиденцию с правом на работу"] },
            { h: "Частная практика", items: ["Подходит стоматологам, косметологам, диетологам и другим специалистам с опытом частной практики", "Успех зависит от знания рынка и предпринимательской хватки, а не только от диплома"] },
            { h: "Работа в больнице", items: ["Некоторые больницы при нехватке врачей временно нанимают иностранных специалистов", "Меньше конкуренции у педиатров, анестезиологов и врачей неотложной помощи", "По другим специальностям чаще приходится начинать с позиции ассистента врача"] }
          ],
          calloutTitle: "Реальность рынка сегодня",
          callout: "Сейчас вакансии чаще встречаются в менее популярных местах: сельская местность с переездами и разъездные клиники на предприятиях (около 1200 €/месяц). Мы говорим об этом прямо, а не только о лучших случаях.",
          contactNote: "Вопросы — на email: rauf@esparus.es"
        },
        en: { kicker: "Work", title: "Finding a job as a doctor in Spain", updated: "Updated: September 2026",
          lede: "Once your degree is recognised, there are three main employment paths — each with its own conditions.",
          sections: [
            { h: "Studying while working part-time", items: ["Language courses, MIR preparation and specialty courses alongside part-time work", "After 3 years this path leads to residency with the right to work"] },
            { h: "Private practice", items: ["Suits dentists, cosmetic specialists, dietitians and others with private-practice experience", "Success depends on knowing the market and business skills, not just the degree"] },
            { h: "Hospital employment", items: ["Some hospitals temporarily hire foreign doctors when short-staffed", "Less competition for paediatricians, anaesthesiologists and emergency-medicine doctors", "Other specialties more often start as a physician's assistant"] }
          ],
          calloutTitle: "The reality of the market today",
          callout: "Right now, openings are more often in less sought-after settings: rural positions with long commutes, or mobile clinics visiting factories (around €1,200/month). We say this plainly, not just the best-case stories.",
          contactNote: "Questions — email rauf@esparus.es"
        },
        kz: { kicker: "Жұмыс", title: "Испанияда дәрігерге жұмыс табу", updated: "Жаңартылды: 2026 қыркүйек",
          lede: "Диплом танылғаннан кейін үш негізгі жұмысқа орналасу жолы бар — әрқайсысының өз шарттары бар.",
          sections: [
            { h: "Оқу мен жұмысты қатар алып жүру", items: ["Тіл курстары, MIR-ге дайындық және мамандық курстары — жарты күн жұмыспен қатар", "3 жылдан кейін бұл жол жұмыс істеуге құқығы бар резиденцияға әкеледі"] },
            { h: "Жеке практика", items: ["Стоматологтарға, косметологтарға, диетологтарға және жеке практика тәжірибесі барларға сай", "Табыс нарықты білу мен кәсіпкерлік қабілетке байланысты, тек дипломға емес"] },
            { h: "Ауруханада жұмыс", items: ["Кейбір аурухана дәрігер жетіспесе, шетелдік мамандарды уақытша жалдайды", "Педиатрларға, анестезиологтарға және жедел жәрдем дәрігерлеріне бәсеке аз", "Басқа мамандықтар көбіне дәрігер көмекшісі лауазымынан бастайды"] }
          ],
          calloutTitle: "Нарықтың бүгінгі шындығы",
          callout: "Қазір бос орындар көбіне беделі аз жерлерде: ұзақ жол жүруді қажет ететін ауылдық жерлер немесе кәсіпорындарға баратын жылжымалы клиникалар (айына шамамен 1200 €). Біз мұны тек жақсы жағдайлар туралы емес, ашық айтамыз.",
          contactNote: "Сұрақтар — email: rauf@esparus.es"
        }
      },
      mir: {
        ru: { kicker: "MIR", title: "Поступление в резидентуру MIR", updated: "Обновлено: сентябрь 2026",
          lede: "MIR (Médico Interno Residente) — последипломная специализация в Испании, аналог ординatуры, 4–5 лет.",
          sections: [
            { h: "Обязательное условие", items: ["Прежде чем подаваться на MIR, диплом должен быть уже признан (гомологирован) — см. страницу «Признание диплома»"] },
            { h: "Экзамен", items: ["Тест с закрытыми вопросами и четырьмя вариантами ответа", "Иностранные врачи могут сдавать его по туристической визе и сразу уехать, вернувшись позже к распределению по резидентуре", "Для поступления нужен испанский на уровне C1 — выше, чем B2 для самой гомологации"] },
            { h: "Длительность и оплата", items: ["Не хирургические специальности — 4 года, хирургические — 5 лет", "Ординatор работает по контракту государственной больницы с зарплатой 2000–2500 €/месяц"] }
          ],
          calloutTitle: "Итог",
          callout: "По завершении MIR вы получаете диплом «специалиста», признаваемый по всей Европе и обязательный для практики по специальности в Испании.",
          contactNote: "Начните с признания диплома, прежде чем планировать MIR."
        },
        en: { kicker: "MIR", title: "Entering the MIR residency programme", updated: "Updated: September 2026",
          lede: "MIR (Médico Interno Residente) is postgraduate medical specialisation in Spain, similar to a residency, lasting 4–5 years.",
          sections: [
            { h: "A mandatory condition", items: ["Your degree must already be recognised (homologated) before you can apply to MIR — see the Degree Recognition page"] },
            { h: "The exam", items: ["A closed-question, multiple-choice test", "Foreign doctors can sit it on a tourist visa and leave right after, returning later for residency placement", "Entry requires Spanish at C1 level — higher than the B2 needed for homologation itself"] },
            { h: "Duration and pay", items: ["Non-surgical specialties: 4 years, surgical specialties: 5 years", "Residents work under a public-hospital contract, earning €2,000–2,500/month"] }
          ],
          calloutTitle: "The outcome",
          callout: "On completion of MIR you receive a \"Specialist\" diploma, recognised across Europe and required to practise your specialty in Spain.",
          contactNote: "Start with degree recognition before planning for MIR."
        },
        kz: { kicker: "MIR", title: "MIR резидентурасына түсу", updated: "Жаңартылды: 2026 қыркүйек",
          lede: "MIR (Médico Interno Residente) — Испаниядағы дипломнан кейінгі мамандану, ординatураға ұқсас, 4–5 жыл.",
          sections: [
            { h: "Міндетті шарт", items: ["MIR-ге түсер алдында диплом әлдеқашан танылған (гомологацияланған) болуы керек — «Дипломды тану» бетін қараңыз"] },
            { h: "Емтихан", items: ["Жабық сұрақты, көп нұсқалы тест", "Шетелдік дәрігерлер оны туристік визамен тапсырып, бірден кетіп, кейін резидентураға бөлінуге қайта орала алады", "Түсу үшін C1 деңгейіндегі испан тілі керек — гомологацияға қажет B2-ден жоғары"] },
            { h: "Ұзақтығы мен ақысы", items: ["Хирургиялық емес мамандықтар — 4 жыл, хирургиялық — 5 жыл", "Ординатор мемлекеттік аурухана келісімшарты бойынша айына 2000–2500 € жалақы алады"] }
          ],
          calloutTitle: "Нәтиже",
          callout: "MIR аяқталған соң бүкіл Еуропада танылатын және Испанияда мамандық бойынша жұмыс істеу үшін міндетті «маман» дипломын аласыз.",
          contactNote: "MIR жоспарлаудан бұрын диплом тануынан бастаңыз."
        }
      },
      dentistas: {
        ru: { kicker: "Стоматологам", title: "Признание диплома для стоматологов", updated: "Обновлено: сентябрь 2026",
          lede: "Процесс для стоматологов отличается от врачей: интернатура не нужна — вместо неё сдаются экзамены по отдельным дисциплинам.",
          sections: [
            { h: "Главные отличия от врачей", items: ["MIR для стоматологов не предусмотрен", "После признания диплом даёт право работать по всем направлениям: протезирование, хирургия полости рта, эстетика и другие"] },
            { h: "Как проходит процесс", items: ["Экзамен B2 по испанскому", "Подача документов на гомологацию — даётся 4 года на досдачу дисциплин", "Сдача 4 экзаменов: комплексная стоматология взрослых, комплексная стоматология детская, стоматология для пациентов с особыми потребностями, судебная и правовая стоматология"] },
            { h: "Что мы предлагаем", items: ["Подготовку к испанскому языку", "Помощь с подачей документов на гомологацию", "Подготовку к четырём экзаменам", "В отдельных случаях — признание диплома без экзаменов, если программы совпадают"] }
          ],
          contactNote: "Контакт: Ляйла Халиуллина — lila@esparus.es"
        },
        en: { kicker: "Dentists", title: "Degree recognition for dentists", updated: "Updated: September 2026",
          lede: "The process for dentists is different from doctors: no internship is required — instead you sit exams in separate disciplines.",
          sections: [
            { h: "Key differences from doctors", items: ["There is no MIR for dentists", "Once recognised, the diploma allows you to work across all fields: prosthodontics, oral surgery, aesthetics and others"] },
            { h: "How the process works", items: ["Spanish B2 exam", "Filing homologation paperwork — you get 4 years to complete any missing subjects", "Passing 4 exams: comprehensive adult dentistry, comprehensive paediatric dentistry, dentistry for patients with special needs, and forensic/legal dentistry"] },
            { h: "What we offer", items: ["Spanish language preparation", "Help filing the homologation paperwork", "Preparation for all four exams", "In some cases, recognition without exams if your programme already matches"] }
          ],
          contactNote: "Contact: Lyayla Khaliulina — lila@esparus.es"
        },
        kz: { kicker: "Стоматологтар", title: "Стоматологтарға диплом тану", updated: "Жаңартылды: 2026 қыркүйек",
          lede: "Стоматологтарға арналған процесс дәрігерлерден өзгеше: интернатура қажет емес — оның орнына жеке пәндерден емтихан тапсырылады.",
          sections: [
            { h: "Дәрігерлерден негізгі айырмашылықтар", items: ["Стоматологтарға MIR жоқ", "Тану болған соң диплом барлық бағыт бойынша жұмыс істеуге құқық береді: протездеу, ауыз қуысы хирургиясы, эстетика және басқалар"] },
            { h: "Процесс қалай өтеді", items: ["Испан тілінен B2 емтиханы", "Гомологацияға құжат тапсыру — жетіспейтін пәндерді тапсыруға 4 жыл беріледі", "4 емтихан тапсыру: ересектерге кешенді стоматология, балаларға кешенді стоматология, ерекше қажеттілігі бар пациенттерге стоматология, сот-құқықтық стоматология"] },
            { h: "Біз не ұсынамыз", items: ["Испан тіліне дайындық", "Гомологацияға құжат тапсыруға көмек", "Төрт емтиханға дайындық", "Кейбір жағдайда — бағдарлама сәйкес келсе, емтихансыз тану"] }
          ],
          contactNote: "Байланыс: Ляйла Халиуллина — lila@esparus.es"
        }
      },
      especialidades: {
        ru: { kicker: "Специальность", title: "Признание медицинской специальности в Испании", updated: "Обновлено: сентябрь 2026",
          lede: "Признание специальности, полученной в России или Украине, регулируется европейской директивой 2005/36/CE и возможно только после признания самого диплома.",
          sections: [
            { h: "Сроки обучения", items: ["У каждой специальности — свой минимальный срок подготовки, признаваемый Испанией", "Например: аллергология — 3 года, общая хирургия — 5 лет, терапия — 5 лет"] },
            { h: "Необходимые документы", items: ["Копия загранпаспорта и диплом специалиста", "Гомологация диплома от Министерства образования Испании", "Сертификат о профессиональной деятельности и документы вуза о праве на обучение", "Описание профессионального опыта: должность, место, программа обучения с часами теории и практики", "Экзамен B2 по испанскому и справка о хорошей профессиональной репутации"] },
            { h: "Экзамен при неполном соответствии программы", items: ["Первый этап: тест из 75 вопросов, нужно набрать минимум 50% (37,5 из 75 баллов)", "Второй этап: разбор трёх клинических случаев, до 33,3 балла за каждый, нужен средний балл от 50"] }
          ],
          calloutTitle: "Важно",
          callout: "Признание специальности — это отдельный, второй этап после гомологации диплома. Проходить оба процесса одновременно нельзя."
        },
        en: { kicker: "Specialty", title: "Medical specialty recognition in Spain", updated: "Updated: September 2026",
          lede: "Recognition of a specialty obtained in Russia or Ukraine is governed by EU Directive 2005/36/CE, and is only possible after the degree itself has been recognised.",
          sections: [
            { h: "Training duration requirements", items: ["Each specialty has its own minimum training period recognised by Spain", "Examples: allergology — 3 years, general surgery — 5 years, internal medicine — 5 years"] },
            { h: "Required documents", items: ["Passport copy and specialist diploma", "Diploma homologation from Spain's Ministry of Education", "Professional certificate and university documentation confirming your right to train", "A statement of professional history: role, location, training programme with theory/practice hours", "B2 Spanish exam and proof of good professional standing"] },
            { h: "The exam when the programme doesn't fully match", items: ["Stage one: a 75-question test, requiring at least 50% (37.5 of 75 points)", "Stage two: three clinical case scenarios, up to 33.3 points each, needing an average of 50+"] }
          ],
          calloutTitle: "Important",
          callout: "Specialty recognition is a separate, second stage after diploma homologation. The two processes cannot run at the same time."
        },
        kz: { kicker: "Мамандық", title: "Испанияда медициналық мамандықты тану", updated: "Жаңартылды: 2026 қыркүйек",
          lede: "Ресейде немесе Украинада алынған мамандықты тану 2005/36/CE еуропалық директивасымен реттеледі және тек дипломның өзі танылғаннан кейін ғана мүмкін.",
          sections: [
            { h: "Оқу мерзімі талаптары", items: ["Әр мамандықтың Испания таниatын өз минималды дайындық мерзімі бар", "Мысалы: аллергология — 3 жыл, жалпы хирургия — 5 жыл, терапия — 5 жыл"] },
            { h: "Қажетті құжаттар", items: ["Төлқұжат көшірмесі және маман дипломы", "Испания Білім министрлігінен диплом гомологациясы", "Кәсіби қызмет сертификаты және ЖОО-ның оқуға құқық беретін құжаттары", "Кәсіби өтіл сипаттамасы: лауазым, орын, теория/практика сағаттары көрсетілген бағдарлама", "Испан тілінен B2 емтиханы және жақсы кәсіби беделі туралы анықтама"] },
            { h: "Бағдарлама толық сәйкес келмегендегі емтихан", items: ["Бірінші кезең: 75 сұрақтан тұратын тест, кемінде 50% (75-тен 37,5 балл) жинау керек", "Екінші кезең: үш клиникалық жағдайды талдау, әрқайсысына 33,3 балға дейін, орташа 50-ден жоғары балл керек"] }
          ],
          calloutTitle: "Маңызды",
          callout: "Мамандықты тану — диплом гомологациясынан кейінгі бөлек, екінші кезең. Екі процесті бір мезгілде өтуге болмайды."
        }
      },
      espanolDele: {
        ru: { kicker: "Испанский", title: "Испанский язык и экзамен DELE", updated: "Обновлено: сентябрь 2026",
          lede: "Испанский понадобится на двух разных уровнях — в зависимости от цели.",
          sections: [
            { h: "Два уровня, две цели", items: ["B2 — обязателен для признания диплома (гомологации)", "C1 — обязателен для поступления в резидентуру MIR"] },
            { h: "Где смотреть требования", items: ["Критерии уровня B2, структура экзамена и примерные варианты — на сайте Института Сервантеса, раздел «Nivel B2 — Diplomas de Español DELE»"] },
            { h: "Подготовка с Эспарус", items: ["Занятия с преподавателями — носителями испанского языка", "Подготовка ориентирована именно на экзамен DELE B2"] }
          ],
          contactNote: "Подробности об услуге и цене — на странице «Испанский язык».",
          crossHref: "../servicios/espanol.html", crossLabel: "Услуга подготовки к DELE →"
        },
        en: { kicker: "Spanish", title: "Spanish language and the DELE exam", updated: "Updated: September 2026",
          lede: "You'll need Spanish at two different levels, depending on your goal.",
          sections: [
            { h: "Two levels, two goals", items: ["B2 — mandatory for degree recognition (homologation)", "C1 — mandatory for entering the MIR residency programme"] },
            { h: "Where to check requirements", items: ["B2 level criteria, exam structure and sample papers are on the Instituto Cervantes website, under \"Nivel B2 — Diplomas de Español DELE\""] },
            { h: "Preparing with Esparus", items: ["Classes with native Spanish-speaking teachers", "Preparation focused specifically on the DELE B2 exam"] }
          ],
          contactNote: "Details and pricing on the Spanish Language service page.",
          crossHref: "../servicios/espanol.html", crossLabel: "DELE prep service →"
        },
        kz: { kicker: "Испан тілі", title: "Испан тілі және DELE емтиханы", updated: "Жаңартылды: 2026 қыркүйек",
          lede: "Мақсатыңызға байланысты испан тілі екі түрлі деңгейде керек болады.",
          sections: [
            { h: "Екі деңгей, екі мақсат", items: ["B2 — дипломды тану (гомологация) үшін міндетті", "C1 — MIR резидентурасына түсу үшін міндетті"] },
            { h: "Талаптарды қайдан білуге болады", items: ["B2 деңгейінің критерийлері, емтихан құрылымы және үлгі нұсқалар — Сервантес институтының сайтында, «Nivel B2 — Diplomas de Español DELE» бөлімінде"] },
            { h: "Эспаруспен дайындық", items: ["Ана тілі испан оқытушыларымен сабақтар", "Дайындық тікелей DELE B2 емтиханына бағытталған"] }
          ],
          contactNote: "Қызмет пен баға туралы толығырақ — «Испан тілі» бетінде.",
          crossHref: "../servicios/espanol.html", crossLabel: "DELE дайындық қызметі →"
        }
      },
      residencia: {
        ru: { kicker: "Виза и ВНЖ", title: "Вид на жительство для врача в Испании", updated: "Обновлено: сентябрь 2026",
          lede: "Есть три основных пути получения резиденции — в зависимости от того, на каком этапе вы находитесь.",
          sections: [
            { h: "По трудоустройству", items: ["Признанный диплом плюс вакансия там, где нет местных кандидатов", "Работодатель оформляет приглашение с обязательством нанять минимум на год", "По этому приглашению выдают рабочую визу и резиденцию"] },
            { h: "Через резидентуру MIR", items: ["Признанный диплом плюс успешная сдача экзамена MIR", "Контракт с Министерством здравоохранения на 4–5 лет даёт визу, резиденцию и право работать"] },
            { h: "Без права на работу (предварительный вариант)", items: ["Резиденция через консульство без права работать", "Нужно подтвердить накопления (около 36 000 €) и жильё в Испании", "Оформляется примерно на год — время, чтобы найти работу и перейти на рабочую резиденцию"] }
          ],
          calloutTitle: "Важно",
          callout: "Этот раздел носит справочный характер. Требования консульств могут меняться — уточняйте актуальные условия непосредственно там."
        },
        en: { kicker: "Visa & residency", title: "Residency permits for a doctor in Spain", updated: "Updated: September 2026",
          lede: "There are three main routes to residency, depending on where you are in the process.",
          sections: [
            { h: "Through employment", items: ["A recognised degree plus a vacancy in an area with no local candidates", "The employer issues an invitation committing to hire you for at least a year", "That invitation gets you a work visa and residency"] },
            { h: "Through the MIR residency", items: ["A recognised degree plus passing the MIR entrance exam", "A 4–5 year contract with the Ministry of Health grants a visa, residency and the right to work"] },
            { h: "Without the right to work (a preliminary option)", items: ["Residency through the consulate without work authorisation", "Requires proof of savings (around €36,000) and Spanish housing", "Granted for about a year — time to find work and move to work-based residency"] }
          ],
          calloutTitle: "Important",
          callout: "This page is for reference only. Consulate requirements can change — confirm current conditions directly with them."
        },
        kz: { kicker: "Виза және ВНЖ", title: "Испаниядағы дәрігерге тұруға рұқсат", updated: "Жаңартылды: 2026 қыркүйек",
          lede: "Процестің қай кезеңінде екеніңізге байланысты резиденция алудың үш негізгі жолы бар.",
          sections: [
            { h: "Жұмысқа орналасу арқылы", items: ["Танылған диплом плюс жергілікті кандидат жоқ жердегі бос орын", "Жұмыс беруші кемінде бір жылға жалдауға міндеттеме беретін шақыру ресімдейді", "Осы шақыру бойынша жұмыс визасы мен резиденция беріледі"] },
            { h: "MIR резидентурасы арқылы", items: ["Танылған диплом плюс MIR кіру емтиханын сәтті тапсыру", "Денсаулық сақтау министрлігімен 4–5 жылдық келісімшарт виза, резиденция және жұмыс істеу құқығын береді"] },
            { h: "Жұмыс істеу құқығынсыз (алдын ала нұсқа)", items: ["Консулдық арқылы жұмыс рұқсатынсыз резиденция", "Жинақ (шамамен 36 000 €) және Испанияда тұрғын үй растауы керек", "Шамамен бір жылға беріледі — осы уақытта жұмыс тауып, жұмыс резиденциясына көшуге болады"] }
          ],
          calloutTitle: "Маңызды",
          callout: "Бұл бет анықтамалық сипатта. Консулдық талаптары өзгеруі мүмкін — өзекті шарттарды тікелей сонда нақтылаңыз."
        }
      },
      documentacion: {
        ru: { kicker: "Документы", title: "Документы и полезные ссылки", updated: "Обновлено: сентябрь 2026",
          lede: "Эта страница — справочник материалов, которые часто нужны в процессе, а не исчерпывающий список требований. Полный чек-лист документов для гомологации — на странице «Признание диплома».",
          sections: [
            { h: "Что здесь можно найти", items: ["Вопросы прошлых лет экзамена MIR", "Где ставится апостиль", "Программы медицинского образования в Испании", "Признание европейских дипломов", "Программы экзаменов по стоматологии"] }
          ]
        },
        en: { kicker: "Documents", title: "Documents and useful links", updated: "Updated: September 2026",
          lede: "This page is a directory of materials often needed during the process, not an exhaustive requirements list. The full document checklist for homologation is on the Degree Recognition page.",
          sections: [
            { h: "What you'll find here", items: ["Past years' MIR exam questions", "Where to get documents apostilled", "Spanish medical education programmes", "EU diploma recognition", "Dentistry exam syllabuses"] }
          ]
        },
        kz: { kicker: "Құжаттар", title: "Құжаттар мен пайдалы сілтемелер", updated: "Жаңартылды: 2026 қыркүйек",
          lede: "Бұл бет — процесте жиі керек болатын материалдар анықтамалығы, толық талаптар тізімі емес. Гомологацияға арналған толық құжат тізімі — «Дипломды тану» бетінде.",
          sections: [
            { h: "Мұнда не табуға болады", items: ["MIR емтиханының өткен жылдардағы сұрақтары", "Апостиль қайда қойылады", "Испанияның медициналық білім бағдарламалары", "Еуропалық дипломдарды тану", "Стоматология емтихан бағдарламалары"] }
          ]
        }
      }
    },

    footer: {
      ru: { rights: "Все права защищены.", contactLabel: "Контакты", servicesLabel: "Услуги", resourcesLabel: "Ресурсы", socialLabel: "Мы также здесь", about: "Помогаем врачам из-за рубежа готовить профессиональный путь в Испании." },
      en: { rights: "All rights reserved.", contactLabel: "Contact", servicesLabel: "Services", resourcesLabel: "Resources", socialLabel: "Find us here too", about: "We help doctors from abroad prepare their professional path in Spain." },
      kz: { rights: "Барлық құқықтар қорғалған.", contactLabel: "Байланыс", servicesLabel: "Қызметтер", resourcesLabel: "Ресурстар", socialLabel: "Бізді осында да табасыз", about: "Шетелдік дәрігерлерге Испанияда кәсіби жол дайындауға көмектесеміз." }
    },

    contact: { phone1: "+34 678 976 685", phone2: "+34 664 090 985", email1: "rauf@esparus.es", email2: "lila@esparus.es" },

    social: {
      vk: "https://vk.com/doctorinspain",
      youtube: "https://www.youtube.com/@ВрачомвИспанию",
      blog: "http://blog.esparus.es/"
    },

    resourcesTitle: { ru: "Официальные ссылки", en: "Official links", kz: "Ресми сілтемелер" },

    resources: {
      ru: [
        { label: "Минобрнауки Испании — гомологация", href: "http://www.mecd.gob.es/servicios-al-ciudadano-mecd/catalogo/educacion/gestion-titulos/estudios-universitarios/titulos-extranjeros/homologacion-educacion-superior.html" },
        { label: "Минздрав Испании — экзамен MIR", href: "http://sis.msssi.es/fse/Default.aspx?MenuId=QE-00" },
        { label: "Экзамен DELE B2", href: "http://dele.cervantes.es/informacion/niveles/nivel_b2.html" }
      ],
      en: [
        { label: "Spanish Ministry of Education — homologation", href: "http://www.mecd.gob.es/servicios-al-ciudadano-mecd/catalogo/educacion/gestion-titulos/estudios-universitarios/titulos-extranjeros/homologacion-educacion-superior.html" },
        { label: "Spanish Ministry of Health — MIR exam", href: "http://sis.msssi.es/fse/Default.aspx?MenuId=QE-00" },
        { label: "DELE B2 exam", href: "http://dele.cervantes.es/informacion/niveles/nivel_b2.html" }
      ],
      kz: [
        { label: "Испания Білім министрлігі — гомологация", href: "http://www.mecd.gob.es/servicios-al-ciudadano-mecd/catalogo/educacion/gestion-titulos/estudios-universitarios/titulos-extranjeros/homologacion-educacion-superior.html" },
        { label: "Испания Денсаулық министрлігі — MIR", href: "http://sis.msssi.es/fse/Default.aspx?MenuId=QE-00" },
        { label: "DELE B2 емтиханы", href: "http://dele.cervantes.es/informacion/niveles/nivel_b2.html" }
      ]
    },

    contactPage: {
      ru: {
        kicker: "Контакты", title: "Свяжитесь с нами", sub: "Отвечаем лично — Рауф и Ляйла, без call-центра и общего потока.",
        cards: [
          { name: "Рауф Халиуллин", role: "Диплом, документы, гомологация" },
          { name: "Ляйла Халиуллина", role: "Испанский язык и общие вопросы" }
        ],
        paymentTitle: "Способы оплаты",
        paymentMethods: ["PayPal", "Перевод на счёт в Сбербанке — в рублях по курсу банка", "Наличные при встрече в Испании", "По договорённости — другие способы"]
      },
      en: {
        kicker: "Contact", title: "Get in touch", sub: "You'll hear back from Rauf and Lyayla personally — no call centre, no queue.",
        cards: [
          { name: "Rauf Khaliulin", role: "Degree, paperwork, homologation" },
          { name: "Lyayla Khaliulina", role: "Spanish language and general questions" }
        ],
        paymentTitle: "Payment methods",
        paymentMethods: ["PayPal", "Bank transfer to a Sberbank account — in roubles at the bank's rate", "Cash in person in Spain", "Other methods by arrangement"]
      },
      kz: {
        kicker: "Байланыс", title: "Бізбен байланысыңыз", sub: "Рауф пен Ляйла жеке өздері жауап береді — колл-орталықсыз, кезексіз.",
        cards: [
          { name: "Рауф Халиуллин", role: "Диплом, құжаттар, гомологация" },
          { name: "Ляйла Халиуллина", role: "Испан тілі және жалпы сұрақтар" }
        ],
        paymentTitle: "Төлем әдістері",
        paymentMethods: ["PayPal", "Сбербанк шотына аударым — банк бағамы бойынша рубльмен", "Испанияда кездескенде қолма-қол", "Келісім бойынша басқа әдістер"]
      }
    },

    svcNewsletter: {
      ru: {
        kicker: "Бесплатно", title: "E-mail рассылка «Врачом в Испанию»",
        lede: "Эта рассылка может изменить вашу жизнь: как проходит признание диплома, что делать после гомологации, как получить медицинскую специальность в Испании и какие сейчас условия работы для врачей.",
        priceNum: "0 €", priceNote: "бессрочно, без обязательств",
        included: ["Как проходит гомологация диплома — шаг за шагом", "Что делать после признания диплома", "Как получить медицинскую специальность в Испании", "Актуальные условия работы для врачей в Испании"],
        signupNote: "Подписка оформляется на отдельной странице:",
        signupLabel: "Оформить бесплатную подписку →", signupHref: "https://esparus.unisender.cc/",
        crossTitle: "Дальше по теме"
      },
      en: {
        kicker: "Free", title: "The \"A Doctor in Spain\" email newsletter",
        lede: "This newsletter can change your path: how homologation actually works, what to do once your degree is recognised, how to get a medical specialty in Spain, and the current working conditions for doctors.",
        priceNum: "€0", priceNote: "open-ended, no obligation",
        included: ["How degree homologation works, step by step", "What to do after your degree is recognised", "How to get a medical specialty in Spain", "Current working conditions for doctors in Spain"],
        signupNote: "Sign up on a separate page:",
        signupLabel: "Get the free newsletter →", signupHref: "https://esparus.unisender.cc/",
        crossTitle: "Related next steps"
      },
      kz: {
        kicker: "Тегін", title: "«Врачом в Испанию» e-mail таратылымы",
        lede: "Бұл таратылым өміріңізді өзгерте алады: гомологация қалай өтеді, дипломды таныған соң не істеу керек, Испанияда медициналық мамандықты қалай алу керек және қазір дәрігерлерге қандай еңбек жағдайлары бар.",
        priceNum: "0 €", priceNote: "мерзімсіз, міндеттемесіз",
        included: ["Диплом гомологациясы қалай өтеді — қадам бойынша", "Диплом танылған соң не істеу керек", "Испанияда медициналық мамандықты қалай алу керек", "Испанияда дәрігерлерге арналған қазіргі еңбек жағдайлары"],
        signupNote: "Жазылу бөлек бетте рәсімделеді:",
        signupLabel: "Тегін жазылу →", signupHref: "https://esparus.unisender.cc/",
        crossTitle: "Осы тақырып бойынша келесі қадам"
      }
    },

    svcConsultation: {
      ru: {
        kicker: "Личная консультация", title: "Разберём все важные вопросы",
        lede: "Час созвона, на котором мы разбираем именно вашу ситуацию: какой путь подходит с учётом вашего диплома, какие есть варианты переезда, можно ли переехать с семьёй — и отвечаем на любые другие вопросы.",
        priceNum: "100 €", priceNote: "около часа · оплата после консультации",
        included: ["Образовательный маршрут именно под ваш диплом", "Варианты переезда и что нужно для каждого", "Переезд вместе с семьёй", "Ответы на любые ваши вопросы"],
        body: "Может показаться, что информации в интернете достаточно, но из разных источников и мнений в голове часто только больше путаницы. Личная консультация с человеком, который прошёл через это на практике, экономит и время, и деньги.",
        payment: ["Перевод на испанский или российский счёт (Сбербанк, в рублях по курсу банка)"],
        contactNote: "Записаться можно у Рауфа Халиуллина: +34 678 976 685",
        crossTitle: "Дальше по теме"
      },
      en: {
        kicker: "Personal consultation", title: "We'll sort through everything that matters",
        lede: "An hour on a call where we go through your specific situation: which route fits your degree, what relocation options exist, whether you can move with your family — and answer anything else you're wondering about.",
        priceNum: "€100", priceNote: "about an hour · paid after the consultation",
        included: ["An education route built around your specific degree", "Relocation options and what each one requires", "Moving together with your family", "Answers to any other questions you have"],
        body: "It can seem like there's enough information online, but different sources and opinions usually add up to more confusion, not less. A personal consultation with someone who has actually been through it saves both time and money.",
        payment: ["Bank transfer to a Spanish or Russian account (Sberbank, in roubles at the bank's rate)"],
        contactNote: "Book directly with Rauf Khaliulin: +34 678 976 685",
        crossTitle: "Related next steps"
      },
      kz: {
        kicker: "Жеке кеңес", title: "Барлық маңызды сұрақты талдаймыз",
        lede: "Бір сағаттық қоңырауда дәл сіздің жағдайыңызды талдаймыз: дипломыңызға қарай қандай жол қолайлы, қандай көшу нұсқалары бар, отбасыңызбен көшуге бола ма — және басқа кез келген сұраққа жауап береміз.",
        priceNum: "100 €", priceNote: "шамамен бір сағат · кеңестен кейін төленеді",
        included: ["Дәл сіздің дипломыңызға сай білім беру бағыты", "Көшу нұсқалары және әрқайсысына не керек", "Отбасыңызбен бірге көшу", "Кез келген басқа сұрағыңызға жауап"],
        body: "Интернетте ақпарат жеткілікті сияқты көрінуі мүмкін, бірақ әртүрлі дереккөздер мен пікірлер көбіне түсінікті емес, тек шатасуды арттырады. Бұл жолды нақты өткен адаммен жеке кеңес уақыт пен ақшаны үнемдейді.",
        payment: ["Испан немесе ресей шотына аударым (Сбербанк, банк бағамы бойынша рубльмен)"],
        contactNote: "Жазылу: Рауф Халиуллин, +34 678 976 685",
        crossTitle: "Осы тақырып бойынша келесі қадам"
      }
    },

    svcDiploma: {
      ru: {
        kicker: "Признание диплома", title: "Оформить признание диплома (homologación)",
        lede: "Мы больше 20 лет доводим гомологацию медицинских дипломов до конца — уже больше 700 случаев, и все — с первого раза, без отказов.",
        priceNum: "1200 €", priceNote: "тремя платежами: 300 € + 400 € + 500 € — последний и самый крупный платёж уже после подтверждения признания",
        included: ["Разбор вашего диплома и подготовка понятного пакета документов", "Апостили и переводы у присяжного переводчика, с которым мы работаем 20 лет", "Подача дела в министерство и сопровождение на всех этапах", "Получение официального документа — Credenciales de Homologación"],
        howItWorksTitle: "Как это устроено",
        howItWorks: ["Вы получаете пошаговую инструкцию и собираете простой пакет документов, который присылаете нам сканами по email.", "Мы в Испании делаем всё остальное: подаём дело в министерство и ведём его до конца.", "Вы получаете официальный документ о признании — Credenciales de Homologación."],
        documentsTitle: "Какие документы нужны",
        realisticTitle: "Реалистичный срок",
        realistic: "Официальный срок — полгода, но на практике процесс занимает 9–18 месяцев. Больше всего тревоги вызывает не сам процесс, а тишина после подачи — мы отслеживаем статус дела и вовремя отвечаем на любые запросы министерства.",
        paymentTitle: "Способы оплаты",
        payment: ["PayPal", "Перевод на счёт в Сбербанке (в рублях по курсу)", "Наличные в Испании", "По договорённости — другие способы"],
        contactNote: "Email: rauf@esparus.es · Тел: +34 678 976 685",
        crossTitle: "Дальше по теме"
      },
      en: {
        kicker: "Degree recognition", title: "Getting your degree recognised (homologación)",
        lede: "For more than 20 years we've seen medical degree homologation through to the end — over 700 cases so far, every one of them recognised on the first attempt.",
        priceNum: "€1,200", priceNote: "in three payments: €300 + €400 + €500 — the last and largest payment comes only after recognition is confirmed",
        included: ["A review of your degree and a clear, straightforward document package", "Apostilles and translation by the sworn translator we've worked with for 20 years", "Filing your case with the ministry and managing it at every stage", "Delivery of the official document — Credenciales de Homologación"],
        howItWorksTitle: "How it works",
        howItWorks: ["You get step-by-step instructions and put together a simple document package, which you send us as scans by email.", "We handle everything else from Spain: filing your case with the ministry and seeing it through to the end.", "You receive the official recognition document — Credenciales de Homologación."],
        documentsTitle: "The documents you'll need",
        realisticTitle: "A realistic timeline",
        realistic: "The official timeline is six months, but in practice the process takes 9–18 months. What causes the most anxiety isn't the process itself but the silence after filing — we track the case status and respond to any ministry request on time.",
        paymentTitle: "Payment methods",
        payment: ["PayPal", "Bank transfer to a Sberbank account (in roubles at the bank's rate)", "Cash in Spain", "Other methods by arrangement"],
        contactNote: "Email: rauf@esparus.es · Phone: +34 678 976 685",
        crossTitle: "Related next steps"
      },
      kz: {
        kicker: "Дипломды тану", title: "Дипломды тануды ресімдеу (homologación)",
        lede: "Біз 20 жылдан астам уақыт медициналық дипломдардың гомологациясын соңына дейін жеткіземіз — қазірге дейін 700-ден астам жағдай, әрқайсысы бірінші реттен танылды.",
        priceNum: "1200 €", priceNote: "үш төлеммен: 300 € + 400 € + 500 € — соңғы әрі ең үлкен төлем тану расталған соң ғана төленеді",
        included: ["Дипломыңызды талдау және түсінікті құжат пакетін дайындау", "20 жыл бірге жұмыс істеп келе жатқан ант берген аудармашыда апостиль мен аударма", "Ісіңізді министрлікке тапсыру және әр кезеңде сүйемелдеу", "Ресми тану құжатын алу — Credenciales de Homologación"],
        howItWorksTitle: "Бұл қалай жұмыс істейді",
        howItWorks: ["Қадамдық нұсқаулық аласыз және бізге email арқылы сканерленген қарапайым құжат пакетін жібересіз.", "Испанияда қалғанының бәрін біз істейміз: ісіңізді министрлікке тапсырып, соңына дейін жүргіземіз.", "Ресми тану құжатын аласыз — Credenciales de Homologación."],
        documentsTitle: "Қандай құжаттар керек",
        realisticTitle: "Нақты мерзім",
        realistic: "Ресми мерзім — алты ай, бірақ іс жүзінде процесс 9–18 ай алады. Ең көп алаңдатушылықты процестің өзі емес, тапсырудан кейінгі үнсіздік тудырады — біз істің мәртебесін бақылап, министрліктің кез келген сұрауына уақытында жауап береміз.",
        paymentTitle: "Төлем әдістері",
        payment: ["PayPal", "Сбербанк шотына аударым (банк бағамы бойынша рубльмен)", "Испанияда қолма-қол", "Келісім бойынша басқа әдістер"],
        contactNote: "Email: rauf@esparus.es · Тел: +34 678 976 685",
        crossTitle: "Осы тақырып бойынша келесі қадам"
      }
    },

    svcSpanish: {
      ru: {
        kicker: "Испанский язык", title: "Подготовим к экзамену DELE",
        lede: "Экзамен B2 по испанскому — обязательное условие для гомологации и, по нашему опыту, самый тревожный этап для большинства. Занимайтесь с нашими преподавателями — носителями испанского языка.",
        priceNum: "по запросу", priceNote: "напишите Ляйле — она подберёт подходящего преподавателя",
        included: ["Подготовка именно к экзамену DELE B2", "Преподаватели — носители испанского языка", "Материал «Как учить испанский?» в помощь"],
        contactNote: "Email: lila@esparus.es",
        crossTitle: "Дальше по теме"
      },
      en: {
        kicker: "Spanish language", title: "DELE exam preparation",
        lede: "The Spanish B2 exam is a mandatory condition for homologation and, in our experience, the step that worries most people the most. Study with our native Spanish-speaking teachers.",
        priceNum: "on request", priceNote: "write to Lyayla — she'll match you with a suitable teacher",
        included: ["Preparation focused specifically on the DELE B2 exam", "Native Spanish-speaking teachers", "A \"How to study Spanish?\" guide to help along the way"],
        contactNote: "Email: lila@esparus.es",
        crossTitle: "Related next steps"
      },
      kz: {
        kicker: "Испан тілі", title: "DELE емтиханына дайындаймыз",
        lede: "Испан тілінен B2 емтиханы — гомологацияға міндетті шарт және біздің тәжірибемізде көпшілікті ең көп алаңдататын кезең. Ана тілі испан оқытушыларымызбен айналысыңыз.",
        priceNum: "сұрау бойынша", priceNote: "Ляйлаға жазыңыз — ол сізге лайықты оқытушы табады",
        included: ["Тікелей DELE B2 емтиханына бағытталған дайындық", "Ана тілі испан оқытушылар", "«Испан тілін қалай үйрену керек?» көмекші материалы"],
        contactNote: "Email: lila@esparus.es",
        crossTitle: "Осы тақырып бойынша келесі қадам"
      }
    },

    svcTranslations: {
      ru: {
        kicker: "Переводы", title: "Переводы на испанский",
        lede: "Правильные переводы по доступной цене — только проверенные лицензированные присяжные переводчики, сертифицированные Министерством юстиции Испании. Мы работаем с одним и тем же переводчиком уже 20 лет.",
        priceNum: "от 40 €", priceNote: "зависит от документа и объёма",
        included: ["Присяжный (официальный) перевод, который принимает министерство", "Апостилированные документы переводятся вместе с апостилем", "Только лицензированные переводчики"],
        contactNote: "Email: rauf@esparus.es",
        crossTitle: "Дальше по теме",
        formTitle: "Запросить расчёт стоимости",
        formNote: "Обычно эти данные нужны только для того, чтобы ответить на ваш запрос."
      },
      en: {
        kicker: "Translations", title: "Spanish translations",
        lede: "Accurate translations at a fair price — only verified, licensed sworn translators certified by Spain's Ministry of Justice. We've worked with the same translator for 20 years.",
        priceNum: "from €40", priceNote: "depends on the document and volume",
        included: ["A sworn (official) translation the ministry accepts", "Apostilled documents are translated together with the apostille", "Licensed translators only"],
        contactNote: "Email: rauf@esparus.es",
        crossTitle: "Related next steps",
        formTitle: "Request a quote",
        formNote: "We normally use these details only to reply to your request."
      },
      kz: {
        kicker: "Аудармалар", title: "Испан тіліне аудармалар",
        lede: "Қолжетімді бағамен дұрыс аудармалар — тек Испания Әділет министрлігі сертификаттаған тексерілген, лицензиялы ант берген аудармашылар. Біз бір аудармашымен 20 жыл бірге жұмыс істейміз.",
        priceNum: "40 €-ден", priceNote: "құжат пен көлеміне байланысты",
        included: ["Министрлік қабылдайтын ант берген (ресми) аударма", "Апостильденген құжаттар апостильмен бірге аударылады", "Тек лицензиялы аудармашылар"],
        contactNote: "Email: rauf@esparus.es",
        crossTitle: "Осы тақырып бойынша келесі қадам",
        formTitle: "Құн есебін сұрау",
        formNote: "Әдетте бұл деректер тек сұрауыңызға жауап беру үшін қажет."
      }
    },

    notFound: {
      ru: { title: "Этой страницы больше нет здесь", body: "Мы реорганизовали сайт, чтобы информацию было проще находить.", cta1: "На главную", cta2: "Смотреть ресурсы" },
      en: { title: "This page isn't here any more", body: "We reorganised the site to make information easier to find.", cta1: "Go to homepage", cta2: "Browse resources" },
      kz: { title: "Бұл бет енді осында жоқ", body: "Ақпаратты табу оңай болу үшін сайтты қайта ұйымдастырдық.", cta1: "Басты бетке", cta2: "Ресурстарды көру" }
    }
  };
})();
