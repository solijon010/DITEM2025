import { useState } from 'react'
import './App.css'

const sampleFileName = 'Шаблон_для_статьи_Springer_использовать.docx'
const sampleFilePath = `/${sampleFileName}`

const content = {
  ru: {
    headerTitle:
      'V международная научно-практическая конференция «Цифровые технологии, компьютерные и информационные технологии, инновационная педагогика»',
    headerSubtitle: 'Прием статей продолжается',
    cta: 'Шаблон файла (Lecture Notes in Networks and Systems)',
    infoTitle: 'Информационное письмо',
    intro: [
      'В соответствии с приказом Министерства высшего образования, науки и инноваций Республики Узбекистан № 11 от 16 января 2026 года Министерство высшего образования, науки и инноваций Республики Узбекистан, Ферганский государственный университет, Вильнюсский университет (Литва), Южный федеральный университет (г. Ростов-на-Дону), Университет Султана Мулая Слимана Бени-Мелляль (USMS, Марокко), Азербайджанский технический университет (г. Баку), Пелопоннесский университет (Греция), Казахский национальный педагогический университет им. Абая, Ошский технологический университет им. академика М. М. Адышева, Каракалпакский государственный университет им. Бердаха, AIP Conference Proceedings, Proceedings of SPIE — The International Society for Optical Engineering, Springer Proceedings in Physics, Lecture Notes in Networks and Systems, НИИ «Физика резонансных ядерных реакций» при Electron Laboratory LLC, Electron Laboratory LLC, международный научный журнал «All Sciences», НИИ «Физика полупроводников и микроэлектроники» при Национальном университете, Андижанский государственный университет, Наманганский государственный университет проводят конференцию 7–8 мая 2026 года.',
      'Цель конференции — объединение научных и прикладных исследований в области технологического образования, расширение возможностей интеграции современных технологий в образовательный процесс, разработка новых педагогических решений и создание прочной платформы для широкого международного научного сотрудничества.',
      'Данное мероприятие направлено на согласование национальной системы образования с мировыми тенденциями технологического образования, внедрение передовых инновационных разработок в учебный процесс, расширение и представление последних достижений в области научного прогресса, обеспечение тесного сотрудничества мировых научно-исследовательских сообществ, укрепление междисциплинарной интеграции и формирование платформы для обмена опытом между молодыми исследователями.',
      'Просим до 25 апреля 2026 года направить тезисы и научные статьи на узбекском, русском или английском языках по электронной почте координаторам секций. В названии файла тезисов/статьи должен быть указан номер секции.',
    ],
    directionsTitle: 'Актуальные направления для публикации',
    tableHead: {
      number: 'Номер секции',
      topic: 'Направление секции',
      contact: 'Контакты и координатор',
    },
    sections: [
      {
        id: '1 - секция',
        title:
          'Сущность и значение совершенствования преподавания технологий в новом этапе развития Узбекистана',
        phone: '+998913982397',
        email: 'gulasal_x@mail.ru',
      },
      {
        id: '2 - секция',
        title:
          'Теория и технология наноструктур в материаловедении и технологическом образовании',
        phone: '+998936431433',
        email: 'otajonov_s@mail.ru',
      },
      {
        id: '3 - секция',
        title:
          'Концептуальные проблемы и решения преподавания автоматизации и робототехники в технологическом образовании',
        phone: '+998972871991',
        email: 'neo_gizmo1@mail.ru',
      },
      {
        id: '4 - секция',
        title:
          'Сущность и значение совершенствования преподавания технологий в новом этапе развития Узбекистана',
        phone: '+998939741023',
        email: 'boqirov_j@mail.ru',
      },
      {
        id: '5 - секция',
        title:
          'Перспективы использования инновационных педагогических и цифровых технологий в трансформации технологической дисциплины',
        phone: '+998972088068 / +998930418558',
        email: 'barchin.askarova@mail.ru',
      },
      {
        id: '6 - секция',
        title:
          'Эффективность управления объектами с использованием нетрадиционных источников энергии при поддержке искусственного интеллекта',
        phone: '+998939710263',
        email: 'rova08@mail.ru',
      },
    ],
    essenceTitle: 'Суть конференции',
    essence: [
      'Суть конференции заключается в активной разработке научно-методических предложений по совершенствованию методики преподавания, обсуждении передовых исследований в области материаловедения и наноструктур с их полным внедрением в учебно-технологический процесс, анализе проблем, возникающих из автоматизации обучения, использовании принципов робототехники, а также в выработке методических рекомендаций.',
      'Также предполагается усиление роли современных информационно-коммуникационных технологий в технологическом образовании, расширение возможностей цифровой образовательной системы и разработка научно-практических рекомендаций в рамках информационно-педагогического подхода.',
      'Важным направлением мероприятия является представление научных разработок, связанных с нетрадиционными источниками энергии, их теории и практического применения, а также определение механизмов интеграции комплексной учебной программы по данной тематике в систему образования.',
      'На основе полученных данных и достигнутых результатов будут разработаны методические рекомендации и предложения по повышению качества технологического образования в школах и вузах Республики в соответствии с требованиями национальной программы.',
    ],
    publicationTitle: 'Публикация и участие',
    publication: [
      'Материалы конференции будут изданы в сборнике и распространены среди участников в электронном виде. Авторы несут ответственность за предоставленные сведения. Участники, активно участвовавшие в работе конференции, получат специальный сертификат участника.',
      'Лучшие тезисы и статьи могут быть опубликованы в изданиях, индексируемых в Scopus: AIP Conference Proceedings, Proceedings of SPIE — The International Society for Optical Engineering, Springer Proceedings in Physics, Lecture Notes in Networks and Systems. Администрация конференции свяжется с авторами по вопросам дальнейшей публикации.',
      'Остальные статьи будут опубликованы в международном научном журнале «All Science» при НИИ «Физика резонансных ядерных реакций» при Electron Laboratory LLC, в соответствии с требованиями авторов.',
      'Подача тезисов и статей, а также участие в конференции полностью бесплатны.',
      'Онлайн-формат конференции состоится 7–8 мая 2026 года в 09:00 на платформе Zoom. Ссылка на конференцию Zoom будет отправлена на электронный адрес, указанный при регистрации.',
    ],
    appendix1Title: 'Приложение 1: Требования к оформлению тезисов',
    thesisRequirements: [
      'Формат: doc/docx, объем не более 3 страниц.',
      'Поля: левое 3 см, правое 1,5 см, верхнее 2 см, нижнее 2 см.',
      'Шрифт: Times New Roman, 14, межстрочный интервал 1,5.',
      'Абзац: 1,25 см, без дополнительных интервалов.',
      'Заголовок: прописные буквы, выравнивание по центру.',
      'Авторы: полностью курсивом, с верхними индексами, по центру.',
      'Основной текст: выравнивание по ширине.',
      'Рисунки: не менее 150 dpi, подписи нумерованные.',
      'Формулы: Microsoft Equation или MathType, обязательная нумерация.',
    ],
    articleTitle: 'Требования к оформлению статей',
    articleRequirements: [
      'Формат: doc/docx, объем не более 30 страниц.',
      'Поля: левое 3 см, правое 1,5 см, верхнее 2 см, нижнее 2 см.',
      'Шрифт: Times New Roman, 12, межстрочный интервал 1.',
      'Абзац: 1,25 см, без дополнительных интервалов.',
      'Заголовок: прописные буквы, полужирный, по центру.',
      'Авторы: полностью курсивом, с верхними индексами, по центру.',
      'Основной текст: выравнивание по ширине.',
      'Рисунки: не менее 150 dpi, подписи нумерованные.',
      'Формулы: Microsoft Equation или MathType, обязательная нумерация.',
    ],
    note:
      'В конце тезисов и статей необходимо указать контактные данные авторов, а авторов, выразивших желание выступить в онлайн или офлайн формате, подчеркнуть. Тезисы и статьи должны содержать оригинальные результаты, ранее не опубликованные.',
    appendix2Title: 'Приложение 2: Дополнительные требования к тезисам',
    appendix2Requirements: [
      'Текст статьи в формате doc, Times New Roman, 14, межстрочный интервал 1,15.',
      'Формат A4: верхнее 20 мм, левое 30 мм, нижнее 20 мм, правое 15 мм.',
      'Название тезисов — жирным, прописными буквами, по центру.',
      'Ф.И.О. авторов и полное название организации — по центру.',
      'Основной текст — с абзацным отступом 1 см.',
    ],
    referencesTitle: 'Список литературы:',
    references: [
      '[1] Ф.И.О. Фамилия. Название статьи. Название журнала. (год), номер, 1–10 страницы. DOI или ссылка на сайт журнала.',
      '[2] Ф.И.О. Фамилия. Название книги. (Город, Издательство, Год) — количество страниц.',
    ],
    footerTitle: 'Шаблон файла',
    downloadButton: 'Скачать шаблон',
    scopusButton: 'Lecture Notes in Networks and Systems (Scopus)',
    contacts: {
      phone: 'Телефон: +998 90 000 00 00',
      address: 'Адрес: Фергана, Узбекистан',
      email: 'Email: info@example.uz',
    },
    devLink: 'Разработчик сайта: Ikromov Solijon',
  },
  en: {
    headerTitle:
      '5th International Scientific-Practical Conference “Digital Technologies, Computer and Information Technologies, Innovative Pedagogy”',
    headerSubtitle: 'Submission of papers is ongoing',
    cta: 'Template file (Lecture Notes in Networks and Systems)',
    infoTitle: 'Information letter',
    intro: [
      'In accordance with Order No. 11 of January 16, 2026 of the Ministry of Higher Education, Science and Innovation of the Republic of Uzbekistan, the Ministry of Higher Education, Science and Innovation of the Republic of Uzbekistan, Fergana State University, Vilnius University (Lithuania), Southern Federal University (Rostov-on-Don), Sultan Moulay Slimane University of Beni Mellal (USMS, Morocco), Azerbaijan Technical University (Baku), University of the Peloponnese (Greece), Abai Kazakh National Pedagogical University, Osh Technological University named after Academician M. M. Adisheva, Berdakh Karakalpak State University, AIP Conference Proceedings, Proceedings of SPIE — The International Society for Optical Engineering, Springer Proceedings in Physics, Lecture Notes in Networks and Systems, “Resonance Nuclear Reactions Physics” Research Institute under Electron Laboratory LLC, Electron Laboratory LLC, “All Sciences” International Scientific Journal, “Semiconductors and Microelectronics Physics” Research Institute under the National University, Andijan State University, and Namangan State University will hold the conference on May 7–8, 2026.',
      'The goal of the conference is to unite scientific and applied research in the field of technology education, expand opportunities for integrating modern technologies into the learning process, develop new pedagogical solutions, and create a strong platform for broad international scientific cooperation.',
      'This event is aimed at aligning the national education system with global trends in technology education, introducing advanced innovative developments into the learning process, expanding and presenting the latest achievements in scientific progress, ensuring close collaboration among international research communities, strengthening interdisciplinary integration, and forming a platform for experience exchange among young researchers.',
      'Please submit theses and scientific articles in Uzbek, Russian, or English by April 25, 2026, to the section coordinators via email. The section number must be indicated in the file name.',
    ],
    directionsTitle: 'Topical directions for publication',
    tableHead: {
      number: 'Section number',
      topic: 'Section topic',
      contact: 'Contact and coordinator',
    },
    sections: [
      {
        id: 'Section 1',
        title:
          'Essence and importance of improving technology teaching in the new stage of Uzbekistan’s development',
        phone: '+998913982397',
        email: 'gulasal_x@mail.ru',
      },
      {
        id: 'Section 2',
        title:
          'Nanostructure theory and technology in materials science and technology education',
        phone: '+998936431433',
        email: 'otajonov_s@mail.ru',
      },
      {
        id: 'Section 3',
        title:
          'Conceptual issues and solutions for teaching automation and robotics in technology education',
        phone: '+998972871991',
        email: 'neo_gizmo1@mail.ru',
      },
      {
        id: 'Section 4',
        title:
          'Essence and importance of improving technology teaching in the new stage of Uzbekistan’s development',
        phone: '+998939741023',
        email: 'boqirov_j@mail.ru',
      },
      {
        id: 'Section 5',
        title:
          'Prospects for using innovative pedagogical and digital technologies in transforming technology education',
        phone: '+998972088068 / +998930418558',
        email: 'barchin.askarova@mail.ru',
      },
      {
        id: 'Section 6',
        title:
          'Efficiency of controlling objects using alternative energy sources with AI assistance',
        phone: '+998939710263',
        email: 'rova08@mail.ru',
      },
    ],
    essenceTitle: 'Conference focus',
    essence: [
      'The conference focuses on actively developing scientific and methodological proposals to improve teaching methods, discussing advanced research in materials science and nanostructures with full integration into the educational and technological process, analyzing problems arising from automation in learning, applying robotics principles, and formulating methodological recommendations.',
      'It also aims to strengthen the role of modern information and communication technologies in technology education, expand digital education system capabilities, and develop scientific-practical recommendations within an information-pedagogical approach.',
      'An important direction of the event is to present research related to alternative energy sources, their theory and practical application, and to identify mechanisms for integrating a comprehensive curriculum on these topics into the education system.',
      'Based on the data and results obtained, methodological recommendations and proposals will be developed to improve the quality of technology education in schools and universities of the Republic in accordance with national program requirements.',
    ],
    publicationTitle: 'Publication and participation',
    publication: [
      'Conference materials will be published in a collection and distributed to participants electronically. Authors are responsible for the information they provide. Active participants will receive a special participation certificate.',
      'The best theses and articles may be published in Scopus-indexed venues such as AIP Conference Proceedings, Proceedings of SPIE — The International Society for Optical Engineering, Springer Proceedings in Physics, and Lecture Notes in Networks and Systems. The conference administration will contact authors regarding further publication.',
      'Other articles will be published in the “All Science” international scientific journal under the “Resonance Nuclear Reactions Physics” Research Institute at Electron Laboratory LLC, according to authors’ requirements.',
      'Submission of theses and articles, as well as participation in the conference, is completely free.',
      'The online format will take place on May 7–8, 2026 at 09:00 on the Zoom platform. The Zoom link will be sent to the email address provided during registration.',
    ],
    appendix1Title: 'Appendix 1: Thesis formatting requirements',
    thesisRequirements: [
      'Format: doc/docx, maximum 3 pages.',
      'Margins: left 3 cm, right 1.5 cm, top 2 cm, bottom 2 cm.',
      'Font: Times New Roman, 14, line spacing 1.5.',
      'Paragraph indent: 1.25 cm, no extra spacing.',
      'Title: uppercase, centered.',
      'Authors: italic, with superscripts, centered.',
      'Main text: justified.',
      'Figures: at least 150 dpi, captions numbered.',
      'Formulas: Microsoft Equation or MathType, numbered.',
    ],
    articleTitle: 'Article formatting requirements',
    articleRequirements: [
      'Format: doc/docx, maximum 30 pages.',
      'Margins: left 3 cm, right 1.5 cm, top 2 cm, bottom 2 cm.',
      'Font: Times New Roman, 12, line spacing 1.',
      'Paragraph indent: 1.25 cm, no extra spacing.',
      'Title: uppercase, bold, centered.',
      'Authors: italic, with superscripts, centered.',
      'Main text: justified.',
      'Figures: at least 150 dpi, captions numbered.',
      'Formulas: Microsoft Equation or MathType, numbered.',
    ],
    note:
      'At the end of theses and articles, provide authors’ contact details, and underline the authors who wish to present online or offline. Theses and articles must contain original results that have not been published before.',
    appendix2Title: 'Appendix 2: Additional thesis requirements',
    appendix2Requirements: [
      'Article text in doc format, Times New Roman, 14, line spacing 1.15.',
      'A4 format: top 20 mm, left 30 mm, bottom 20 mm, right 15 mm.',
      'Thesis title in bold, uppercase, centered.',
      'Authors’ full names and organization’s full name centered.',
      'Main text with a 1 cm paragraph indent.',
    ],
    referencesTitle: 'References:',
    references: [
      '[1] Author Name. Article title. Journal title. (year), issue, pages 1–10. DOI or journal website link.',
      '[2] Author Name. Book title. (City, Publisher, Year) — number of pages.',
    ],
    footerTitle: 'Template file',
    downloadButton: 'Download template',
    scopusButton: 'Lecture Notes in Networks and Systems (Scopus)',
    contacts: {
      phone: 'Phone: +998 90 000 00 00',
      address: 'Address: Fergana, Uzbekistan',
      email: 'Email: info@example.uz',
    },
    devLink: 'Website developer: Ikromov Solijon',
  },
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
                  <div>{section.phone}</div>
                  <div>{section.email}</div>
                </div>
              </div>
            ))}
          </div>

          <h3>{t.essenceTitle}</h3>
          {t.essence.map((paragraph, index) => (
            <p key={`essence-${index}`}>{paragraph}</p>
          ))}

          <h3>{t.publicationTitle}</h3>
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
            <br />
            {t.references[0]}
            <br />
            {t.references[1]}
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
