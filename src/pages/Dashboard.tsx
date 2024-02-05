import { Tabs, TabsList } from "@/components/ui/tabs";

import useStore from "@/lib/store";

import RedirectPageAuth from "@/pages/RedirectPageAuth";

import NavLink from "@/components/Header/NavLink";
import TabsMain from "@/components/Tabs/TabsMain";
import TabsInProgress from "@/components/Tabs/TabsInProgress";
import TabsFinished from "@/components/Tabs/TabsFinished";
import Nav from "@/components/Header/Nav";

export default function Dashboard() {
  const { token } = useStore();

  if (!token) {
    return <RedirectPageAuth />;
  }

  return (
    <section className="w-screen h-full p-4">
      <Nav />
      <Tabs defaultValue="projets">
        <TabsList className="grid grid-cols-3 w-[400px]">
          <NavLink value="projets" title="Projets" />
          <NavLink value="inprogress" title="En cours" />
          <NavLink value="finished" title="Terminés" />
        </TabsList>
        <TabsMain />
        <TabsInProgress />
        <TabsFinished />
      </Tabs>
    </section>
  );
}
