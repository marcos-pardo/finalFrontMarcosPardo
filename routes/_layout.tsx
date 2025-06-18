import { FreshContext } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component}: PageProps) {
  // do something with state here
  return (
    <div class="layout">
        <div>
            <Header />
        </div>
      <Component />
    </div>
  );
}