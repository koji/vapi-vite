import { useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

interface UsePublicKeyInvalidResult {
  showPublicKeyInvalidMessage: boolean
  setShowPublicKeyInvalidMessage: Dispatch<SetStateAction<boolean>>
}

export const usePublicKeyInvalid = (): UsePublicKeyInvalidResult => {
  const [showPublicKeyInvalidMessage, setShowPublicKeyInvalidMessage] =
    useState(false)

  // close public key invalid message after delay
  useEffect(() => {
    if (showPublicKeyInvalidMessage) {
      setTimeout(() => {
        setShowPublicKeyInvalidMessage(false)
      }, 3000)
    }
  }, [showPublicKeyInvalidMessage])

  return {
    showPublicKeyInvalidMessage,
    setShowPublicKeyInvalidMessage,
  }
}
