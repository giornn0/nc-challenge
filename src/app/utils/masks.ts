export const ssnMask= (event: any,)=>{
  var v = event.target.value;
  if (v.match(/^\d{3}$/) !== null) {
    event.target.value += "-";
  } else if (v.match(/^\d{3}\-\d{2}$/) !== null) {
    event.target.value = v + "-";
  }
}