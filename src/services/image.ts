import { toast } from 'react-toastify';

import { storage } from '@/configs/firebase';

export const uploadImage = (
  filename: string,
  file: File,
  func: (url: string) => void
) => {
  const uploadTask = storage.ref(`images/${filename}`).put(file);
  uploadTask.on(
    'state_changed',
    (snapshot: any) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      if (progress === 100) {
        toast.success('Uploaded image successfully');
      }
    },
    (error: any) => {
      // console.error(error);
      toast.error(error?.response?.message);
    },
    () => {
      storage
        .ref('images')
        .child(filename)
        .getDownloadURL()
        .then((url: string) => {
          func(url);
        });
    }
  );
};
