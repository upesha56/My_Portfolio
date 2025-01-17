function Progress({ name, value }) {
    return (
        <div className="mb-6">
            <div className="flex items-center justify-between mb-1">
                <h2 className="text-lg font-bold">{name}</h2>
            </div>

            <div className="relative w-full h-4 bg-gray-200 rounded-full">
                <div
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{
                        width: `${value}%`,
                        background: 'linear-gradient(to right, #5E46C8, #7c64f6, #a594f9)',
                    }}
                ></div>
            </div>
        </div>
    );
}

export default Progress;
