export default function CvPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-5xl px-6 py-12">
        <div className="mt-6 overflow-hidden rounded-xl border">
          <iframe
            src="/latest.pdf"
            className="h-[80vh] w-full"
            title="Dan Thomas - Curriculum Vitae"
          />
        </div>
      </div>
    </main>
  );
}
