export const capitalize = (str: string): string => {
  return str
    .split(/(?=[A-Z])/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const formatDate = (dateString: string): string => {
  if (!dateString) return 'Present';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short' 
  });
};

export const isArray = (value: any): boolean => {
  return Array.isArray(value);
};

export const isObject = (value: any): boolean => {
  return typeof value === 'object' && value !== null && !isArray(value);
};

export const isPrimitive = (value: any): boolean => {
  return typeof value !== 'object' || value === null;
};
