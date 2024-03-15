/* eslint-disable react/prop-types */
import { cn, shortenAddress } from "@/lib/utils";
import { Button } from "../ui/button";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import Transfer from "./Transfer";

export default function NftCard({ image, name, edition, isMinted, mine }) {
  const { VITE_CONTRACT_ADDRESS } = import.meta.env;
  const { address, isConnected } = useWeb3ModalAccount();

  return (
    <div className="w-full bg-secondary/80 rounded-lg overflow-hidden group">
      <div className="relative">
        {isMinted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 93.67 74.83"
            className="w-12 h-12 absolute top-2 right-2 z-10"
            id="police-barriers">
            <g data-name="Ebene 2">
              <g data-name="ICON 09">
                <path
                  fill="gray"
                  d="M-12.5,38.33h51a0,0,0,0,1,0,0v6a0,0,0,0,1,0,0h-51a2,2,0,0,1-2-2v-2A2,2,0,0,1-12.5,38.33Z"
                  transform="rotate(90 12 41.33)"></path>
                <path
                  fill="#060e38"
                  d="M13,14.83H11l-.21,0a2,2,0,0,1,1.8,2v51H15v-51A2,2,0,0,0,13,14.83Z"
                  opacity=".1"></path>
                <path
                  fill="#fff"
                  d="M13.07,14.84H11a2,2,0,0,0-2,2v51h2.14v-51A2,2,0,0,1,13.07,14.84Z"
                  opacity=".5"></path>
                <path
                  fill="gray"
                  d="M57.17,38.33h51a0,0,0,0,1,0,0v6a0,0,0,0,1,0,0h-51a2,2,0,0,1-2-2v-2A2,2,0,0,1,57.17,38.33Z"
                  transform="rotate(90 81.665 41.335)"></path>
                <path
                  fill="#060e38"
                  d="M82.67,14.83h-2l-.21,0a2,2,0,0,1,1.8,2v51h2.41v-51A2,2,0,0,0,82.67,14.83Z"
                  opacity=".1"></path>
                <path
                  fill="#fff"
                  d="M82.74,14.84H80.67a2,2,0,0,0-2,2v51h2.14v-51A2,2,0,0,1,82.74,14.84Z"
                  opacity=".5"></path>
                <polygon
                  fill="gray"
                  points="23 73.84 1 73.84 1.44 72.53 3 67.84 21 67.84 23 73.84"></polygon>
                <path
                  fill="#060e38"
                  d="M23,73.84H1l.44-1.31c.5,0,17.89-1.22,18.19-4.69H21Z"
                  opacity=".1"></path>
                <path
                  fill="#fff"
                  d="M4.08,70.64a1.66,1.66,0,0,1,1.49-1l15.89-.41L21,67.83H3l-2,6H2.71Z"
                  opacity=".5"></path>
                <polygon
                  fill="gray"
                  points="90.67 67.83 72.67 67.83 70.67 73.83 92.67 73.83 90.67 67.83"></polygon>
                <path
                  fill="#060e38"
                  d="M92.84,73.84h-22l.44-1.31c.5,0,17.89-1.22,18.19-4.69h1.37Z"
                  opacity=".1"></path>
                <path
                  fill="#fff"
                  d="M73.91,70.64a1.66,1.66,0,0,1,1.49-1l15.89-.41-.46-1.39h-18l-2,6h1.71Z"
                  opacity=".5"></path>
                <path
                  fill="#060e38"
                  d="M23,74.83H1a1,1,0,0,1-.95-1.31l2-6a1,1,0,0,1,1-.69H21a1,1,0,0,1,.95.69l2,6A1,1,0,0,1,23,74.83Zm-20.61-2H21.61l-1.33-4H3.72Z"></path>
                <path
                  fill="#060e38"
                  d="M15,68.83H9a1,1,0,0,1-1-1v-51a3,3,0,0,1,3-3h2a3,3,0,0,1,3,3v51A1,1,0,0,1,15,68.83Zm-5-2h4v-50a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1Z"></path>
                <rect
                  width="63.66"
                  height="9.03"
                  x="15"
                  y="20.97"
                  fill="#eeecec"></rect>
                <rect
                  width="63.67"
                  height="9.03"
                  x="15"
                  y="42"
                  fill="#eeecec"
                  transform="rotate(180 46.835 46.515)"></rect>
                <polygon
                  fill="#f75c4c"
                  points="22.48 30 15.76 30 19.76 20.97 26.48 20.97 22.48 30"></polygon>
                <polygon
                  fill="#f75c4c"
                  points="35.33 30 28.62 30 32.62 20.97 39.33 20.97 35.33 30"></polygon>
                <polygon
                  fill="#f75c4c"
                  points="48.19 30 41.48 30 45.48 20.97 52.19 20.97 48.19 30"></polygon>
                <polygon
                  fill="#f75c4c"
                  points="61.05 30 54.33 30 58.33 20.97 65.05 20.97 61.05 30"></polygon>
                <polygon
                  fill="#f75c4c"
                  points="73.91 30 67.19 30 71.19 20.97 77.91 20.97 73.91 30"></polygon>
                <path
                  fill="#060e38"
                  d="M78.66,21v9H15.05L15,27.31S73,29,75.51,21Z"
                  opacity=".1"></path>
                <path
                  fill="#fff"
                  d="M19.55,23H78.67V21H15v9h2.06V25.52A2.5,2.5,0,0,1,19.55,23Z"
                  opacity=".5"></path>
                <polygon
                  fill="#f75c4c"
                  points="22.48 51.03 15.76 51.03 19.76 42 26.48 42 22.48 51.03"></polygon>
                <polygon
                  fill="#f75c4c"
                  points="35.33 51.03 28.62 51.03 32.62 42 39.33 42 35.33 51.03"></polygon>
                <polygon
                  fill="#f75c4c"
                  points="48.19 51.03 41.48 51.03 45.48 42 52.19 42 48.19 51.03"></polygon>
                <polygon
                  fill="#f75c4c"
                  points="61.05 51.03 54.33 51.03 58.33 42 65.05 42 61.05 51.03"></polygon>
                <polygon
                  fill="#f75c4c"
                  points="73.91 51.03 67.19 51.03 71.19 42 77.91 42 73.91 51.03"></polygon>
                <path
                  fill="#060e38"
                  d="M78.66,42v9H15.05L15,48.34S73,50,75.51,42Z"
                  opacity=".1"></path>
                <path
                  fill="#fff"
                  d="M19.55,44.07H78.67V42H15v9h2.06V46.56A2.49,2.49,0,0,1,19.55,44.07Z"
                  opacity=".5"></path>
                <path
                  fill="#060e38"
                  d="M78.67 31H15a1 1 0 0 1-1-1V21a1 1 0 0 1 1-1H78.67a1 1 0 0 1 1 1v9A1 1 0 0 1 78.67 31zM16 29H77.67V22H16zM78.67 52H15a1 1 0 0 1-1-1V42a1 1 0 0 1 1-1H78.67a1 1 0 0 1 1 1v9A1 1 0 0 1 78.67 52zM16 50H77.67V43H16zM92.67 74.83h-22a1 1 0 0 1-1-1.31l2-6a1 1 0 0 1 1-.69h18a1 1 0 0 1 .94.69l2 6a1 1 0 0 1-.13.9A1 1 0 0 1 92.67 74.83zm-20.62-2H91.28l-1.33-4H73.39z"></path>
                <rect
                  width="2"
                  height="6"
                  x="80.67"
                  y="9"
                  fill="#060e38"></rect>
                <circle cx="81.67" cy="5" r="4" fill="#f75c4c"></circle>
                <circle cx="11.83" cy="5" r="4" fill="#f75c4c"></circle>
                <path
                  fill="#060e38"
                  d="M11.83,1a3.41,3.41,0,0,0-.46.05A3.06,3.06,0,1,1,7.88,4.54a3.41,3.41,0,0,0,0,.46,4,4,0,1,0,4-4Z"
                  opacity=".1"></path>
                <path
                  fill="#fff"
                  d="M9.44,5.83a3.3,3.3,0,0,1,3.3-3.3A3.25,3.25,0,0,1,14.35,3,3.3,3.3,0,1,0,9.87,7.44,3.25,3.25,0,0,1,9.44,5.83Z"
                  opacity=".5"></path>
                <path
                  fill="#060e38"
                  d="M81.67,1a3.75,3.75,0,0,0-.47.05,3.06,3.06,0,1,1-3.49,3.49c0,.15,0,.3,0,.46a4,4,0,1,0,4-4Z"
                  opacity=".1"></path>
                <path
                  fill="#fff"
                  d="M79.27,5.83a3.3,3.3,0,0,1,3.3-3.3A3.23,3.23,0,0,1,84.18,3,3.29,3.29,0,1,0,79.7,7.44,3.25,3.25,0,0,1,79.27,5.83Z"
                  opacity=".5"></path>
                <path
                  fill="#060e38"
                  d="M81.67,10a5,5,0,1,1,5-5A5,5,0,0,1,81.67,10Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,81.67,2Z"></path>
                <rect
                  width="2"
                  height="6"
                  x="10.83"
                  y="9"
                  fill="#060e38"></rect>
                <path
                  fill="#060e38"
                  d="M11.83 10a5 5 0 1 1 5-5A5 5 0 0 1 11.83 10zm0-8a3 3 0 1 0 3 3A3 3 0 0 0 11.83 2zM84.67 68.83h-6a1 1 0 0 1-1-1v-51a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v51A1 1 0 0 1 84.67 68.83zm-5-2h4v-50a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1z"></path>
              </g>
            </g>
          </svg>
        )}

        <div
          className={cn(
            "w-full h-auto grayscale group-hover:grayscale-0 transition",
            {
              "grayscale-0": isMinted || mine,
            }
          )}>
          <img src={image} className="w-full h-auto object-cover" alt={name} />
        </div>
      </div>

      <div className="p-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-base">{name}</h1>
            <p className="text-sm">Meta NFT</p>
          </div>

          {!isMinted ? (
            <Button size="sm" className="h-6 py-2">
              Mint
            </Button>
          ) : (
            <Transfer />
          )}
        </div>
        {isConnected && (
          <div className="flex items-center justify-between">
            <p
              className={cn("text-sm mt-8 truncate text-muted-foreground", {
                "text-foreground": isMinted,
              })}>
              {shortenAddress(!isMinted ? VITE_CONTRACT_ADDRESS : address)}
            </p>
            {isMinted && (
              <a
                target="_blank"
                href={`https://testnets.opensea.io/assets/mumbai/${VITE_CONTRACT_ADDRESS}/${edition}`}
                className="text-sm mt-8 truncate hover:underline">
                View NFT
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
