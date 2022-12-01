var BuscarNome = document.getElementById("BuscarNome")
var BuscarBotao = document.getElementById("BuscarBotao")

var foto = document.getElementById("foto")
var NomeUsuario = document.getElementById("NomeUsuario")
var localizacao = document.getElementById("localizacao")
var bio = document.getElementById("bio")
var perfil = document.getElementById("perfil")

BuscarBotao.addEventListener("click", (event) => {
    event.preventDefault()
    var githubUser = BuscarNome.value 

    fetch (`https://api.github.com/users/${githubUser}`)
    .then ((response) => response.json())
    .then ((data) => {

        foto.setAttribute("src", data.avatar_url)
        NomeUsuario.innerText = data.name
        localizacao.innerText = data.location
        bio.innerText = data.bio
        perfil.setAttribute("href", data.html_url)
    })
})
