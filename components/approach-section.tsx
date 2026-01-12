const principles = [
  {
    number: "01",
    title: "Индивидуальный подход",
    description:
      "Каждое дело уникально. Мы разрабатываем персональную стратегию, учитывая все особенности вашей ситуации.",
  },
  {
    number: "02",
    title: "Полная конфиденциальность",
    description: "Все сведения о клиентах и их делах защищены адвокатской тайной. Ваша информация в безопасности.",
  },
  {
    number: "03",
    title: "Прозрачность работы",
    description: "Мы информируем клиентов о каждом этапе работы, открыто обсуждаем риски и перспективы дела.",
  },
  {
    number: "04",
    title: "Результат как цель",
    description: "Наша задача — не процесс ради процесса, а достижение конкретного результата в интересах клиента.",
  },
]

export function ApproachSection() {
  return (
    <section id="approach" className="py-24 bg-[#222222]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Наш подход</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="border border-[#333333] p-8 hover:border-[#555555] transition-colors duration-200"
            >
              <span className="text-sm text-[#555555] font-mono">{principle.number}</span>
              <h3 className="text-xl font-semibold text-white mt-2 mb-4">{principle.title}</h3>
              <p className="text-[#888888] leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
