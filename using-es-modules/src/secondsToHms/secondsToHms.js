export function secondsToHms(elapsedSeconds) {
  const hours = Math.floor(elapsedSeconds / 3600)
  const minutes = Math.floor((elapsedSeconds % 3600) / 60)
  const seconds = Math.floor((elapsedSeconds % 3600) % 60)
  const pad = (value) => String(value).padStart(2, '0')
  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
}
