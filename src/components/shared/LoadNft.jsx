import { Skeleton } from "../ui/skeleton";

export default function LoadNft() {
  return Array.from({ length: 8 }).map((_, _key) => (
    <Skeleton key={_key} className="w-full rounded-md h-[395px]" />
  ));
}
