'use client';

export default function LumaSpinLoader({ size = 'default', className = '' }) {
  const sizeClasses = {
    small: 'w-8 h-8',
    default: 'w-16 h-16',
    large: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  const sizeClass = sizeClasses[size] || sizeClasses.default;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`relative ${sizeClass} aspect-square`}>
        <span className="absolute rounded-[50px] animate-loaderAnim shadow-[inset_0_0_0_3px] shadow-gray-800 dark:shadow-gray-100" />
        <span className="absolute rounded-[50px] animate-loaderAnim animation-delay shadow-[inset_0_0_0_3px] shadow-gray-800 dark:shadow-gray-100" />
        
        {/* CSS animations are defined in globals.css */}
      </div>
    </div>
  );
}
