import { useState } from 'react'
import './App.css'

const sampleFileName = 'Шаблон_для_статьи_Springer_использовать.docx'
const sampleFilePath = `/${sampleFileName}`

const content = {
  "uz": {
    "headerTitle": "V xalqaro ilmiy-amaliy konferensiya “Raqamli texnologiyalar, kompyuter va axborot texnologiyalari, innovatsion pedagogika”",
    "headerSubtitle": "Maqolalar qabul qilish davom etadi",
    "cta": "Shablon fayl (Lecture Notes in Networks and Systems)",
    "footerTitle": "Shablon fayl",
    "downloadButton": "Shablon faylni yuklab olish",
    "scopusButton": "Lecture Notes in Networks and Systems (Scopus)",
    "contacts": {
      "phone": "Telefon: +998 90 000 00 00",
      "address": "Manzil: Farg'ona, O'zbekiston",
      "email": "Email: info@example.uz"
    },
    "devLink": "Web Site dasturchi: Ikromov Solijon",
    "infoTitle": "AXBOROT XATI",
    "intro": [
      "O'zbekiston Respublikasi oliy ta'lim, fan va innovatsiyalar vazirligining 2026-yil 16-yanvardagi 11-son buyrug'iga muvofiq, O'zbekiston Respublikasi oliy ta'lim, fan va innovatsiyalar vazirligi, Farg'ona davlat universiteti, Litva Vilnyus universiteti, Rostov-na-Donu shahrining Janubiy Federal universiteti, Sulton Mulay sliman Beni Mellal universiteti (USMS) Marokash, Boku shahridagi Ozarbayjon texnika universiteti, Gretsiyaning Peloponnes universiteti, Abay nomidagi Qozog'iston milliy pedagogika universiteti, akademik M. M. Adisheva nomidagi Osh texnologi universiteti, Berdak nomidagi Qoraqalpoq davlat universiteti, AIP Conference Proceedings, Proceedings of SPIE – The International Society for Optical Engineering, Springer Proceedings in Physics, Lecture Notes in Networks and Systems, Electron Laboratory LLC qoshidagi \"Rezonans yadro reaktsiyalar fizikasi\" ilmiy-tadqiqot instituti, Electron Laboratory LLC, \"All Sciences\" xalqaro ilmiy jurnali, Milliy universitet qoshidagi \"Yarimo'tkazgichlar va mikroelektronika fizikasi\" ilmiy-tadqiqot instituti, Andijon Davlat universiteti, Namangan Davlat universiteti, “Foton” AJ BMX 2026 yil 7-8 may kunlari \"Texnologik ta'limni modernizatsiya qilish jarayonida nanomateriallar, robototexnika, axborot texnologiyalari va innovatsion pedagogikaning integratsiyasi asosida raqamli va barqaror rivojlanishning ilmiy-amaliy yo'nalishlarini shakllantirish\" I xalqaro ilmiy-amaliy konferentsiyasini o'tkazilmoqda.",
      "Konferensiyaning maqsadi texnologik ta'lim sohasidagi ilmiy va amaliy tadqiqotlarni birlashtirish, zamonaviy texnologiyalarni ta'lim jarayoniga integratsiya qilish imkoniyatlarini kengaytirish, yangi pedagogik yechimlarni ishlab chiqish va keng ko'lamli xalqaro ilmiy hamkorlik uchun mustahkam platforma yaratishdir. Ushbu tadbir texnologik ta'limning jahon tendentsiyalari munosabati bilan milliy ta'lim tizimini uyg'unlashtirishga, ta'lim jarayoniga ilg'or innovatsion ishlanmalarni joriy etishga, ilmiy taraqqiyot sohasidagi so'nggi yutuqlarni kengaytirish va taqdim etishga, jahon ilmiy-tadqiqot jamoalarining yaqin hamkorligini ta'minlashga, fanlararo integratsiyani mustahkamlashga va yosh tadqiqotchilar o'rtasida tajriba almashish platformasini shakllantirishga qaratilgan.",
      "2026-yil 25-aprelgacha konferensiya seksiyalari koordinatorlariga elektron pochta orqali o'zbek, rus yoki ingliz tillaridagi tezislar va ilmiy maqolalarn yuborishingizni so'raymiz. Taqdim etilgan maqjlalar va tezislarning fayl nomida bo'lim raqamini o'z ichiga olishi kerak. 2026-yil 25-aprelgacha konferensiya seksiyalari koordinatorlariga elektron pochta orqali o'zbek, rus yoki ingliz tillaridagi maqola va tezislar jo’natiladi."
    ],
    "directionsTitle": "Nashr qilish uchun quyidagi dolzarb yo'nalishlar bo'yicha maqolalar va tezislar qabul qilinadi:",
    "tableHead": {
      "number": "Bo'lim raqami",
      "topic": "Bo'lim yo'nalishi",
      "contact": "Pochta va koordinatorning aloqalari"
    },
    "sections": [
      {
        "id": "1 – bo'lim",
        "title": "O'zbekiston taraqqiyotining yangi davrida texnologiyalarni o'qitishni takomillashtirishning mohiyati va ahamiyati",
        "phone": "+998913982397",
        "email": "gulasal_x@mail.ru"
      },
      {
        "id": "2 – bo'lim",
        "title": "Materialshunoslik va texnologik ta'limdagi nanostrukturalar nazariyasi, texnologiyasi",
        "phone": "+998936431433",
        "email": "otajonov_s@mail.ru"
      },
      {
        "id": "3 – bo'lim",
        "title": "Texnologik ta'limda avtomatlashtirish va robototexnika o'qitishning kontseptual muammolari va echimlari. O'zbekiston taraqqiyotining yangi davrida texnologiyalarni o'qitishni takomillashtirishning mohiyati va ahti",
        "phone": "+998972871991",
        "email": "neo_gizmo1@mail.ru"
      },
      {
        "id": "4 – bo'lim",
        "title": "O'zbekiston taraqqiyotining yangi davrida texnologiyalarni o'qitishni takomillashtirishning mohiyati va ahamiyati",
        "phone": "+998939741023",
        "email": "boqirov_j@mail.ru"
      },
      {
        "id": "5 – bo'lim",
        "title": "Texnologik fanni o'zgartirishda innovatsion pedagogik va raqamli texnologiyalardan foydalanish istiqbollari",
        "phone": "+998972088068\n+998930418558",
        "email": "barchin.askarova@mail.ru"
      },
      {
        "id": "6 – bo'lim",
        "title": "Sun'iy intellekt yordamida noan'anaviy energiya manbalaridan foydalanadigan ob'ektlarni boshqarish samaradorligi",
        "phone": "+998939710263",
        "email": "rova08@mail.ru"
      }
    ],
    "sectionsNote": "Taqdim etilgan hisobotlarning tezislarini tuzishga qo'yiladigan talablar 1-2-ilovada keltirilgan.",
    "essenceTitle": "",
    "essence": [
      "Konferentsiyaning mohiyati o'qitish texnikasini takomillashtirish bo'yicha ilmiy-uslubiy takliflarni faol ishlab chiqish, materialshunoslik va nanostrukturalar sohasidagi ilg'or tadqiqotlarni muhokama qilish, ularni o'quv va texnologik jarayonga to'liq moslashtirish, o'rganishni avtomatlashtirishdan kelib chiqadigan muammolarni tahlil qilish, robototexnika tamoyillaridan foydalanish, shuningdek, o'qitish usullarini taklif qilishdan iborat.  Shuningdek, texnologik ta'limda zamonaviy axborot-kommunikatsiya texnologiyalarining rolini kuchaytirish, raqamli ta'lim tizimi imkoniyatlarini kengaytirish va axborot-pedagogik yondashuv bo'yicha ilmiy-amaliy tavsiyalar ishlab chiqiladi. Shuningdek, texnologik ta'limda zamonaviy axborot-kommunikatsiya texnologiyalarining rolini kuchaytirish, raqamli ta'lim tizimi imkoniyatlarini kengaytirish va axborot-pedagogik yondashuv bo'yicha ilmiy-amaliy tavsiyalar ishlab chiqiladi. Tadbirning muhim yo'nalishi-noan'anaviy energiya manbalari bilan bog'liq ilmiy ishlanmalarni taqdim etish, ularning nazariyasi, amaliy qo'llanilishi va ushbu energiya manbalarini ta'lim tizimiga yo'naltirish bo'yicha to'liq o'quv dasturini birlashtirish mexanizmlarini aniqlanadi. Shu bilan birga, konferensiyaning asosiy maqsadlari qatoriga xalqaro ilmiy hamkorlikni rivojlantirish va yangi qo'shma loyihalarni amalga oshirish imkoniyatlarini yaratish kiradi. Shu bilan birga, konferensiyaning asosiy maqsadlari qatoriga xalqaro ilmiy hamkorlikni rivojlantirish va yangi qo'shma loyihalarni amalga oshirish imkoniyatlarini yaratish kiradi.",
      "Olingan ma'lumotlar va erishilgan natijalar asosida Milliy dastur talablariga muvofiq Respublikamiz maktablari va universitetlarida texnologik ta'lim sifatini oshirish bo'yicha uslubiy tavsiyalar va takliflar ishlab chiqiladi."
    ],
    "publicationTitle": "",
    "publication": [
      "Konferentsiya materiallari to'plamda nashr etiladi va ishtirokchilar orasida elektron shaklda tarqatiladi. Shu bilan birga, tezislar va ilmiy maqolalar mualliflari ular taqdim etgan ma'lumotlar uchun javobgardir. Konferensiya ishida faol ishtirok etgan mualliflar maxsus ishtirokchi sertifikatini oladilar.",
      "Eng yaxshi deb topilgan tezislar va ilmiy maqolalar Scopus ma'lumotlar bazalariga kiritilgan quyidagi jurnallarda nashr etishga loyiq deb topiladi: AIP Conference Proceedings, Proceedings of SPIE – The International Society for Optical Engineering, Springer Proceedings in Physics, Lecture Notes in Networks and Systems va boshqa Springer Nature va AIP Proceedings nashriyoti. Konferentsiya ma'muriyati mualliflar bilan scopus-da keyingi nashr etish va muzokaralar o'tkazish uchun maqola yuborish taklifi bilan bog'lanadi.",
      "Shuningdek, qjlgan maqolalar mualliflarnig talablariga muvofiq \"Rezonans yadro reaktsiyalari fizikasi\" ilmiy-tadqiqot institutining \"All Science\" xalqaro ilmiy jurnalida chop etiladi. Ko'rib chiqilgan munosib tezislar va ilmiy maqolalarning barcha mualliflari \"Rezonansli yadro reaktsiyalari fizikasi\" ilmiy-tadqiqot institutining \"Barcha fanlar\"xalqaro ilmiy jurnalida nashr etilganligini tasdiqlovchi muallif sertifikatiga ega bo'ladilar.",
      "Tezislarni, ilmiy maqolalarni yuborish va nashr etish, konferentsiyada qatnashish mutlaqo bepul!",
      "Konferentsiyaning onlayn shakli 2026 yil 7-8 may kunlari soat 9:00 da Zoom platformasida bo'lib o'tadi. Zoom konferentsiyasiga havola ro'yxatdan o'tish paytida ishtirokchilar tomonidan ko'rsatilgan elektron pochta manziliga yuboriladi."
    ],
    "appendix1Title": "1-ilova",
    "thesisRequirements": [
      "Taqdim etilgan materiallarga qo'yiladigan talablar \"Maqolalar tezislarini rasmiylashtirishga qo’yiladigan talablar:",
      "Umumiy talablar. Tezislar doc, docx formatida rasmiylashtiriladi. Tezislar hajmi 3 sahifadan oshmasligi kerak. Maydonlar: chapdan - 3 sm, o’ngdan - 1,5 sm, yuqoridan - 2 sm, pastdan - 2 sm. Hujjat shrifti: Times New Roman, 14 kegl, oddiy. Satrlar oralig’i: 1,5, xat  boshlardan oldin va keyin qo’shimcha oraliksiz. Xat boshi: 1,25 sm.",
      "Sarlavhaga qo’yiladigan talablar. Sarlavha bosh harflar bilan yozilishi kerak. Tekislash: markazga.",
      "Mualliflar ko’rsatmasiga qo’yiladigan talablar. F.I.O. yuqori indekslar ko’rsatilgan holda to’liq kursiv shriftda ko’rsatilishi kerak. Tekislash: markazga. Keyingi satrda mualliflar ko’rsatilgandan so’ng raqami ko’rsatilgan holda manzillari ko’rsatilgan tashkilotlarning to’liq nomlari bo’lishi kerak.",
      "Asosiy matnni eniga tekislash.",
      "Rasmlar va grafiklarga qo’yiladigan talablar. Faylda 150 dpi dan kam boʻlmasligi kerak. Grafiklar, jadvallar va rasmlarning imzolari raqamlangan bo’lishi kerak. Grafiklar va rasmlar imzolarini markazga tekislash. Jadvallar imzolarini oʻng chetiga tekislash. Imzolarning qolgan parametrlari umumiy talablarga muvofiq standart shriftda bajariladi.",
      "Formulalarga qo’yiladigan talablar. Formulalar Microsoft Equation’da majburiy raqamlangan Microsoft Office Word yoki MathType plaginida bajarilishi kerak."
    ],
    "articleTitle": "Maqolalarni rasmiylashtirishga qo’yiladigan talablar:",
    "articleRequirements": [
      "Umumiy talablar. Ilmiy maqolalar doc, docx formatida rasmiylashtiriladi. Tezislar hajmi 30 sahifadan oshmasligi kerak. Maydonlar: chapdan - 3 sm, o’ngdan - 1,5 sm, yuqoridan - 2 sm, pastdan - 2 sm. Hujjat shrifti: Times New Roman, 12 kegl, oddiy. Satrlararo oraliq: 1, xat boshilardan oldin va keyin qoʻshimcha oraliqsiz. Xatboshi: 1,25 sm.",
      "Sarlavhaga qo’yiladigan talablar. Sarlavha bosh harflar bilan yarim qalin shriftda yozilishi kerak. Tekislash: markazga.",
      "Mualliflar ko’rsatmasiga qo’yiladigan talablar. F.I.O. yuqori indekslar ko’rsatilgan holda to’liq kursiv shriftda ko’rsatilishi kerak. Tekislash: markazga. Keyingi satrda mualliflar ko’rsatilgandan so’ng raqami ko’rsatilgan holda manzillari ko’rsatilgan tashkilotlarning to’liq nomlari bo’lishi kerak.",
      "Asosiy matnni eniga tekislash.",
      "Rasmlar va grafiklarga qo’yiladigan talablar. Faylda 150 dpi dan kam boʻlmasligi kerak. Grafiklar, jadvallar va rasmlarning imzolari raqamlangan bo’lishi kerak. Grafiklar va rasmlar imzolarini markazga tekislash. Jadvallar imzolarini oʻng chetiga tekislash. Imzolarning qolgan parametrlari umumiy talablarga muvofiq standart shriftda bajariladi.",
      "Formulalarga qo’yiladigan talablar. Formulalar Microsoft Equation’da majburiy raqamlangan Microsoft Office Word yoki MathType plaginida bajarilishi kerak."
    ],
    "note": "Tezislar va ilmiy maqolalar oxirida mualliflarning aloqa ma’lumotlarini ko’rsatishni, shuningdek, onlayn yoki offline konferentsiyasida chiqish istagini bildirgan mualliflarni pastki chiziq bilan ta’kidlashni so’raymiz. Tezislar va ilmiy maqolalarda ilgari e’lon qilinmagan asl natijalarni o’z ichiga olishi kerak.",
    "appendix2Title": "Ilova 2",
    "appendix2Requirements": [
      "Tezislarga qo’shimcha talablar",
      "Xalqaro ilmiy konferensiya",
      "«Texnologik ta’limni modernizatsiya qilish jarayonida nanomateriallar, robototexnika, axborot texnologiyalari va innovatsion pedagogika integratsiyasi asosida raqamli va barqaror rivojlanishning ilmiy-amaliy yo’nalishlarini shakllantirish»",
      "KONFERENSIYALAR TEZISLARIGA QO’YILADIGAN TALABLAR:",
      "Maqola matni doc formatida yozilishi kerak.  Times New Roman shrifti, 14 band, satrlararo oraliq 1,15. Tezis 3 sahifagacha bo’lishi kerak, formati A4 (210 × 297 mm),  yuqoridan - 20 mm; chap qirrasi - 30 mm; pastki qirrasi - 20 mm; o’ng chekkasi - 15 mm.",
      "Tezisning nomi qalin shriftda bosh harflar bilan yoziladi. Yangi satrda ma’ruzachilarning to’liq F.I.O. ko’rsatiladi. Keyingi satr qisqartirishsiz tashkilotning to’liq nomini, pochta indeksini, har bir affiliatsiyaning shahar/mintaqasi, shtati/viloyati va mamlakatini o’z ichiga oladi. Tezisning nomi, mualliflarning ismlari va tashkilotning to’liq nomi markazga tekislanishi hamda bosh harflar bilan yozilishi kerak. Ish matni o’tkazib yuborilgan satrdan keyin keladi. Ish matnining o’zi to’g idan to’gri 1 santimetrli xatboshi bilan yoziladi.",
      "Asosiy matndan keyin quyidagi misol bo’yicha tuzilgan foydalanilgan adabiyotlar ro’yxati keltiriladi:"
    ],
    "referencesTitle": "Foydalanilgan adabiyotlar roʻyxati:",
    "references": [
      "(maqola uchun) [1] F.I.O. Familiyasi. Maqolaning nomi. Jurnalning nomi. (yil), tartib raqami (yoki tartib raqami), 1-10-satrlar. DOI yoki jurnal saytidagi havola.",
      "(kitob uchun) [1] FI.O. Familiyasi. Kitob nomi. (Shahar, Nashriyot, Yil) - sahifalar soni."
    ]
  },
  "ru": {
    "headerTitle": "V международная научно-практическая конференция «Цифровые технологии, компьютерные и информационные технологии, инновационная педагогика»",
    "headerSubtitle": "Приём статей продолжается",
    "cta": "Шаблон файла (Lecture Notes in Networks and Systems)",
    "footerTitle": "Шаблон файла",
    "downloadButton": "Скачать шаблон",
    "scopusButton": "Lecture Notes in Networks and Systems (Scopus)",
    "contacts": {
      "phone": "Телефон: +998 90 000 00 00",
      "address": "Адрес: Фергана, Узбекистан",
      "email": "Email: info@example.uz"
    },
    "devLink": "Разработчик сайта: Ikromov Solijon",
    "infoTitle": "ИНФОРМАЦИОННОЕ ПИСЬМО",
    "intro": [
      "В соответствии с приказом Министерства высшего образования, науки и инновации Республики Узбекистан за №11 от 16 января 2026 года, Министерство высшего образования, науки и инновации Республики Узбекистан, Ферганский государственный университет, Вильнюсский университет Литвы, Южный Федеральный Университет города Ростов-на-Дону, Султан Мулай Слиман Университет Бени-Меллал (USMS) Марокко, Азербайджанский технический университет города Баку, Пелопоннесский университет Греции, Казахский национальный педагогический университет имени Абая, Ошский технологический университет имени академика М. М. Адишева, Каракалпакский государственный университет имени Бердака, AIP Conference Proceeding, Proceedings of SPIE – The International Society for Optical Engineering, Springer Proceedings in Physics, Lecture Notes in Networks and Systems, Научно-исследовательский институт «Физики резонансных ядерных реакций» при Electron Laboratory LLC, Electron Laboratory LLC, Международный научный журнал «Все науки», Научно-исследовательский институт «Физики полупроводников и микроэлектроники» при Национальном Университете Узбекистана, Андижанский государственный университет, Наманганский государственный университет, «ФОТОН» АЖ БМХ 7-8 мая 2026 года проводят I Международную научно-практическую конференцию «Формирование научно-практических направлений цифрового и устойчивого развития на основе интеграции наноматериалов, робототехники, информационных технологий и инновационной педагогики в процессе модернизации технологического образования».",
      "Целью конференции является объединение научных и прикладных исследований в области технологического образования, расширение возможностей интеграции современных технологий в образовательный процесс, разработка новых педагогических решений и создание прочной платформы для масштабного международного научного сотрудничества. Данное мероприятие направлено на гармонизацию национальной системы образования в связи с мировыми тенденциями в технологическом образовании, внедрение передовых инновационных разработок в образовательный процесс, расширение и представление последних достижений в области научного прогресса с обеспечением плотного взаимодействия мировых научно-исследовательских коллективов, укрепление междисциплинарной интеграции и формирование платформы для обмена опытом между молодыми исследователями.",
      "Просим Вас направить Ваши доклады, тезисы и научные статьи на узбекском, русском или английском языках по электронной почте координаторам секций конференции до 25 апреля 2026 года. Наименование файла представленных докладов и тезисов должны включать в себя номер секции. Тезисы, не соответствующие требованиям и не содержание научных и практических рекомендаций, не будут представлены в сборнике конференции."
    ],
    "directionsTitle": "Для публикации принимаются тезисы докладов по следующим актуальным направлениям:",
    "tableHead": {
      "number": "Номер секции",
      "topic": "Направление секции",
      "contact": "Почта и контакты координаторов"
    },
    "sections": [
      {
        "id": "1 – секция",
        "title": "Сущность и важность совершенствования преподавания технологий в новую эпоху развития Узбекистана",
        "phone": "+998913982397",
        "email": "gulasal_x@mail.ru"
      },
      {
        "id": "2 – секция",
        "title": "Теория, технология наноструктур в материаловедении и технологическом образовании",
        "phone": "+998936431433",
        "email": "otajonov_s@mail.ru"
      },
      {
        "id": "3 – секция",
        "title": "Концептуальные проблемы и решения преподавания автоматизации и робототехники в технологическом образовании",
        "phone": "+998972871991",
        "email": "neo_gizmo1@mail.ru"
      },
      {
        "id": "4 – секция",
        "title": "Важность интегрированных современных информационных технологий в преподавании предметов в области технологического образования",
        "phone": "+998939741023",
        "email": "boqirov_j@mail.ru"
      },
      {
        "id": "5 – секция",
        "title": "Перспективы использования инновационных педагогических и цифровых технологий в трансформации технологической науки",
        "phone": "+998972088068\n+998930418558",
        "email": "barchin.askarova@mail.ru"
      },
      {
        "id": "6 – секция",
        "title": "Эффективность управления объектами, использующими нетрадиционные источники энергии, с помощью искусственного интеллекта",
        "phone": "+998939710263",
        "email": "rova08@mail.ru"
      }
    ],
    "sectionsNote": "Требования к оформлению тезисов представленных докладов приведены в Приложении 1-2.",
    "essenceTitle": "",
    "essence": [
      "Сутью конференции является активная разработка научно-методических предложений по совершенствованию техники преподавания, обсуждение передовых исследований в области материаловедения и наноструктур, их полноценной адаптации к образовательному и технологическому процессу, анализ проблем, возникающих при автоматизации обучения, использовании принципов робототехники, а также предложение эффективных решений в настоящем направлении. Также будут разработаны научно-практические рекомендации по усилению роли современных информационно-коммуникационных технологий в технологическом образовании, расширению возможностей цифровой системы образования и информационно-педагогическом подходе. Важным направлением мероприятия является представление научных разработок, связанные с нетрадиционными источниками энергии, определение механизмов интеграции их теории, практического применения и полной программы обучения по направлению данных источников энергии в систему образования. Наряду с этим, в число главных целей конференции входит развитие международного научного сотрудничества и создание возможностей для реализации новых совместных проектов.",
      "На основе полученной информации и достигнутых результатов будут разработаны методические рекомендации и предложения по повышению качества технологического образования в школах и университетах нашей Республики в соответствии с требованиями Национальной программы."
    ],
    "publicationTitle": "",
    "publication": [
      "Материалы конференции будут опубликованы в сборнике и распространены среди участников в электронном виде. При этом авторы тезисов и научных статей несут ответственность за предоставляемую ими информацию. Авторы, принявшие активное участие в работе конференции получат специальный Сертификат участника.",
      "Тезисы и научные статьи, признанные лучшими, будут признаны достойными для публикации в следующих журналах, входящие в базах данных Scopus: AIP Conference Proceeding, Proceedings of SPIE – The International Society for Optical Engineering, Springer Proceedings in Physics, Lecture Notes in Networks and Systems, а также другим дополнительным журналам, входящим в базу издательства Springer Nature и AIP Proceedings, глобально входящие в базу данных Scopus. Администрация конференции свяжется с авторами с предложением направления статьи для последующей публикации и проведения переговоров в Scopus.",
      "Также большинство статей, признанные достойными будут опубликованы в Международном научной журнале «Все науки» Научно-исследовательского института «Физики резонансных ядерных реакций» в соответствии с его требованиями. Все авторы достойных тезисов и научных статей, которые прошли рецензирование, получат Сертификат автора, подтверждающий публикацию в Международном научном журнале «Все науки» Научно-исследовательского института «Физики резонансных ядерных реакций».",
      "Направление и публикация тезисов, научных статей, участие в конференции абсолютно бесплатное!",
      "Онлайн форма конференции состоится 7-8 мая 2026 года в 9:00 утра на платформе Zoom. Ссылка на конференцию Zoom будет отправлена на адрес электронной почты, указанный участниками при регистрации."
    ],
    "appendix1Title": "Приложение 1",
    "thesisRequirements": [
      "Требования к представляемым материалам",
      "Требования к оформлению тезисов докладов:",
      "Общие требования. Тезисы оформляются в формате doc, docx. Объём тезисов не должен превышать 5 стр. Поля: слева – 3 см, справа – 1,5 см, сверху – 2 см, снизу – 2 см. Шрифт документа: Times New Roman, 14 кегль, обычный. Междустрочный интервал: 1,5, без дополнительного интервала перед и после абзацев. Абзац: 1,25 см.",
      "Требования к заголовку. Заголовок должен быть написать прописными (заглавными буквами). Выравнивание: по центру.",
      "Требования к указанию авторов. Ф. И. О. должны быть указаны полностью курсивным шрифтом, с указанием верхних индексов. Выравнивание: по центру. После указания авторов на следующей строке, с указанием номера, должны присутствовать полные названия организаций, с адресами.",
      "Выравнивание основного текста: по ширине.",
      "Требования к иллюстрациям и графикам. Должны быть представлены в файле с разрешением не менее 150 dpi. Подписи графиков, таблиц и иллюстраций должны быть пронумерованы. Выравнивание подписей графиков и рисунков: по центру. Выравнивание подписей таблиц: по правому краю. Остальные параметры подписей выполняются стандартным шрифтом, согласно общим требованиям.",
      "Требования к формулам. Формулы должны быть выполнены в Microsoft Equation во встроенном плагине Microsoft Office Word или MathType с обязательной нумерацией."
    ],
    "articleTitle": "Требования к оформлению научных статей для докладов:",
    "articleRequirements": [
      "Общие требования. Научные статьи оформляются в формате doc, docx. Объём тезисов не должен превышать 30 стр. Поля: слева – 3 см, справа – 1,5 см, сверху – 2 см, снизу – 2 см. Шрифт документа: Times New Roman, 12 кегль, обычный. Междустрочный интервал: 1, без дополнительного интервала перед и после абзацев. Абзац: 1,25 см.",
      "Требования к заголовку. Заголовок должен быть написать прописными (заглавными буквами) полужирным шрифтом. Выравнивание: по центру.",
      "Требования к указанию авторов. Ф. И. О. должны быть указаны полностью курсивным шрифтом, с указанием верхних индексов. Выравнивание: по центру. После указания авторов на следующей строке, с указанием номера, должны присутствовать полные названия организаций, с адресами.",
      "Выравнивание основного текста: по ширине.",
      "Требования к иллюстрациям и графикам. Должны быть представлены в файле с разрешением не менее 150 dpi. Подписи графиков, таблиц и иллюстраций должны быть пронумерованы. Выравнивание подписей графиков и рисунков: по центру. Выравнивание подписей таблиц: по правому краю. Остальные параметры подписей выполняются стандартным шрифтом, согласно общим требованиям.",
      "Требования к формулам. Формулы должны быть выполнены в Microsoft Equation во встроенном плагине Microsoft Office Word или MathType с обязательной нумерацией."
    ],
    "note": "В конце тезисов и научных статей просим указывать контактные данные авторов, а также выделить нижним подчёркиванием, авторов желающие выступать на конференции online или offline. Тезисы и научные статьи докладов должны содержать оригинальные результаты, не опубликованные ранее.",
    "appendix2Title": "Приложение 2",
    "appendix2Requirements": [
      "Дополнительные требования к тезисам",
      "Международная научная конференция",
      "«Формирование научно-практических направлений цифрового и устойчивого развития на основе интеграции наноматериалов, робототехники, информационных технологий и инновационной педагогики в процессе модернизации технологического образования»",
      "ТРЕБОВАНИЯ К ТЕЗИСАМ КОНФЕРЕНЦИЙ:",
      "Текст статьи должен быть написан в формате doc. и docx., шрифтом Times New Roman, 14 пунктов, межстрочный интервал 1,15. Тезис должен занимать до 3 страниц, формат A4 (210 × 297 мм), со следующими значениями полей: верхний край – 20 мм; левый край – 30 мм; нижний край – 20 мм; правый край – 15 мм.",
      "Название статьи пишется заглавными буквами жирным шрифтом. На новой строке указывается полное Ф. И. О. докладчиков. Последующая строка содержит полное наименование организации без сокращений, почтовый индекс, город/регион, штат/область и страну каждой аффилиации. Название тезиса, имена авторов и полное наименование организации должны быть выровнены по центру, а также написаны заглавными буквами. Текст работы следует после пропущенной строки. Непосредственно сам текст работы пишется с абзацным отступом в 1 см.",
      "После основного текста приводится список использованной литературы, составленный по следующему примеру, следующая через одну пустую строку:"
    ],
    "referencesTitle": "Список использованной литературы:",
    "references": [
      "(для статьи)",
      "[1] И.О. Фамилия. Название статьи. Название журнала. (год), номер (или том (номер)), стр. 1-10. DOI либо ссылка на сайте журнала.",
      "(для книги)",
      "[1] И.О. Фамилия. Наименование книги. (Город, Издатель, Год) – кол-во страниц."
    ]
  },
  "en": {
    "headerTitle": "5th International Scientific-Practical Conference “Digital Technologies, Computer and Information Technologies, Innovative Pedagogy”",
    "headerSubtitle": "Submission of papers is ongoing",
    "cta": "Template file (Lecture Notes in Networks and Systems)",
    "footerTitle": "Template file",
    "downloadButton": "Download template",
    "scopusButton": "Lecture Notes in Networks and Systems (Scopus)",
    "contacts": {
      "phone": "Phone: +998 90 000 00 00",
      "address": "Address: Fergana, Uzbekistan",
      "email": "Email: info@example.uz"
    },
    "devLink": "Website developer: Ikromov Solijon",
    "infoTitle": "INFORMATION LETTER",
    "intro": [
      "In accordance with the Order of the Ministry of Higher Education, Science and Innovation of the Republic of Uzbekistan No. 11 dated January 16, 2026, the Ministry of Higher Education, Science and Innovation of the Republic of Uzbekistan, Ferghana State University, Vilnius University of Lithuania, Southern Federal University of Rostov-on-Don, Sultan Mulai Sliman Beni Mellal University (USMS) Morocco, Abdelmalek Essaâdi University in Morocco, Al-Hussein Faculty of Science and Technology, Abdulmalik Al-Saadi University in Morocco, Azerbaijan Technical University of Baku, Peloponnesian University of Greece, Kazakh National Pedagogical University named after Abai, Osh Technological University named after Academician M. M. Adisheva, Berdak Karakalpak State University, AIP Conference Proceeding, Proceedings of SPIE – The International Society for Optical Engineering, Springer Proceedings in Physics, Lecture Notes in Networks and Systems, Scientific Research Institute \"Physics of Resonant Nuclear Reactions\" at Electron Laboratory LLC, Electron Laboratory LLC, International Scientific Journal \"All Sciences\", Scientific Research Institute \"Physics of Semiconductors and Microelectronics\" at the National University of Uzbekistan, Andijan State University, Namangan State University, On May 7-8, 2026, PHOTON and BMX will hold the I International Scientific and Practical Conference \"Formation of scientific and practical directions of digital and sustainable development based on the integration of nanomaterials, robotics, information technologies and innovative pedagogy in the process of modernization of technological education\" (NRTP-I-2026).",
      "The purpose of the conference is to combine scientific and applied research in the field of technological education, expand the possibilities of integrating modern technologies into the educational process, develop new pedagogical solutions and create a solid platform for large-scale international scientific cooperation. This event is aimed at harmonizing the national education system in connection with global trends in technological education, introducing advanced innovative developments into the educational process, expanding and presenting the latest achievements in the field of scientific progress, ensuring close interaction between global research teams, strengthening interdisciplinary integration and creating a platform for the exchange of experience between young researchers.",
      "We kindly ask you to send your reports, abstracts and scientific articles in Uzbek, Russian or English by e-mail to the conference section coordinators by April 25, 2026. The file name of the submitted reports and abstracts should include the section number. Abstracts that do not meet the requirements and do not contain scientific and practical recommendations will not be presented in the conference proceedings."
    ],
    "directionsTitle": "Abstracts of reports on the following relevant areas are accepted for publication:",
    "tableHead": {
      "number": "Section number",
      "topic": "Section direction",
      "contact": "Email and contacts of the coordinators"
    },
    "sections": [
      {
        "id": "1 – section",
        "title": "The essence and importance of improving technology teaching in the new era of Uzbekistan's development",
        "phone": "+998913982397",
        "email": "gulasal_x@mail.ru"
      },
      {
        "id": "2 – section",
        "title": "Theory and technology of nanostructures in materials science and technology education",
        "phone": "+998936431433",
        "email": "otajonov_s@mail.ru"
      },
      {
        "id": "3 – section",
        "title": "Conceptual problems and solutions of teaching automation and robotics in technology education",
        "phone": "+998972871991",
        "email": "neo_gizmo1@mail.ru"
      },
      {
        "id": "4 – section",
        "title": "The importance of integrated modern information technologies in teaching subjects in the field of technological education",
        "phone": "+998939741023",
        "email": "boqirov_j@mail.ru"
      },
      {
        "id": "5 – section",
        "title": "Prospects of using innovative pedagogical and digital technologies in the transformation of technological science",
        "phone": "+998972088068\n+998930418558",
        "email": "barchin.askarova@mail.ru"
      },
      {
        "id": "6 – section",
        "title": "Efficient management of facilities using non-traditional energy sources using artificial intelligence",
        "phone": "+998939710263",
        "email": "rova08@mail.ru"
      }
    ],
    "sectionsNote": "The requirements for the abstracts of the submitted reports are given in Appendix 1-2.",
    "essenceTitle": "",
    "essence": [
      "The essence of the conference is the active development of scientific and methodological proposals for improving teaching techniques, discussing advanced research in the field of materials science and nanostructures, their full adaptation to the educational and technological process, analyzing problems arising from the automation of learning, using the principles of robotics, as well as offering effective solutions in this area. Scientific and practical recommendations will also be developed to strengthen the role of modern information and communication technologies in technological education, expand the capabilities of the digital education system and the information and pedagogical approach. An important focus of the event is the presentation of scientific developments related to non-traditional energy sources, the identification of mechanisms for integrating their theory, practical application and a complete training program in the direction of these energy sources in the education system. At the same time, the main objectives of the conference include the development of international scientific cooperation and the creation of opportunities for the implementation of new joint projects.",
      "Based on the information received and the results achieved, methodological recommendations and proposals will be developed to improve the quality of technological education in schools and universities of our Republic in accordance with the requirements of the National Program."
    ],
    "publicationTitle": "",
    "publication": [
      "The conference materials will be published in a collection and distributed to the participants in electronic form. At the same time, the authors of abstracts and scientific articles are responsible for the information they provide. The authors who actively participated in the conference will receive a special Certificate of participation.",
      "The theses and scientific articles recognized as the best will be considered worthy of publication in the following journals included in the Scopus databases: AIP Conference Proceeding, Proceedings of SPIE – The International Society for Optical Engineering, Springer Proceedings in Physics, Lecture Notes in Networks and Systems, as well as other additional journals included in the publisher's database Springer Nature and AIP Proceedings, globally included in the Scopus database. The conference administration will contact the authors with a proposal to send the article for subsequent publication and negotiations in Scopus.",
      "Also, most of the articles recognized as worthy will be published in the International Scientific Journal \"All Sciences\" of the Research Institute of Physics of Resonant Nuclear Reactions in accordance with its requirements. All authors of worthy abstracts and scientific articles that have been reviewed will receive an Author's Certificate confirming publication in the International Scientific Journal All Sciences of the Research Institute of Physics of Resonant Nuclear Reactions.",
      "Sending and publishing abstracts, scientific articles, participation in the conference is absolutely free!",
      "The online form of the conference will be held on May 7-8, 2026 at 9:00 a.m. on the Zoom platform. A link to the Zoom conference will be sent to the email address provided by the participants during registration."
    ],
    "appendix1Title": "Appendix 1",
    "thesisRequirements": [
      "Requirements for submitted materials",
      "Requirements for the preparation of abstracts:",
      "General requirements. Abstracts are prepared in doc, docx format. The volume of abstracts should not exceed 5 pages. Margins: left – 3 cm, right – 1.5 cm, top – 2 cm, bottom – 2 cm. Document font: Times New Roman, 14 size, regular. Line spacing: 1.5, without additional spacing before and after paragraphs. Paragraph: 1.25 cm.",
      "Requirements for the title. The title should be written in capital letters. Alignment: centered.",
      "Requirements for specifying the authors. Full name must be indicated in full italics, indicating the upper indexes. Alignment: centered. After specifying the authors, the full names of the organizations and addresses should be present on the next line, indicating the number.",
      "Alignment of the main text: in width.",
      "Requirements for illustrations and graphs. They must be presented in a file with a resolution of at least 150 dpi. The signatures of graphs, tables, and illustrations should be numbered. Alignment of captions of graphs and figures: in the center. Table captions are aligned to the right. The rest of the signature parameters are executed in a standard font, according to the general requirements.",
      "Requirements for formulas. Formulas must be executed in Microsoft Equation in the built-in Microsoft Office Word or MathType plugin with mandatory numbering."
    ],
    "articleTitle": "Requirements for the design of scientific articles for reports:",
    "articleRequirements": [
      "General requirements. Scientific articles are formatted in doc, docx format. The volume of abstracts should not exceed 30 pages. Margins: left – 3 cm, right – 1.5 cm, top – 2 cm, bottom – 2 cm. Document font: Times New Roman, 12 sizes, regular. Line spacing: 1, without additional spacing before and after paragraphs. Paragraph: 1.25 cm.",
      "Requirements for the title. The title should be written in capital letters (bold). Alignment: centered.",
      "Requirements for specifying the authors. Full name must be indicated in full italics, indicating the upper indexes. Alignment: centered. After specifying the authors, the full names of the organizations and addresses should be present on the next line, indicating the number.",
      "Alignment of the main text: in width.",
      "Requirements for illustrations and graphs. They must be presented in a file with a resolution of at least 150 dpi. The signatures of graphs, tables, and illustrations should be numbered. Alignment of captions of graphs and figures: in the center. Table captions are aligned to the right. The rest of the signature parameters are executed in a standard font, according to the general requirements.",
      "Requirements for formulas. Formulas must be executed in Microsoft Equation in the built-in Microsoft Office Word or MathType plugin with mandatory numbering."
    ],
    "note": "At the end of abstracts and scientific articles, please indicate the contact details of the authors, as well as underline the authors who wish to speak at the conference online or offline. Abstracts and scientific articles of reports should contain original results that have not been published before.",
    "appendix2Title": "Appendix 2",
    "appendix2Requirements": [
      "Additional requirements for theses",
      "International Scientific Conference",
      "\"Formation of scientific and practical directions of digital and sustainable development based on the integration of nanomaterials, robotics, information technologies and innovative pedagogy in the process of modernization of technological education\"",
      "REQUIREMENTS FOR CONFERENCE ABSTRACTS:",
      "The text of the article should be written in doc. and docx. format, in Times New Roman font, 14 paragraphs, line spacing 1.15. The thesis should take up to 3 pages, A4 format (210x297 mm), with the following margin values: top edge – 20 mm; left edge – 30 mm; bottom edge – 20 mm; right edge – 15 mm.",
      "The title of the article is written in capital letters in bold. The full name of the speakers is indicated on the new line. The following line contains the full name of the organization without abbreviations, postal code, city/region, state/region, and country of each affiliation. The title of the thesis, the names of the authors, and the full name of the organization should be centered and written in capital letters. The text of the paper follows the missing line. The text of the work itself is written with a paragraph indentation of 1 cm.",
      "After the main text, a list of references is provided, compiled according to the following example, followed by one empty line.:"
    ],
    "referencesTitle": "References:",
    "references": [
      "(for the article)",
      "[1] Full name. The title of the article. The name of the magazine. (year), number (or volume (number)), pp. 1-10. DOI or a link on the journal's website.",
      "(for the book)",
      "[1] Full name. The name of the book. (City, Publisher, Year) – number of pages."
    ]
  }
}



