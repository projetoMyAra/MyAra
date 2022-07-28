const nome = document.querySelector ('#nome') 

const nomeSocial = document.querySelector ('#nome-social') 

const email = document.querySelector ('#email')

const senha = document.querySelector ('#senha')

const cnpj = document.querySelector ('#cnpj')

const cpf = document.querySelector ('#cpf')

const areas = [] 
areas [0] = document.querySelector ('#rh')
areas [1] = document.querySelector ('#comercial')
areas [2] = document.querySelector ('#adm')
areas [3] = document.querySelector ('#operacional')
areas [4] = document.querySelector ('#seguranca')
areas [5] = document.querySelector ('#financeiro')
areas [6] = document.querySelector ('#almoxerifado')
areas [7] = document.querySelector ('#higienizacao')
areas [8] = document.querySelector ('#ti')

const cadastrar = document.querySelector ('#cadastrar')

cadastrar.addEventListener('click', cadastro)



class Funcionario{
    constructor(nome, nomeSocial, email, senha, cnpj, cpf, area){
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.email = email;
        this.senha = senha;
        this.cnpj = cnpj;
        this.cpf = cpf;
        this.area = area;
    }
}

// let teste = new Funcionario("Giovanna", "giovanna26gom@gmail.com", "12345", "156852563258", "3258974350", "ti")
// console.log (teste)

function cadastro (e) {
    // e.preventDefault();

    let areaEscolhida = areas.filter(area => {
        if (area.checked == true){
            return area
        }
    })

    let teste = areaEscolhida.map(area =>{
        return area.value
    })

    let funcionario = new Funcionario(
        nome.value , 
        nomeSocial.value ,
        email.value , 
        senha.value ,
        cnpj.value ,
        cpf.value ,
        teste [0] 
    )
    fetch('link', {
        method: "POST", 
        headers: {"Content-type": "application/json"},
        body: JSON.stringify (funcionario)
    })
}


// api de libras 

new window.VLibras.Widget('https://vlibras.gov.br/app');