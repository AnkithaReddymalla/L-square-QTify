/**
 * Truncate a string to a given length and add "..." if it exceeds that length.
 * @param {string} str - The string to truncate
 * @param {number} maxLength - Maximum allowed length
 * @returns {string} - Truncated string
 */
export const truncate = (str, maxLength) => {
    if (!str) return "";
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + "...";
  };
  