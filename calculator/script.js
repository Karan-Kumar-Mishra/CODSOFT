function setvalue(arg){
  document.getElementById('data').value += arg;
  if(arg==='clr')
  {
    document.getElementById('data').value=' '
  }

}
function calculator(){
  try {
    document.getElementById('data').value = eval(document.getElementById('data').value);
} catch (error) {
    document.getElementById('data').value = 'Error';
}
  
}
