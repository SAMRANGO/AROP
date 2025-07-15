import { FileUpload } from "./_components/file-upload";

export default async function Dashboard() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Dashibodi</h1>
        <p className="text-muted-foreground mt-2">
          Karibu kwenye muhtasari wa dashibodi yako.
        </p>
      </div>

      {/* Quick Stats Row */}
      <div className="max-w-xl mx-auto">
        <FileUpload
          maxFiles={5}
          maxSize={5 * 1024 * 1024} // 10MB
          accept={{
            "image/*": [".jpg", ".png", ".webp"],
          }}
        />
      </div>
    </div>
  );
}
