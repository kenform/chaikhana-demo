import { useEffect, useState } from 'react'
import './App.css'

const navItems = [
  ['О нас', '#about'],
  ['Меню', '#menu'],
  ['Преимущества', '#advantages'],
  ['Галерея', '#gallery'],
  ['Контакты', '#contacts'],
]

const categories = ['Хиты', 'Пловы', 'Шашлыки', 'Манты', 'Салаты', 'Супы', 'Напитки']

const fallbackDishImage = 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85'

const dishes = [
  ['Плов Чайханский', 'Классический узбекский плов с бараниной, морковью и нутом, приготовленный в казане.', '38 000 сум', 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85', 'Хит', 'Хиты'],
  ['Плов праздничный', 'Большая порция плова для компании с мясом, чесноком, зирой и нутом.', '68 000 сум', 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85', 'Плов', 'Пловы'],
  ['Шашлык из баранины', 'Сочный шашлык из молодой баранины, маринованный в восточных специях.', '42 000 сум', 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=85', 'Популярное', 'Шашлыки'],
  ['Шашлык из курицы', 'Нежное куриное филе на углях с лавашом, луком и зеленью.', '34 000 сум', 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85', 'На углях', 'Шашлыки'],
  ['Манты с тыквой', 'Нежные манты на пару с начинкой из тыквы и лука, со сметаной и томатным соусом.', '28 000 сум', 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85', 'Традиция', 'Манты'],
  ['Манты с мясом', 'Классические манты с рубленым мясом, луком и ароматным бульоном внутри.', '32 000 сум', 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85', 'Домашние', 'Манты'],
  ['Ачик-чучук', 'Традиционный узбекский салат из свежих помидоров, лука и душистого масла.', '18 000 сум', 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85', 'Свежо', 'Салаты'],
  ['Салат с зеленью', 'Хрустящие овощи, зелень, лёгкая заправка и яркая подача к горячим блюдам.', '22 000 сум', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85', 'Лёгкий', 'Салаты'],
  ['Шурпа домашняя', 'Наваристый суп с мясом, овощами, зеленью и восточными специями.', '36 000 сум', 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=85', 'Суп', 'Супы'],
  ['Лагман домашний', 'Насыщенный бульон, лапша, овощи и пряная подача.', '35 000 сум', 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85', 'Горячее', 'Супы'],
  ['Чайханский чай', 'Ароматный зелёный или чёрный чай в чайнике, подаётся с курагой и орехами.', '12 000 сум', 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85', 'Чай', 'Напитки'],
  ['Айран охлаждённый', 'Освежающий напиток к плову, шашлыку и горячим блюдам.', '10 000 сум', 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85', 'Fresh', 'Напитки'],
]

const features = [
  ['Натуральные продукты', 'Только свежие ингредиенты без усилителей вкуса. Поставки ежедневно с местных рынков.', '🌿'],
  ['Опытные повара', 'Наши повара хранят секреты восточных рецептов, передаваемых из поколения в поколение.', '🏠'],
  ['Аутентичная атмосфера', 'Интерьер в восточном стиле создаёт ощущение уюта и тепла.', '🧳'],
  ['Для семьи и компании', 'Просторные залы и банкетные пространства для любого повода.', '👥'],
  ['Живая музыка', 'По пятницам и выходным — восточная музыка и особая атмосфера вечера.', '🎶'],
  ['Удобная парковка', 'Парковка рядом с рестораном и удобный вход для гостей.', '✅'],
]

const gallery = [
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85',
]


const reviews = [
  ['Алина', 'Семейный ужин', 'Очень уютно, вкусный плов и внимательные официанты. Забронировали столик за минуту.', '5.0', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80'],
  ['Марат', 'День рождения', 'Отлично помогли с банкетом: быстро подобрали время, зал и меню на компанию.', '4.9', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80'],
  ['Екатерина', 'Доставка', 'Заказали шашлык и чайный сет домой. Всё приехало горячим и красиво упакованным.', '4.8', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80'],
  ['Руслан', 'Банкет', 'Отдельно спасибо за быструю бронь. Сразу понятно: время, гости, формат, без лишних звонков.', '5.0', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80'],
  ['София', 'Вечер с друзьями', 'Очень атмосферно: чай, музыка, интерьер и вкусный шашлык. Захотелось вернуться.', '4.9', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80'],
  ['Дамир', 'Доставка', 'Оформил заявку через сайт, быстро ответили в Telegram. Всё удобно и без хаоса.', '4.8', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80'],
  ['Наталья', 'Семейный ужин', 'Понравилось, что можно заранее выбрать формат и время. Для семьи это прям удобно.', '5.0', 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=160&q=80'],
  ['Илья', 'Плов', 'Плов отличный, порции большие. Сайт помог быстро посмотреть меню и забронировать.', '4.9', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80'],
  ['Мадина', 'День рождения', 'Собрали стол на компанию, подсказали по меню и времени. Очень тёплый сервис.', '5.0', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80'],
  ['Артём', 'Шашлыки', 'Шашлык сочный, подача красивая. Через сайт всё выглядит дорого и понятно.', '4.8', 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=160&q=80'],
  ['Лола', 'Чайный вечер', 'Очень уютная атмосфера, чайная подача прям отдельное удовольствие.', '5.0', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&q=80'],
  ['Тимур', 'Банкет', 'Удобно, что заявка сразу с количеством гостей и временем. Администратор быстро понял задачу.', '4.9', 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=160&q=80'],
  ['Карина', 'Салаты и чай', 'Красивое меню, приятные фото, легко выбрать блюдо. Ничего лишнего.', '4.8', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80'],
  ['Алексей', 'Ужин после работы', 'Зашли спонтанно, но теперь буду бронировать заранее — так реально удобнее.', '4.9', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80'],
  ['Зарина', 'Семейный праздник', 'Интерьер красивый, детям понравилось, взрослым тоже. Отличное место для семейных встреч.', '5.0', 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=160&q=80'],
  ['Олег', 'Доставка в офис', 'Заказали на команду, всё приехало аккуратно. Telegram-заявка — очень удобно.', '4.8', 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=160&q=80'],
  ['Диана', 'Романтический ужин', 'Тихо, тепло, красиво. Сайт сразу передаёт атмосферу места.', '5.0', 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=160&q=80'],
  ['Сергей', 'Обед', 'Быстро посмотрел меню, выбрал плов, забронировал. Всё понятно даже с телефона.', '4.9', 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=160&q=80'],
  ['Милана', 'День рождения', 'Очень понравилась идея заявки под событие. Для ресторана это прям сильная фишка.', '5.0', 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=160&q=80'],
  ['Фарид', 'Встреча с друзьями', 'Меню, карта, бронь, мессенджеры — всё на месте. Сайт реально помогает выбрать и прийти.', '4.9', 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=160&q=80'],
]

const trustStats = [
  ['4.9/5', 'рейтинг гостей', 'по отзывам и картам'],
  ['12 минут', 'средний ответ', 'в Telegram / WhatsApp'],
  ['20+', 'живых отзывов', 'для доверия на сайте'],
  ['8+ гостей', 'банкет без хаоса', 'заявка уже с деталями'],
]

const promoCards = [
  ['Плов + чай', 'Сегодня к большому плову чайник зелёного чая в подарок.', 'до 18:00'],
  ['Банкет от 8 гостей', 'Поможем собрать меню под компанию и заранее подготовить стол.', '-10%'],
  ['Доставка рядом', 'Популярные блюда можно заказать домой или в офис.', 'быстро'],
]

const assistantScenarios = ['Семейный ужин', 'День рождения', 'Банкет', 'Доставка']

const scenarioCards = [
  ['Семейный ужин', 'Уютный стол, чай, плов и спокойная атмосфера для близких.', 'от 2 гостей', 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=85'],
  ['День рождения', 'Поможем собрать меню, подготовить стол и красиво встретить гостей.', 'под ключ', 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=85'],
  ['Банкет', 'Быстрая заявка с количеством гостей, временем и форматом события.', '8+ гостей', 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=85'],
  ['Доставка', 'Популярные блюда домой или в офис: плов, шашлык, чайные сеты.', 'быстро', 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Хиты')
  const [bookingDay, setBookingDay] = useState('Сегодня')
  const [bookingTime, setBookingTime] = useState('19:00')
  const [bookingGuests, setBookingGuests] = useState('4 гостя')
  const [bookingType, setBookingType] = useState('Банкет')
  const [assistantScenario, setAssistantScenario] = useState('Семейный ужин')
  const [chatOpen, setChatOpen] = useState(false)
  const filteredDishes = activeCategory === 'Хиты' ? dishes.slice(0, 5) : dishes.filter((dish) => dish[5] === activeCategory)
  const bookingText = `Здравствуйте! Хочу забронировать: ${bookingDay}, ${bookingTime}, ${bookingGuests}, формат: ${bookingType}. Сценарий: ${assistantScenario}.`
  const telegramUrl = `https://t.me/?text=${encodeURIComponent(bookingText)}`
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(bookingText)}`

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen)

    return () => {
      document.body.classList.remove('menu-is-open')
    }
  }, [menuOpen])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]')) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [activeCategory])

  return (
    <main className="min-h-screen overflow-hidden bg-[#180f0a] text-[#fff7e8]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(245,158,11,.24),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(190,88,39,.2),transparent_28%),linear-gradient(180deg,#211108_0%,#120b08_58%,#1d1008_100%)]" />

      <header className="sticky top-3 z-50 mx-auto mt-3 w-[calc(100%-24px)] max-w-7xl rounded-[28px] border border-white/10 bg-[#24140c]/82 p-3 shadow-2xl shadow-black/25 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <a href="#" className="flex min-w-0 items-center gap-3 no-underline">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-400 text-xl font-black text-[#211108]">Ч</span>
            <span className="min-w-0">
              <b className="block truncate tracking-[.26em] text-white">ЧАЙХАНА</b>
              <small className="font-bold text-amber-100/70">ресторан восточной кухни</small>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-black text-amber-100/70 md:flex">
            {navItems.map(([label, href]) => (
              <a className="nav-link" href={href} key={href}>{label}</a>
            ))}
          </nav>

          <a href="#booking" className="hidden rounded-2xl bg-amber-400 px-5 py-3 text-sm font-black text-[#211108] no-underline shadow-lg shadow-amber-950/30 sm:inline-flex">Забронировать стол</a>

          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className={`menu-toggle md:hidden ${menuOpen ? 'menu-toggle-open' : ''}`} aria-label="Открыть меню">
            <span><i /><i /><i /></span>
          </button>
        </div>

        <div className={`mobile-menu md:hidden ${menuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="mobile-drawer">
            <div className="mobile-drawer-head">
              <span>Навигация</span>
              <small>чайхана · меню · бронь</small>
            </div>

            <nav className="mobile-nav-list">
              {navItems.map(([label, href], index) => (
                <a onClick={() => setMenuOpen(false)} href={href} key={href}>
                  <em>{String(index + 1).padStart(2, '0')}</em>
                  <span>{label}</span>
                </a>
              ))}
            </nav>

            <div className="mobile-drawer-bottom">
              <a onClick={() => setMenuOpen(false)} href="#booking">Забронировать стол</a>
              <p>Быстро выберите меню, посмотрите атмосферу и оставьте заявку.</p>
            </div>
          </div>
        </div>
      </header>

      <section data-reveal className="relative z-10 mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-16">
        <div className="rounded-[36px] border border-white/10 bg-white/[.07] p-5 shadow-2xl shadow-black/25 backdrop-blur sm:p-8 lg:p-10">
          <p className="text-xs font-black uppercase tracking-[.45em] text-amber-300">Ресторан восточной кухни</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[.92] tracking-tight text-white sm:text-7xl lg:text-8xl">Чайхана — место вкуса и тепла</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-100/72">Ароматный чай, блюда восточной кухни и уютная атмосфера для ваших лучших моментов.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#booking" className="rounded-2xl bg-amber-400 px-6 py-4 text-center font-black text-[#211108] no-underline">Забронировать стол</a>
            <a href="#menu" className="rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-center font-black text-amber-100 no-underline">Смотреть меню</a>
          </div>
          <div className="hero-badges">
            <span>🌿 Свежие ингредиенты</span>
            <span>📜 Традиционные рецепты</span>
            <span>🏮 Уютная атмосфера</span>
          </div>
        </div>

        <aside className="hero-visual relative min-h-[520px] overflow-hidden rounded-[36px] border border-amber-200/15 bg-[#f7c56b] p-5 text-[#211108] shadow-2xl shadow-black/30 sm:p-7">
          <div className="hero-stats-card">
            <b>10+<small>лет традиций</small></b>
            <b>5K+<small>довольных гостей</small></b>
            <b>★ 4.9<small>рейтинг гостей</small></b>
          </div>
        </aside>
      </section>



      <section data-reveal className="trust-strip-section relative z-10">
        <div className="section-inner trust-strip">
          {trustStats.map(([value, label, text]) => (
            <article data-reveal key={label}>
              <b>{value}</b>
              <span>{label}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" data-reveal className="about-section relative z-10">
        <div className="section-inner about-grid">
          <div className="about-photo">
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1100&q=85" alt="Интерьер чайханы" />
            <div className="about-small-photo">
              <img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=85" alt="Чайная подача" />
            </div>
          </div>
          <div className="about-content">
            <p className="section-kicker">О нас</p>
            <h2>Традиции гостеприимства <span>в каждом моменте</span></h2>
            <p>Чайхана — это не просто ресторан. Это место, где время замедляется, а каждое блюдо приготовлено с любовью и уважением к вековым традициям восточной кухни.</p>
            <p>Здесь вас ждёт ароматный плов, сочный шашлык, свежие салаты, домашняя выпечка и, конечно, бесчисленные сорта чая.</p>
            <div className="about-stats">
              <b>10+<small>лет традиций</small></b>
              <b>100%<small>натуральные продукты</small></b>
              <b>5000+<small>довольных гостей</small></b>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" data-reveal className="menu-section relative z-10">
        <div className="section-inner">
          <p className="section-kicker center">Наше меню</p>
          <h2 className="section-title center">Вкусы <span>Востока</span></h2>
          <p className="section-subtitle">Каждое блюдо — это история, приготовленная с уважением к традициям.</p>

          <div className="menu-tabs" role="tablist" aria-label="Фильтр меню">
            {categories.map((item) => (
              <button onClick={() => setActiveCategory(item)} className={activeCategory === item ? 'active' : ''} type="button" key={item}>{item}</button>
            ))}
          </div>

          <div className="menu-filter-note">Показано: {activeCategory}. Выберите категорию, чтобы быстро найти нужное блюдо.</div>

          <div className="dish-grid">
            {filteredDishes.map(([title, desc, price, image, badge]) => (
              <article data-reveal className="dish-card premium-dish" key={title}>
                <div className="dish-image">
                  <img src={image} alt={title} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = fallbackDishImage }} />
                  <span>{badge}</span>
                </div>
                <div className="dish-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <div>
                    <b>{price}</b>
                    <a href="#booking">В бронь</a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="menu-actions"><a href="#booking" className="menu-download">Забронировать стол</a><a href="/menu-chaikhana.pdf" download className="menu-pdf">Скачать меню PDF</a></div>
        </div>
      </section>

      <section id="advantages" data-reveal className="relative z-10 mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.45em] text-amber-300">Почему мы</p>
          <h2 className="mt-3 text-4xl font-black text-white sm:text-6xl">Наши преимущества</h2>
          <p className="mt-5 leading-8 text-amber-100/65">Мы создаём не просто ужин — мы создаём впечатление, которое хочется повторить.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {features.map(([title, desc, icon]) => (
            <article data-reveal className="rounded-[30px] border border-white/10 bg-white/[.07] p-5 shadow-xl shadow-black/20" key={title}>
              <div className="text-5xl">{icon}</div>
              <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-amber-100/65">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="booking" data-reveal className="booking-section relative z-10">
        <div className="booking-shell section-inner">
          <div>
            <p className="section-kicker">Бронь и заказ</p>
            <h2>Столик, банкет или доставка — в один понятный шаг.</h2>
            <p>Выберите быстрые параметры заявки. В реальном проекте эти данные отправляются в Telegram, WhatsApp, CRM или администратору.</p>
            <div className="booking-summary">Заявка: {bookingDay}, {bookingTime}, {bookingGuests}, {bookingType.toLowerCase()}</div>
          </div>

          <div className="booking-card">
            <div className="booking-fields">
              <label><span>Имя</span><input defaultValue="Анна" aria-label="Имя" /></label>
              <label><span>Телефон</span><input defaultValue="+7 ••• •••-••-••" aria-label="Телефон" /></label>
            </div>

            <div className="booking-choice-grid">
              <div>
                <span>День</span>
                <div>{['Сегодня', 'Завтра', 'Выходные'].map((item) => <button className={bookingDay === item ? 'selected' : ''} onClick={() => setBookingDay(item)} type="button" key={item}>{item}</button>)}</div>
              </div>
              <div>
                <span>Время</span>
                <div>{['18:00', '19:00', '20:30'].map((item) => <button className={bookingTime === item ? 'selected' : ''} onClick={() => setBookingTime(item)} type="button" key={item}>{item}</button>)}</div>
              </div>
              <div>
                <span>Гости</span>
                <div>{['2 гостя', '4 гостя', '8+ гостей'].map((item) => <button className={bookingGuests === item ? 'selected' : ''} onClick={() => setBookingGuests(item)} type="button" key={item}>{item}</button>)}</div>
              </div>
              <div>
                <span>Формат</span>
                <div>{['Столик', 'Банкет', 'Доставка'].map((item) => <button className={bookingType === item ? 'selected' : ''} onClick={() => setBookingType(item)} type="button" key={item}>{item}</button>)}</div>
              </div>
            </div>

            <div className="booking-actions"><a className="call" href="tel:+70000000000">Позвонить</a><a className="tg" href={telegramUrl} target="_blank" rel="noreferrer">Telegram</a><a className="wa" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></div>
          </div>
        </div>
      </section>


      <section id="smart-booking" data-reveal className="smart-booking-section relative z-10">
        <div className="section-inner smart-booking-grid">
          <div className="smart-copy">
            <p className="section-kicker">AI-помощник</p>
            <h2>Подберём формат заявки за пару кликов.</h2>
            <p>Демо-помощник показывает, как сайт может не просто красиво выглядеть, а помогать администратору получать понятные заявки: время, гостей, формат и контакт.</p>

            <div className="scenario-pills">
              {assistantScenarios.map((scenario) => (
                <button type="button" className={assistantScenario === scenario ? 'selected' : ''} onClick={() => setAssistantScenario(scenario)} key={scenario}>{scenario}</button>
              ))}
            </div>

            <div className="assistant-result">
              <span>Готовая заявка</span>
              <p>{bookingText}</p>
            </div>

            <div className="assistant-actions">
              <a href={telegramUrl} target="_blank" rel="noreferrer">Отправить в Telegram</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">Отправить в WhatsApp</a>
            </div>
          </div>

          <div className="assistant-phone">
            <div className="assistant-phone-head"><span>AI booking</span><b>online</b></div>
            <div className="assistant-chat">
              <p className="bot">Здравствуйте! Подскажу, что лучше выбрать для сценария “{assistantScenario}”.</p>
              <p className="user">{bookingGuests}, {bookingTime}, {bookingType.toLowerCase()}.</p>
              <p className="bot">Отлично. Я подготовлю короткую заявку для администратора и предложу ближайшее удобное время.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="scenarios" data-reveal className="scenario-section relative z-10">
        <div className="section-inner">
          <p className="section-kicker center">Сценарии</p>
          <h2 className="section-title center">Для любого <span>повода</span></h2>
          <p className="section-subtitle">Показываем гостю не просто меню, а готовые варианты: прийти семьёй, отметить праздник, собрать банкет или заказать доставку.</p>

          <div className="scenario-grid">
            {scenarioCards.map(([title, text, badge, image]) => (
              <article data-reveal className="scenario-card" key={title}>
                <img src={image} alt={title} />
                <div>
                  <span>{badge}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="#booking">Собрать заявку</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="offers" data-reveal className="offers-section relative z-10">
        <div className="section-inner">
          <p className="section-kicker center">Акции дня</p>
          <h2 className="section-title center">Повод зайти <span>сегодня</span></h2>
          <div className="promo-grid">
            {promoCards.map(([title, text, badge]) => (
              <article data-reveal key={title}>
                <span>{badge}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" data-reveal className="gallery-section relative z-10">
        <div className="section-inner">
          <p className="section-kicker center">Галерея</p>
          <h2 className="section-title center">Атмосфера <span>Чайханы</span></h2>
          <p className="section-subtitle">Загляните в наш мир — вкусов, ароматов и тёплых моментов.</p>
          <div className="gallery-grid">
            {gallery.map((src, index) => (
              <img data-reveal src={src} alt={`Галерея чайханы ${index + 1}`} key={src} />
            ))}
          </div>
        </div>
      </section>


      <section id="reviews" data-reveal className="reviews-section relative z-10">
        <div className="section-inner">
          <p className="section-kicker center">Отзывы</p>
          <h2 className="section-title center">Гости <span>возвращаются</span></h2>
          <div className="reviews-slider-shell">
            <div className="reviews-marquee">
              {[...reviews, ...reviews].map(([name, label, text, rating, avatar], index) => (
                <article className="review-slide" data-reveal key={`${name}-${index}`}>
                  <div className="review-head">
                    <img src={avatar} alt={name} />
                    <div><b>{name}</b><small>{label}</small></div>
                    <span>★ {rating}</span>
                  </div>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="reviews-cta">
            <span>20 отзывов в демо-ленте</span>
            <a href="#booking">Хочу забронировать</a>
          </div>
        </div>
      </section>

      <section id="contacts" data-reveal className="contacts-section relative z-10">
        <div className="section-inner">
          <p className="section-kicker center">Контакты</p>
          <h2 className="section-title center">Приходите в гости</h2>
          <p className="section-subtitle">Забронируйте столик заранее или просто зайдите — мы рады каждому гостю.</p>
          <div className="contacts-grid">
            <div className="contact-cards">
              <article><span>📍</span><b>Адрес</b><p>Невский проспект, 28</p><small>Санкт-Петербург, демо-адрес</small></article>
              <article><span>☎️</span><b>Телефон</b><p>+7 812 234 56 78</p><small>+7 900 123 45 67</small></article>
              <article><span>🕘</span><b>Часы работы</b><p>Ежедневно 10:00 — 23:00</p><small>Пятница–Суббота до 00:00</small></article>
              <article><span>✈️</span><b>Telegram</b><p>@chaihana_spb</p><small>Быстрое бронирование</small></article>
              <a href="#booking" className="contact-btn primary">Забронировать стол</a>
              <a href="https://t.me/" className="contact-btn telegram">Написать в Telegram</a>
            </div>
            <div className="yandex-map">
              <iframe title="Яндекс карта: демо-адрес чайханы" src="https://yandex.ru/map-widget/v1/?ll=30.324192%2C59.935965&z=15&mode=search&text=%D0%9D%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2028%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <div className="map-float-card"><b>ЧАЙХАНА</b><small>Невский проспект, 28</small></div>
            </div>
          </div>
        </div>
      </section>

      <footer data-reveal className="footer-section relative z-10">
        <div className="section-inner footer-grid">
          <div>
            <div className="footer-logo"><span>Ч</span><b>ЧАЙХАНА</b></div>
            <p>Ресторан восточной кухни с многолетними традициями гостеприимства в сердце города.</p>
            <div className="footer-socials footer-socials-text"><a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a><a href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a><a href="#contacts">Карта</a></div>
          </div>
          <div><b>Навигация</b><a href="#about">О нас</a><a href="#menu">Меню</a><a href="#advantages">Преимущества</a><a href="#gallery">Галерея</a></div>
          <div><b>Меню</b><a>Пловы</a><a>Шашлыки</a><a>Супы</a><a>Салаты</a></div>
          <div><b>Новости и акции</b><p>Подпишитесь и получайте первыми новости об акциях.</p><input placeholder="Ваш email" /><button>Подписаться</button></div>
        </div>
        <div className="section-inner footer-bottom">
          <span>© 2026 Чайхана. Демо-сайт ресторана.</span>
          <div><a href="#contacts">Контакты</a><a href="#booking">Бронь</a><a href="#menu">Меню</a></div>
        </div>
      </footer>


      <div className="mobile-bottom-cta">
        <a href="#booking">Забронировать</a>
        <button type="button" onClick={() => setChatOpen(true)}>AI</button>
      </div>

      <button className="chat-launcher" type="button" onClick={() => setChatOpen(true)}>AI</button>
      <div className={`chat-panel ${chatOpen ? 'chat-panel-open' : ''}`}>
        <button className="chat-close" type="button" onClick={() => setChatOpen(false)}>×</button>
        <span>AI-помощник</span>
        <h3>Подготовить заявку?</h3>
        <p>Я соберу короткий текст для администратора: день, время, гости и формат.</p>
        <div className="chat-mini-card">{bookingText}</div>
        <a href={telegramUrl} target="_blank" rel="noreferrer">Отправить в Telegram</a>
      </div>

    </main>
  )
}

export default App
