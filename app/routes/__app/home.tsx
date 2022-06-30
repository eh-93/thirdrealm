import type { LoaderFunction } from "@remix-run/node";
import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import WalletHero from "~/components/Wallet/WalletHero";
import { getSpaces } from "~/models/spaces.server";
import { requireUser } from "~/session.server";
import { type SpaceWithCollection } from "~/types";
import { useUser } from "~/utils";
import { truncateString } from "~/utils/strings";

// Get wallet NFTs
// Render spaces the user is a member of
// Render spaces the user can join
// Add info to guide users
// Proper loading state

export const loader: LoaderFunction = async ({ request }) => {
  await requireUser(request);
  const spaces = await getSpaces();
  return spaces;
};

export default function () {
  const data = useLoaderData();
  const user = useUser();
  const walletFetcher = useFetcher();
  useEffect(() => {
    walletFetcher.load("/api/wallet?address=" + user.address);
  }, [user.address]);

  const walletData = walletFetcher.data;
  const loading =
    walletFetcher.state != "idle" || walletFetcher.data == undefined;

  return (
    <div>
      <WalletHero
        loading={loading}
        address={user.address}
        ens={walletData?.ens}
        nftCount={walletData?.nftCount}
      />
      {/* <NftGrid loading={loading} nfts={walletData?.nfts} /> */}
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {data.map((space: SpaceWithCollection) => (
            <Link to={`/spaces/${space.id}`} key={space.id}>
              <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                <div className="aspect-w-3 aspect-h-3 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                  <img
                    src={space.collection.coverImage}
                    alt={space.collection.name}
                    className="h-full w-full object-contain sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <h3 className="text-xl text-gray-900">
                      {space.collection.name}
                    </h3>
                    {
                      {
                        ethereum: (
                          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                            ETH
                          </span>
                        ),
                        polygon: (
                          <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                            POLYGON
                          </span>
                        ),
                        unknown: <></>,
                      }[space.collection.network]
                    }
                  </div>
                  <p className="text-bold h-20 text-center text-sm">
                    {truncateString(space.collection.description, 100)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}