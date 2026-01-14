export default function StatCard({
    title,
    value,
  }: {
    title: string;
    value: string;
  }) {
    return (
      <div className="bg-black/40 rounded-xl p-6 text-center backdrop-blur">
        <p className="text-sm uppercase tracking-wide text-gray-300">
          {title}
        </p>
        <p className="text-3xl font-bold mt-2 text-white">
          {value}
        </p>
      </div>
    );
  }
  