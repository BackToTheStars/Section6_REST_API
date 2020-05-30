// In DNA strings, symbols "A" and "T" are complements of each other,
// as "C" and "G". You have function with one side of the DNA
// (string); you need to get the other complementary side.
// DNA strand is never empty or there is no DNA at all

function DNAStrand(str){
  let tempArray = str.split("").map(el => {
    switch (el) {
      case 'A': return 'T';
      case 'T': return 'A';
      case 'C': return 'G';
      case 'G': return 'C';
      case ' ': return ' ';
    }
  });

  // console.log(tempArray.join(""));
  return tempArray.join("");
}

// Хорошее решение

const pairs = {'A':'T','T':'A','C':'G','G':'C'};
function DNAStrand1(dna) {
  return dna.split('').map(function (v) {
    return pairs[v]
  }).join('');
}

console.log(DNAStrand("ATTGC")); // return "TAACG"
console.log(DNAStrand("GTAT")); // return "CATA"

console.log(DNAStrand1("ATTGC")); // return "TAACG"
console.log(DNAStrand1("GTAT"));  // return "CATA"

























