// Grasshopper - Grade book

function getGrade(s1, s2, s3) {
    return (s1 + s2 + s3) / 3 >= 90 ? 'A' : (s1 + s2 + s3) / 3 >= 80 ? 'B' : (s1 + s2 + s3) / 3 >= 70 ? 'C' : (s1 + s2 + s3) / 3 >= 60 ? 'D' : 'F';
}