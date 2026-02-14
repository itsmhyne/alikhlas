import { LucideIcon } from "lucide-react";

type buttonProps = {
  text: string;
  icon?: LucideIcon;
};
export default function ButtonIcon({ text, icon: Icon }: buttonProps) {
  return (
    <div className="flex items-center bg-emerald-700 p-2 lg:px-4 lg:py-3 text-white font-bold gap-2 labelsmall lg:bodymedium rounded-sm lg:rounded-xl">
      {Icon && <Icon className="w-5 h-5 font-bold" />}
      <h3 className="labelsmall">{text}</h3>
    </div>
  );
}
// Author : M. Hamdan Yusuf 😎
