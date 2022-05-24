import React from "react";

const Loading = () => {
  return (
    <div class="flex h-screen items-center justify-center space-x-2 animate-pulse">
      <div class="w-8 h-8 bg-gray-400 rounded-full"></div>
      <div class="w-8 h-8 bg-gray-400 rounded-full"></div>
      <div class="w-8 h-8 bg-gray-400 rounded-full"></div>
    </div>
  );
};

export default Loading;
