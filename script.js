var arrayTitulo=[];
var arrayUrl=[];


function Adicionar(){
  var titulo = document.getElementById("titulo").value;
  var url = document.getElementById("url").value;
  adicionarArray(titulo, url);
  mostrarPublicacao();
  document.getElementById("titulo").value="";
  document.getElementById("url").value="";
}


function adicionarArray(titulo,url){
  if(url =="" || titulo==""){
    alert("Preencha todos os campos!");
  }else if(url.endsWith(".jpg") || url.endsWith(".png") || url.endsWith(".jepg")){
  arrayTitulo.push(titulo);
  arrayUrl.push(url);
  }else{ 
    alert("Imagem invalida!"); 
  }
  
}

function mostrarPublicacao(){
 var post="";
  var publicacao = document.getElementById("publicacao");
  publicacao.innerHTML ="";
  for(var i=0;i<arrayTitulo.length; i++){
    post += '<div class="post"> <h1>'+arrayTitulo[i]+'</h1>'
    post+="<img src='"+arrayUrl[i]+"'/>"    
    post+="<button onClick='Excluir(" + i + ")'>🗑</button></div>";
  }
  publicacao.innerHTML = post;
  
}

function Limpar(){
  var publicacao = document.getElementById("publicacao");
  publicacao.innerHTML ="";
  arrayTitulo=[];
  arrayUrl=[];
}

function Excluir(i){
  arrayTitulo.splice(i, 1);
  arrayUrl.splice(i, 1);
  mostrarPublicacao();
  
}