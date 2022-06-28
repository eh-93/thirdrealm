import { json, redirect, type LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { checkSpaceMembership } from "~/models/spaces.server";
import { getWallet } from "~/models/wallet.server";
import { requireUser } from "~/session.server";
import { SpaceWithCollection, WalletWithMemberships } from "~/types";

type LoaderData = { wallet: WalletWithMemberships; space: SpaceWithCollection };

export const loader: LoaderFunction = async ({ request, params }) => {
  invariant(params.id, "params.id is required");
  const user = await requireUser(request);
  const isAllowed = await checkSpaceMembership(params.id, user.id);
  if (!isAllowed) {
    return redirect(`/spaces/${params.id}/forbidden`);
  }
  const walletAndMemberships = await getWallet(user.id, true);
  const currentSpace = walletAndMemberships?.memberships.find(
    (m) => m.spaceId === params.id
  )?.space;
  console.log(currentSpace);
  return json({ wallet: walletAndMemberships, space: currentSpace });
};

export default function Space() {
  const data = useLoaderData<LoaderData>();
  return (
    <div className="py-10">
      <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-screen-2xl	 lg:grid-cols-12 lg:gap-8">
        <div className="hidden lg:col-span-4 lg:block xl:col-span-2">
          <nav
            aria-label="Sidebar"
            className="sticky top-4 divide-y divide-gray-300"
          >
            <div>
              <p
                className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-500"
                id="communities-headline"
              >
                My Spaces
              </p>
              {data.wallet.memberships.map((membership) => (
                <Link
                  to={`/space/${membership.space.id}/feed`}
                  className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  key={membership.space.id}
                >
                  <span className="truncate">
                    {membership.space.collection.name}
                  </span>
                </Link>
              ))}
              <div
                className="mt-3 space-y-2"
                aria-labelledby="communities-headline"
              ></div>
            </div>
          </nav>
        </div>
        <main className="lg:col-span-8 xl:col-span-6">
          <Outlet />
        </main>
        <aside className="hidden xl:col-span-4 xl:block">
          <div className="sticky top-4 space-y-4">
            <section aria-labelledby="who-to-follow-heading">
              <div className="rounded-lg bg-white shadow">
                <div className="p-6">
                  <h2
                    id="who-to-follow-heading"
                    className="text-base font-medium text-gray-900"
                  >
                    {data.space.collection.name}
                  </h2>
                  <div className="mt-6 flow-root">
                    <ul role="list" className="-my-4 divide-y divide-gray-200">
                      <li className="flex items-center  py-4">
                        <div className="flex-shrink-0"></div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            <a href="#">{}</a>
                          </p>
                          <p className="text-sm text-gray-500">
                            {data.space.collection.description}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </aside>
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  if (process.env.NODE_ENV === "development") {
    console.log(error.stack);
  }
  return (
    <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
          <a href="/" className="inline-flex">
            <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Something went wrong!
            </h1>
            <p className="mt-2 text-base text-gray-500">{error.message}</p>
            <p className="mt-2 text-base text-gray-500">{error.stack}</p>
            {process.env.NODE_ENV === "development" ? (
              <p className="mt-2 text-base text-gray-500">{error.stack}</p>
            ) : null}
            <div className="mt-6">
              <Link
                to="/home"
                className="text-base font-medium text-indigo-600 hover:text-indigo-500"
              >
                Spaces<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
