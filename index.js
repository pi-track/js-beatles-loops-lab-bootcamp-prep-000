function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i<musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}


function johnLennonFacts(facts) {
  console.log(facts.length
  for (let i = 0; i < 5; i++){
    facts.splice(i,0,facts[i] + "!!!")
    console.log(i)
  }
  return facts
}
