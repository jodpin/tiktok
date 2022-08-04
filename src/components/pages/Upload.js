import { useDropzone } from "react-dropzone";
import {useState } from "react";
import { publishVideos, uploadVideos } from "../../services";
import { Link } from "react-router-dom";

export default function Upload() {
  const [uploaded, setUploaded] = useState(null);
  const [uploading, setUploading] = useState(null);
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(false);
  const [error, setError] = useState(null);

  const onDrop = async (files) => {
    setUploading(true);
    const [file] = files;
    const [data, error, publicURL, error2] = await uploadVideos({
      videoFile: file,
    });
    if (error || error2) {
      console.error(error2, error);
      setError(true);
      return;
    }
    setUploading(false);
    setUploaded(publicURL);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(description);
    console.log(uploaded);
    const { res, error } = await publishVideos({
      videoSrc: uploaded,
      description: description,
    });
    if (error) {
      setError(true);
      console.log("ha ocurrido un error");
      return;
    } else {
      console.log(" se ha publicado con exito");
      setPublished(true);
      setError(false);
      return;
    }
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };


  const renderContent = () => {
    if (error) {
      return <h3>Ha ocurrido un error, porfavor intentelo mas tarde</h3>;
    }
    if (uploading && !uploaded) {
      return <h4>cargando...</h4>;
    }
    if (uploaded) {
      return <h4>cargado con exito</h4>;
    }
    if (isDragReject) return <h4>Archivo no soportado</h4>;
    if (isDragAccept) return <h4>¡Suelta el archivo para subirlo!</h4>;

    return (
      <>
        <span className="upload-text2">Selecciona el video para cargar</span>
        <span className="upload-text2">O arrastra y suelta un archivo</span>
        <div>
          <div className="text-center upload-text">
            <span>MP4 o WebM</span>
          </div>
          <div className="text-center upload-text">
            <span>Resolución de al menos 720x1280</span>
          </div>
          <div className="text-center upload-text">
            <span>Hasta 2 minutos</span>
          </div>
          <div className="text-center upload-text">
            <span>Menos de 2&nbsp;GB</span>
          </div>
        </div>
      </>
    );
  };

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      maxFiles: 1,
      accept: { "video/mp4": [".mp4"], "video/webm": [".webm"] },
      disabled: uploading,
      onDrop,
    });

  return (
    <div className="upload-container">
      <div>
      <h1 className="upload-title">Cargar video</h1>
      <p>Este video se publicara en el perfil @jodpindev</p>
      </div>
      

      <form onSubmit={handleSubmit} >
        <div className="upload-form-group">
          <label htmlFor="leyenda">Leyenda</label>
          <textarea
            cols={3}
            type="text"
            name="descrip"
            className="input"
            onChange={handleChange}
          />
        </div>

        <div
          className={`upload ${uploading && "uploading"} ${
            uploaded && "uploaded"
          }  ${isDragAccept && "accept"} ${isDragReject && "reject"}`}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <img
            alt="imagen-upload"
            src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-us/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg"
          />

          {renderContent()}

          <input
            type="button"
            value="Selecciona un archivo"
            className={`button ${uploading!==null && "none"}`} 
            disabled={uploaded || uploading}
          />
        </div>

        <div className="release-container-btn">
          <input
            disabled={uploaded === null || uploading}
            type="submit"
            className={`release-btn ${(published||error) && "none"}`}
            value="Publicar"
          />
          <input
            onClick={()=>window.location.reload()}
            type="button"
            className={`release-btn ${error==null && "none"}`}
            value="subir otro archivo"
          />
          <Link className={"release-btn"} to="/">
            Volver
          </Link>
        </div>
      </form>
    </div>
  );
}
