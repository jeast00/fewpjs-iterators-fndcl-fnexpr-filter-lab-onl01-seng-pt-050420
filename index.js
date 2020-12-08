// Code your solution here

function findMatching(drivers, string) {
  return drivers.filter(match => 
    match.toLowerCase() === string.toLowerCase()
  )
}

function fuzzyMatch(drivers, string) {
  
}