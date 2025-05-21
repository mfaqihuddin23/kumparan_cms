export const useEventInfo = async () => {
  const client = useSupabaseClient();
  const { data, error } = await client.from('event_info').select('*');
  return { data, error };
};
