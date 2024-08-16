import AppBar from "./components/AppBar"
import PingButton from "./components/PingButton";
import WalletContextProvider from "./components/WalletContextProvider";

export default function Home() {
  return (
    <div>
    <WalletContextProvider>
      <AppBar />
      <div className="flex flex-col items-center">
        <span>PING FRONTEND</span>
        <PingButton />
      </div>
      </WalletContextProvider>
    </div>
  );
}
