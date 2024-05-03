import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="hidden max-w-[700px] flex-1 h-full md:flex items-center justify-center">
      <div className="w-full flex items-center gap-x-2 bg-[#44416f] border border-transparent rounded focus-within:border-white">
        <Input 
          type="text"
          placeholder="ค้นหาบน Pantip"
          className="bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-white placeholder:text-base text-base"
        />
        <SearchIcon className="text-white h-5 w-5 mr-3"/>
      </div>
    </div>
  );
}

export default Search; 