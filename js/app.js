console.log('Sistema iniciado');

async function testarSupabase() {

    const { data, error } = await supabaseClient
        .from('policiais')
        .select('*');

    if (error) {

        console.error('Erro Supabase:', error);

    } else {

        console.log('Conectado ao Supabase:', data);

    }
}

testarSupabase();
