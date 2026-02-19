interface Step {
    title: string;
    description?: string;
}

interface StepsProps {
    steps: Step[];
    title?: string;
}

export function Steps({ steps, title }: StepsProps) {
    return (
        <div className="py-8">
            {title && <h3 className="text-2xl font-bold mb-8 text-navy">{title}</h3>}
            <div className="space-y-6">
                {steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 sm:gap-6">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy text-white font-bold text-lg sm:text-xl shadow-md">
                                {idx + 1}
                            </div>
                        </div>
                        {/* Connector Line (except for last item) */}
                        {idx !== steps.length - 1 && (
                            <div className="absolute left-[2.25rem] sm:left-[2.5rem] top-12 bottom-0 w-0.5 bg-gray-200 -z-10 h-full max-h-[calc(100%+24px)]" style={{ display: 'none' }} />
                            // Note: Vertical line implementation can be tricky with flex gap. simpler manual line:
                        )}

                        <div className="pt-1 pb-6">
                            <h4 className="text-xl font-bold text-navy mb-2">{step.title}</h4>
                            {step.description && (
                                <p className="text-gray-600 leading-relaxed max-w-2xl">
                                    {step.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
