import { Label } from "@/components/ui/label";

export default function FileUpload({ id, onChange }) {
  return (
    <div>
      <Label htmlFor={id} className="text-base font-semibold">
        Upload File
      </Label>
      <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
        {/* ...file upload UI... */}
      </div>
    </div>
  );
}
