export function fetchQuote() {
  return fetch("https://talaikis.com/api/quotes/random/")
    .then(res => res.json())
}