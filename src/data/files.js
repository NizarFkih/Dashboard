const files = [
  {
    name: "my-resume",
    uploader: "elzero",
    uploadedAt: "02/09/2023",
    fileSize: "5.5MB",
    fileType: "pdf",
  },
  {
    name: "my-file",
    uploader: "admin",
    uploadedAt: "05/10/2023",
    fileSize: "10.1MB",
    fileType: "eps",
  },
  {
    name: "profile-picture",
    uploader: "ahmed",
    uploadedAt: "09/09/2023",
    fileSize: "15.1MB",
    fileType: "psd",
  },
  {
    name: "my-file(01)",
    uploader: "michel",
    uploadedAt: "03/09/2023",
    fileSize: "2.3MB",
    fileType: "dll",
  },
  {
    name: "-profile-cover",
    uploader: "osman",
    uploadedAt: "01/10/2023",
    fileSize: "1.1MB",
    fileType: "png",
  },
  {
    name: "my-file",
    uploader: "farouk",
    uploadedAt: "02/10/2023",
    fileSize: "2.7MB",
    fileType: "dll",
  },
  {
    name: "png-icon",
    uploader: "sabri",
    uploadedAt: "02/10/2023",
    fileSize: "12.5MB",
    fileType: "png",
  },
  {
    name: "orange-affiche",
    uploader: "elzero",
    uploadedAt: "02/10/2023",
    fileSize: "5.5MB",
    fileType: "psd",
  },
  {
    name: "pfe-book",
    uploader: "admin",
    uploadedAt: "02/10/2023",
    fileSize: "10.1MB",
    fileType: "pdf",
  },
  {
    name: "my-file",
    uploader: "ahmed",
    uploadedAt: "02/10/2023",
    fileSize: "15.1MB",
    fileType: "avi",
  },
  {
    name: "eps-file",
    uploader: "michel",
    uploadedAt: "02/10/2023",
    fileSize: "2.3MB",
    fileType: "eps",
  },
  {
    name: "my-file.pdf",
    uploader: "osman",
    uploadedAt: "02/10/2023",
    fileSize: "1.1MB",
    fileType: "pdf",
  },
  {
    name: "my-file",
    uploader: "farouk",
    uploadedAt: "02/10/2023",
    fileSize: "2.7MB",
    fileType: "eps",
  },
  {
    name: "psd-file",
    uploader: "sabri",
    uploadedAt: "02/10/2023",
    fileSize: "12.5MB",
    fileType: "psd",
  },
];
const statics = [
  { fileType: "docx", fileNumber: "120", size: "6.5GB" },
  { fileType: "image", fileNumber: "115", size: "8.6GB" },
  { fileType: "excel", fileNumber: "120", size: "3.2GB" },
  { fileType: "pdf", fileNumber: "120", size: "2.9GB" },
  { fileType: "ps", fileNumber: "120", size: "6.5GB" },
];
export const getFiles = () => {
  return files;
};
export const getStats = () => {
  return statics;
};
