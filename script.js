function downloadCV() {
  const link = document.createElement("a");
  link.href = "cv.pdf";
  link.download = "cv.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
