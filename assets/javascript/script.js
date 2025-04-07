let mes_ext = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
let sema = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];

function Exibir()
{
    rep = setInterval('Repetir()',1000);
}

function Repetir()
{
    let hoje = new Date();
    let dia = hoje.getDate();

    if(dia < 10)
    {
        dia = '0' + dia;
    }

    let mes = hoje.getMonth();
    mes++;

    if (mes < 10)
    {
        mes = '0' + mes;
    }

    var ano = hoje.getFullYear();
    let hora = hoje.getHours();

    if(hora < 10)
    {
        hora = '0' + hora;
    }

    var minu = hoje.getMinutes();

    if (minu < 10)
    {
        minu = '0' + minu;
    }

    var seg = hoje.getSeconds();

    if(seg < 10)
    {
        seg = '0' + seg;
    }

    var sm = hoje.getDay();

    document.getElementById('dia').value = dia;
    document.getElementById('mes').value = mes;
    document.getElementById('ano').value = ano;
    document.getElementById('mesext').value = mes_ext[mes-1];
    document.getElementById('hora').value = hora;
    document.getElementById('min').value = minu;
    document.getElementById('seg').value = seg;
    document.getElementById('sema').value = sema[sm];

}

function Parar()
{
    clearInterval(rep);
}
