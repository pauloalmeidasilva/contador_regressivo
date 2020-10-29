function elemento(tagName, className, value) {
  const elem = document.createElement(tagName)
  elem.className = className
  elem.innerHTML = value
  return elem
}

function converteData(data, hora) {
  let dataArray = data.split('/')
  return dataArray[2]+'-'+dataArray[1]+'-'+dataArray[0]+'T'+hora
}

function Contador(opcoes) {
  const agora = new Date()
  const object1 = {
    seletor: 'contador',
    message: "Em Breve",
    date: agora.getDate()+'/'+(agora.getMonth()+1)+'/'+agora.getFullYear(),
    time: "23:59:59"
  }

  const opcoesFinais = Object.assign(object1, opcoes)

  const dia = elemento('span', 'digito', '00')
  const hora = elemento('span', 'digito', '00')
  const minuto = elemento('span', 'digito', '00')
  const segundo = elemento('span', 'digito', '00')
  const separadorDia = elemento('span', 'separador', ':')
  const separadorHora = elemento('span', 'separador', ':')
  const separadorMinuto = elemento('span', 'separador', ':')
  const mensagem = elemento('div', 'mensagem', opcoesFinais.message)
  const container = document.getElementById(opcoesFinais.seletor)

  container.appendChild(dia)
  container.appendChild(separadorDia)
  container.appendChild(hora)
  container.appendChild(separadorHora)
  container.appendChild(minuto)
  container.appendChild(separadorMinuto)
  container.appendChild(segundo)
  container.appendChild(mensagem)

  const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
  const horarioAlvo = regex.exec(opcoesFinais.time)

  this.iniciar = () => {
    let temporizador = setInterval(() => {
      const agora = new Date()
      const alvo = new Date(converteData(opcoesFinais.date, opcoesFinais.time))

      const diferencaEmMili = alvo.getTime() - agora.getTime()
      if (diferencaEmMili >= 0) {
        var dias = Math.ceil(diferencaEmMili / (1000 * 3600 * 24)); 
        const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())

        dia.innerHTML = ("000" + dias).slice(-3)
        hora.innerHTML = diferenca[1]
        minuto.innerHTML = diferenca[2]
        segundo.innerHTML = diferenca[3]
      } else {
        clearInterval(temporizador)
      }
    }, 1000)
  }
}