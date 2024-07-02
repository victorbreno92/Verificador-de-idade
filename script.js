function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança homem.png')
            } else if (idade >= 10 && idade < 21) {
                //adolescente
                img.setAttribute('src', 'jovem homem.png')
            } else if (idade > 21 && idade < 50) {
                // adulto
                img.setAttribute('src', 'Homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança mulher.png')
            } else if (idade >= 10 && idade < 21) {
                //adolescente
                img.setAttribute('src', 'jovem mulher.png')
            } else if (idade > 21 && idade < 50) {
                // adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }

        res.innerHTML = `O genero é ${genero} e tem ${idade} anos!`
        res.appendChild(img)


    }

}





