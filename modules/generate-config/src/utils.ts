export function stringify(value, indent = "") {
  if (typeof value === "object") {
    if (Array.isArray(value)) {
      return stringifyArray(value, indent);
    } else {
      return stringifyObject(value, indent);
    }
  } else {
    return JSON.stringify(value);
  }
}

export function stringifyArray(arr, indent = "") {
  let str = "[\n";
  for (let i = 0; i < arr.length; i++) {
    str += indent + "  " + stringify(arr[i], indent + "  ") + ",\n";
  }
  str = str.slice(0, -2) + "\n" + indent + "]";
  if (!arr.length) str = "[]";
  return str;
}

export function stringifyObject(obj, indent = "") {
  let str = "{\n";
  for (let key in obj) {
    str +=
      indent + "  " + key + ": " + stringify(obj[key], indent + "  ") + ",\n";
  }
  str = str.slice(0, -2) + "\n" + indent + "}";
  return str;
}


export function removeLeadingSlash(str: string): string {
  return str.replace(/^\//, '');
}