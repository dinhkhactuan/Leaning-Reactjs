export const enPoint = (value) => {
  const url = "https://69606493e7aa517cb795f700.mockapi.io/users";

  return `${url}${value ? `/${value}` : ""}`;
};