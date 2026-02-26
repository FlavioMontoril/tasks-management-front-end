export function formatTimeSeconds(seconds: number): string {
    const isNegative = seconds < 0

    const absSeconds = Math.abs(seconds)

    const h = Math.floor(absSeconds / 3600)
    const m = Math.floor((absSeconds % 3600) / 60)
    const s = absSeconds % 60

    const formatted = [h, m, s]
        .map(unit => String(unit).padStart(2, "0"))
        .join(":")

    return isNegative ? `-${formatted}` : formatted
}