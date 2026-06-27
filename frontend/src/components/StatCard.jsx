export default function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div
      className={`
        ${color}
        rounded-3xl
        shadow-xl
        p-8
        text-white
        transition-all
        duration-300
        hover:scale-[1.03]
        hover:shadow-2xl
      `}
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-lg opacity-90 font-medium">

            {title}

          </p>

          <h2 className="text-5xl font-bold mt-4">

            {value}

          </h2>

        </div>

        <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-4xl">

          {icon}

        </div>

      </div>

    </div>
  );
}