function App() {
  const [lang, setLang] = useState('ru')
  const t = content[lang]

  return (
    <div className="page">
      <div className="top-strip" />
      <div className="top-banner">
        <img src={encodeURI('/Логотипы 1.png')} alt="Hamkor tashkilotlar logolari" />
      </div>
      <header className="header">
        <div className="header-top">
          <div className="lang-switch">
            <button
              type="button"
              className={`lang-button ${lang === 'uz' ? 'active' : ''}`}
              onClick={() => setLang('uz')}
            >
              UZ
            </button>
            <button
              type="button"
              className={`lang-button ${lang === 'ru' ? 'active' : ''}`}
              onClick={() => setLang('ru')}
            >
              RU
            </button>
            <button
              type="button"
              className={`lang-button ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>
        <div className="header-title">
          <p>{t.headerTitle}</p>
        </div>
        <div className="header-subtitle">{t.headerSubtitle}</div>
        <a className="cta-bar" href={encodeURI(sampleFilePath)} download={sampleFileName}>
          {t.cta}
        </a>
      </header>

      <main className="content">
        <article className="sheet">
          <h2>{t.infoTitle}</h2>
          {t.intro.map((paragraph, index) => (
            <p key={`intro-${index}`}>{paragraph}</p>
          ))}

          <h3>{t.directionsTitle}</h3>
          <div className="section-table">
            <div className="section-head">{t.tableHead.number}</div>
            <div className="section-head">{t.tableHead.topic}</div>
            <div className="section-head">{t.tableHead.contact}</div>
            {t.sections.map((section) => (
              <div key={section.id} className="section-row">
                <div className="section-cell">{section.id}</div>
                <div className="section-cell">{section.title}</div>
                <div className="section-cell">
                  {String(section.phone || '')
                    .split('\n')
                    .map((line, index) => (
                      <div key={`${section.id}-phone-${index}`}>{line}</div>
                    ))}
                  {String(section.email || '')
                    .split('\n')
                    .map((line, index) => (
                      <div key={`${section.id}-email-${index}`}>{line}</div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          {t.sectionsNote ? <p>{t.sectionsNote}</p> : null}

          {t.essenceTitle ? <h3>{t.essenceTitle}</h3> : null}
          {t.essence.map((paragraph, index) => (
            <p key={`essence-${index}`}>{paragraph}</p>
          ))}

          {t.publicationTitle ? <h3>{t.publicationTitle}</h3> : null}
          {t.publication.map((paragraph, index) => (
            <p key={`publication-${index}`}>{paragraph}</p>
          ))}

          <h3>{t.appendix1Title}</h3>
          <ul>
            {t.thesisRequirements.map((item, index) => (
              <li key={`thesis-${index}`}>{item}</li>
            ))}
          </ul>

          <h3>{t.articleTitle}</h3>
          <ul>
            {t.articleRequirements.map((item, index) => (
              <li key={`article-${index}`}>{item}</li>
            ))}
          </ul>
          <p className="note">{t.note}</p>

          <h3>{t.appendix2Title}</h3>
          <ul>
            {t.appendix2Requirements.map((item, index) => (
              <li key={`appendix-${index}`}>{item}</li>
            ))}
          </ul>
          <p>
            {t.referencesTitle}
            {t.references.map((line, index) => (
              <span key={`ref-${index}`}>
                <br />
                {line}
              </span>
            ))}
          </p>
        </article>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          {/* <div>
            <h4>{t.footerTitle}</h4>
          </div> */}
        </div>
        <div className="footer-actions">
          <a
            className="download-button"
            href={encodeURI(sampleFilePath)}
            download={sampleFileName}
          >
            {t.downloadButton}
          </a>
          <a className="scopus-button" href="https://www.scopus.com" target="_blank" rel="noreferrer">
            {t.scopusButton}
          </a>
        </div>
        <div className="footer-meta">
          {/* <div className="footer-contacts">
            <div>{t.contacts.phone}</div>
            <div>{t.contacts.address}</div>
            <div>{t.contacts.email}</div>
          </div> */}
          <a className="dev-link" href="https://t.me/CB010" target="_blank" rel="noreferrer">
            {t.devLink}
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
