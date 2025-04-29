import type { OnNameLookupHandler } from "@metamask/snaps-sdk";
import { resolveCelestial } from "./utils";

/**
 * Handle incoming name lookup requests from the MetaMask clients.
 *
 * @param request - The request arguments.
 * @param request.domain - The domain to resolve. Will be undefined if an address is provided.
 * @param request.address - The address to resolve. Will be undefined if a domain is provided.
 * @param request.chainId - The CAIP-2 chain ID of the associated network.
 * @returns If successful, an object containing the resolvedDomain or resolvedAddress. Null otherwise.
 * @see https://docs.metamask.io/snaps/reference/exports/#onnamelookup
 */
export const onNameLookup: OnNameLookupHandler = async (request) => {
  const { chainId, domain } = request;

  if (!domain) return null;

  const resolvedAddress = await resolveCelestial(domain, chainId);

  if (!resolvedAddress) return null;

  return {
    resolvedAddresses: [
      { resolvedAddress, protocol: `Celestials`, domainName: domain },
    ],
  };
};
