export const report = () => 'name components properly';
export const replace = () => ({
  'const __a = reatomComponent(__b)': ({__a}, path) => {
    return `const __a = reatomComponent(__b, '${__a.name}')`
  }
});
