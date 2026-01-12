const expertiseAreas = [
  "Корпоративное право",
  "Договорное право",
  "Недвижимость",
  "Трудовое право",
  "Интеллектуальная собственность",
  "Налоговое право",
  "Банкротство",
  "Арбитражные споры",
  "Семейное право",
  "Наследственное право",
  "Защита в суде",
  "Медиация",
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 bg-[#eeeeee]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-16 text-center">Сфера компетенции</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {expertiseAreas.map((area) => (
            <div
              key={area}
              className="bg-white p-6 text-center hover:bg-[#111111] hover:text-white transition-colors duration-200 group"
            >
              <span className="text-sm md:text-base font-medium">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
