import React from 'react';

/**
 * Fallback component for disabled 3D canvases on mobile/low-end devices
 * Shows a static icon with a nice background
 */
const Canvas3DFallback = ({ icon, label = '' }) => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-[#fff8eb] to-[#f5f0e8] rounded-lg p-2'>
      <img
        src={icon}
        alt={label}
        className='w-12 h-12 object-contain drop-shadow-md'
      />
      {label && (
        <p className='mt-2 text-xs text-center text-gray-700 font-medium'>
          {label}
        </p>
      )}
    </div>
  );
};

export default Canvas3DFallback;
