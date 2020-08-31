import { useState } from "react";

export const useLoadStatus = () => {
  const [isLoad, setIsLoad] = useState(null);

  const onSuccess = () => {
    setIsLoad(true);
  };

  const onError = () => {
    setIsLoad(false);
  }

  return {
    isLoad,
    onSuccess,
    onError
  }
};