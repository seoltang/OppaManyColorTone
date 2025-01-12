import html2canvas from 'html2canvas';

export async function captureElement(targetElement: HTMLElement, name: string) {
  const canvas = await html2canvas(targetElement);
  const img = canvas.toDataURL(name);

  return img;
}

export function downloadImage(img: string, name: string) {
  const link = document.createElement('a');
  link.href = img;
  link.download = name;
  link.click();

  link.remove();
}
