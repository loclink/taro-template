export function toCamelCase(str: string, capitalizeFirstLetter = false) {
  let result = "";
  if (str.includes("-")) {
    result = str
      .toLowerCase()
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  } else {
    result = str;
  }
  if (!capitalizeFirstLetter) {
    result = result.charAt(0).toLowerCase() + result.slice(1);
  } else {
    result = result.charAt(0).toUpperCase() + result.slice(1);
  }
  return result;
}

export function validPath(str: string): boolean {
  const regex = /^[a-zA-Z\-\/][a-zA-Z0-9\-\/]*$/;
  return regex.test(str);
}
