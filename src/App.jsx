import React, { useEffect, useState } from 'react';
import { CONTRACT_ADDRESS } from './constants';
import myEpicGame from './utils/MyEpicGame.json';
import './App.css';
import { ethers } from 'ethers';
import SelectCharacter from './Components/SelectCharacter';
import twitterLogo from './assets/twitter-logo.svg';


// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const provider = new ethers.providers.web3Provider(window.ethereum);
const signer = provider.getSigner();
const gameContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  myEpicGame.abi,
  signer
);
const txn = await gameContract.checkIfUserHasNFT();

const App = () => {
  // State
  const [currentAccount, setCurrentAccount] = useState(null);
  // State
  

/*
 * Right under current account, setup this new state property
 */
const [characterNFT, setCharacterNFT] = useState(null);

  // Actions
  const checkIfWalletIsConnected = async () => {
    const renderContent = () => {};
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log('Make sure you have MetaMask!');
        return;
      } else {
        console.log('We have the ethereum object', ethereum);

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log('Found an authorized account:', account);
          setCurrentAccount(account);
        } else {
          console.log('No authorized account found');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
// Render Methods
  
   // Render Methods
const renderContent = () => {
  
   // Scenario #1
   //
  if (!currentAccount) {
    return (
      <div className="connect-wallet-container">
        <img
          src="https://64.media.tumblr.com/tumblr_mbia5vdmRd1r1mkubo1_500.gifv"
          alt="Monty Python Gif"
        />
        <button
          className="cta-button connect-wallet-button"
          onClick={connectWalletAction}
        >
          Connect Wallet To Get Started
        </button>
      </div>
    );
    /*
     * Scenario #2
     */
  } else if (currentAccount && !characterNFT) {
    return <SelectCharacter setCharacterNFT={setCharacterNFT} />;
  }
};
   
  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }

      /*
       * Fancy method to request access to account.
       */
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      /*
       * Boom! This should print out public address once we authorize Metamask.
       */
      console.log('Connected', accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
  const checkNetwork = async () => {
    try {
        if (window.ethereum.networkVersion !== '5') {
          alert ("please connect to goerli!")
          }
      } catch(error) {
        console.log(error)
      }
    }
    checkIfWalletIsConnected();
  }, []);
useEffect(() => {
  const fetchNFTMetadata = async () => {
    console.log('Checking for characters NFT on address:', currentAccount);
  const provider = new ethers.providers.Web3provider(window.ethereum);
  const signer = provider.getSigner();
  const gameContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  myEpicGame.abi,
  signer
  );
  const txn = await gameContract.checkIfUserHasNFT();
  if (txn.name) {
    console.log('User has character NFT');
setCharacterNFT(transformCharacterdata(txn));
} else { 
  console.log("No character NFT found");
  }
};
 if (currentAccount) {
   console.log ('CurrentAccount:', currentAccount);
   fetchNFTmetadata();
  }
}, [currentAccount]);
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">⚔️ Metaverse Slayer ⚔️</p>
          <p className="sub-text">Team up to protect the Metaverse!</p>
          
           */}
          {renderContent()}
          </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built with @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};
if (txn.name) {
  console.log('User has charcter NFT');
  setCharacterNFR(transformCjaracterData(txn));
} else {
  console.log('No character NFT found!');
}
if (currentAccount) {
console.log('currentAccount:', currentAccount);
  fetchNFTMetadata();

}
useeffect(() => {
   }, [currentAccount]);

export default App;