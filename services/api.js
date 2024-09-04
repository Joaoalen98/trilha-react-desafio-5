import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://nmuqissimzuovfnelusq.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tdXFpc3NpbXp1b3ZmbmVsdXNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0MDkwNDUsImV4cCI6MjA0MDk4NTA0NX0.jaInubdmUossjq4ZULF1JUKm_kA3J_nLx2JEggibhso",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tdXFpc3NpbXp1b3ZmbmVsdXNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0MDkwNDUsImV4cCI6MjA0MDk4NTA0NX0.jaInubdmUossjq4ZULF1JUKm_kA3J_nLx2JEggibhso"
    }
})