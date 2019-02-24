export default function set(arr, idx, value) {
  if (idx < 0 || idx >= arr.length) {
    console.error("HEY ERROR!");
    return;
  }

  return [
    ...arr.slice(0, idx),
    value,
    ...arr.slice(idx + 1),
  ];
}
