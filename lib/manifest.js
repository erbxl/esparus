(function () {
  "use strict";

  window.__BRAND__ = {
    name: "Esparus",
    defaultLang: "ru",
    langs: ["ru", "en", "kz"],

    nav: {
      ru: { home: "Главная", services: "Услуги", contact: "Контакты", cta: "Оставить заявку",
        svcNewsletter: "E-mail рассылка", svcConsultation: "Личная консультация", svcDiploma: "Признать диплом",
        svcSpanish: "Испанский язык", svcTranslations: "Переводы на испанский" },
      en: { home: "Home", services: "Services", contact: "Contact", cta: "Get Started",
        svcNewsletter: "Email newsletter", svcConsultation: "Personal consultation", svcDiploma: "Diploma recognition",
        svcSpanish: "Spanish language", svcTranslations: "Spanish translations" },
      kz: { home: "Басты бет", services: "Қызметтер", contact: "Байланыс", cta: "Өтінім қалдыру",
        svcNewsletter: "E-mail таратылымы", svcConsultation: "Жеке кеңес", svcDiploma: "Дипломды тану",
        svcSpanish: "Испан тілі", svcTranslations: "Испан тіліне аудармалар" }
    },

    hero: {
      ru: {
        kicker: "Врачом — в Испанию",
        title: "Предлагаем вам переехать врачом в Испанию",
        sub: "Испания — возможно, лучшая страна для работы врачом: достойные условия труда, развитая инфраструктура, климат, еда и прекрасные люди. С 2006 года мы прошли этот путь больше чем с 700 врачами из России, Украины, Казахстана, Беларуси и других стран СНГ.",
        cta1: "Составить личный план",
        cta2: "Как это происходит"
      },
      en: {
        kicker: "A doctor — in Spain",
        title: "We help you relocate to Spain as a doctor",
        sub: "Spain may well be the best country to practise medicine in: decent working conditions, solid infrastructure, climate, food and wonderful people. Since 2006 we've walked this path with more than 700 doctors from Russia, Ukraine, Kazakhstan, Belarus and other CIS countries.",
        cta1: "Build my action plan",
        cta2: "See how it works"
      },
      kz: {
        kicker: "Дәрігер болып — Испанияға",
        title: "Испанияда дәрігер болып жұмыс істеуге көмектесеміз",
        sub: "Испания — дәрігер болып жұмыс істеуге бәлкім ең жақсы ел: лайықты еңбек жағдайы, дамыған инфрақұрылым, климат, тағам және керемет адамдар. 2006 жылдан бері Ресей, Украина, Қазақстан, Беларусь және басқа ТМД елдерінен 700-ден астам дәрігермен осы жолдан өттік.",
        cta1: "Жеке жоспар құру",
        cta2: "Бұл қалай болатынын білу"
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

    servicesSummary: {
      ru: {
        title: "Услуги",
        sub: "Каждый шаг можно пройти отдельно — или доверить нам целиком.",
        items: [
          { name: "Первые шаги", price: "бесплатно", d: "Email-рассылка с базовой информацией о процессе.", href: "uslugi/unform.html" },
          { name: "Личная консультация", price: "100 €", d: "Час на все ваши вопросы: план, сроки, варианты для семьи.", href: "uslugi/konsultacia.html" },
          { name: "Признание диплома", price: "1200 €, по этапам", d: "Полное сопровождение гомологации диплома под ключ.", href: "uslugi/standart.html" },
          { name: "Испанский язык", price: "по запросу", d: "Подготовка к экзамену DELE B2 с преподавателями-носителями.", href: "uslugi/ispanski.html" },
          { name: "Переводы на испанский", price: "от 40 €", d: "Официальные присяжные переводы документов.", href: "uslugi/perevody.html" }
        ]
      },
      en: {
        title: "Services",
        sub: "Take each step on its own — or hand us the whole process.",
        items: [
          { name: "First steps", price: "free", d: "An email newsletter with the basics of the process.", href: "uslugi/unform.html" },
          { name: "Personal consultation", price: "€100", d: "An hour for all your questions: plan, timeline, family options.", href: "uslugi/konsultacia.html" },
          { name: "Degree recognition", price: "€1,200, in stages", d: "Full turnkey support through homologation.", href: "uslugi/standart.html" },
          { name: "Spanish language", price: "on request", d: "DELE B2 exam prep with native-speaking teachers.", href: "uslugi/ispanski.html" },
          { name: "Spanish translations", price: "from €40", d: "Official sworn translations of your documents.", href: "uslugi/perevody.html" }
        ]
      },
      kz: {
        title: "Қызметтер",
        sub: "Әр қадамды бөлек өтуге болады — немесе бәрін бізге сеніп тапсырыңыз.",
        items: [
          { name: "Алғашқы қадамдар", price: "тегін", d: "Процестің негіздері туралы электрондық хат таратылымы.", href: "uslugi/unform.html" },
          { name: "Жеке кеңес", price: "100 €", d: "Барлық сұрағыңызға бір сағат: жоспар, мерзім, отбасы үшін нұсқалар.", href: "uslugi/konsultacia.html" },
          { name: "Дипломды тану", price: "1200 €, кезеңімен", d: "Гомологацияны толық, түйіндемелі сүйемелдеу.", href: "uslugi/standart.html" },
          { name: "Испан тілі", price: "сұрау бойынша", d: "Ана тілі испан оқытушыларымен DELE B2 емтиханына дайындық.", href: "uslugi/ispanski.html" },
          { name: "Испан тіліне аудармалар", price: "40 €-ден", d: "Құжаттардың ресми ант берген аудармасы.", href: "uslugi/perevody.html" }
        ]
      }
    },

    servicesPage: {
      ru: { kicker: "Услуги", title: "Как мы можем помочь", sub: "От бесплатной рассылки до полного сопровождения гомологации — выбирайте то, что нужно именно сейчас." },
      en: { kicker: "Services", title: "How we can help", sub: "From a free newsletter to full homologation support — pick what you need right now." },
      kz: { kicker: "Қызметтер", title: "Біз қалай көмектесе аламыз", sub: "Тегін таратылымнан гомологацияны толық сүйемелдеуге дейін — қазір керегін таңдаңыз." }
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
      ru: { rights: "Все права защищены.", contactLabel: "Контакты", resourcesLabel: "Полезные ссылки", socialLabel: "Мы также здесь" },
      en: { rights: "All rights reserved.", contactLabel: "Contact", resourcesLabel: "Useful links", socialLabel: "Find us here too" },
      kz: { rights: "Барлық құқықтар қорғалған.", contactLabel: "Байланыс", resourcesLabel: "Пайдалы сілтемелер", socialLabel: "Бізді осында да табасыз" }
    },

    contact: { phone1: "+34 678 976 685", phone2: "+34 664 090 985", email1: "rauf@esparus.es", email2: "lila@esparus.es" },

    social: {
      vk: "https://vk.com/doctorinspain",
      youtube: "https://www.youtube.com/@ВрачомвИспанию",
      blog: "http://blog.esparus.es/"
    },

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
        crossTitle: "Дальше по теме"
      },
      en: {
        kicker: "Translations", title: "Spanish translations",
        lede: "Accurate translations at a fair price — only verified, licensed sworn translators certified by Spain's Ministry of Justice. We've worked with the same translator for 20 years.",
        priceNum: "from €40", priceNote: "depends on the document and volume",
        included: ["A sworn (official) translation the ministry accepts", "Apostilled documents are translated together with the apostille", "Licensed translators only"],
        contactNote: "Email: rauf@esparus.es",
        crossTitle: "Related next steps"
      },
      kz: {
        kicker: "Аудармалар", title: "Испан тіліне аудармалар",
        lede: "Қолжетімді бағамен дұрыс аудармалар — тек Испания Әділет министрлігі сертификаттаған тексерілген, лицензиялы ант берген аудармашылар. Біз бір аудармашымен 20 жыл бірге жұмыс істейміз.",
        priceNum: "40 €-ден", priceNote: "құжат пен көлеміне байланысты",
        included: ["Министрлік қабылдайтын ант берген (ресми) аударма", "Апостильденген құжаттар апостильмен бірге аударылады", "Тек лицензиялы аудармашылар"],
        contactNote: "Email: rauf@esparus.es",
        crossTitle: "Осы тақырып бойынша келесі қадам"
      }
    }
  };
})();
