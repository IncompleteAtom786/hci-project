
export const useModel = (modelKey) => {
  const fetchModel = async () => {
    try {
      const response = await fetch(`https://your-bucket-name.s3.amazonaws.com/models/${modelKey}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const modelData = await response.blob(); // Get the model data as a blob
      return modelData;
    } catch (error) {
      console.error('Failed to fetch model:', error);
      throw error;
    }
  };

  return fetchModel;
};
