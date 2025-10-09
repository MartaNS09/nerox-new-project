const blogData = [
  {
    id: 1,
    img: "assets/img/blog/1/react.jpg",
    img2: "assets/img/blog/2/blog-1.jpg",
    img3: "assets/img/blog/3/blog-5.jpg",
    img4: "assets/img/blog/blog-1.jpg",
    bigImg: "assets/img/blog/blog-big-1.jpg",
    gridImg: "assets/img/blog/grid/blog-1.jpg",
    tags: ["React", "Веб-разработка", "Next.js"],
    title: "Тренды React разработки в 2025 году",
    date: "22 июня 2025",
    desc: "Обзор новых возможностей React и экосистемы: Server Components, React Compiler и современные подходы к разработке.",
    class: "postbox_thumb w-img mb-30",
    blogAuthor: "Иван Горбачев",
    category: "Веб-разработка",
    info: (
      <>
        <h4 className="postbox__title-sm mb-20">React Server Components</h4>
        <p>
          В 2025 году Server Components стали стандартом для современных
          React-приложений. Они позволяют выполнять рендеринг на сервере, что
          значительно улучшает производительность и SEO.
        </p>
        <p className="mb-40">
          Многие компании уже перешли на Next.js 15+ с полной поддержкой Server
          Components, что позволило ускорить загрузку страниц на 40-60%.
        </p>

        <h4 className="postbox__title-sm mb-20">React Compiler</h4>
        <p>
          React Compiler автоматически оптимизирует ваши компоненты, избавляя от
          необходимости ручной мемоизации с помощью useMemo и useCallback.
        </p>

        <p className="mb-40">
          Компилятор анализирует код и определяет, когда необходимо кэшировать
          вычисления, что делает разработку более интуитивной и менее
          подверженной ошибкам.
        </p>

        <h4 className="postbox__title-sm mb-20">AI-интеграции</h4>
        <p>
          Интеграция искусственного интеллекта в React-приложения стала обычной
          практикой. Библиотеки вроде Vercel AI SDK упрощают добавление
          AI-функциональности.
        </p>
        <p className="mb-40">
          От чат-ботов до генерации контента - AI открывает новые возможности
          для пользовательских интерфейсов.
        </p>
      </>
    ),
  },
  {
    id: 2,
    img: "assets/img/blog/2/react-native.png",
    img2: "assets/img/blog/2/blog-1.jpg",
    img3: "assets/img/blog/3/blog-5.jpg",
    img4: "assets/img/blog/blog-1.jpg",
    bigImg: "assets/img/blog/blog-big-1.jpg",
    gridImg: "assets/img/blog/grid/blog-1.jpg",
    tags: ["Мобильная разработка", "React Native"],
    title: "React Native в 2025: новые горизонты",
    date: "15 июня 2025",
    desc: "Современные подходы к кроссплатформенной мобильной разработке и новые возможности React Native.",
    class: "postbox_thumb w-img mb-30",
    blogAuthor: "Никита Коротьков",
    category: "Мобильная разработка",
    info: (
      <>
        <h4 className="postbox__title-sm mb-20">
          Новая архитектура React Native
        </h4>
        <p>
          Полный переход на новую архитектуру с TurboModules и Fabric стал
          ключевым событием 2024-2025 годов. Это значительно улучшило
          производительность и стабильность приложений.
        </p>
        <p className="mb-40">
          Теперь разработчики могут создавать нативные модули с TypeScript first
          подходом, что ускоряет разработку.
        </p>
        <h4 className="postbox__title-sm mb-20">Expo повсеместно</h4>
        <p>
          Expo стал стандартом для большинства новых проектов на React Native. С
          Expo Router навигация стала проще, а с EAS Build облачные сборки
          ускорили процесс разработки.
        </p>
        <p className="mb-40">
          Поддержка Server Direct в Expo позволяет использовать преимущества
          серверного рендеринга и в мобильных приложениях.
        </p>
        <h4 className="postbox__title-sm mb-20">AI в мобильных приложениях</h4>
        <p>
          Интеграция локальных AI-моделей стала реальностью. React Native
          приложения теперь могут работать с ONNX Runtime для выполнения
          ML-моделей непосредственно на устройстве.
        </p>
        <p className="mb-40">
          Это открывает возможности для оффлайн-работы с компьютерным зрением,
          обработкой естественного языка и другими AI-функциями.
        </p>
      </>
    ),
  },
  {
    id: 3,
    img: "assets/img/blog/3/seo-optim.jpg",
    img2: "assets/img/blog/2/blog-1.jpg",
    img3: "assets/img/blog/3/blog-5.jpg",
    img4: "assets/img/blog/blog-1.jpg",
    bigImg: "assets/img/blog/blog-big-1.jpg",
    gridImg: "assets/img/blog/grid/blog-1.jpg",
    tags: ["SEO", "Core Web Vitals", "AI"],
    title: "SEO в эпоху искусственного интеллекта: тренды 2025",
    date: "20 марта 2025",
    desc: "Как изменилась поисковая оптимизация с приходом AI-поиска и что важно для продвижения в новых условиях.",
    class: "postbox_thumb w-img mb-30",
    blogAuthor: "Тимур Крюков",
    category: "SEO оптимизация",
    info: (
      <>
        <h4 className="postbox__title-sm mb-20">AI-поиск и его влияние</h4>
        <p>
          С появлением AI-поиска от Google и других поисковых систем,
          традиционные методы SEO претерпели значительные изменения. Теперь
          важно не просто ключевые слова, а смысловое соответствие контента
          запросам.
        </p>
        <p className="mb-40">
          AI-поиск понимает контекст и intent пользователя, поэтому контент
          должен быть максимально релевантным и полезным.
        </p>
        <h4 className="postbox__title-sm mb-20">
          Experience как ranking factor
        </h4>

        <p>
          Core Web Vitals и общий пользовательский опыт стали критически важными
          факторами ранжирования. Google теперь учитывает не только скорость
          загрузки, но и взаимодействие с контентом.
        </p>
        <p className="mb-40">
          Метрики вроде Interaction to Next Paint (INP) заменили First Input
          Delay (FID), что делает отзывчивость интерфейса ключевым параметром.
        </p>

        <h4 className="postbox__title-sm mb-20">Контент для людей и AI</h4>

        <p>
          Баланс между оптимизацией для поисковых систем и созданием
          качественного контента для людей стал как никогда важен. AI-алгоритмы
          лучше определяют настоящую ценность контента.
        </p>
        <p className="mb-40">
          Экспертный контент от реальных специалистов ценится выше автоматически
          сгенерированных текстов, что возвращает нас к важности реального опыта
          и знаний.
        </p>
      </>
    ),
  },
];

export default blogData;
