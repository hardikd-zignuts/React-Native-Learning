export function addOpacityToHexColor(hexColor: string, opacity = 0.5) {
  // Check if the hexColor is a valid hex color code
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  if (!hexRegex.test(hexColor)) {
    throw new Error('Invalid hex color code');
  }

  // Convert the hex color to RGB
  const hex = hexColor.replace(/^#/, '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Calculate the rgba value with the specified opacity
  const rgbaColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;

  return rgbaColor;
}
