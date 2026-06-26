import { MapPin, Calendar, Gauge } from "lucide-react";

interface MotorProps {
  motor: {
    name: string;
    price: string;
    year: string;
    km: string;
    location: string;
    image: string;
    condition: string;
  };
}

export default function MotorCard({ motor }: MotorProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="relative">
        <span className="absolute top-2 left-2 bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded">
          {motor.condition}
        </span>
        <img src={motor.image} alt={motor.name} className="w-full h-48 object-cover rounded-xl" />
      </div>
      <div className="mt-4">
        <h3 className="font-bold text-lg">{motor.name}</h3>
        <p className="text-blue-600 font-bold text-xl my-2">{motor.price}</p>
        <div className="flex gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1"><Calendar size={14} /> {motor.year}</span>
          <span className="flex items-center gap-1"><Gauge size={14} /> {motor.km}</span>
        </div>
        <p className="flex items-center gap-1 text-sm text-gray-400 mt-2"><MapPin size={14} /> {motor.location}</p>
      </div>
    </div>
  );
}