"use client";

import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('@/app/components/PDFViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-600"></div>
    </div>
  ),
});

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          My Resume
        </h1>
        <div className="h-[calc(100vh-12rem)]">
          <PDFViewer pdfUrl="/resu.pdf" />
        </div>
      </div>
    </div>
  );
}
