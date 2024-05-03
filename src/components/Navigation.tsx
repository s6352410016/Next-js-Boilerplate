"use client";

import { useRoutes } from "hooks/useRoutes";
import NavigationItem from "./NavigationItem";

const Navigation = () => {
  const routes = useRoutes();

  return (
    <div className="gap-x-4 max-w-[1700px] flex justify-center md:gap-x-3 mx-auto mt-5">
      {routes.map((route) => (
        <NavigationItem
          key={route.label}
          icon={route.icon}
          label={route.label}
          href={route.href}
          active={route.active}
        />
      ))}
    </div>
  );
}

export default Navigation;