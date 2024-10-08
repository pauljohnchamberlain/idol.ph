import { generateComponents } from "@uploadthing/react";
 
import  OurFileRouter  from "@/server/uploadthing";
 
export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents();