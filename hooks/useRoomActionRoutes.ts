import { useMemo } from "react";
import { 
  Coffee, 
  Sparkles, 
  MonitorSpeaker, 
  PersonStanding,
  Music,
  HandHelping,
  School,
  FileImage,
  Soup,
  Film,
  Gem,
  Smile,
  Car,
  Church,
  Heart,
  TestTube,
  Brush,
  HandHeart,
  Flag,
  Smartphone,
  TowerControl,
  Earth,
  Flower2,
  PenTool,
  Tv,
  Waves,
  Camera,
  BookImage,
  ContactRound,
  Plane,
  Map,
  Hotel,
  MessageCircleMore,
  UsersRound,
  NotebookTabs,
  Cat,
  BrainCog,
  Gamepad2 
} from "lucide-react";

export const useRoomActionRoutes = () => {
  const routes = useMemo(() => [
    {
      icon: Coffee,
      label: "ไร้สังกัด",
      href: "https://pantip.com/forum/isolate"
    },
    {
      icon: Sparkles,
      label: "รวมมิตร",
      href: "https://pantip.com/forum"
    },
    {
      icon: MonitorSpeaker,
      label: "สีคอนวัลเลย์",
      href: "https://pantip.com/forum/siliconvalley"
    },
    {
      icon: PersonStanding,
      label: "ดีโอลด์สยาม",
      href: "https://pantip.com/forum/theoldsiam"
    },
    {
      icon: Music,
      label: "เฉลิมกรุง",
      href: "https://pantip.com/forum/chalermkrung"
    },
    {
      icon: HandHelping,
      label: "กรีนโซน",
      href: "https://pantip.com/forum/greenzone"
    },
    {
      icon: School,
      label: "ชายคา",
      href: "https://pantip.com/forum/home"
    },
    {
      icon: FileImage,
      label: "สินธร",
      href: "https://pantip.com/forum/sinthorn"
    },
    {
      icon: Soup,
      label: "ก้นครัว",
      href: "https://pantip.com/forum/food"
    },
    {
      icon: Film,
      label: "เฉลิมไทย",
      href: "https://pantip.com/forum/chalermthai"
    },
    {
      icon: Gem,
      label: "โต๊ะเครื่องแป้ง",
      href: "https://pantip.com/forum/beauty"
    },
    {
      icon: Smile,
      label: "พันทิป",
      href: "https://pantip.com/forum/pantip"
    },
    {
      icon: Car,
      label: "รัชดา",
      href: "https://pantip.com/forum/ratchada"
    },
    {
      icon: Church,
      label: "ศาสนา",
      href: "https://pantip.com/forum/religious"
    },
    {
      icon: Heart,
      label: "สวนลุมพินี",
      href: "https://pantip.com/forum/lumpini"
    },
    {
      icon: TestTube,
      label: "หว้ากอ",
      href: "https://pantip.com/forum/wahkor"
    },
    {
      icon: Brush,
      label: "หอศิลป์",
      href: "https://pantip.com/forum/art"
    },
    {
      icon: HandHeart,
      label: "บางรัก",
      href: "https://pantip.com/forum/bangrak"
    },
    {
      icon: Flag,
      label: "กรุงโซล",
      href: "https://pantip.com/forum/korea"
    },
    {
      icon: Smartphone,
      label: "มาบุญครอง",
      href: "https://pantip.com/forum/mbk"
    },
    {
      icon: TowerControl,
      label: "ศาสนาประชาชน",
      href: "https://pantip.com/forum/social"
    },
    {
      icon: Earth,
      label: "ไกลบ้าน",
      href: "https://pantip.com/forum/klaibann"
    },
    {
      icon: Flower2,
      label: "จตุจักร",
      href: "https://pantip.com/forum/jatujak"
    },
    {
      icon: PenTool,
      label: "ถนนนักเขียน",
      href: "https://pantip.com/forum/writer"
    },
    {
      icon: Tv,
      label: "บางขุนพรหม",
      href: "https://pantip.com/forum/tvshow"
    },
    {
      icon: Waves,
      label: "ศุภชลาศัย",
      href: "https://pantip.com/forum/supachalasai"
    },
    {
      icon: Camera,
      label: "กล้อง",
      href: "https://pantip.com/forum/camera"
    },
    {
      icon: BookImage,
      label: "แกลเลอรี่",
      href: "https://pantip.com/forum/gallery"
    },
    {
      icon: ContactRound,
      label: "ชานเรือน",
      href: "https://pantip.com/forum/family"
    },
    {
      icon: Plane,
      label: "บลูแพลนเน็ต",
      href: "https://pantip.com/forum/blueplanet"
    },
    {
      icon: Map,
      label: "ภูมิภาค",
      href: "https://pantip.com/forum/region"
    },
    {
      icon: Hotel,
      label: "ราชดำเนิน",
      href: "https://pantip.com/forum/rajdumnern"
    },
    {
      icon: MessageCircleMore,
      label: "สยามสแควร์",
      href: "https://pantip.com/forum/siam"
    },
    {
      icon: UsersRound,
      label: "สีลม",
      href: "https://pantip.com/forum/silom"
    },
    {
      icon: NotebookTabs,
      label: "ห้องสมุด",
      href: "https://pantip.com/forum/library"
    },
    {
      icon: Cat,
      label: "การ์ตูน",
      href: "https://pantip.com/forum/cartoon"
    },
    {
      icon: BrainCog,
      label: "พรหมชาติ",
      href: "https://pantip.com/forum/horoscope"
    },
    {
      icon: Gamepad2,
      label: "แก็ตเจ็ด",
      href: "https://pantip.com/forum/gadget"
    }
  ], []);

  return routes;
}