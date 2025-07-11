export default function TheChain() {
    const steps = [
      {
        title: 'Product is tagged',
        description: 'Each item is assigned a secure digital ID and anchored to the chain.'
      },
      {
        title: 'Transfer is logged',
        description: 'Every handoff is recorded immutably - a public record of provenance.'
      },
      {
        title: 'Scan to verify',
        description: 'Buyers or collectors can instantly verify authenticity with a tap or scan.'
      }
    ];
  
    return (
      <section
        id="chain"
        className="relative min-h-screen w-full flex items-center bg-white overflow-hidden"
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "url('/blankgrid.png')",
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto'
          }}
        />
  
        {/* Existing content preserved exactly */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-12">
            <div className="bg-white/90 rounded-3xl shadow-2xl border border-gray-200 p-8 sm:p-12 backdrop-blur-md">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-6">
                Proof at Every Step
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-center text-gray-700 font-medium mb-12 max-w-3xl mx-auto">
                Verify authenticity, every step of the way.

                </p>

                <div className="relative flex flex-col md:flex-row md:justify-between items-center gap-12 md:gap-6">
                <div className="hidden md:block absolute top-1/2 left-0 w-full border-t-4 border-[#6347f1]/30 z-0" />

                {steps.map((step, idx) => (
                    <div
                    key={idx}
                    className="relative z-10 flex-1 bg-white rounded-xl shadow-lg border border-[#ede9fe] p-6 sm:p-8 text-center flex flex-col items-center"
                    >
                    <div className="w-4 h-4 rounded-full bg-[#6347f1] mb-4 md:mb-6 border-2 border-white shadow" />
                    <h4 className="text-lg font-bold text-[#6347f1] mb-2">{step.title}</h4>
                    <p className="text-gray-700 text-sm">{step.description}</p>
                    {idx < steps.length - 1 && (
                        <div className="md:hidden w-1 h-10 bg-[#6347f1]/30 my-4"></div>
                    )}
                    </div>
                ))}
                </div>
            </div>
            </div>

      </section>
    );
  }
  
