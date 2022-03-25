export function secondsToHms(elapsedSeconds) {
  const hours = Math.floor(elapsedSeconds / 3600)
  const minutes = Math.floor((elapsedSeconds % 3600) / 60)
  const seconds = Math.floor((elapsedSeconds % 3600) % 60)

  const pad = (value) => (value < 10 ? '0' + value : value)

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
}
