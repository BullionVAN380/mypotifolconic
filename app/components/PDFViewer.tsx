"use client";

interface PDFViewerProps {
  pdfUrl: string;
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  return (
    <div className="w-full h-full">
      <object
        data={pdfUrl}
        type="application/pdf"
        className="w-full h-full rounded-lg border border-gray-200 dark:border-gray-700"
      >
        <div className="flex flex-col items-center justify-center h-full bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            PDF viewer not available. You can{" "}
            <a
              href={pdfUrl}
              download
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              download the PDF
            </a>{" "}
            instead.
          </p>
        </div>
      </object>
    </div>
  );
}
