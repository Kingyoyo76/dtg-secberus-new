export function ResultsThatMatter() {
  return (
    <section className="py-20 bg-purple-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Results That Matter
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">70%</div>
            <p className="text-xl">Average time saved per audit</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">$500k+</div>
            <p className="text-xl">Typical compliance fines avoided</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">12+</div>
            <p className="text-xl">Blind spots detected per organization</p>
          </div>
        </div>
      </div>
    </section>
  )
}

