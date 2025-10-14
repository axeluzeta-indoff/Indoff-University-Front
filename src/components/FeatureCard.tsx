interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] p-8 text-center">
      <h3 className="text-xl font-semibold mb-2" style={{ color: "#FF6600" }}>
        {title}
      </h3>
      <p className="text-gray-700 leading-6">{description}</p>
    </div>
  );
}
