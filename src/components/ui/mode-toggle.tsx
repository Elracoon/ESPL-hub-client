import { useTheme } from "@/config/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ModeToggle() {
  const inputStyle = "w-2/4 mb-2.5";

  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/*<Select>*/}
        {/*    <SelectTrigger className={inputStyle}>*/}
        {/*        <SelectValue placeholder="Choisir le thème"/>*/}
        {/*    </SelectTrigger>*/}
        {/*    <SelectContent>*/}
        {/*        <SelectGroup>*/}
        {/*            <SelectItem value="light">Light</SelectItem>*/}
        {/*            <SelectItem value="dark">Dark</SelectItem>*/}
        {/*            <SelectItem value="system">System</SelectItem>*/}
        {/*        </SelectGroup>*/}
        {/*    </SelectContent>*/}
        {/*</Select>*/}
        <Button variant="outline" size="profile">
          <span className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
            {" "}
            Light{" "}
          </span>
          <span className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
            {" "}
            Dark{" "}
          </span>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
