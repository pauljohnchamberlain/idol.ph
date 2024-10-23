import { ColorPalette } from "@/app/dev/components/ColorPalette";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export default function ColorPalettePage() {
  // Force dynamic rendering and disable caching
  headers({
    "Cache-Control": "no-store, max-age=0",
  });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Color Palette</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Light Theme</h2>
        <ColorPalette />
      </div>
      <div className="bg-black text-white p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Dark Theme</h2>
        <ColorPalette isDark={true} />
      </div>
    </div>
  );
}
