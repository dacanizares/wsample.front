export function checkRequiredString(str: string): boolean {
  if (!str || str.length === 0 || str.trim().length === 0) {
    return false;
  } else {
    return true;
  }
}

export function cleanOptionalString(str: string | null): string | null {
  if (!str || str.length === 0 || str.trim().length === 0) {
    return null;
  } else {
    return '';
  }
}
