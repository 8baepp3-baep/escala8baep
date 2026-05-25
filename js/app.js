// CONFIGURAÇÃO SUPABASE

const SUPABASE_URL = 'https://jnkpwwsygtrhoawzpncn.supabase.co';

const SUPABASE_KEY = 'SUA_CHAVE';

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log('Supabase conectado');
