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
