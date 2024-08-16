"use client"

import Image from 'next/image'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export default function AppBar() {
    return (
        <div className="flex flex-row flex-wrap bg-slate-400 h-10vh px-20 py-4 justify-between items-center">
            <Image src="/solanaLogo.png" height={30} width={200} alt={''} />
            <span>APPBAR</span>
            {/*<button className="bg-blue-600 p-4 rounded">Connect</button>*/}
            <WalletMultiButton />
        </div>
    )
}

/*
 height: 90px;
  background-color: black;
  font-size: 50px;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  flex-wrap: wrap;
*/