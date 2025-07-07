import { FileUpload } from "./_components/file-upload";

export default async function Dashboard() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to your dashboard overview.
        </p>
      </div>

      {/* Quick Stats Row */}
      <div className="max-w-xl mx-auto">
        <FileUpload
          maxFiles={5}
          maxSize={10 * 1024 * 1024} // 10MB
          accept={{
            "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
            "application/pdf": [".pdf"],
            "application/msword": [".doc", ".docx"],
            "text/plain": [".txt"],
          }}
        />
      </div>
    </div>
  );
}
