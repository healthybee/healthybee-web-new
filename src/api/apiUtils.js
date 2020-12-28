export async function handleResponse(res) {
  if (res.status === 200) return res;
  if (res.status === 201) return res;
  if (res.status === 204) return res;
  if (res.status === 409) return res;

  const error = await res.text();
  throw new Error(error);
}

export function handleError(err) {
  console.error("API call failed", err);
  throw err;
}
