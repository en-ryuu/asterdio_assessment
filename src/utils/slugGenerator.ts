export function generateSlug(name: string, uniqueId: number) {
  return `${encodeURI(name + "_" + uniqueId)}`;
}

export function decodeSlug(slug: string) {
  const decoded = decodeURIComponent(slug);
  return decoded?.split("_")[0];
}
