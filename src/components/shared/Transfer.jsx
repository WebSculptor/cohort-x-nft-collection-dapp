import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { transferScheme } from "@/validators";
import { useState } from "react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

export default function Transfer() {
  const { address } = useWeb3ModalAccount();

  const [formData, setFormData] = useState({
    isLoading: false,
    address: "",
  });

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(transferScheme),
    defaultValues: {
      address: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    setFormData(() => ({
      address: values.address,
      isLoading: true,
    }));

    try {
      // await result();
    } catch (error) {
      console.log(error);
    } finally {
      setFormData((prev) => ({ ...prev, isLoading: false }));
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="h-6 py-2">
          Transfer
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Transfer NFT</DialogTitle>
          <DialogDescription>Transfer NFT to another address</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder={`${address}`} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="mt-4"
              disabled={formData.isLoading}>
              {formData.isLoading ? "Transfering..." : "Transfer"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
