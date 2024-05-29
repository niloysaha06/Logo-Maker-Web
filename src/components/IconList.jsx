import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Smile, icons } from "lucide-react";
import { iconList } from "@/constants/icons";

const IconList = ({ selectedIcon }) => {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");
  const [openDialog, setOpenDialog] = useState(false);

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return <LucidIcon color={color} size={size} />;
  };

  return (
    <div>
      <div>
        <label>Icon</label>
        <div
          onClick={() => setOpenDialog(true)}
          className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center"
        >
          <Icon name={icon} color={"#000"} size={20} />
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pic Your Favourite Icon</DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols md:grid-cols-4 lg:grid-cols-5 gap-2 overflow-auto h-[200px] p-6">
                {iconList?.map((icon, index) => (
                  <div
                    key={index}
                    className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                    onClick={() => {
                      selectedIcon(icon);
                      setOpenDialog(false);
                      setIcon(icon);
                    }}
                  >
                    <Icon name={icon} color={"#000"} size={20} />
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IconList;
