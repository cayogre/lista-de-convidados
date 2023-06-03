convidado=[];
function submit(){
    var nome1=document.getElementById("nomeDoConvidado1").value;
    var nome2=document.getElementById("nomeDoConvidado2").value;
    var nome3=document.getElementById("nomeDoConvidado3").value;
    var nome4=document.getElementById("nomeDoConvidado4").value;

    convidado.push(nome1);
    convidado.push(nome2);
    convidado.push(nome3);
    convidado.push(nome4);
    document.getElementById("display").innerHTML=estudante;
    document.getElementById("enviar").style.display="none";
    document.getElementById("organizar").style.display="inline-block";
}
function organizar(){
    estudante.sort();
    document.getElementById("display").innerHTML=estudante;
}