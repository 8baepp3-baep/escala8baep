// CONFIGURAÇÃO SUPABASE

const SUPABASE_URL = 'https://jnkpwwsygtrhoawzpncn.supabase.co';

const SUPABASE_KEY = 'sb_publishable_ZiKlgiORKDvfTWRBj2T_2Q_WDcdBqaJ';

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log('Supabase conectado');
