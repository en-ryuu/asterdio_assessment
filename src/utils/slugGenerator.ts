export function generateSlug(name: string, uniqueId: number) {
  return `${encodeURI(name + "_" + uniqueId)}`;
}

export function decodeSlug(slug: string, returnId: true): string[];
export function decodeSlug(slug: string, returnId?: false): string;
export function decodeSlug(
  slug: string,
  returnId: boolean = false
): string | string[] {
  const decoded = decodeURIComponent(slug);
  return returnId ? decoded.split("_") : decoded.split("_")[0];
}
