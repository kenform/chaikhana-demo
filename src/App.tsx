import { useState } from 'react'
import './App.css'

const navItems = [
  ['О нас', '#about'],
  ['Меню', '#menu'],
  ['Преимущества', '#advantages'],
  ['Галерея', '#gallery'],
  ['Контакты', '#contacts'],
]

const categories = ['Хиты', 'Пловы', 'Шашлыки', 'Манты', 'Салаты', 'Супы', 'Напитки']

const dishes = [
  ['Плов Чайханский', 'Классический узбекский плов с бараниной, морковью и нутом, приготовленный в казане.', '38 000 сум', 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85', 'Хит', 'Хиты'],
  ['Плов праздничный', 'Большая порция плова для компании с мясом, чесноком, зирой и нутом.', '68 000 сум', 'https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85', 'Плов', 'Пловы'],
  ['Шашлык из баранины', 'Сочный шашлык из молодой баранины, маринованный в восточных специях.', '42 000 сум', 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=85', 'Популярное', 'Шашлыки'],
  ['Шашлык из курицы', 'Нежное куриное филе на углях с лавашом, луком и зеленью.', '34 000 сум', 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=85', 'На углях', 'Шашлыки'],
  ['Манты с тыквой', 'Нежные манты на пару с начинкой из тыквы и лука, со сметаной и томатным соусом.', '28 000 сум', 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85', 'Традиция', 'Манты'],
  ['Манты с мясом', 'Классические манты с рубленым мясом, луком и ароматным бульоном внутри.', '32 000 сум', 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=900&q=85', 'Домашние', 'Манты'],
  ['Ачик-чучук', 'Традиционный узбекский салат из свежих помидоров, лука и душистого масла.', '18 000 сум', 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85', 'Свежо', 'Салаты'],
  ['Салат с зеленью', 'Хрустящие овощи, зелень, лёгкая заправка и яркая подача к горячим блюдам.', '22 000 сум', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85', 'Лёгкий', 'Салаты'],
  ['Шурпа домашняя', 'Наваристый суп с мясом, овощами, зеленью и восточными специями.', '36 000 сум', 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=85', 'Суп', 'Супы'],
  ['Лагман домашний', 'Насыщенный бульон, лапша, овощи и пряная подача.', '35 000 сум', 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85', 'Горячее', 'Супы'],
  ['Чайханский чай', 'Ароматный зелёный или чёрный чай в чайнике, подаётся с курагой и орехами.', '12 000 сум', 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85', 'Чай', 'Напитки'],
  ['Айран охлаждённый', 'Освежающий кисломолочный напиток к плову, шашлыку и горячим блюдам.', '10 000 сум', 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85', 'Fresh', 'Напитки'],
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
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Хиты')
  const filteredDishes = activeCategory === 'Хиты' ? dishes.slice(0, 5) : dishes.filter((dish) => dish[5] === activeCategory)

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
          <div className="mt-3 grid gap-2 rounded-2xl border border-white/10 bg-[#140c08] p-3">
            {navItems.map(([label, href]) => (
              <a onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 font-black text-amber-100/75 no-underline" href={href} key={href}>{label}</a>
            ))}
            <a onClick={() => setMenuOpen(false)} href="#booking" className="rounded-xl bg-amber-400 px-4 py-3 text-center font-black text-[#211108] no-underline">Забронировать стол</a>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-16">
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


      <section id="about" className="about-section relative z-10">
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

      <section id="menu" className="menu-section relative z-10">
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
              <article className="dish-card premium-dish" key={title}>
                <div className="dish-image">
                  <img src={image} alt={title} />
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

          <a href="#booking" className="menu-download">Забронировать стол и уточнить меню</a>
        </div>
      </section>

      <section id="advantages" className="relative z-10 mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.45em] text-amber-300">Почему мы</p>
          <h2 className="mt-3 text-4xl font-black text-white sm:text-6xl">Наши преимущества</h2>
          <p className="mt-5 leading-8 text-amber-100/65">Мы создаём не просто ужин — мы создаём впечатление, которое хочется повторить.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {features.map(([title, desc, icon]) => (
            <article className="rounded-[30px] border border-white/10 bg-white/[.07] p-5 shadow-xl shadow-black/20" key={title}>
              <div className="text-5xl">{icon}</div>
              <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-amber-100/65">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="booking" className="relative z-10 mx-auto max-w-7xl px-4 py-10 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[36px] border border-white/10 bg-[#fff4d6] p-5 text-[#211108] shadow-2xl shadow-black/25 sm:p-8 lg:grid-cols-[.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[.42em] text-orange-700">Бронь и заказ</p>
            <h2 className="mt-3 text-4xl font-black sm:text-6xl">Столик, банкет или доставка — в один понятный шаг.</h2>
            <p className="mt-5 leading-8 text-stone-700">Кнопки пока демо. В реальном проекте сюда подключается Telegram, WhatsApp, звонок, карта или CRM для заявок.</p>
          </div>
          <div className="booking-card">
            <div className="booking-fields">
              <label><span>Имя</span><input defaultValue="Анна" aria-label="Имя" /></label>
              <label><span>Телефон</span><input defaultValue="+7 ••• •••-••-••" aria-label="Телефон" /></label>
            </div>
            <div className="booking-options">
              <button type="button">Сегодня</button>
              <button type="button">19:00</button>
              <button type="button">4 гостя</button>
              <button type="button">Банкет</button>
            </div>
            <a href="tel:+70000000000">Позвонить / оставить заявку</a>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery-section relative z-10">
        <div className="section-inner">
          <p className="section-kicker center">Галерея</p>
          <h2 className="section-title center">Атмосфера <span>Чайханы</span></h2>
          <p className="section-subtitle">Загляните в наш мир — вкусов, ароматов и тёплых моментов.</p>
          <div className="gallery-grid">
            {gallery.map((src, index) => (
              <img src={src} alt={`Галерея чайханы ${index + 1}`} key={src} />
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="contacts-section relative z-10">
        <div className="section-inner">
          <p className="section-kicker center">Контакты</p>
          <h2 className="section-title center">Приходите в гости</h2>
          <p className="section-subtitle">Забронируйте столик заранее или просто зайдите — мы рады каждому гостю.</p>
          <div className="contacts-grid">
            <div className="contact-cards">
              <article><span>📍</span><b>Адрес</b><p>ул. Навои, 12, Ташкент</p><small>Мирзо-Улугбекский район</small></article>
              <article><span>☎️</span><b>Телефон</b><p>+998 71 234 56 78</p><small>+998 90 123 45 67</small></article>
              <article><span>🕘</span><b>Часы работы</b><p>Ежедневно 10:00 — 23:00</p><small>Пятница–Суббота до 00:00</small></article>
              <article><span>✈️</span><b>Telegram</b><p>@chaihana_tashkent</p><small>Быстрое бронирование</small></article>
              <a href="#booking" className="contact-btn primary">Забронировать стол</a>
              <a href="https://t.me/" className="contact-btn telegram">Написать в Telegram</a>
            </div>
            <div className="map-mock">
              <div className="map-controls"><button type="button">+</button><button type="button">−</button></div>
              <div className="map-pin">Ч</div>
              <div className="map-card"><b>ЧАЙХАНА</b><small>ул. Навои, 12</small></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section relative z-10">
        <div className="section-inner footer-grid">
          <div>
            <div className="footer-logo"><span>Ч</span><b>ЧАЙХАНА</b></div>
            <p>Ресторан восточной кухни с многолетними традициями гостеприимства в сердце города.</p>
            <div className="footer-socials"><a>◎</a><a>↗</a><a>◉</a><a>▶</a></div>
          </div>
          <div><b>Навигация</b><a href="#about">О нас</a><a href="#menu">Меню</a><a href="#advantages">Преимущества</a><a href="#gallery">Галерея</a></div>
          <div><b>Меню</b><a>Пловы</a><a>Шашлыки</a><a>Супы</a><a>Салаты</a></div>
          <div><b>Новости и акции</b><p>Подпишитесь и получайте первыми новости об акциях.</p><input placeholder="Ваш email" /><button>Подписаться</button></div>
        </div>
      </footer>

    </main>
  )
}

export default App
