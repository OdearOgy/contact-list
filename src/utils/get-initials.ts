export const getInitials = (name: string) => {
  const n = name?.trim().split(" ");

  if (!n?.[0]) {
    return "";
  }

  let initials = n?.[0]?.[0];

  if (n.length > 1) {
    initials += n?.[1]?.[0];
  }

  return initials.toUpperCase();
};
