import { Download } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div
      style={{ width: "100vw" }}
      className="p-4 shadow-sm border flex justify-between items-center"
    >
      <img style={{ height: "36px", width: "170px" }} src="/logo.png" />
      <Button className="flex gap-2 items-center">
        {" "}
        <Download className="h-4 w-4" /> Download
      </Button>
    </div>
  );
};

export default Header;
