import * as React from 'react'
import {
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
} from 'wagmi';
import {BigNumber} from "ethers";

export function Delete() {
    const {config, error: prepareError, isError: isPrepareError,} = usePrepareContractWrite({
        address: '0x15bd20Ae6a8d037c25ad953d578ECE7185e2D3B9',
        abi: [
            {
                name: 'mint',
                type: 'function',
                stateMutability: 'nonpayable',
                inputs: [],
                outputs: [],
            },
        ],
        functionName: 'mint',
        overrides: {
            //value: ethers.utils.parseEther("0.005"),
            gasLimit: BigNumber.from(210000),
        },
    })
    const { data, error, isError, write } = useContractWrite(config);

    const { isLoading, isSuccess } = useWaitForTransaction({ hash: data?.hash,});

    return (
        <>
            <div>
            <button disabled={!write || isLoading} onClick={() => write()}>{isLoading ? 'Minting...' : 'Mint'}</button>
            {isSuccess && (
                <div>
                    Successfully minted your NFT!
                    <div>
                        <a href={`https://goerli.etherscan.io/tx/${data?.hash}`}> Etherscan </a>
                    </div>
                </div>
            )}
            {(isPrepareError || isError) && (
                <div>Error: {(prepareError || error)?.message}</div>
            )}
            </div>
        </>

        
        
    );
}