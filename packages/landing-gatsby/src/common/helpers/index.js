function hexToRgba(hex, opacity = 1){
  var c;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
      c= hex.substring(1).split('');
      if(c.length === 3){
          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x'+c.join('');
      return `rgba(${[(c>>16)&255, (c>>8)&255, c&255].join(',')},${opacity})`;
  }
  throw new Error('Bad Hex');
}

function presaleStatus(starts, ends) {
  const now = new Date();

  if (now < starts) return [-1, 'start']
  else if (now >= starts && now <= ends) return [0, 'during']
  else return [1, 'end']
}

module.exports = {
  hexToRgba,
  presaleStatus
}