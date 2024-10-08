    class Usuario{
        constructor(nombre,apellido,altura,peso ){
            this.nombre=nombre;
            this.apellido=apellido;
            this.altura=altura;
            this.peso=peso;
        }
        calcularImc(){
            try{
                let imc=this.peso/(this.altura**2);
                return parseFloat(imc.toFixed(2));
            }
            catch(error){
                return alert("No se pudo calcular el IMC")
            }
        }
        calcularAgua(){
            let aguaRecomendada=parseFloat((this.peso*35/1000).toFixed(2));
            return aguaRecomendada;
        }
        estadoSalud(imc){
            if(imc<18.5){return "Bajo peso" }
            else if(imc>18.5 && imc<=24.9){ return "Peso Normal"}
            else if (imc>=25 && imc<29  ){return "Sobrepeso"}
            else{return "Obesidad"}
        }
        mostrarInformacion(){
            const imc = this.calcularImc();
            const estadoSalud = this.estadoSalud(imc);
            const agua = this.calcularAgua();
            return `Su IMC es ${imc} usted se encuentra en ${estadoSalud}, la cantidad de agua que le recomendamos que tome  es de  ${agua}L diarias `
        }
    }
    function main(){
        const nombres=document.getElementById('nombres').value;
        const apellidos=document.getElementById('apellido').value;
        const altura= parseFloat(document.getElementById('altura').value);
        const peso=parseFloat(document.getElementById('peso').value);
        const resultado=document.getElementById('resultado');
        if(nombres && apellidos && !isNaN(altura) && !isNaN(peso)){
            const usuario= new Usuario(nombres,apellidos,altura,peso);
            resultado.textContent=usuario.mostrarInformacion();
            document.getElementById('nombres').value = "";
            document.getElementById('apellido').value = "";
            document.getElementById('altura').value = "";
            document.getElementById('peso').value = "";
        }
        else{
            alert("Por favor ingrese todos los datos");
        }
        
    }