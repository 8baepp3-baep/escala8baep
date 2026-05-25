console.log('Sistema iniciado');

async function testarSupabase() {

    const { data, error } = await supabaseClient
        .from('policiais')
        .insert([
            {
                nome: 'TESTE SISTEMA',
                re: '123456',
                posto: 'CB PM',
                pelotao: '1º Pel Tático'
            }
        ])
        .select();

    if (error) {

        console.error('Erro Supabase:', error);

    } else {

        console.log('Registro inserido:', data);

    }
}

testarSupabase();

function verTela(idTela) {

    document
        .querySelectorAll('.page')
        .forEach(pagina => {

            pagina.classList.remove('active');

        });

    const tela = document.getElementById(idTela);

    if (tela) {

        tela.classList.add('active');

    }
}

function inicializarSistema() {

    console.log('Sistema inicializado');

}
function prepararLogin(tipo) {

    alert('Login em desenvolvimento: ' + tipo);

}
