import { isEmpty } from 'lodash'
import { useState, useEffect } from 'react'

const useUserAddress = provider => {
  const [userAddress, setUserAddress] = useState('')

  useEffect(() => {
    if (isEmpty(provider)) {
      setUserAddress('')
      return
    }
    const getUserAddress = async injectedProvider => {
      const signer = injectedProvider.getSigner()
      if (signer) setUserAddress(await signer.getAddress())
    }

    getUserAddress(provider)
  }, [provider])

  return userAddress
}

export default useUserAddress
