// CONFIGURAÇÃO SUPABASE

const SUPABASE_URL = 'SUA_URL_SUPABASE';
const SUPABASE_KEY = 'SUA_CHAVE_PUBLICA';

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log('Supabase conectado');
