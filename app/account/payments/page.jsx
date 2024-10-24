import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import BackButton from "@/app/components/BackButton";

export default function GettingPaidPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif mb-8 text-center">Settings</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-4 text-xl font-normal">
            <BackButton />
            <div>
              <div className="font-semibold">Getting Paid</div>
              <div className="text-sm text-muted-foreground">
                Set your accepted payment methods and tax details
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">
                Accepted Payment Methods
              </h3>
              <p className="text-sm text-muted-foreground">
                Let us know which payment methods you accept
              </p>
            </div>
            <Link href="/account/stripe">
              <Button variant="outline">EDIT</Button>
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Tax Details</h3>
              <p className="text-sm text-muted-foreground">
                View and edit your tax details
              </p>
            </div>
            <Link href="/account/tax">
              <Button variant="outline">EDIT</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
