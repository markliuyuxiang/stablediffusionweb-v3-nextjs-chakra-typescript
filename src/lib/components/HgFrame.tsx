export default function HgFrame() {
  return (
    <div id="demo">
    <div id="outerdiv">
      <iframe
        id="inneriframe"
        src="https://hf.space/embed/stabilityai/stable-diffusion/+?__theme=light"
        data-src="https://hf.space/embed/stabilityai/stable-diffusion/+"
        data-sdk="gradio"
        title="Gradio app"
        allow="accelerometer; ambient-light-sensor; autoplay; battery; camera; clipboard-write; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"
        scrolling="no"
        height="1480"
      ></iframe>
    </div>
    </div>
  );
}
