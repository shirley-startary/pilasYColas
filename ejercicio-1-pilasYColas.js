var nombres=[];

function Stack(){
  var elemento=[];

  this.add=add;
  this.pop=pop;


  function add(elem){
    return elemento.push(elem);
  }
  function pop(elem){
    return elemento.pop(elem);
  }

  function mostrar(){

  }
}

var nombre=new Stack();
var apellido=new Stack();
nombre.add("shirley");
nombre.add("silvana");
apellido.add("suarez");
apellido.add("startary");

for(var i=0;i<3;i++){
  nombres.push(nombre.pop(i)+" "+apellido.pop(i));
  console.log(nombres);
}

document.write(nombres);
