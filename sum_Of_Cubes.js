function sum_Of_Cubes(n) {
    var sumn = 0;
  
    for (var i = 0; i <= n.length-1; i++) {
      sumn += Math.pow(n[i], 3);
    }
    return sumn == n;
  }
  
  console.log(sum_Of_Cubes('153'));