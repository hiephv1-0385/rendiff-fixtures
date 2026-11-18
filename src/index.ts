export function greet(name: string, excited = false): string {
  return excited ? `Hello, ${name}!` : `Hello, ${name}`;
}
