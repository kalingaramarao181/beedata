// import "./index.css";
// import { createRef } from 'react';
// import axios from "axios";

// const FileUploadForm = () => {
//   const fileInput = createRef();

//   const onSubmitForm = (e) => {
//     const formData = new FormData();
//     formData.set("avatar", fileInput.current.files[0]);
//     console.log(formData)

//     axios.post("http://74.208.28.169:5000/profile", formData)
//       .then(res => {
//         alert("Successfully Sent");
//       })
//       .catch(err => alert(`${err}`));
//   }

//   return (
//     <div>
//       <form onSubmit={onSubmitForm}>
//         <input type="file" name="avatar" ref={fileInput} />
//         <input type="submit" value="submit" />
//       </form>
//     </div>
//   );
// }

// export default FileUploadForm;