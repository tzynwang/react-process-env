export default function isURL(val: unknown): boolean {
  try {
    const newVal = val as string
    new URL(newVal)
    return true
  } catch (error) {
    return false
  }
}