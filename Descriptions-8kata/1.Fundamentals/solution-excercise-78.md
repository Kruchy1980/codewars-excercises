# DNA to RNA Conversion

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

DNAtoRNA("GCAT") returns ("GCAU")
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

### Solution

function DNAtoRNA(dna) {

##### Simply replace T for U see that T is declared as regEx - which is needed to replace all the letters for other in one string if there are. By raplacing just letter for leltter without using regEx there will be replaced only first such a letter of the string.

    return dna.replace(/[T]/g, 'U');

}
