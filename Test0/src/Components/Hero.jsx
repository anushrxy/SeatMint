import React, { useContext } from "react";
import { app } from "../assets/Firebaseconfig";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { BigNumber, ethers } from "ethers";
import appContext from "../Context/appContext";
import { parseEther } from "ethers/lib/utils.js";

function Hero() {
  // const db = getDatabase(app);
  // const writeData = () => {
  //     console.log("Start")
  //     set(ref(db, 'events/MagicShow'),{
  //         contract: "0x Something",
  //         picture: "ipds.io/something",
  //         date: "2023-05-29",
  //     });
  // }

  // const readData = () => {
  //     const magicShowRef = ref(db, 'events/MagicShow');
  //     onValue(magicShowRef, (snapshot) => {
  //         const data = snapshot.val();
  //         console.log(data);
  //     })

  const state = useContext(appContext);

  const connectMetamask = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const userAddress = await provider.send("eth_requestAccounts", []);
    console.log(userAddress[0]);
    const signer = provider.getSigner();

    if (userAddress[0]) {
      await state.setConnected(true);
      console.log(state.connected);
    }

    const contractAdd = "0x6CC44d5c5A191EDFd50655849dE2D6bdCE6db2DE";
    const contractABI = [
      {
        inputs: [
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "string", name: "tokenURI", type: "string" },
          { internalType: "uint256", name: "quantity", type: "uint256" },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
    ];

    const tokenURI =
      "https://ipfs.io/ipfs/bafyreid3nnmark6n22d5bxy6kshdznzogkkk5zw4kpurm3idrkdkdjvdlm/metadata.json";

    const mintContract = new ethers.Contract(contractAdd, contractABI, signer);
    const mintNFT = await mintContract.mint(userAddress[0], tokenURI, 1, {
      gasLimit: BigNumber.from(210000),
      value: parseEther(0.0000000000)
    });
    console.log(mintNFT);
  };

  return (
    <>
      <section>
        <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://res.cloudinary.com/dlvmyc0x3/image/upload/v1683205622/pexels-teddy-yang_3-2_ncqbjd.jpg"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-800">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-800"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Revolutionizing Ticketing: Book, Own, and Experience with NFTs
                </h2>

                <p className="mt-4 text-gray-400">
                  Our app is changing the way people book and own tickets by
                  leveraging the power of NFTs. With our user-friendly
                  interface, you can easily book tickets to your favorite events
                  and receive them as unique and secure NFTs. But that's not
                  all, you can also list your tickets on our marketplace and
                  sell them to other enthusiasts in a transparent and secure
                  way. Join us today and experience the future of ticketing!
                </p>

                <button
                  className="mt-8 inline-block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500"
                  onClick={connectMetamask}
                >
                  Connect Wallet!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
