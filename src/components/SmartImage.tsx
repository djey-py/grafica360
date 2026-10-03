import { useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fallbackLabel?: string;
  fallbackColor?: string;
}

export default function SmartImage({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  fallbackLabel,
  fallbackColor = '#2C6A03'
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div 
        className={`flex items-center justify-center ${className}`}
        style={{
          background: `linear-gradient(135deg, ${fallbackColor}, ${fallbackColor}dd, ${fallbackColor}88)`,
        }}
      >
        <div className="text-center p-4">
          {fallbackLabel && (
            <span className="text-white/80 text-sm font-medium">{fallbackLabel}</span>
          )}
        </div>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      loading={loading}
      onError={() => setHasError(true)}
    />
  );
}
