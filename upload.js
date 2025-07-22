
import { auth, db, storage } from './firebase.js';

export function uploadVideo(file, metadata) {
  const storageRef = storage.ref('videos/' + file.name);
  return storageRef.put(file).then(snapshot => {
    return snapshot.ref.getDownloadURL().then(url => {
      return db.collection("videos").add({
        url,
        ...metadata,
        createdAt: Date.now()
      });
    });
  });
}
