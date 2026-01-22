import imageCompression from "browser-image-compression"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "@/lib/firebase"

export async function uploadAvatar(file: File) {
  const compressed = await imageCompression(file, {
    maxSizeMB: 0.4,
    maxWidthOrHeight: 600,
    useWebWorker: true,
  })

  const avatarRef = ref(
    storage,
    `reviews/avatars/${Date.now()}-${compressed.name}`
  )

  await uploadBytes(avatarRef, compressed)
  return await getDownloadURL(avatarRef)
}
