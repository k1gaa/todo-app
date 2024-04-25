export function tasksCount(tasks) {
  switch (true) {
    case tasks > 1:
      return `${tasks} tasks left`;
    case tasks === 1:
      return `${tasks} task left`;
    default:
      return "none tasks left";
  }
}
