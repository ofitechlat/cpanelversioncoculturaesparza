import { supabase } from '../supabaseClient'

export const useSupabase = () => {
  const fetchData = async (table: string) => {
    const { data, error } = await supabase
      .from(table)
      .select('*')
    
    if (error) throw error
    return data
  }

  const insertData = async (table: string, payload: any) => {
    const { data, error } = await supabase
      .from(table)
      .insert(payload)
    
    if (error) throw error
    return data
  }

  // Add authentication methods
  const signInWithEmail = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    
    if (error) throw error
    return data
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession()
    if (error) throw error
    return data.session
  }

  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser()
    if (error) throw error
    return data.user
  }

  return { 
    fetchData, 
    insertData,
    signInWithEmail,
    signOut,
    getSession,
    getUser
  }
}