export async function maybePromise<T>(func: () => Promise<T>, defaultValue: T) : Promise<T> {
  try {
    return await func();
  } catch (error) {
    console.error(`[client]: Error executing promise ${error}`);
    return defaultValue;
  }
}

