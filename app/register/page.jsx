import CombinedSignupForm from "@/components/CombinedSignupForm";

export default function RegisterPage() {
  return (
    <div className="h-max text-center py-20">
      <h1 className="text-3xl font-semibold mt-10">
        Join as a Creator or Brand
      </h1>
      <div className="w-full">
        <CombinedSignupForm />
      </div>
    </div>
  );
}
