
export function assert(test: boolean, errorMsg: string): asserts test {
  if (!test) {
    throw new Error(errorMsg ? errorMsg : "Bug: assertion failed");
  }
}

/**
 * Wait a bit and then continue.
 * e.g. await wait(1);
 * @param seconds   Time to wait in seconds
 */
export async function wait(seconds: number) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

/**
 * Removes the first occurance of `item` from `array`
 * @param array to be modified. Will be modified in-place.
 * @param item to be removed
 */
export function arrayRemove<T>(array: Array<T>, item: T) {
  let pos = array.indexOf(item);
  if (pos != -1) {
    array.splice(pos, 1);
  }
}

/**
 * Removes all occurences of `item` from `array`
 * @param array to be modified. Will be modified in-place.
 * @param item to be removed
 */
export function arrayRemoveAll<T>(array: Array<T>, item: T) {
  let pos = -1;
  while ((pos = array.indexOf(item, pos)) != -1) {
    array.splice(pos, 1);
  }
}

/**
 * 3-way plural form for 0, 1 and >1. Picks the corresponding UI string.
 * Also replaces %COUNT% with the number.
 *
 * @param count {integer}
 * @param str a;b;c
 * @return
 *   if count = 0, use a
 *   if count = 1, use b
 *   if count > 1, use c
 */
export function pluralform(count: number, str: string): string {
  var sp = str.split(";");
  assert(sp.length == 3, "pluralform: expected 3 parts in str: " + str);
  var index;
  if (count == 0) {
    index = 0;
  } else if (count == 1) {
    index = 1;
  } else {
    index = 2;
  }
  return sp[index].replace("%COUNT%", count);
}
