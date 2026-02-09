type titleProps = {
  text: string;
  center?: string;
};

export default function PreTitle({ text, center }: titleProps) {
  return (
    <div
      className={`flex items-center gap-3 mb-4 ${center && "justify-center"}`}
    >
      <div className="w-2 h-2 bg-emerald-700 rounded-full"></div>
      <p className="font-white tracking-[3.2px]">{text}</p>
      <div className="w-2 h-2 bg-emerald-700 rounded-full"></div>
    </div>
  );
}
// Author : M. Hamdan Yusuf 😎
