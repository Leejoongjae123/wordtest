import React from "react";

const PDFViewer= () => {
  // Google Drive 파일 ID (예: "1AbCdEfGhIJKLMNOPQR")
  const fileId = "1J1HTa8Z__0GGc7vpYRwZAljSkR3ahfZS";

  // PDF 렌더링을 위한 Google Drive URL
  const pdfFileUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className="w-full h-screen grid grid-cols-12 ">
      <div className="col-span-2 bg-yellow-500">사이드바</div>
      <div className="col-span-10 flex flex-col">
        <div className="w-full h-12 bg-red-500">제목</div>
        <div className="w-full h-12 bg-blue-500">소제목</div>
        <div className="flex-grow">
          <iframe
            src={pdfFileUrl}
            className="w-full h-full"
            style={{ border: "none", objectFit: "cover" }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
