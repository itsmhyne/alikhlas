type titleProps = {
  text: string;
  center?: string;
};

export default function PreTitle({ text, center }: titleProps) {
  return (
    <div
      className={`flex items-center gap-3 mb-4 ${center && "justify-center"}`}
    >
      {/* <div className="w-2 h-2 bg-emerald-700 rounded-full"></div> */}
      <h1 className="font-extrabold text-emerald-700 heading3">{text}</h1>
      {/* <div className="w-2 h-2 bg-emerald-700 rounded-full"></div> */}
    </div>
  );
}
// Author : M. Hamdan Yusuf 😎
