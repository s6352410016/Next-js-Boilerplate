import { useMemo } from "react";
import { Home, Newspaper, ThumbsUp, Star, Compass } from 'lucide-react';
import { useParams, usePathname } from "next/navigation";

export const useRoutes = () => {
  const pathname = usePathname();
  const params = useParams();

  const routes = useMemo(() => [
    {
      icon: Home,
      label: "หน้าแรก",
      href: `/${params?.locale}`,
      active: pathname === `/${params?.locale}`
    },
    {
      icon: Newspaper,
      label: "My Feed",
      href: "/home/feed",
      active: pathname === `/${params?.locale}/home/feed`
    },
    {
      icon: ThumbsUp,
      label: "Pantip Pick",
      href: "/home/pick",
      active: pathname === `/${params?.locale}/home/pick`
    },
    {
      icon: Star,
      label: "Pantip Hitz",
      href: "/home/hitz",
      active: pathname === `/${params?.locale}/home/hitz`
    },
    {
      icon: Compass,
      label: "Explore",
      href: "/home/communities",
      active: pathname === `/${params?.locale}/home/communities`
    },
  ], [pathname, params]);

  return routes;
}