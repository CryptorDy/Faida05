import React from 'react';

interface ResultCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  primary?: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({ 
  title, 
  value, 
  description, 
  icon,
  primary = false 
}) => {
  return (
    <div className={`rounded-xl p-6 shadow ${primary ? 'bg-[#4A56E2]' : 'bg-white'} hover:shadow-md transition-shadow`}>
      <div className="flex items-start">
        <div className={`p-2 rounded-full mr-4 ${primary ? 'bg-[#4F5AE5]/50' : 'bg-[#F0F1FF]'}`}>
          <div className={primary ? 'text-white' : 'text-[#4A56E2]'}>
            {icon}
          </div>
        </div>
        <div>
          <h3 className={`text-sm font-medium ${primary ? 'text-white/80' : 'text-[#64748B]'}`}>
            {title}
          </h3>
          <div className={`text-2xl font-bold mt-1 ${primary ? 'text-white' : 'text-[#1E293B]'}`}>{value}</div>
          <p className={`text-sm mt-1 ${primary ? 'text-white/80' : 'text-[#64748B]'}`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
