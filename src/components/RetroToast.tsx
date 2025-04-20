export function RetroToast({
  message,
  success = false,
}: {
  message: string;
  success?: boolean;
}) {
  return (
    <div
      className={`px-4 py-2 font-bold text-sm tracking-wide text-white inline-flex items-center gap-2 shadow-md ${
        success ? "bg-green-600" : "bg-red-600"
      }`}
      style={{
        fontFamily: "'Press Start 2P', monospace",
        borderRadius: "6px",
      }}
    >
      <span className="text-lg">{success ? "✔" : "✖"}</span>
      <span>{message.toUpperCase()}</span>
    </div>
  );
}