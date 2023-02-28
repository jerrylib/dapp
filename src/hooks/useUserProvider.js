import { useState, useEffect, useCallback } from "react";

import { SafeAppWeb3Modal } from "@safe-global/safe-apps-web3modal";
import { Web3Provider } from "@ethersproject/providers";

// === Utils === //
const web3Modal = new SafeAppWeb3Modal({
  cacheProvider: true, // optional
  providerOptions: {},
});

const useUserProvider = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [userProvider, setUserProvider] = useState();

  const loadWeb3Modal = useCallback(async () => {
    setLoading(true);
    try {
      const provider = await web3Modal.requestProvider();

      const updateProvider = (p) => {
        setUserProvider(p);
      };

      updateProvider(new Web3Provider(provider));
      provider.on("chainChanged", (chainId) => {
        console.log(`chain changed to ${chainId}! updating providers`);
        updateProvider(new Web3Provider(provider));
      });

      provider.on("accountsChanged", () => {
        console.log(`account changed!`);
        updateProvider(new Web3Provider(provider));
      });

      provider.on("disconnect", (code, reason) => {
        console.log("disconnect", code, reason);
      });
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [setUserProvider]);

  const logoutOfWeb3Modal = async () => {
    await web3Modal.clearCachedProvider();
    setLoading(true);
    setUserProvider();
    setLoading(false);
  };

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    } else {
      setLoading(false);
    }
  }, [loadWeb3Modal]);

  return {
    userProvider,
    loading,
    error,
    loadWeb3Modal,
    logoutOfWeb3Modal,
  };
};

window.ethereum &&
  (() => {
    function chainChangedReload(chainId) {
      localStorage.REACT_APP_NETWORK_TYPE = parseInt(chainId);
      reload();
    }
    function reload() {
      setTimeout(() => {
        window.location.reload();
      }, 1);
    }
    window.ethereum.on("chainChanged", chainChangedReload);
    window.ethereum.on("accountsChanged", reload);
  })();

export default useUserProvider;
