"use client"

//import { confirmTransaction } from "@solana-developers/helpers";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";

export default function PingButton() {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const onClick = async () => {
        if (!connection || !publicKey) {
            console.log("Connection not set or user not connected!")
            return;
          }

        const programId = new web3.PublicKey("ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa");
        const programDataAccount = new web3.PublicKey("Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod");
        const transaction = new web3.Transaction();

        const instruction = new web3.TransactionInstruction({
            keys: [
              {
                pubkey: programDataAccount,
                isSigner: false,
                isWritable: true,
              },
            ],
            programId,
          });

        transaction.add(instruction);
        try {
          const signature = await sendTransaction(transaction, connection);
          console.log("Transaction sent:", signature);

          // Wait for confirmation
          const confirmedTransaction = await connection.confirmTransaction(signature, 'confirmed');
          console.log("Transaction confirmed:", confirmedTransaction);
      } catch (error) {
          console.error("Transaction failed:", error);
      }
    }
    
	return (
		<div className="flex flex-col text-center items-center bg-green-500" onClick={onClick}>
			<button className="m-[10px_0_10px_0] p-[15px] text-[16px] border-0 font-roboto">Ping!</button>
		</div>
	)
}