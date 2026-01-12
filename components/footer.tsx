export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-black border-t border-[#222222]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#555555]">© {currentYear} Granite of Law. Все права защищены.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-[#555555] hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-[#555555] hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
