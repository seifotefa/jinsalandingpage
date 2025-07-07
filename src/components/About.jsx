export default function About() {
    const useCases = [
      {
        title: 'Limited Drops',
        description: 'Make every release verifiable, ownable, collectible.'
      },
      {
        title: 'High-Value Goods',
        description: 'Luxury with proof, resale with confidence.'
      },
      {
        title: 'Retail to Resale',
        description: 'Buy, sell, and trade with certainty.'
      },
      {
        title: 'Peer-to-Peer',
        description: 'Trust in every transaction. No middleman required.'
      }
    ]
  
    return (
        <section
        id="about"
        className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white via-[#f3f0fa] to-[#e7e3f9] py-16 sm:py-24"
      >
        <div className="max-w-5xl w-full px-4 sm:px-6">
          <div className="bg-white/95 rounded-2xl shadow-xl border border-[#e0dbf7] p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
              Authenticity, Reimagined.
            </h2>
            <p className="text-lg sm:text-xl text-gray-800 font-medium mb-4 max-w-3xl mx-auto">
              Jinsa transforms products into verifiable originals.
            </p>
            <p className="text-lg sm:text-xl text-gray-800 font-medium mb-8 max-w-3xl mx-auto">
              From limited drops to digital twins, authenticity is no longer a promise, it's a protocol.
            </p>
      
            <div className="bg-[#f3f0fa] rounded-xl p-6 sm:p-8 md:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                Proof in Action
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {useCases.map((useCase, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow-md border border-[#ede9fe] p-5 sm:p-6 text-left transition hover:shadow-lg"
                  >
                    <h4 className="text-lg font-semibold text-[#6347f1] mb-2">
                      {useCase.title}
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
  