window.onload = function () {
    let estados = {
        'AC': 'Acre',
        'AL': 'Alagoas',
        'AP': 'Amapá',
        'AM': 'Amazonas',
        'BA': 'Bahia',
        'CE': 'Ceará',
        'DF': 'Distrito Federal',
        'ES': 'Espírito Santo',
        'GO': 'Goiás',
        'MA': 'Maranhão',
        'MT': 'Mato Grosso',
        'MS': 'Mato Grosso do Sul',
        'MG': 'Minas Gerais',
        'PA': 'Pará',
        'PB': 'Paraíba',
        'PR': 'Paraná',
        'PE': 'Pernambuco',
        'PI': 'Piauí',
        'RJ': 'Rio de Janeiro',
        'RN': 'Rio Grande do Norte',
        'RS': 'Rio Grande do Sul',
        'RO': 'Rondônia',
        'RR': 'Roraima',
        'SC': 'Santa Catarina',
        'SP': 'São Paulo',
        'SE': 'Sergipe',
        'TO': 'Tocantins'
    }
    let getListaEstados = document.getElementById('input-estado')
    for (let key in estados) {
        let opcao = document.createElement('option');
        opcao.setAttribute('value', key)
        opcao.innerText = estados[key];
        getListaEstados.appendChild(opcao);
    }
    // Verifica data
    document.getElementById('enviar').addEventListener('click', function (event) {
        event.preventDefault();
        let getInputData = document.getElementById('input-data').value;
        let data = getInputData.split(/\D+/)
        if (getInputData[2].includes('/') == false && getInputData[5].includes('/') == false){
            alert('Formato de data inválido');
        } else if (parseInt(data[0], 10) <= 0 || parseInt(data[0], 10) > 31) {
            alert('O dia inserido não está entre 0 e 31');
        } else if (parseInt(data[1], 10) <= 0 || parseInt(data[1], 10) > 12 ) {
            alert('O mês inserido não está entre 0 e 12');
        } else if (parseInt(data[2]), 10) {
            alert('Ano inserido não é válido');
        }
    })
    
 
}