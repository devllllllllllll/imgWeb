import { useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color";
import "./GenIgPic.css";

function GenIgPic() {
  const canvasRef = useRef();
  const [textColor, setTextColor] = useState("#000000"); // Initial color is black

  // Handles the change in text color
  const ColorChangeHandler = (color) => {
    setTextColor(color.hex);
  };
  const [text, setText] = useState({
    text: "Hello World",
    fontSize: 100,
    X: 0,
    Y: 200,
    imgX: 0,
    imgY: 225,
    imgWidth: 1000,
    imgHeight: 500,
  });

  const [imageFile, setImageFile] = useState(null);

  const textChangeHandler = (event) => {
    setText((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const imageChangeHandler = (event) => {
    const file = event.target.files[0];
    console.log("File selected:", file);
    setImageFile(file);
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const url = canvas.toDataURL(); // get the data URL of the canvas
    const link = document.createElement("a");
    link.download = "my-image.png";
    link.href = url;
    link.click(); // trigger the download
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Check if an image file is selected

    const img = new Image();
    img.src = process.env.PUBLIC_URL + "/ig_template.jpg";

    console.log("Image file:", img.src);

    img.onload = () => {
      canvas.width = 1000;
      canvas.height = 1000;
      context.drawImage(img, 0, 0, 1000, 1000);
      context.font = text.fontSize + "px 'Noto Sans TC', sans-serif";
      context.fillStyle = textColor;
      context.fillText(text.text, text.X, text.Y);

      if (imageFile) {
        const eventImg = new Image();
        eventImg.src = URL.createObjectURL(imageFile);
        eventImg.onload = () => {
          context.drawImage(
            eventImg,
            text.imgX,
            text.imgY,
            text.imgWidth,
            text.imgHeight
          );
        };
      }
    };
  }, [text, imageFile, textColor]);

  return (
    <div className="bigText grid place-items-center pt-5">
      <canvas ref={canvasRef} />
      <div className="grid grid-cols-2 gap-4 w-full max-w-5xl  mt-4 ">
        <label className="text-white text-lg self-end">Title:</label>
        <input
          type="txt"
          className="form-input col-span-2 w-full pl-5"
          name="text"
          value={text.text}
          onChange={textChangeHandler}
        />
        <label className="text-white text-lg self-end">Font size:</label>
        <input
          type="txt"
          className="form-input w-full pl-5"
          name="fontSize"
          value={text.fontSize}
          onChange={textChangeHandler}
        />
        <label className="text-white text-lg self-end">X:</label>
        <input
          type="txt"
          className="form-input w-full pl-5"
          name="X"
          value={text.X}
          onChange={textChangeHandler}
        />
        <label className="text-white text-lg self-end">Y:</label>
        <input
          type="txt"
          className="form-input w-full pl-5"
          name="Y"
          value={text.Y}
          onChange={textChangeHandler}
        />
        <label className="text-white text-lg self-end">Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          className="form-input w-full"
          onChange={imageChangeHandler}
        />
        <label className="text-white text-lg self-end">X:</label>
        <input
          type="txt"
          className="form-input w-full pl-5"
          name="imgX"
          value={text.imgX}
          onChange={textChangeHandler}
        />
        <label className="text-white text-lg self-end">Y:</label>
        <input
          type="txt"
          className="form-input w-full pl-5"
          name="imgY"
          value={text.imgY}
          onChange={textChangeHandler}
        />
        <label className="text-white text-lg self-end">Width:</label>
        <input
          type="txt"
          className="form-input w-full pl-5"
          name="imgWidth"
          value={text.imgWidth}
          onChange={textChangeHandler}
        />
        <label className="text-white text-lg self-end">Height:</label>
        <input
          type="txt"
          className="form-input w-full pl-5"
          name="imgHeight"
          value={text.imgHeight}
          onChange={textChangeHandler}
        />
      </div>
      <div className="mt-2">
        <SketchPicker color={textColor} onChange={ColorChangeHandler} />
      </div>
      <input
        className="mt-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-6 px-8 border border-gray-400 rounded shadow"
        type={"button"}
        value={"Download"}
        onClick={downloadImage}
      />
    </div>
  );
}

export default GenIgPic;
