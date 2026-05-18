import { useState } from 'react'
import './App.css'

const navItems = [
  ['О нас', '#atmosphere'],
  ['Меню', '#menu'],
  ['Преимущества', '#atmosphere'],
  ['Галерея', '#menu'],
  ['Контакты', '#booking'],
]

const dishes = [
  ['Плов праздничный', 'Рис лазер, сочная говядина, морковь, нут и восточные специи.', '690 ₽', '🍛'],
  ['Манты с мясом', 'Нежное тесто, рубленое мясо, лук и ароматный бульон внутри.', '520 ₽', '🥟'],
  ['Шашлык на углях', 'Маринованное мясо, дымок, лаваш, лук и свежая зелень.', '760 ₽', '🍢'],
  ['Лагман домашний', 'Насыщенный бульон, лапша, овощи и пряная подача.', '590 ₽', '🍜'],
]

const features = [
  ['Семейные ужины', 'Большие столы, спокойная посадка и блюда на компанию.', '👨‍👩‍👧‍👦'],
  ['Банкеты и праздники', 'Дни рождения, встречи и тёплая восточная атмосфера.', '🎉'],
  ['Доставка и самовывоз', 'Популярные блюда домой или в офис без лишних звонков.', '🚗'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

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

          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/8 md:hidden" aria-label="Открыть меню">
            <span className="grid gap-1.5">
              <i className={`burger-line ${menuOpen ? 'line-1-open' : ''}`} />
              <i className={`burger-line ${menuOpen ? 'line-2-open' : ''}`} />
              <i className={`burger-line ${menuOpen ? 'line-3-open' : ''}`} />
            </span>
          </button>
        </div>

        <div className={`mobile-menu md:hidden ${menuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="mt-3 grid gap-2 rounded-2xl border border-white/10 bg-[#140c08] p-3">
            {navItems.map(([label, href]) => (
              <a onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 font-black text-amber-100/75 no-underline" href={href} key={href}>{label}</a>
            ))}
            <a onClick={() => setMenuOpen(false)} href="#booking" className="rounded-xl bg-amber-400 px-4 py-3 text-center font-black text-[#211108] no-underline">Забронировать стол столик</a>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-16">
        <div className="rounded-[36px] border border-white/10 bg-white/[.07] p-5 shadow-2xl shadow-black/25 backdrop-blur sm:p-8 lg:p-10">
          <p className="text-xs font-black uppercase tracking-[.45em] text-amber-300">Ресторан восточной кухни</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[.92] tracking-tight text-white sm:text-7xl lg:text-8xl">Чайхана — место вкуса и тепла</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-100/72">Ароматный чай, блюда восточной кухни и уютная атмосфера для ваших лучших моментов.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#booking" className="rounded-2xl bg-amber-400 px-6 py-4 text-center font-black text-[#211108] no-underline">Забронировать стол столик</a>
            <a href="#menu" className="rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-center font-black text-amber-100 no-underline">Смотреть меню</a>
          </div>
        </div>

        <aside className="relative min-h-[520px] overflow-hidden rounded-[36px] border border-amber-200/15 bg-[#f7c56b] p-5 text-[#211108] shadow-2xl shadow-black/30 sm:p-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_24%,rgba(255,255,255,.62),transparent_24%),radial-gradient(circle_at_70%_72%,rgba(120,53,15,.24),transparent_30%)]" />
          <div className="relative z-10 flex items-center justify-between">
            <p className="text-xs font-black uppercase tracking-[.35em]">Фирменная подача</p>
            <span className="rounded-full bg-[#211108] px-3 py-1 text-xs font-black text-amber-200">demo</span>
          </div>
          <div className="relative z-10 mt-12 grid place-items-center">
            <div className="food-plate grid h-72 w-72 place-items-center rounded-full bg-[#fff4d6] shadow-2xl shadow-amber-950/30 sm:h-96 sm:w-96">
              <div className="grid h-52 w-52 place-items-center rounded-full bg-gradient-to-br from-orange-300 via-amber-300 to-yellow-100 text-7xl shadow-inner sm:h-72 sm:w-72 sm:text-8xl">🍛</div>
            </div>
          </div>
        </aside>
      </section>

      <section id="menu" className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.45em] text-amber-300">Меню</p>
        <h2 className="mt-3 text-4xl font-black text-white sm:text-6xl">Вкусы Востока</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map(([title, desc, price, icon]) => (
            <article className="dish-card rounded-[30px] border border-white/10 bg-white/[.07] p-5 shadow-xl shadow-black/20" key={title}>
              <div className="grid h-36 place-items-center rounded-[24px] bg-gradient-to-br from-amber-200/90 to-orange-700/30 text-6xl">{icon}</div>
              <h3 className="mt-5 text-2xl font-black text-white">{title}</h3>
              <p className="mt-3 min-h-[84px] text-sm leading-7 text-amber-100/65">{desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <b className="text-xl text-amber-300">{price}</b>
                <a href="#booking" className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-amber-100 no-underline">В бронь</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="atmosphere" className="relative z-10 mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.45em] text-amber-300">Атмосфера</p>
          <h2 className="mt-3 text-4xl font-black text-white sm:text-6xl">Традиции гостеприимства в каждом моменте</h2>
          <p className="mt-5 leading-8 text-amber-100/65">Чайхана — это не просто ресторан. Это место, где время замедляется, а каждое блюдо приготовлено с любовью и уважением к традициям восточной кухни.</p>
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
          <div className="grid gap-4 rounded-[28px] bg-white p-4 shadow-xl">
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="rounded-2xl border border-orange-100 bg-orange-50 px-4 py-4 font-bold outline-none" defaultValue="Анна" aria-label="Имя" />
              <input className="rounded-2xl border border-orange-100 bg-orange-50 px-4 py-4 font-bold outline-none" defaultValue="+7 ••• •••-••-••" aria-label="Телефон" />
            </div>
            <a href="tel:+70000000000" className="rounded-2xl bg-[#211108] px-6 py-4 text-center font-black text-amber-200 no-underline">Позвонить / оставить заявку</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
