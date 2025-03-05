import { useEffect, useState } from 'react';

export default function StatsSection() {
  const [animate, setAnimate] = useState(false);
  const stats = [
    { id: 1, name: "Stat 1", value: "100+" },
    { id: 2, name: "Stat 2", value: "24/7" },
    { id: 3, name: "Stat 3", value: "100K+" }
  ]; // Add this if stats array is not defined

  useEffect(() => {
    // Start animation when component mounts
    setAnimate(true);

    // Reset animation every 5 seconds
    const interval = setInterval(() => {
      setAnimate(false);
      // Small delay before starting next animation
      setTimeout(() => setAnimate(true), 50); // Reduced delay to 50ms
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`mx-auto flex max-w-xs flex-col gap-y-4 ${
                animate ? 'balloon-animation' : ''
              }`}
              style={{ transition: 'all 0.3s ease-in-out' }} // Add transition
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
} 