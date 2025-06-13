const BASE_API_URL = "https://api.celestials.id";

export type ResolverResponse = {
  addresses: ({
    address: string;
    status: "NOT_VERIFIED" | "VERIFIED" | "PRIMARY";
  } | null)[];
};

export async function resolveCelestial(
  id: string,
  chainId: string
): Promise<string | null> {
  const url = `${BASE_API_URL}/api/resolver/lookup`;

  const request = {
    celestial_chain: [
      {
        celestials_id: id,
        chain_id: chainId,
      },
    ],
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) return null;

  const data = (await response.json()) as ResolverResponse;

  const primaryAddress = data.addresses.find(
    (address) => address?.status === "PRIMARY"
  );
  const firstAddress = data.addresses.at(0);

  if (primaryAddress) return primaryAddress.address;

  if (!firstAddress) return null;
  if (firstAddress.status !== "VERIFIED") return null;

  return firstAddress.address;
}
