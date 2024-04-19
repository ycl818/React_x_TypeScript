export async function get(url: string){
  const response = await fetch(url)

  if(!response.ok){
    throw new Error(`Failed to fetch data! status: ${response.status}`);
  }

  const data = await response.json() as unknown;
  return data;
}